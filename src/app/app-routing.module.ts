import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [{
  path: '',
  // aqui es importante enrutar el layout
  component: LayoutComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // all modules are preloaded as fast as possible
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
