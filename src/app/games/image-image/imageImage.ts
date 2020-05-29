import { Game } from '../game';


export class ImageImage extends Game {

  constructor() {
    super();

  }

  public toJson(): ImageImage{
    return Object.assign({}, this, {
      '@type': 'ImageImage'
    });
  }
}
