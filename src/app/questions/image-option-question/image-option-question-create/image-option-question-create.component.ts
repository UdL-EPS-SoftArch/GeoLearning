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
    this.imageOptionQuestion = new ImageOptionQuestion();

  }

  public onSubmit(): void {
    const id = this.Router.snapshot.paramMap.get('id');

    this.imageOptionService.get(id).subscribe((imageOption: ImageOption) => {
      this.imageOption = imageOption;
      imageOption.getRelation(ImageOption, 'game_id').subscribe(() => this.imageOption.questions.push(this.imageOptionQuestion))
    });

    this.imageOptionQuestionService.create(this.imageOptionQuestion).subscribe(() => this.location.back());
  }
  /*this.teamService.get(id).subscribe((team: Team) => {
  this.team = team;
  team.getRelation(Player, 'leader').subscribe((leader: Player) => this.team.leader = leader);
});*/
}
