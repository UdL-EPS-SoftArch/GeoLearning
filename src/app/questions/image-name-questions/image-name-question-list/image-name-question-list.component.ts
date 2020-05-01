import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ImageNameQuestion } from '../imageNameQuestion';
import { ImageNameQuestionService } from '../image-name-question.service';

@Component({
  selector: 'app-image-name-question-list',
  templateUrl: './image-name-question-list.component.html'
})
export class ImageNameQuestionListComponent implements OnInit {
  public imageNameQuestions: ImageNameQuestion[] = [];
  public pageSize = 5;
  public page = 1;
  public totalImageNameQuestions = 0;

  constructor(private route: ActivatedRoute,
              public router: Router,
              private imageNameQuestionsService: ImageNameQuestionService) {

    }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const uri: string = "/" + id + "/questions"
    this.imageNameQuestionsService.customQuery(uri, {size: this.pageSize}).subscribe(
      (imageNameQuestions: ImageNameQuestion[]) => {
        this.imageNameQuestions = imageNameQuestions;
        this.totalImageNameQuestions = this.imageNameQuestionsService.totalElement();
      }
    )
  }

  changePage() {
    this.imageNameQuestionsService.page(this.page - 1).subscribe(
      (imageNameQuestions: ImageNameQuestion[]) => this.imageNameQuestions = imageNameQuestions);
  }

}
