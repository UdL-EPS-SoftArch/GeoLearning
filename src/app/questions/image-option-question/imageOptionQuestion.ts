import { Resource } from '@lagoshny/ngx-hal-client';

export class ImageOptionQuestion extends Resource {
  imageOption: string;
  image: string;
  solution: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  optionE: string;
  uri: string;

  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }

}
