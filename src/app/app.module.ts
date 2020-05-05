import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbCollapseModule, NgbDropdownModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxHalClientModule } from '@lagoshny/ngx-hal-client';
import { ExternalConfigurationService } from './external-configuration-service';

import { AppRoutingModule } from './app-routing.module';
import { ErrorHandlerModule } from './error-handler/error-handler.module';
import { HttpErrorInterceptor } from './error-handler/http-error-interceptor';
import { LoginBasicModule } from './login-basic/login-basic.module';
import { LoggedInGuard } from './login-basic/loggedin.guard';
import { AuthInterceptor } from './login-basic/auth-interceptor';

import { AuthenticationBasicService } from './login-basic/authentication-basic.service';
import { PlayerService } from './player/player.service';
import { ImageNameService } from './games/image-name/image-name.service';
import { ContentcreatorService } from './content-creator/contentcreator.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { PlayerRegisterComponent } from './player/player-register/player-register.component';
import { PlayerListComponent } from './player/player-list/player-list.component';
import { PlayerDetailComponent } from './player/player-detail/player-detail.component';
import { PlayerDeleteComponent } from './player/player-delete/player-delete.component';
import { PlayerEditComponent } from './player/player-edit/player-edit.component';
import { PlayerSearchComponent } from './player/player-search/player-search.component';
import { NotFoundComponent } from './error-handler/error-alert/not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageNameListComponent } from './games/image-name/image-name-list/image-name-list.component';
import { ImageNameDetailComponent } from './games/image-name/image-name-detail/image-name-detail.component';
import { ImageNameDeleteComponent } from './games/image-name/image-name-delete/image-name-delete.component';
import { ImageNameEditComponent } from './games/image-name/image-name-edit/image-name-edit.component';
import { ImageNameCreateComponent } from './games/image-name/image-name-create/image-name-create.component';
import { ImageNameQuestionListComponent } from './questions/image-name-questions/image-name-question-list/image-name-question-list.component';
import { ImageNameQuestionService } from './questions/image-name-questions/image-name-question.service';
import { ImageNameQuestionEditComponent } from './questions/image-name-questions/image-name-question-edit/image-name-question-edit.component';
import { ImageNameQuestionCreateComponent } from './questions/image-name-questions/image-name-question-create/image-name-question-create.component';
import { HttpClientService } from './httpClient.service';
import { ImageNameQuestionDeleteComponent } from './questions/image-name-questions/image-name-question-delete/image-name-question-delete.component';
import { ContentCreatorListComponent } from './content-creator/content-creator-list/content-creator-list.component';
import { ContentCreatorDeleteComponent } from './content-creator/content-creator-delete/content-creator-delete.component';
import { ContentCreatorDetailComponent } from './content-creator/content-creator-detail/content-creator-detail.component';
import { ContentCreatorEditComponent } from './content-creator/content-creator-edit/content-creator-edit.component';
import { ContentCreatorRegisterComponent } from './content-creator/content-creator-register/content-creator-register.component';
import { ContentCreatorSearchComponent } from './content-creator/content-creator-search/content-creator-search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    PlayerRegisterComponent,
    PlayerListComponent,
    PlayerDetailComponent,
    PlayerDeleteComponent,
    PlayerEditComponent,
    PlayerSearchComponent,
    NotFoundComponent,
    ImageNameListComponent,
    ImageNameDetailComponent,
    ImageNameDeleteComponent,
    ImageNameEditComponent,
    ImageNameCreateComponent,
    ImageNameQuestionListComponent,
    ImageNameQuestionEditComponent,
    ImageNameQuestionCreateComponent,
    ImageNameQuestionDeleteComponent,
    ContentCreatorListComponent,
    ContentCreatorDeleteComponent,
    ContentCreatorDetailComponent,
    ContentCreatorEditComponent,
    ContentCreatorRegisterComponent,
    ContentCreatorSearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbCollapseModule,
    NgbDropdownModule,
    NgbPaginationModule,
    NgxHalClientModule.forRoot(),
    LoginBasicModule,
    ErrorHandlerModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    { provide: 'ExternalConfigurationService', useClass: ExternalConfigurationService },
    AuthenticationBasicService, LoggedInGuard, PlayerService, ImageNameService, ImageNameQuestionService,
    HttpClientService, ContentcreatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
