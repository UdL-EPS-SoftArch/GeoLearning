import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ImageNameQuestion } from '../imageNameQuestion';
import { ImageNameQuestionService } from '../image-name-question.service';
import { HttpClientService } from 'src/app/httpClient.service';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-image-name-question-list',
  templateUrl: './image-name-question-list.component.html'
})
export class ImageNameQuestionListComponent implements OnInit {
  public imageNameQuestions: ImageNameQuestion[] = [];
  public pageSize = 5;
  public page = 1;
  public totalImageNameQuestions = 0;
  base64Image: any;

  constructor(private route: ActivatedRoute,
              public router: Router,
              private imageNameQuestionsService: ImageNameQuestionService,
              private httpService: HttpClientService) {

    }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const uri: string = "imageNames/" + id + "/questions"
    this.imageNameQuestionsService.customQuery(uri, {size: this.pageSize}).subscribe(
      (imageNameQuestions: ImageNameQuestion[]) => {
        this.imageNameQuestions = imageNameQuestions;
        this.totalImageNameQuestions = this.imageNameQuestionsService.totalElement();
      }
    )
  }

  changePage() {
    this.imageNameQuestionsService.page(this.page - 1).subscribe(
      (imageNameQuestions: ImageNameQuestion[]) => this.imageNameQuestions = imageNameQuestions);
  }

  getImage(imageUrl: string): any{
    this.getBase64ImageFromURL(imageUrl).subscribe(base64data => {
      console.log(base64data);
      this.base64Image = 'data:image/jpg;base64,' + base64data;
    });
    return this.base64Image
  }

  getBase64ImageFromURL(url: string) {
    return Observable.create((observer: Observer<string>) => {
      let img = new Image();
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
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/png");
    console.log(dataURL);
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }

}
