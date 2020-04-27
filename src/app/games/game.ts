import { Resource } from '@lagoshny/ngx-hal-client';

export class Game extends Resource {
    id: Number;
    instructions: String;

    constructor(values: object = {}) {
        super();
        Object.assign(this as any, values);
      }

}