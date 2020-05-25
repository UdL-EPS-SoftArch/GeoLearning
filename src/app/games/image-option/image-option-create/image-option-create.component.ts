import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageOptionService } from '../image-option.service';
import { Location } from '@angular/common';
import {ImageOption} from '../imageOption';
import get = Reflect.get;

@Component({
  selector: 'app-image-option-create',
  templateUrl: './image-option-create.component.html'
})

export class ImageOptionCreateComponent implements OnInit {
  public imageOption: ImageOption;

  constructor(private router: Router,
              private imageOptionService: ImageOptionService,
              private location: Location) { }

  ngOnInit(): void {
    this.imageOption = new ImageOption();
  }

  onSubmit(): void {
    this.imageOptionService.create(this.imageOption).subscribe(
      (imageOption: ImageOption) => {
        this.router.navigate(['/imageOptions/'+this.getId()]);
      }
    )
  }
  getId() {
    const uri = this.imageOption.uri.toString();
    const splitted = uri.split('/');
    return splitted[2];
  }
  goBack() {
    this.location.back();
  }
}
