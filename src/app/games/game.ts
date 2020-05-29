import { Resource } from '@lagoshny/ngx-hal-client';
import { ContentCreator } from '../content-creator/contentCreator';


export abstract class Game extends Resource {
    uri: string;
    instructions: string;
    creator: ContentCreator;

    constructor(values: object = {}) {
        super();
        Object.assign(this as any, values);
    }

    public abstract toJson(): Game;
}

export class GameImpl extends Game{
  constructor() {
    super();
  }

  toJson(): Game {
    return null;
  }
}
