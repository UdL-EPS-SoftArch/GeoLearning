import { ImageImageQuestionListComponent } from './questions/image-image-question/image-image-question-list/image-image-question-list.component';
import { ImageImageQuestionCreateComponent } from './questions/image-image-question/image-image-question-create/image-image-question-create.component';
import { ImageImageCreateComponent } from './games/image-image/image-image-create/image-image-create.component';
import { ImageImageListComponent } from './games/image-image/image-image-list/image-image-list.component';
import { ImageImageDetailComponent } from './games/image-image/image-image-detail/image-image-detail.component';
import { ImageImageEditComponent } from './games/image-image/image-image-edit/image-image-edit.component';

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoggedInGuard} from './login-basic/loggedin.guard';
import {AboutComponent} from './about/about.component';
import {PlayerListComponent} from './player/player-list/player-list.component';
import {PlayerDetailComponent} from './player/player-detail/player-detail.component';
import {PlayerDeleteComponent} from './player/player-delete/player-delete.component';
import {PlayerEditComponent} from './player/player-edit/player-edit.component';
import {NotFoundComponent} from './error-handler/error-alert/not-found.component';
import {ContentCreatorRegisterComponent} from './content-creator/content-creator-register/content-creator-register.component';
import {ContentCreatorDetailComponent} from './content-creator/content-creator-detail/content-creator-detail.component';
import {ContentCreatorDeleteComponent} from './content-creator/content-creator-delete/content-creator-delete.component';
import {PlayerRegisterComponent} from './player/player-register/player-register.component';
import {ImageNameListComponent} from './games/image-name/image-name-list/image-name-list.component';
import {ImageNameDetailComponent} from './games/image-name/image-name-detail/image-name-detail.component';
import {ImageNameDeleteComponent} from './games/image-name/image-name-delete/image-name-delete.component';
import {ImageNameEditComponent} from './games/image-name/image-name-edit/image-name-edit.component';
import {ImageNameCreateComponent} from './games/image-name/image-name-create/image-name-create.component';
import {ImageNameQuestionCreateComponent} from './questions/image-name-questions/image-name-question-create/image-name-question-create.component';
import {ImageNameQuestionEditComponent} from './questions/image-name-questions/image-name-question-edit/image-name-question-edit.component';
import {ImageNameQuestionDeleteComponent} from './questions/image-name-questions/image-name-question-delete/image-name-question-delete.component';
import {ContentCreatorListComponent} from './content-creator/content-creator-list/content-creator-list.component';
import {ContentCreatorEditComponent} from './content-creator/content-creator-edit/content-creator-edit.component';
import {MatchResultDeleteComponent} from './match-result/match-result-delete/match-result-delete.component';
import {MatchResultDetailComponent} from './match-result/match-result-detail/match-result-detail.component';
import {MatchResultEditComponent} from './match-result/match-result-edit/match-result-edit.component';
import {MatchResultListComponent} from './match-result/match-result-list/match-result-list.component';
import {MatchResultCreateComponent} from './match-result/match-result-create/match-result-create.component';
import {MatchCreateComponent} from './match/match-create/match-create.component';
import {MatchListComponent} from './match/match-list/match-list.component';
import {MatchDetailComponent} from './match/match-detail/match-detail.component';
import {MatchEditComponent} from './match/match-edit/match-edit.component';
import {MatchDeleteComponent} from './match/match-delete/match-delete.component';
import { ImageOptionListComponent } from './games/image-option/image-option-list/image-option-list.component';
import { ImageOptionDetailComponent } from './games/image-option/image-option-detail/image-option-detail.component';
import { ImageOptionCreateComponent } from './games/image-option/image-option-create/image-option-create.component';
import {ImageOptionQuestionCreateComponent} from './questions/image-option-question/image-option-question-create/image-option-question-create.component';
import { ImageOptionEditComponent } from './games/image-option/image-option-edit/image-option-edit.component';

