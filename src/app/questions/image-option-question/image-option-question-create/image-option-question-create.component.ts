import { Component, OnInit} from '@angular/core';
import {ImageOptionQuestion} from '../imageOptionQuestion';
import { Router, ActivatedRoute } from '@angular/router';
import { ImageOptionQuestionServiceExtended } from '../image-option-question.service';


@Component({
  selector: 'app-image-option-question-create',
  templateUrl: './image-option-question-create.component.html'
})
export class ImageOptionQuestionCreateComponent implements OnInit {

  public imageOptionQuestion: ImageOptionQuestion;

  constructor( private router: Router,
               private activatedRoute: ActivatedRoute,
               private imageOptionQuestionService: ImageOptionQuestionServiceExtended) { }

  ngOnInit() {
    this.imageOptionQuestion = new ImageOptionQuestion();

  }

  public onSubmit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    const imageOptionUri: string = 'imageOptions/' + id;
    this.imageOptionQuestion.imageOption = imageOptionUri;
    this.imageOptionQuestionService.create(this.imageOptionQuestion).subscribe(
      () => {
        this.router.navigate([imageOptionUri]);
      }
    )
  }
}
