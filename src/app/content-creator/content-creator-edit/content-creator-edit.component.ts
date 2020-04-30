import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ContentcreatorService } from '../contentcreator.service';
import { Contentcreator } from '../contentcreator';
import { AuthenticationBasicService } from '../../login-basic/authentication-basic.service';
import { User } from '../../login-basic/user';

@Component({
  selector: 'app-content-creator-edit',
  templateUrl: './content-creator-edit.component.html'
})
export class ContentCreatorEditComponent implements OnInit {
  public contentcreator: Contentcreator = new Contentcreator();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private contentCreatorService: ContentcreatorService,
              private authenticationService: AuthenticationBasicService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.contentCreatorService.get(id).subscribe(
      (contentcreator: Contentcreator) => this.contentcreator = contentcreator);
  }

  onSubmit(): void {
    this.contentcreator.password = this.contentcreator.passwordReset ? this.contentcreator.password : undefined; // Don't edit if not a reset
    this.contentCreatorService.patch(this.contentcreator).subscribe(
      (contentcreator: Contentcreator) => {
        if (this.contentcreator.passwordReset) {
          this.authenticationService.logout();
          this.authenticationService.login(this.contentcreator.id, this.contentcreator.password).subscribe(
            (user: User) => this.router.navigate([user.uri]))
        } else {
          this.router.navigate([contentcreator.uri]);
        }
      });
  }

  getCurrentUserName(): string {
    return this.authenticationService.getCurrentUser().id;
  }
}

