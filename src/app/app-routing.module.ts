import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DicogolloAboutComponent } from './dicogollo-about/dicogollo-about.component';
import { DicogolloSeedsComponent } from './dicogollo-seeds/dicogollo-seeds.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'seeds',
  pathMatch: 'full'
},
  
{
  path: 'seeds',
  component: DicogolloSeedsComponent
},
{
  path: 'about',
  component: DicogolloAboutComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
