import { Resource } from '@lagoshny/ngx-hal-client';
import { ImageName } from '../../games/image-name/imageName';

export class ImageNameQuestion extends Resource {
    inwq_id: Number;
    imageName: ImageName;
    image: String;
    solution: String;

    constructor(values: object = {}) {
        super();
        Object.assign(this as any, values);
      }

}