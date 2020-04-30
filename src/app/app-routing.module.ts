import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedInGuard } from './login-basic/loggedin.guard';
import { AboutComponent } from './about/about.component';
import { PlayerListComponent } from './player/player-list/player-list.component';
import { PlayerDetailComponent } from './player/player-detail/player-detail.component';
import { PlayerDeleteComponent } from './player/player-delete/player-delete.component';
import { PlayerEditComponent } from './player/player-edit/player-edit.component';
import { NotFoundComponent } from './error-handler/error-alert/not-found.component';
import {ContentCreatorRegisterComponent} from './content-creator/content-creator-register/content-creator-register.component';
import {ContentCreatorDetailComponent} from './content-creator/content-creator-detail/content-creator-detail.component';
import {ContentCreatorDeleteComponent} from './content-creator/content-creator-delete/content-creator-delete.component';
import { PlayerRegisterComponent } from './player/player-register/player-register.component';

const routes: Routes = [
  { path: 'register', component: ContentCreatorRegisterComponent},
  { path: 'players/:id/edit', component: PlayerEditComponent, canActivate: [LoggedInGuard] },
  { path: 'players/:id', component: PlayerDetailComponent, canActivate: [LoggedInGuard] },
  { path: 'players', component: PlayerListComponent, canActivate: [LoggedInGuard] },
  { path: 'players/:id/delete', component: PlayerDeleteComponent, canActivate: [LoggedInGuard] },
  { path: 'contentcreators/:id/delete', component: ContentCreatorDeleteComponent, canActivate: [LoggedInGuard] },
  { path: 'contentcreators/:id', component: ContentCreatorDetailComponent, canActivate: [LoggedInGuard] },
  { path: 'about', component: AboutComponent },
  { path: '404', component: NotFoundComponent},
  { path: '', redirectTo: 'about', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
