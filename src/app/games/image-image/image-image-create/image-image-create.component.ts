import { Location } from '@angular/common';
import { ImageImageService } from './../image-image.service';
import { Router } from '@angular/router';
import { ImageImage } from './../imageImage';
import { Component, OnInit } from '@angular/core';
import get = Reflect.get;

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
        this.router.navigate(['imageImages/' + this.getId]);
      }
    )
  }

  getId() {
    var uri = this.imageImage.uri.toString();
    var splitted = uri.split('/');
    return splitted[2];
  }

  goBack() {
    this.location.back;
  }

}
