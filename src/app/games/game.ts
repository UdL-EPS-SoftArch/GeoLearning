import { Resource } from '@lagoshny/ngx-hal-client';
import { ContentCreator } from '../content-creator/contentCreator';

export class Game extends Resource {
    uri: String;
    instructions: String;
    creator: ContentCreator;

    constructor(values: object = {}) {
        super();
        Object.assign(this as any, values);
      }

}