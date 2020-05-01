import { Injectable, Injector } from '@angular/core';
import { RestService } from '@lagoshny/ngx-hal-client';
import { ImageOptionQuestion } from './imageOptionQuestion';

@Injectable()
export class ImageOptionQuestionService extends RestService<ImageOptionQuestion> {

  constructor(injector: Injector) {
    super(ImageOptionQuestion, 'imageOptionQuestions', injector);
  }
}
