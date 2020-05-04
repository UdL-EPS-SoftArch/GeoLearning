import { ImageImageService } from './../image-image.service';
import { Router } from '@angular/router';
import { ImageImage } from './../imageImage';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-image-list',
  templateUrl: './image-image-list.component.html'
})
export class ImageImageListComponent implements OnInit {

  public imageImageGames: ImageImage[] = [];
  public pageSize = 5;
  public page = 1;
  public totalImageImageGames = 0;
  public saveUri;

  constructor(
    public router: Router,
    private imageImageService: ImageImageService) {
  }

  ngOnInit(): void {

    this.imageImageService.getAll({size: this.pageSize}).subscribe(
      (imageImageGames: ImageImage[]) => {
        this.imageImageGames = imageImageGames;
        this.totalImageImageGames = this.imageImageService.totalElement();
    })
  }

  changePage() {
//    this.imageImageService.page(this.page - 1).subscribe(
//      (this.imageImageGames: ImageImage[]) => this.imageImageGames = this.imageImageGames);
  }

  getId(i: number) {
    var uri = this.imageImageGames[i].uri.toString();
    var splitted = uri.split('/');
    return splitted[2];
  }

}
