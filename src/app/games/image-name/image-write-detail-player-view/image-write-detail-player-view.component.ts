import { Component, OnInit } from "@angular/core";
import { ImageName } from "../imageName";
import { ImageNameQuestion } from "src/app/questions/image-name-questions/imageNameQuestion";
import { ActivatedRoute, Router } from "@angular/router";
import { ImageNameService } from "../image-name.service";
import { Observable, Observer } from "rxjs";

@Component({
  selector: "app-image-write-detail-player-view",
  templateUrl: "./image-write-detail-player-view.component.html",
})
export class ImageWriteDetailPlayerViewComponent implements OnInit {
  public imageWrite: ImageName = new ImageName();
  public id: string;
  base64Image: any;
  public images: string[] = [];
  public responses: string[] = [];
  public matchResponses: ImageNameQuestion[] = [];

  constructor(
    private route: ActivatedRoute,
    private imageNameService: ImageNameService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.imageNameService.get(this.id).subscribe((imageWrite) => {
      this.imageWrite = imageWrite;
      imageWrite
        .getRelationArray(ImageNameQuestion, "questions")
        .subscribe((imageNameQuestions: ImageNameQuestion[]) => {
          this.imageWrite.questions = imageNameQuestions;
          this.getImages();
        });
    });
  }

  getImage(imageUrl: string): any {
    this.getBase64ImageFromURL(imageUrl).subscribe((base64data) => {
      this.base64Image = "data:image/jpg;base64," + base64data;
    });
    return this.base64Image;
  }

  getBase64ImageFromURL(url: string) {
    return new Observable((observer: Observer<string>) => {
      const img = new Image();
      img.crossOrigin = "Anonymous";
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
    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    const dataURL = canvas.toDataURL("image/png");
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }

  getImages() {
    for (let i = 0; i < this.imageWrite.questions.length; i++) {
      this.images[i] = this.imageWrite.questions[i].image;
    }
  }

  onSubmit(): void {
    for(let i = 0; i < this.imageWrite.questions.length; i++){
      this.matchResponses[i] = new ImageNameQuestion();
      this.matchResponses[i].image = this.imageWrite.questions[i].image;
      this.matchResponses[i].solution = this.responses[i];
    }
  }
}
