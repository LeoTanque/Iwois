import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
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
  },
 
  {
    path: 'recuperar-contrasena',
    loadChildren: () => import('./pages/recuperar-contrasena/recuperar-contrasena.module').then( m => m.RecuperarContrasenaPageModule)
  },
  {
    path: 'mis-tratamientos',
    loadChildren: () => import('./pages/mis-tratamientos/mis-tratamientos.module').then( m => m.MisTratamientosPageModule)
  },
  {
    path: 'mis-tratamientos3',
    loadChildren: () => import('./pages/mis-tratamientos3/mis-tratamientos3.module').then( m => m.MisTratamientos3PageModule)
  },
  {
    path: 'tratamientos2',
    loadChildren: () => import('./pages/tratamientos2/tratamientos2.module').then( m => m.Tratamientos2PageModule)
  },
  {
    path: 'cambiar-contrsena',
    loadChildren: () => import('./pages/cambiar-contrsena/cambiar-contrsena.module').then( m => m.CambiarContrsenaPageModule)
  },
  {
    path: 'ejemplo-video',
    loadChildren: () => import('./pages/ejemplo-video/ejemplo-video.module').then( m => m.EjemploVideoPageModule)
  },
  {
    path: 'ejemplo-foto',
    loadChildren: () => import('./pages/ejemplo-foto/ejemplo-foto.module').then( m => m.EjemploFotoPageModule)
  },
  {
    path: 'editar-contrasena',
    loadChildren: () => import('./pages/editar-contrasena/editar-contrasena.module').then( m => m.EditarContrasenaPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'cerrar-sesion',
    loadChildren: () => import('./pages/cerrar-sesion/cerrar-sesion.module').then( m => m.CerrarSesionPageModule)
  },
  {
    path: 'eliminar-cuenta',
    loadChildren: () => import('./pages/eliminar-cuenta/eliminar-cuenta.module').then( m => m.EliminarCuentaPageModule)
  },
  {
    path: 'notificaciones',
    loadChildren: () => import('./pages/notificaciones/notificaciones.module').then( m => m.NotificacionesPageModule)
  },
  {
    path: 'notificaciones2',
    loadChildren: () => import('./pages/notificaciones2/notificaciones2.module').then( m => m.Notificaciones2PageModule)
  },
  {
    path: 'ejemplo-video1',
    loadChildren: () => import('./pages/ejemplo-video1/ejemplo-video1.module').then( m => m.EjemploVideo1PageModule)
  },
  {
    path: 'busqueda2',
    loadChildren: () => import('./pages/busqueda2/busqueda2.module').then( m => m.Busqueda2PageModule)
  },
  {
    path: 'ru-tratamientos',
    loadChildren: () => import('./pages/ru-tratamientos/ru-tratamientos.module').then( m => m.RuTratamientosPageModule)
  },
  {
    path: 'ru-tratamientos-progreso',
    loadChildren: () => import('./pages/ru-tratamientos-progreso/ru-tratamientos-progreso.module').then( m => m.RuTratamientosProgresoPageModule)
  },
  {
    path: 'ver-todo-progreso',
    loadChildren: () => import('./pages/ver-todo-progreso/ver-todo-progreso.module').then( m => m.VerTodoProgresoPageModule)
  },
  {
    path: 'tratamiento-suplementacion',
    loadChildren: () => import('./pages/tratamiento-suplementacion/tratamiento-suplementacion.module').then( m => m.TratamientoSuplementacionPageModule)
  },
  {
    path: 'suplementacion',
    loadChildren: () => import('./pages/suplementacion/suplementacion.module').then( m => m.SuplementacionPageModule)
  },
  {
    path: 'tratamiento-ejercicio',
    loadChildren: () => import('./pages/tratamiento-ejercicio/tratamiento-ejercicio.module').then( m => m.TratamientoEjercicioPageModule)
  },
  {
    path: 'perfil-medico',
    loadChildren: () => import('./pages/perfil-medico/perfil-medico.module').then( m => m.PerfilMedicoPageModule)
  },
  {
    path: 'tratamiento3',
    loadChildren: () => import('./pages/tratamiento3/tratamiento3.module').then( m => m.Tratamiento3PageModule)
  },
  {
    path: 'tratamiento5',
    loadChildren: () => import('./pages/tratamiento5/tratamiento5.module').then( m => m.Tratamiento5PageModule)
  },
  {
    path: 'tratamiento4',
    loadChildren: () => import('./pages/tratamiento4/tratamiento4.module').then( m => m.Tratamiento4PageModule)
  },
  {
    path: 'home-profesional',
    loadChildren: () => import('./pages/home-profesional/home-profesional.module').then( m => m.HomeProfesionalPageModule)
  },
  {
    path: 'servicios-adicionales',
    loadChildren: () => import('./pages/servicios-adicionales/servicios-adicionales.module').then( m => m.ServiciosAdicionalesPageModule)
  },
  {
    path: 'login-prof',
    loadChildren: () => import('./pages/login-prof/login-prof.module').then( m => m.LoginProfPageModule)
  },
  {
    path: 'registro-profesional',
    loadChildren: () => import('./pages/registro-profesional/registro-profesional.module').then( m => m.RegistroProfesionalPageModule)
  },
  {
    path: 'servicios-adicionales-producto1',
    loadChildren: () => import('./pages/servicios-adicionales-producto1/servicios-adicionales-producto1.module').then( m => m.ServiciosAdicionalesProducto1PageModule)
  },
  {
    path: 'busqueda-arr',
    loadChildren: () => import('./pages/busqueda-arr/busqueda-arr.module').then( m => m.BusquedaArrPageModule)
  },  {
    path: 'lista-pacientes-sin',
    loadChildren: () => import('./pages/lista-pacientes-sin/lista-pacientes-sin.module').then( m => m.ListaPacientesSinPageModule)
  },
  {
    path: 'busqueda-pacientes',
    loadChildren: () => import('./pages/busqueda-pacientes/busqueda-pacientes.module').then( m => m.BusquedaPacientesPageModule)
  },
  {
    path: 'busqueda-pacientes2',
    loadChildren: () => import('./pages/busqueda-pacientes2/busqueda-pacientes2.module').then( m => m.BusquedaPacientes2PageModule)
  },
  {
    path: 'lista-pacientes-con',
    loadChildren: () => import('./pages/lista-pacientes-con/lista-pacientes-con.module').then( m => m.ListaPacientesConPageModule)
  },
  {
    path: 'ficha-paciente',
    loadChildren: () => import('./pages/ficha-paciente/ficha-paciente.module').then( m => m.FichaPacientePageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'seleccion-protocolos',
    loadChildren: () => import('./pages/seleccion-protocolos/seleccion-protocolos.module').then( m => m.SeleccionProtocolosPageModule)
  },
  {
    path: 'ficha-paciente1',
    loadChildren: () => import('./pages/ficha-paciente1/ficha-paciente1.module').then( m => m.FichaPaciente1PageModule)
  },






];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
