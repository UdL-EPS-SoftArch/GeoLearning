import { ImageOptionQuestion } from 'src/app/questions/image-option-question/ImageOptionQuestion';
import { Games } from '../games'


export class ImageOption extends Games {
  questions: ImageOptionQuestion[] = [];

  constructor() {
    super();

  }

}
