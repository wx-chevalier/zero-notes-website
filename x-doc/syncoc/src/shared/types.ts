// 通用数据结构定义

// 链接类型
export enum LinkType {
  // 文章
  Article = 'Article',

  // 系列文章
  Series = 'Series',

  // 论文
  Paper = 'Paper',

  // 书籍
  Book = 'Book',

  // 视频教程
  Course = 'Course',

  // 资源集合
  Collection = 'Collection',

  // 幻灯片
  Slide = 'Slide',

  // 开源的项目或者框架、库
  Project = 'Project'
}

export interface LinkItem {
  objectID: string; // md5(href)

  // 基本信息
  title: string;
  href: string;
  // 描述
  desc: string;

  // 额外信息
  year: number;
  author: string;
  version: string;
  type: LinkType;

  // 文件名
  fileName: string;
  // 文件路径
  fileHref: string;
  // 从文件路径，以及文件名中获取到类目
  categories: string[];
}
