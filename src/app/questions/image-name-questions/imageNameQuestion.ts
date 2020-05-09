import { ImageName } from 'src/app/games/image-name/imageName';
import { Resource } from '@lagoshny/ngx-hal-client';


export class ImageNameQuestion extends Resource {
    uri: string;
    imageName: string;
    image: string;
    solution: string;
    id: string;

    constructor(values: object = {}) {
        super();
        Object.assign(this as any, values);
    }

}