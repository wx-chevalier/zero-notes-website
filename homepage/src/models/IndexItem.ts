export default class IndexItem {
  objectId: string;
  fileName: string;
  desc: string;
  content: string;
  href: string;

  repo: string;
  categories: string[];

  get parsedFileName() {
    return this.fileName.split('.')[0];
  }
}
