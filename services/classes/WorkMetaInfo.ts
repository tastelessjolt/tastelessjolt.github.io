import WorkMetaInfoModel from '../models/WorkMetaInfoModel';

class WorkMetaInfo implements WorkMetaInfoModel {
  id: number;

  title: string;

  subtitle?: string;

  thumbnail: string;

  alt?: string;

  setMetaInfoProp(name: string, value: any) {
    this[name] = value;
  }

  getId(): number {
    return this.id;
  }

  getTitle(): string {
    return this.title;
  }

  getSubtitle(): string {
    return this.subtitle;
  }

  getThumbnail(): string {
    return this.thumbnail;
  }

  getAlt(): string {
    return this.alt;
  }
}

export default WorkMetaInfo;
