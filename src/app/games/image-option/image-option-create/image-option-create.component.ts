import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageOptionService } from '../image-option.service';
import {ImageOption} from '../imageOption';
import {AuthenticationBasicService} from '../../../login-basic/authentication-basic.service';

@Component({
  selector: 'app-image-option-create',
  templateUrl: './image-option-create.component.html'
})

export class ImageOptionCreateComponent implements OnInit {
  public imageOption: ImageOption;

  constructor(private router: Router,
              private imageOptionService: ImageOptionService,
              private authenticationService: AuthenticationBasicService) { }

  ngOnInit(): void {
    this.imageOption = new ImageOption();
  }

  onSubmit(): void {
    this.imageOption.creator = this.authenticationService.getCurrentUser();
    this.imageOptionService.create(this.imageOption).subscribe(
      () => {
        this.router.navigate(['/imageOptions/'+this.getId()]);
      }
    )
  }
  getId() {
    const uri = this.imageOption.uri.toString();
    const splitted = uri.split('/');
    return splitted[2];
  }
}
