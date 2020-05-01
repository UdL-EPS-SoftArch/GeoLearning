import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedInGuard } from './login-basic/loggedin.guard';
import { AboutComponent } from './about/about.component';
import { PlayerListComponent } from './player/player-list/player-list.component';
import { PlayerDetailComponent } from './player/player-detail/player-detail.component';
import { PlayerDeleteComponent } from './player/player-delete/player-delete.component';
import { PlayerEditComponent } from './player/player-edit/player-edit.component';
import { NotFoundComponent } from './error-handler/error-alert/not-found.component';
import { PlayerRegisterComponent } from './player/player-register/player-register.component';
import { ImageNameListComponent } from './games/image-name/image-name-list/image-name-list.component';
import { ImageNameDetailComponent } from './games/image-name/image-name-detail/image-name-detail.component';
import { ImageNameDeleteComponent } from './games/image-name/image-name-delete/image-name-delete.component';
import { ImageNameEditComponent } from './games/image-name/image-name-edit/image-name-edit.component';
import { ImageNameCreateComponent } from './games/image-name/image-name-create/image-name-create.component';

const routes: Routes = [
  { path: 'register', component: PlayerRegisterComponent},
  { path: 'players/:id/edit', component: PlayerEditComponent, canActivate: [LoggedInGuard] },
  { path: 'players/:id/delete', component: PlayerDeleteComponent, canActivate: [LoggedInGuard] },
  { path: 'players/:id', component: PlayerDetailComponent, canActivate: [LoggedInGuard] },
  { path: 'players', component: PlayerListComponent, canActivate: [LoggedInGuard] },
  { path: 'imageNames', component: ImageNameListComponent, canActivate: [LoggedInGuard] },
  { path: 'imageNames/:id', component: ImageNameDetailComponent, canActivate: [LoggedInGuard] },
  { path: 'imageNames/:id/delete', component: ImageNameDeleteComponent, canActivate: [LoggedInGuard] },
  { path: 'imageNames/:id/edit', component: ImageNameEditComponent, canActivate: [LoggedInGuard] },
  { path: 'imageNames-create', component: ImageNameCreateComponent, canActivate: [LoggedInGuard] },
  { path: 'about', component: AboutComponent },
  { path: '404', component: NotFoundComponent},
  { path: '', redirectTo: 'about', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
