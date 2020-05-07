import { Component, OnInit } from '@angular/core';
import { ImageOptionService } from '../image-option.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationBasicService } from 'src/app/login-basic/authentication-basic.service';
import { ImageOption } from '../imageOption';

@Component({
  selector: 'app-image-option-edit',
  templateUrl: './image-option-edit.component.html'
})

export class ImageOptionEditComponent implements OnInit {
  public imageOption: ImageOption = new ImageOption();
  public id: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private imageOptionService: ImageOptionService,
              private authenticationService: AuthenticationBasicService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.imageOptionService.get(this.id).subscribe(
      imageOption => this.imageOption = imageOption);
  }

  onSubmit(): void {
    this.imageOption.instructions = this.imageOption.instructions ? this.imageOption.instructions : undefined; // Don't edit if not a reset
    this.imageOptionService.update(this.imageOption).subscribe(
      () => {
        this.router.navigate(['/imageOptions/' + this.id]);
      });
  }

  getCurrentUserName(): string {
    return this.authenticationService.getCurrentUser().id;
  }

}
