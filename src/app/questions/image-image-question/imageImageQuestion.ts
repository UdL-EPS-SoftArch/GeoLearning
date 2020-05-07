import { Resource } from '@lagoshny/ngx-hal-client';

export class ImageImageQuestion extends Resource {
  imageImage: string;
  image: string;
  solution: string;
  uri: string;

  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }

}