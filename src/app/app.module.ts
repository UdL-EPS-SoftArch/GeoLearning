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
import { ImageNameQuestionService, ImageNameQuestionServiceExtended } from './questions/image-name-questions/image-name-question.service';
import { ImageImageService } from './games/image-image/image-image.service';
import {MatchResultService} from './match-result/match-result.service';

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {AboutComponent} from './about/about.component';
import {PlayerRegisterComponent} from './player/player-register/player-register.component';
import {PlayerListComponent} from './player/player-list/player-list.component';
import {PlayerDetailComponent} from './player/player-detail/player-detail.component';
import {PlayerDeleteComponent} from './player/player-delete/player-delete.component';
import {PlayerEditComponent} from './player/player-edit/player-edit.component';
import {MatchEditComponent} from './match/match-edit/match-edit.component';
import {MatchDeleteComponent} from './match/match-delete/match-delete.component';
import {PlayerSearchComponent} from './player/player-search/player-search.component';
import {NotFoundComponent} from './error-handler/error-alert/not-found.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ContentCreatorListComponent} from './content-creator/content-creator-list/content-creator-list.component';
import {ContentCreatorDeleteComponent} from './content-creator/content-creator-delete/content-creator-delete.component';
import {ContentCreatorDetailComponent} from './content-creator/content-creator-detail/content-creator-detail.component';
import {ContentCreatorEditComponent} from './content-creator/content-creator-edit/content-creator-edit.component';
import {ContentCreatorRegisterComponent} from './content-creator/content-creator-register/content-creator-register.component';
import {ContentCreatorSearchComponent} from './content-creator/content-creator-search/content-creator-search.component';
import {MatchResultEditComponent} from './match-result/match-result-edit/match-result-edit.component';
import {MatchResultDeleteComponent} from './match-result/match-result-delete/match-result-delete.component';
import {MatchResultDetailComponent} from './match-result/match-result-detail/match-result-detail.component';
import {MatchResultListComponent} from './match-result/match-result-list/match-result-list.component';
import {MatchResultCreateComponent} from './match-result/match-result-create/match-result-create.component';
import {ImageNameListComponent} from './games/image-name/image-name-list/image-name-list.component';
import {ImageNameDetailComponent} from './games/image-name/image-name-detail/image-name-detail.component';
import {ImageNameDeleteComponent} from './games/image-name/image-name-delete/image-name-delete.component';
import {ImageNameEditComponent} from './games/image-name/image-name-edit/image-name-edit.component';
import {ImageNameCreateComponent} from './games/image-name/image-name-create/image-name-create.component';
import {ImageNameQuestionListComponent} from './questions/image-name-questions/image-name-question-list/image-name-question-list.component';
import {ImageNameQuestionEditComponent} from './questions/image-name-questions/image-name-question-edit/image-name-question-edit.component';
import {ImageNameQuestionCreateComponent} from './questions/image-name-questions/image-name-question-create/image-name-question-create.component';
import {ImageNameQuestionDeleteComponent} from './questions/image-name-questions/image-name-question-delete/image-name-question-delete.component';
import {MatchCreateComponent} from './match/match-create/match-create.component';
import {MatchListComponent} from './match/match-list/match-list.component';
import {MatchDetailComponent} from './match/match-detail/match-detail.component';
import { ImageOptionListComponent } from './games/image-option/image-option-list/image-option-list.component';
import { ImageOptionDetailComponent } from './games/image-option/image-option-detail/image-option-detail.component';
import { ImageOptionEditComponent } from './games/image-option/image-option-edit/image-option-edit.component';

import { ImageOptionCreateComponent } from './games/image-option/image-option-create/image-option-create.component';
import {ImageOptionService} from './games/image-option/image-option.service';
import {ImageOptionQuestionService} from './questions/image-option-question/image-option-question.service';
import {ImageOptionQuestionCreateComponent} from './questions/image-option-question/image-option-question-create/image-option-question-create.component';
import {ImageOptionQuestionListComponent} from './questions/image-option-question/image-option-question-list/image-option-question-list.component';

import { ImageImageCreateComponent } from './games/image-image/image-image-create/image-image-create.component';
import { ImageImageListComponent } from './games/image-image/image-image-list/image-image-list.component';
import { ImageImageQuestionService } from './questions/image-image-question/image-image-question.service';
import { ImageImageQuestionCreateComponent } from './questions/image-image-question/image-image-question-create/image-image-question-create.component';
import { ImageImageQuestionListComponent } from './questions/image-image-question/image-image-question-list/image-image-question-list.component';
import { ImageImageDetailComponent } from './games/image-image/image-image-detail/image-image-detail.component';
import { ImageImageEditComponent } from './games/image-image/image-image-edit/image-image-edit.component';
import { ImageNameDetailPlayerViewComponent } from './games/image-name/image-name-detail-player-view/image-name-detail-player-view.component';
import { ImageWriteDetailPlayerViewComponent } from './games/image-name/image-write-detail-player-view/image-write-detail-player-view.component';

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
    MatchEditComponent,
    MatchDeleteComponent,
    PlayerSearchComponent,
    ImageOptionDetailComponent,
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
    MatchResultEditComponent,
    MatchResultDeleteComponent,
    MatchResultDetailComponent,
    MatchResultListComponent,
    MatchResultCreateComponent,
    MatchCreateComponent,
    MatchListComponent,
    MatchDetailComponent,
    ImageImageCreateComponent,
    ImageImageListComponent,
    ImageImageQuestionCreateComponent,
    ImageImageQuestionListComponent,
    ImageImageDetailComponent,
    ImageImageEditComponent,
    ImageOptionListComponent,
    ImageOptionCreateComponent,
    ImageOptionQuestionCreateComponent,
    ImageOptionQuestionListComponent,
    ImageOptionEditComponent,
    ImageNameDetailPlayerViewComponent,
    ImageWriteDetailPlayerViewComponent,
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
    ImageNameQuestionServiceExtended, ContentcreatorService, MatchResultService, ImageImageService,
    ImageImageQuestionService, ImageOptionService, ImageOptionQuestionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
