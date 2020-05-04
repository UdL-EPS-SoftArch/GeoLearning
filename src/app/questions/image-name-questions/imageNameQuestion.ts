import { ImageName } from 'src/app/games/image-name/imageName';
import { Resource } from '@lagoshny/ngx-hal-client';


export class ImageNameQuestion extends Resource {
    uri: String;
    imageName: string;
    image: String;
    solution: String;
    id: string;

    constructor(values: object = {}) {
        super();
        Object.assign(this as any, values);
    }

}