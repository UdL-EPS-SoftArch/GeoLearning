import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageNameQuestion } from '../imageNameQuestion';
import { ImageNameQuestionServiceExtended } from '../image-name-question.service';

@Component({
  selector: 'app-image-name-question-delete',
  templateUrl: './image-name-question-delete.component.html'
})
export class ImageNameQuestionDeleteComponent implements OnInit {
  public id: string;
  public idq: string;
  public imageNameQuestion: ImageNameQuestion = new ImageNameQuestion();

  constructor(private route: ActivatedRoute,
              private imageNameQuestionServiceExtended: ImageNameQuestionServiceExtended,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.idq = this.route.snapshot.paramMap.get('idq');
    this.imageNameQuestionServiceExtended.get(this.idq).subscribe(
      imageNameQuestion => this.imageNameQuestion = imageNameQuestion
    );
  }

  delete() {
    this.imageNameQuestionServiceExtended.delete(this.imageNameQuestion).subscribe(
      () => {
        this.router.navigate(['/imageNames/' + this.id]);
      }
    );
  }

}
