import { Location } from '@angular/common';
import { ImageImageService } from './../image-image.service';
import { Router } from '@angular/router';
import { ImageImage } from './../imageImage';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-image-create',
  templateUrl: './image-image-create.component.html'
})
export class ImageImageCreateComponent implements OnInit {

  public imageImage: ImageImage;

  constructor(private router: Router,
              private imageImageService: ImageImageService,
              private location: Location) { }

  ngOnInit() {
    this.imageImage = new ImageImage();
  }

  onSubmit(): void {
    this.imageImageService.create(this.imageImage).subscribe(
      (imageImage: ImageImage) => {
        this.location.back;
      }
    )
  }

  goBack() {
    this.location.back;
  }

}
