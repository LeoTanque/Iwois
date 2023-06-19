import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'sel-idioma',
    loadChildren: () => import('./pages/sel-idioma/sel-idioma.module').then( m => m.SelIdiomaPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'seleccion-de-rol',
    loadChildren: () => import('./pages/seleccion-de-rol/seleccion-de-rol.module').then( m => m.SeleccionDeRolPageModule)
  },
  {
    path: 'emergente-inicio-sesion',
    loadChildren: () => import('./pages/emergente-inicio-sesion/emergente-inicio-sesion.module').then( m => m.EmergenteInicioSesionPageModule)
  },
  {
    path: 'eliminacion-cuenta',
    loadChildren: () => import('./pages/eliminacion-cuenta/eliminacion-cuenta.module').then( m => m.EliminacionCuentaPageModule)
  },
  {
    path: 'reestablecer-contrasena',
    loadChildren: () => import('./pages/reestablecer-contrasena/reestablecer-contrasena.module').then( m => m.ReestablecerContrasenaPageModule)
  },
  {
    path: 'registro-aviso',
    loadChildren: () => import('./pages/registro-aviso/registro-aviso.module').then( m => m.RegistroAvisoPageModule)
  },
  {
    path: 'aviso-ejercicio',
    loadChildren: () => import('./pages/aviso-ejercicio/aviso-ejercicio.module').then( m => m.AvisoEjercicioPageModule)
  },
  {
    path: 'registro1',
    loadChildren: () => import('./pages/registro1/registro1.module').then( m => m.Registro1PageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
