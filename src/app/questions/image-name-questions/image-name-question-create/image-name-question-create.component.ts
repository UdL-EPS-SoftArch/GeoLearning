
import { Component, OnInit } from '@angular/core';
import { ImageNameQuestion } from '../imageNameQuestion';
import { Router } from '@angular/router';
import { ImageNameQuestionService } from '../image-name-question.service';
import { AuthenticationBasicService } from 'src/app/login-basic/authentication-basic.service';

@Component({
  selector: 'app-image-name-question-create',
  templateUrl: './image-name-question-create.component.html'
})
export class ImageNameQuestionCreateComponent implements OnInit {

  public imageNameQuestion: ImageNameQuestion;

  constructor(private router: Router,
              private imageNameQuestionService: ImageNameQuestionService,
              private authenticationService: AuthenticationBasicService) { }

  ngOnInit(): void {
    this.imageNameQuestion = new ImageNameQuestion();
  }

  onSubmit(): void {
    this.imageNameQuestionService.create(this.imageNameQuestion).subscribe(
      (imageNameQuestion:ImageNameQuestion) => {
        this.router.navigate([imageNameQuestion.uri]);
      }
    )
  }

}