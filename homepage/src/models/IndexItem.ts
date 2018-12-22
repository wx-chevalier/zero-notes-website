export default class IndexItem {
  objectId: string;

  content: string;
  desc: string;
  fileName: string;
  href: string;
  title: string;
  type: string;
  year: string;

  repo: string;
  categories: string[];

  get parsedFileName() {
    return this.fileName.split('.')[0];
  }
}
