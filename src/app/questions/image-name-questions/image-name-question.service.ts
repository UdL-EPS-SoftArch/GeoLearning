import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageNameQuestionService {

  constructor(injector: Injector) {
    super(ImageName, 'imageNames', injector);
  }
}
