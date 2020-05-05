import { Location } from '@angular/common';
import { Component, OnInit, Injectable } from '@angular/core';
import {ImageOptionQuestion} from '../imageOptionQuestion';
import { Router, ActivatedRoute } from '@angular/router';
import { ImageOptionQuestionServiceExtended } from '../image-option-question.service';
import {ImageOptionService} from "../../../games/image-option/image-option.service";


@Component({
  selector: 'app-image-option-question-create',
  templateUrl: './image-option-question-create.component.html'
})
export class ImageOptionQuestionCreateComponent implements OnInit {

  public imageOptionQuestion: ImageOptionQuestion;

  constructor( private router: Router,
               private Router: ActivatedRoute,
               private imageOptionQuestionService: ImageOptionQuestionServiceExtended) { }

  ngOnInit() {
    this.imageOptionQuestion = new ImageOptionQuestion();

  }

  public onSubmit(): void {
    const id = this.Router.snapshot.paramMap.get('id');

    var imageOptionUri: string = "imageOptions/" + id;
    this.imageOptionQuestion.imageOption = imageOptionUri;
    this.imageOptionQuestionService.create(this.imageOptionQuestion).subscribe(
      () => {
        this.router.navigate([imageOptionUri]);
      }
    )
  }
}
