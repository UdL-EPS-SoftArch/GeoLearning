import { Resource } from '@lagoshny/ngx-hal-client';

export class ImageOptionQuestion extends Resource {
  ioq_id: Number;
  imageOption: String;
  image: String;
  solution: String;
  optionA: String;
  optionB: String;
  optionC: String;
  optionD: String;
  optionE: String;
  uri: String;

  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }

}
