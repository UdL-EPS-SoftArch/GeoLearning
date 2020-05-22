import { Games } from '../games'
import {ImageOptionQuestion} from '../../questions/image-option-question/imageOptionQuestion';


export class ImageOption extends Games {
  questions: ImageOptionQuestion[] = [];

  constructor() {
    super();

  }

}
