import { ImageImageQuestionServiceExtended } from './../image-image-question.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ImageImageQuestion } from './../imageImageQuestion';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-image-question-create',
  templateUrl: './image-image-question-create.component.html'
})
export class ImageImageQuestionCreateComponent implements OnInit {

  public imageImageQuestion: ImageImageQuestion;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private imageImageQuestionService: ImageImageQuestionServiceExtended) { }

  ngOnInit() {
    this.imageImageQuestion = new ImageImageQuestion();
  }

  public onSubmit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    const imageImageUri: string = 'imageImages/' + id;
    this.imageImageQuestion.imageImage = imageImageUri;
    this.imageImageQuestionService.create(this.imageImageQuestion).subscribe(
      () => {
        this.router.navigate([imageImageUri]);
      }
    )
  }
}
