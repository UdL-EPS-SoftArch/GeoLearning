import { Component, OnInit } from '@angular/core';
import { ImageNameQuestion } from '../imageNameQuestion';
import { Router, ActivatedRoute } from '@angular/router';
import { ImageNameQuestionServiceExtended } from '../image-name-question.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-image-name-question-create',
  templateUrl: './image-name-question-create.component.html'
})
export class ImageNameQuestionCreateComponent implements OnInit {

  public imageNameQuestion: ImageNameQuestion;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private imageNameQuestionServiceExtended: ImageNameQuestionServiceExtended,
              private _location: Location) {}

  ngOnInit(): void {
    this.imageNameQuestion = new ImageNameQuestion();
  }

  onSubmit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    var imageNameUri: string = "/imageNames/" + id;
    this.imageNameQuestion.imageName = imageNameUri;
    this.imageNameQuestionServiceExtended.create(this.imageNameQuestion).subscribe(
      () => {
        this.router.navigate([imageNameUri]);
      }
    )
  }

  backClicked() {
    this._location.back();
  }

  checkURL(url) {
    return(url.match(/\.(jpeg|jpg|svg)$/) != null);
  }

}