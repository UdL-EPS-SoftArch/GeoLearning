import { Injectable, Injector } from '@angular/core';
import { RestService } from '@lagoshny/ngx-hal-client';
import {ImageImageQuestion} from './imageImageQuestion';

@Injectable()
export class ImageImageQuestionService extends RestService<ImageImageQuestion> {

  constructor(injector: Injector) {
    super(ImageImageQuestion, '', injector);
  }
}

@Injectable({
  providedIn: 'root'
})
export class ImageImageQuestionServiceExtended extends RestService<ImageImageQuestion> {

  constructor(injector: Injector) {
    super(ImageImageQuestion, 'imageImageQuestions', injector);
  }
}
