import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ImageNameQuestion } from '../imageNameQuestion';
import { ImageNameQuestionService } from '../image-name-question.service';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-image-name-question-list',
  templateUrl: './image-name-question-list.component.html'
})
export class ImageNameQuestionListComponent implements OnInit {
  public imageNameQuestions: ImageNameQuestion[] = [];
  base64Image: any;

  constructor(private route: ActivatedRoute,
              public router: Router,
              private imageNameQuestionsService: ImageNameQuestionService) {

    }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const uri: string = 'imageNames/' + id + '/questions'
    this.imageNameQuestionsService.customQuery(uri).subscribe(
      (imageNameQuestions: ImageNameQuestion[]) => {
        this.imageNameQuestions = imageNameQuestions;
      }
    )
  }

  getImage(imageUrl: string): any{
    this.getBase64ImageFromURL(imageUrl).subscribe(base64data => {
      console.log(base64data);
      this.base64Image = 'data:image/jpg;base64,' + base64data;
    });
    return this.base64Image
  }

  getBase64ImageFromURL(url: string) {
    return new Observable((observer: Observer<string>) => {
      const img = new Image();
      img.crossOrigin = 'Anonymous';
      img.src = url;
      if (!img.complete) {
        img.onload = () => {
          observer.next(this.getBase64Image(img));
          observer.complete();
        };
        img.onerror = (err) => {
          observer.error(err);
        };
      } else {
        observer.next(this.getBase64Image(img));
        observer.complete();
      }
    });
  }

  getBase64Image(img: HTMLImageElement) {
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    const dataURL = canvas.toDataURL('image/png');
    console.log(dataURL);
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, '');
  }

}
