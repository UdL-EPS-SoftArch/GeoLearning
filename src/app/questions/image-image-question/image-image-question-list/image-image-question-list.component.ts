import { ImageImageQuestionService } from './../image-image-question.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ImageImageQuestion } from './../imageImageQuestion';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-image-question-list',
  templateUrl: './image-image-question-list.component.html'
})
export class ImageImageQuestionListComponent implements OnInit {

  public imageImageQuestions: ImageImageQuestion[] = [];

  constructor(private router: ActivatedRoute,
              private routers: Router,
              private imageImageQuestionService: ImageImageQuestionService) { }

  ngOnInit() {

    const id = this.router.snapshot.paramMap.get('id');
    const uri: string = 'imageImages/' + id + '/questions'
    this.imageImageQuestionService.customQuery(uri).subscribe(
      (imageImageQuestions: ImageImageQuestion[]) => {
        this.imageImageQuestions = imageImageQuestions
      }
    )

  }

}
