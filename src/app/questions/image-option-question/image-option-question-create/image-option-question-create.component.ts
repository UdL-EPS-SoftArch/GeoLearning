import { Location } from '@angular/common';
import { Component, OnInit, Injectable } from '@angular/core';
import {ImageOptionQuestion} from '../imageOptionQuestion';
import { Router, ActivatedRoute } from '@angular/router';
import { ImageOptionQuestionService } from '../image-option-question.service';
import {ImageOptionService} from "../../../games/image-option/image-option.service";
import {ImageOption} from "../../../games/image-option/imageOption";


@Component({
  selector: 'app-image-option-question-create',
  templateUrl: './image-option-question-create.component.html'
})
export class ImageOptionQuestionCreateComponent implements OnInit {

  public imageOptionQuestion: ImageOptionQuestion;
  public imageOption: ImageOption = new ImageOption();

  constructor( private router: Router,
               private Router: ActivatedRoute,
               private imageOptionQuestionService: ImageOptionQuestionService,
               private imageOptionService: ImageOptionService,
               private location: Location) { }

  ngOnInit() {
    const id = this.Router.snapshot.paramMap.get('id');
    this.imageOptionQuestion = new ImageOptionQuestion();
    this.imageOptionService.get(id).subscribe(imageOption => this.imageOption = imageOption );

  }

  public onSubmit(): void {
    this.imageOption.questions.push(this.imageOptionQuestion);
    this.imageOptionService.update(this.imageOption).subscribe();
    this.imageOptionQuestionService.create(this.imageOptionQuestion).subscribe(() => this.location.back());
  }

}
