import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ImageOptionQuestionService } from '../image-option-question.service';
import {ImageOptionQuestion} from '../imageOptionQuestion';

@Component({
  selector: 'app-image-option-question-list',
  templateUrl: './image-option-question-list.component.html'
})
export class ImageOptionQuestionListComponent implements OnInit {

  public imageOptionQuestions: ImageOptionQuestion[] = [];
  constructor( private router: ActivatedRoute,
               private routers: Router,
               private imageOptionQuestionService: ImageOptionQuestionService) { }


  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id');
    const uri: string = 'imageOptions/' + id + '/questions'
    this.imageOptionQuestionService.customQuery(uri).subscribe(
      (imageOptionsQuestions ) => {
        this.imageOptionQuestions = imageOptionsQuestions;
      }
    )
  }
}