const routes: Routes = [
  {path: 'registerContentCreator', component: ContentCreatorRegisterComponent},
  {path: 'registerPlayer', component: PlayerRegisterComponent},
  {path: 'players/:id/edit', component: PlayerEditComponent, canActivate: [LoggedInGuard]},
  {path: 'players/:id', component: PlayerDetailComponent, canActivate: [LoggedInGuard]},
  {path: 'players', component: PlayerListComponent, canActivate: [LoggedInGuard]},
  {path: 'imageNames', component: ImageNameListComponent, canActivate: [LoggedInGuard]},
  {path: 'imageNames/:id', component: ImageNameDetailComponent, canActivate: [LoggedInGuard]},
  {path: 'imageNames/:id/delete', component: ImageNameDeleteComponent, canActivate: [LoggedInGuard]},
  {path: 'imageNames/:id/edit', component: ImageNameEditComponent, canActivate: [LoggedInGuard]},
  {path: 'imageNames-create', component: ImageNameCreateComponent, canActivate: [LoggedInGuard]},
  {path: 'imageNames/:id/addQuestion', component: ImageNameQuestionCreateComponent, canActivate: [LoggedInGuard]},
  {
    path: 'imageNames/:id/deleteQuestion/:idq',
    component: ImageNameQuestionDeleteComponent,
    canActivate: [LoggedInGuard]
  },
  {path: 'imageNames/:id/editQuestion/:idq', component: ImageNameQuestionEditComponent, canActivate: [LoggedInGuard]},
  {path: 'players/:id/delete', component: PlayerDeleteComponent, canActivate: [LoggedInGuard]},
  {path: 'contentCreators/:id/delete', component: ContentCreatorDeleteComponent, canActivate: [LoggedInGuard]},
  {path: 'contentCreators/:id/edit', component: ContentCreatorEditComponent, canActivate: [LoggedInGuard]},
  {path: 'contentCreators/:id', component: ContentCreatorDetailComponent, canActivate: [LoggedInGuard]},
  {path: 'contentCreators', component: ContentCreatorListComponent, canActivate: [LoggedInGuard]},
  {path: 'matchResults/:id/delete', component: MatchResultDeleteComponent, canActivate: [LoggedInGuard]},
  {path: 'matchResults/:id/edit', component: MatchResultEditComponent, canActivate: [LoggedInGuard]},
  {path: 'matchResults/:id', component: MatchResultDetailComponent, canActivate: [LoggedInGuard]},
  {path: 'matchResults', component: MatchResultListComponent, canActivate: [LoggedInGuard]},
  {path: 'createMatch', component: MatchCreateComponent, canActivate: [LoggedInGuard]},
  {path: 'matches', component: MatchListComponent, canActivate: [LoggedInGuard]},
  {path: 'matches/:id', component: MatchDetailComponent, canActivate: [LoggedInGuard]},
  {path: 'createMatchResults', component: MatchResultCreateComponent, canActivate: [LoggedInGuard]},
  {path: 'matches/:id/edit', component: MatchEditComponent, canActivate: [LoggedInGuard]},
  {path: 'matches/:id/delete', component: MatchDeleteComponent, canActivate: [LoggedInGuard]},
  {path: 'imageImages', component: ImageImageListComponent, canActivate: [LoggedInGuard]},
  { path: 'imageImages/new', component: ImageImageCreateComponent, canActivate: [LoggedInGuard]},
  { path: 'imageImages/:id/addQuestion', component: ImageImageQuestionCreateComponent, canActivate: [LoggedInGuard]},
  { path: 'imageImages/:id', component: ImageImageDetailComponent, canActivate: [LoggedInGuard] },
  { path: 'imageImages/:id/edit', component: ImageImageEditComponent, canActivate: [LoggedInGuard] },
  { path: 'about', component: AboutComponent},
  {path: 'players', component: PlayerListComponent, canActivate: [LoggedInGuard] },
  { path: 'imageOptions', component: ImageOptionListComponent, canActivate: [LoggedInGuard] },
  { path: 'imageOptions/new', component: ImageOptionCreateComponent, canActivate: [LoggedInGuard] },
  { path: 'imageOptions/:id/addQuestion', component: ImageOptionQuestionCreateComponent, canActivate: [LoggedInGuard] },
  { path: 'imageOptions/:id', component: ImageOptionDetailComponent, canActivate: [LoggedInGuard] },
  { path: 'about', component: AboutComponent},
  {path: '404', component: NotFoundComponent},
  {path: '', redirectTo: 'about', pathMatch: 'full'},
  { path: 'imageOptions/:id/edit', component: ImageOptionEditComponent, canActivate: [LoggedInGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
