import { Location } from '@angular/common';
import { Component, OnInit, Injectable } from '@angular/core';
import {ImageOptionQuestion} from '../imageOptionQuestion';
import { Router, ActivatedRoute } from '@angular/router';
import { ImageOptionQuestionService } from '../image-option-question.service';


@Component({
  selector: 'app-image-option-question-create',
  templateUrl: './image-option-question-list.component.html'
})
export class ImageOptionQuestionListComponent implements OnInit {

  public imageOptionQuestions: ImageOptionQuestion[] = [];
  public imageOptionQuestion: ImageOptionQuestion;
  public pageSize = 5;
  public page = 1;
  public totalImageOptionQuestions = 0;
  constructor( private router: ActivatedRoute,
               private routers: Router,
               private imageOptionQuestionService: ImageOptionQuestionService,
               private location: Location) { }

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id');
    const uri: string = "/image-option-question/"+id;
    this.imageOptionQuestionService.customQuery(uri, {size: this.pageSize}).subscribe(
      (imageOptionQuestions: ImageOptionQuestion[]) => {
        this.imageOptionQuestions = imageOptionQuestions;
        this.totalImageOptionQuestions = this.imageOptionQuestionService.totalElement();
      }
    )
  }

  public onSubmit(): void {
    this.imageOptionQuestionService.create(this.imageOptionQuestion).subscribe(
      (tournament: ImageOptionQuestion) => this.routers.navigate(['/image-option-question/new'])); // ruta API-post
  }


  getId() {
    var uri = this.imageOptionQuestion.uri.toString();
    var splitted = uri.split('/');
    return splitted[2];
  }
  goBack() {
    this.location.back();
  }
}
