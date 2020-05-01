import { Resource } from '@lagoshny/ngx-hal-client';
import { ImageOption } from '../../games/image-option/imageOption';

export class ImageOptionQuestion extends Resource {
  ioq_id: Number;
  imageOption: ImageOption;
  image: String;
  solution: String;
  optionA: String;
  optionB: String;
  optionC: String;
  optionD: String;
  optionE: String;

  constructor(values: object = {}) {
    super();
    Object.assign(this as any, values);
  }

}
