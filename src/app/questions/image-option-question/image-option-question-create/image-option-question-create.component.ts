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
               private tournamentService: ImageOptionQuestionService,
               private location: Location) { }

  ngOnInit() {
    this.imageOptionQuestion = new ImageOptionQuestion();
  }

  public onSubmit(): void {
    this.tournamentService.create(this.imageOptionQuestion).subscribe(
      (tournament: ImageOptionQuestion) => this.router.navigate(['/image-option-question/new'])); // ruta API-post
  }

  goBack() {
    this.location.back();
  }
}
