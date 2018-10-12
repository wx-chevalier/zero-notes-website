import * as algoliasearch from 'algoliasearch';
import * as md5 from 'md5';
const walkSync = require('walk-sync');
const { promisify } = require('util');
const fs = require('fs-extra');

import repos, { ReposityConfig } from './../shared/repo-config';
import { ALGOLIA_ADMIN_API_KEY } from './../shared/private';
import { readMarkdownHeadersFromFile } from '../util/fs/file';

/**
 * {
 * "objectID":md5(href),
  "fileName": "Build-Your-Own-X-From-Scratch.md",
  "repo": "Awesome-Links",
  "categories": [
    "Zen"
  ],
  "href": "https://github.com/wxyyxc1992/Awesome-Links/blob/master/Zen/Build-Your-Own-X-From-Scratch.md",
  "desc": "Build Your Own X From Scratch",
  "content": "- [Laptop #Project#](https://github.com/thoughtbot/laptop): A shell script to set up a macOS laptop for web and mobile development.",
}
 */

const readFileAsync = promisify(fs.readFile);
const client = algoliasearch('35UOMI84K6', ALGOLIA_ADMIN_API_KEY);

const index = client.initIndex('doc');

// 设置相关性

index.setSettings({
  searchableAttributes: ['fileName', 'repo', 'categories', 'desc', 'content'],
  attributesForFaceting: ['categories', 'repo']
});

Object.keys(repos).forEach(repoName => {
  // 获取仓库的配置信息
  const repo: ReposityConfig = repos[repoName];

  const files = walkSync(repo.localPath).filter(
    path =>
      path.endsWith('.md') &&
      path !== 'README.md' &&
      path.indexOf('Weekly') === -1
  );

  files.forEach(async file => {
    // 封装出 href
    const href = `${repo.sUrl}/blob/master/${file}`;
    const absoluteFile = `${repo.localPath}/${file}`;
    let fileName: string = file.split('/').reverse()[0];

    // 读取文件内容
    const content = await readFileAsync(absoluteFile, { encoding: 'utf8' });
    const desc = (await readMarkdownHeadersFromFile(absoluteFile)).join(', ');

    if (!content) {
      return;
    }

    // 这里对文件内容进行预处理
    const filteredContent = content
      .replace(/\n/g, '')
      .replace(/\[(.*)\]\(http.*\)/g, (_, __) => __)
      .replace(/```\w*.*```/g, '');

    const contents = filteredContent.match(/.{1,4500}/g);

    if (!contents) {
      return;
    }

    // 分割过长内容
    const objs = contents.map((content, index) => ({
      objectID: index ? md5(`${href}${index}`) : md5(href),
      fileName,
      repo: repoName,
      categories: file
        .split('/')
        .filter(c => Number.isNaN(parseInt(c, 10)) && c.indexOf('.md') === -1),
      href,
      desc,
      content
    }));

    try {
      index.addObjects(objs);
    } catch (e) {
      console.error(e);
    }

    console.log(`${repoName} indexed finally.`);
  });
});
