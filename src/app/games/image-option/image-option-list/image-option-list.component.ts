import { Component, OnInit } from '@angular/core';
import { ImageOption } from '../imageOption';
import { Router } from '@angular/router';
import { ImageOptionService } from '../image-option.service';
import { AuthenticationBasicService } from '../../../login-basic/authentication-basic.service';
import {ImageImage} from "../../image-image/imageImage";
import {ContentCreator} from "../../../content-creator/contentCreator";


@Component({
  selector: 'app-image-option-list',
  templateUrl: './image-option-list.component.html',
})

export class ImageOptionListComponent implements OnInit {
  public imageOptionGames: ImageOption[] = [];
  public pageSize = 5;
  public page = 1;
  public totalImageOptionGames = 0;

  constructor(
    public router: Router,
    private imageOptionService: ImageOptionService,
    private authenticationService: AuthenticationBasicService) {
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

  getCurrentUser(): string {
    return this.authenticationService.getCurrentUser().id;
  }

  getCreatorIDFor(imageOption: ImageImage): string {
    imageOption.getRelation(ContentCreator, 'creator').subscribe(
      (creator: ContentCreator) => imageOption.creator = creator);
    return imageOption.creator.id;
  }

  isLoggedCreator() {
    return this.authenticationService.isRole('CONTENTCREATOR');
  }

}
