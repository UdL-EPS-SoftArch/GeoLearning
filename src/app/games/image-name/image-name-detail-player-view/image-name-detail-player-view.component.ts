import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageNameService } from '../image-name.service';
import { ImageName } from '../imageName';
import { ImageNameQuestion } from 'src/app/questions/image-name-questions/imageNameQuestion';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-image-name-detail-player-view',
  templateUrl: './image-name-detail-player-view.component.html'
})
export class ImageNameDetailPlayerViewComponent implements OnInit {

  public imageName: ImageName = new ImageName();
  public id: string;
  base64Image: any;
  public images: string[] = [];
  public solutions: string[] = [];
  public responses: number[] = [];
  public matchResponses: ImageNameQuestion[] = [];
  
  constructor(private route: ActivatedRoute,
              private imageNameService: ImageNameService,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.imageNameService.get(this.id).subscribe(
      imageName => {
        this.imageName = imageName;
        imageName.getRelationArray(ImageNameQuestion, 'questions').subscribe(
          (imageNameQuestions: ImageNameQuestion[]) => {
            this.imageName.questions = imageNameQuestions;
            this.getImages();
            this.getSortedSolutions();
          }
        );
      });
  }

  getImage(imageUrl: string): any{
    this.getBase64ImageFromURL(imageUrl).subscribe(base64data => {
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
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, '');
  }

  getImages(){;
    for(let i = 0; i < this.imageName.questions.length; i++){
      this.images[i] = this.imageName.questions[i].image;
    }
  }

  getSortedSolutions(){
    this.imageName.questions.forEach(element => {
      var found: boolean = false
      while(!found) {
        var index: number = this.getRandomInt(this.imageName.questions.length);
        if (this.solutions[index] == undefined) {
          this.solutions[index] = element.solution;
          found = true
        }
      }
    });
  }

  getRandomInt(max): number {
    return Math.floor(Math.random() * Math.floor(max));
  }

  onSubmit(): void {
    for(let i = 0; i < this.imageName.questions.length; i++){
      this.matchResponses[i] = new ImageNameQuestion();
      this.matchResponses[i].image = this.imageName.questions[i].image;
      const responseIndex = this.responses[i];
      this.matchResponses[i].solution = this.solutions[responseIndex];
    }
  }

}
