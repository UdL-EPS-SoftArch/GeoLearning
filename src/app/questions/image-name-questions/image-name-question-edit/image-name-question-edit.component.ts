import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthenticationBasicService } from 'src/app/login-basic/authentication-basic.service';
import { ImageNameQuestion } from '../imageNameQuestion';
import { ImageNameQuestionServiceExtended } from '../image-name-question.service';

@Component({
  selector: 'app-image-name-question-edit',
  templateUrl: './image-name-question-edit.component.html'
})
export class ImageNameQuestionEditComponent implements OnInit {
  public id: string;
  public idq: string;
  public imageNameQuestion: ImageNameQuestion = new ImageNameQuestion();

  constructor(private route: ActivatedRoute,
              private imageNameQuestionServiceExtended: ImageNameQuestionServiceExtended,
              private authenticationService: AuthenticationBasicService,
              private _location: Location,
              private router: Router) { }

  ngOnInit(): void {
    this.idq = this.route.snapshot.paramMap.get('idq');
    this.imageNameQuestionServiceExtended.get(this.idq).subscribe(
      imageNameQuestion => this.imageNameQuestion = imageNameQuestion);
  }

  onSubmit(): void {
    this.imageNameQuestion.image = this.imageNameQuestion.image ? this.imageNameQuestion.image : undefined; // Don't edit if not a reset
    this.imageNameQuestion.solution = this.imageNameQuestion.solution ? this.imageNameQuestion.solution : undefined; //Don't edit if not a reset

    this.imageNameQuestionServiceExtended.update(this.imageNameQuestion).subscribe(
      () => {
        this._location.back();
      }
    );
  }

  backClicked() {
    this._location.back();
  }

  checkURL(url) {
    return(url.match(/\.(jpeg|jpg|svg)$/) != null);
  }

}
