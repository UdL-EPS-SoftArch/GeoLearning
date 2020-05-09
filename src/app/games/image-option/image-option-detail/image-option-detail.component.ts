import { Component, OnInit } from '@angular/core';
import { ImageOption } from '../imageOption';
import { ActivatedRoute } from '@angular/router';
import { ImageOptionService } from '../image-option.service';

@Component({
  selector: 'app-image-option-detail',
  templateUrl: './image-option-detail.component.html'
})
export class ImageOptionDetailComponent implements OnInit {
  public imageOption: ImageOption = new ImageOption();
  public id: string;

  constructor(private route: ActivatedRoute,
              private imageOptionService: ImageOptionService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.imageOptionService.get(this.id).subscribe(
      imageOption => {
        this.imageOption = imageOption;
      });
  }
}
