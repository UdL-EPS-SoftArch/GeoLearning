import { Resource } from '@lagoshny/ngx-hal-client';

export class Game extends Resource {
    uri: string;
    instructions: string;

    constructor(values: object = {}) {
        super();
        Object.assign(this as any, values);
      }

}