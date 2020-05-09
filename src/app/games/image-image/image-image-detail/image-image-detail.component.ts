import { Component, OnInit } from '@angular/core';
import { ImageImage } from '../imageImage';
import { ActivatedRoute } from '@angular/router';
import { ImageImageService } from '../image-image.service';

@Component({
  selector: 'app-image-image-detail',
  templateUrl: './image-image-detail.component.html'
})
export class ImageImageDetailComponent implements OnInit {
  public imageImage: ImageImage = new ImageImage();
  public id: string;

  constructor(private route: ActivatedRoute,
              private imageImageService: ImageImageService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.imageImageService.get(this.id).subscribe(
      imageImage => {
        this.imageImage = imageImage;
      });
  }
}
