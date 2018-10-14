import { promisify } from 'util';
import * as fs from 'fs-extra';
import * as md5 from 'md5';
import * as walkSync from 'walk-sync';
import { BloomFilter } from 'bloom-filters';

import repos, { ReposityConfig } from '../../config/repo-config';

const LinkRegex = /[\-\*]\s\[(.*)\]\({1}?(.*?)\){1}?(:[\s\n].*)?/g;

// 每 BatchNum 条建立一次索引
const BatchNum = 100;

// 使用布隆过滤器过滤无效的
const bloom = new BloomFilter(
  10000, // number of bits to allocate.
  0.01 // number of hash functions.
);

const readFileAsync: (
  arg1: string | number | Buffer,
  args: { encoding: string }
) => Promise<string> = promisify(fs.readFile);

let count = 0;

export async function buildLinkIndex(client) {
  const index = client.initIndex('link');

  // 设置相关性

  index.setSettings({
    searchableAttributes: ['title', 'fileName', 'categories', 'desc', 'href'],
    attributesForFaceting: ['year', 'type', 'categories']
  });

  const repoName = 'Awesome-Links';

  // 获取仓库的配置信息
  const repo: ReposityConfig = repos[repoName];

  const files = walkSync(repo.localPath).filter(
    path =>
      path.endsWith('.md') &&
      path.indexOf('README') === -1 &&
      path.indexOf('ABOUT') === -1 &&
      path.indexOf('Weekly') === -1
  );

  for (let file of files) {
    // 封装出文件链接
    const fileHref = `${repo.sUrl}/blob/master/${file}`;
    const absoluteFile = `${repo.localPath}/${file}`;
    let fileName: string = file.split('/').reverse()[0];

    // 读取文件内容
    const content = await readFileAsync(absoluteFile, { encoding: 'utf-8' });

    if (!content) {
      continue;
    }

    let match;

    while ((match = LinkRegex.exec(content))) {
      const [raw, title, href, desc] = match;

      // 这里进行过滤，过滤掉
      if (href && !bloom.has(href)) {
        bloom.has(href);
        count++;
      }
    }
  }
  console.log(count);

  console.log(`${repoName} indexed finally.`);
}
