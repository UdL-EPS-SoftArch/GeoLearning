import { ImageName } from 'src/app/games/image-name/imageName';
import { Resource } from '@lagoshny/ngx-hal-client';


export class ImageNameQuestion extends Resource {
    uri: String;
    imageName: ImageName;
    image: String;
    solution: String;

    constructor(values: object = {}) {
        super();
        Object.assign(this as any, values);
    }

}