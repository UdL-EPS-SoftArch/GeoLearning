import { Location } from '@angular/common';
import { Component, OnInit, Injectable } from '@angular/core';
import {ImageOptionQuestion} from '../imageOptionQuestion';
import { Router, ActivatedRoute } from '@angular/router';
import { ImageOptionQuestionService } from '../image-option-question.service';
import get = Reflect.get;
import {ImageOption} from "../../../games/image-option/imageOption";


@Component({
  selector: 'app-image-option-question-create',
  templateUrl: './image-option-question-list.component.html'
})
export class ImageOptionQuestionListComponent implements OnInit {

  public imageOptionQuestions: ImageOptionQuestion[] = [];
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
    /*this.imageOptionQuestionService.getAll({size: this.pageSize}).subscribe(
      (imageOptionQuestions: ImageOptionQuestion[]) => {
        this.imageOptionQuestions = imageOptionQuestions;
        this.totalImageOptionQuestions = this.imageOptionQuestionService.totalElement();
      });*/
  }

  public onSubmit(): void {
    //this.routers.navigate(['/image-option-question/'+this.getId()+"/add"]); // ruta API-post
  }

  changePage() {
    this.imageOptionQuestionService.page(this.page - 1).subscribe(
      (imageOptionQuestions: ImageOptionQuestion[]) => this.imageOptionQuestions = imageOptionQuestions);
  }


  getId() {
    const id = this.router.snapshot.paramMap.get('id');
    return id;

  }
  goBack() {
    this.location.back();
  }
}
