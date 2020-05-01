import { Location } from '@angular/common';
import { Component, OnInit, Injectable } from '@angular/core';
import {ImageOptionQuestion} from '../imageOptionQuestion';
import { Router } from '@angular/router';
import { ImageOptionQuestionService } from '../image-option-question.service';


@Component({
  selector: 'app-image-option-question-create',
  templateUrl: './image-option-question-create.component.html'
})
export class ImageOptionQuestionCreateComponent implements OnInit {

  public imageOptionQuestion: ImageOptionQuestion;

  constructor( private router: Router,
               private iamgeOptionQuestionService: ImageOptionQuestionService,
               private location: Location) { }

  ngOnInit() {
    this.imageOptionQuestion = new ImageOptionQuestion();
  }

  public onSubmit(): void {
    this.iamgeOptionQuestionService.create(this.imageOptionQuestion).subscribe(
      (tournament: ImageOptionQuestion) => this.location.back()); // ruta API-post
  }

  goBack() {
    this.location.back();
  }
}
