import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthenticationBasicService } from 'src/app/login-basic/authentication-basic.service';
import { ImageNameQuestion } from '../imageNameQuestion';
import { ImageNameQuestionService } from '../image-name-question.service';

@Component({
  selector: 'app-image-name-question-edit',
  templateUrl: './image-name-question-edit.component.html'
})
export class ImageNameQuestionEditComponent implements OnInit {
  public id: string;
  public idq: string;
  public imageNameQuestion: ImageNameQuestion;

  constructor(private route: ActivatedRoute,
              private imageNameQuestionService: ImageNameQuestionService,
              private authenticationService: AuthenticationBasicService,
              private _location: Location) { }

  ngOnInit(): void {
    this.idq = this.route.snapshot.paramMap.get('idq');
    this.imageNameQuestion = new ImageNameQuestion();
  }

  onSubmit(): void {
    this.imageNameQuestionService.create(this.imageNameQuestion).subscribe(
      (imageNameQuestion:ImageNameQuestion) => {
        this._location.back();
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
