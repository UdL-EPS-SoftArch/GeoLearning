import {ImageOptionQuestion} from '../../questions/image-option-question/imageOptionQuestion';
import { Game } from '../game';


export class ImageOption extends Game {
  questions: ImageOptionQuestion[] = [];

  constructor() {
    super();

  }
}
