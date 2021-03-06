import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
  path: '',
  // aqui es importante enrutar el layout
  component: LayoutComponent,
  children: [
    {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full',
    },
    {
      path: 'home',
      loadChildren: () => import('./Home/home.module').then(m => m.HomeModule)
    },
    {
      path: 'product',
      loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
    },
    {
      path: 'contact',
      loadChildren: () => import('./Contact/contact.module').then(m => m.ContactModule)
    }
  ]
},
{
  // se agrega el page de page-not-found
  path: '**',
  loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // all modules are preloaded as fast as possible
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
