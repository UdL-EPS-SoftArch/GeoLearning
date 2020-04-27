import { Game } from '../game'
import { ImageNameQuestion } from 'src/app/questions/imageNameQuestion/ImageNameQuestion';

export class ImageName extends Game {
    questions: ImageNameQuestion[] = [];

    constructor(values: object = {}) {
        super();
        Object.assign(this as any, values);
      }

}