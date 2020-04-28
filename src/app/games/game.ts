import { Resource } from '@lagoshny/ngx-hal-client';

export class Game extends Resource {
    id: string;
    uri: String;
    instructions: String;

    constructor(values: object = {}) {
        super();
        Object.assign(this as any, values);
      }

}