import { ImageOptionQuestion } from 'src/app/questions/imageOptionQuestion/ImageOptionQuestion';
import { Games } from '../games'


export class ImageOption extends Games {
  questions: ImageOptionQuestion[] = [];

  constructor() {
    super();

  }

}
