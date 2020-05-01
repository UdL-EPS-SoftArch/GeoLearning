import { Component, OnInit } from '@angular/core';
import { ImageOption } from '../imageOption';
import { Router } from '@angular/router';
import { ImageOptionService } from '../image-option.service';

@Component({
  selector: 'app-image-option-list',
  templateUrl: './image-option-list.component.html',
})

export class ImageOptionListComponent implements OnInit {
  public imageOptionGames: ImageOption[] = [];
  public pageSize = 5;
  public page = 1;
  public totalImageOptionGames = 0;
  public savedUri;


  constructor(
    public router: Router,
    private imageOptionService: ImageOptionService) {
  }

  ngOnInit(): void {
    this.imageOptionService.getAll({size: this.pageSize}).subscribe(
      (imageOptionGames: ImageOption[]) => {
        this.imageOptionGames = imageOptionGames;
        this.totalImageOptionGames = this.imageOptionService.totalElement();
      }
    )
  }

  changePage() {
    this.imageOptionService.page(this.page - 1).subscribe(
      (imageOptionGames: ImageOption[]) => this.imageOptionGames = imageOptionGames);
  }

  getId(i: number) {
    var uri = this.imageOptionGames[i].uri.toString();
    var splitted = uri.split('/');
    return splitted[2];
  }

}
