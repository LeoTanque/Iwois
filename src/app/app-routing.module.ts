import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  /*{
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },*/

  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
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
  },
  {
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
  {
    path: 'protocolo-asignado-paciente',
    loadChildren: () => import('./pages/protocolo-asignado-paciente/protocolo-asignado-paciente.module').then( m => m.ProtocoloAsignadoPacientePageModule)
  },
  {
    path: 'tratamientos2.5',
    loadChildren: () => import('./pages/tratamientos2.5/tratamientos2.5.module').then( m => m.Tratamientos25PageModule)
  },
  {
    path: 'tratamiento3.5',
    loadChildren: () => import('./pages/tratamiento3.5/tratamiento3.5.module').then( m => m.Tratamiento35PageModule)
  },
  {
    path: 'tabs-bar',
    loadChildren: () => import('./pages/tabs-bar/tabs-bar.module').then( m => m.TabsBarPageModule)
  },  {
    path: 'perfil-medico1',
    loadChildren: () => import('./pages/perfil-medico1/perfil-medico1.module').then( m => m.PerfilMedico1PageModule)
  },
  {
    path: 'busqueda3',
    loadChildren: () => import('./pages/busqueda3/busqueda3.module').then( m => m.Busqueda3PageModule)
  },
  {
    path: 'home-mensajes',
    loadChildren: () => import('./pages/home-mensajes/home-mensajes.module').then( m => m.HomeMensajesPageModule)
  },
  {
    path: 'mensajes-sin',
    loadChildren: () => import('./pages/mensajes-sin/mensajes-sin.module').then( m => m.MensajesSinPageModule)
  },
  {
    path: 'mensajes-con',
    loadChildren: () => import('./pages/mensajes-con/mensajes-con.module').then( m => m.MensajesConPageModule)
  },
  {
    path: 'chat-medico',
    loadChildren: () => import('./pages/chat-medico/chat-medico.module').then( m => m.ChatMedicoPageModule)
  },
  {
    path: 'chat-medico2',
    loadChildren: () => import('./pages/chat-medico2/chat-medico2.module').then( m => m.ChatMedico2PageModule)
  },
  {
    path: 'protocolo-asignado-paciente1',
    loadChildren: () => import('./pages/protocolo-asignado-paciente1/protocolo-asignado-paciente1.module').then( m => m.ProtocoloAsignadoPaciente1PageModule)
  },
  {
    path: 'protocolo-asignado-paciente2',
    loadChildren: () => import('./pages/protocolo-asignado-paciente2/protocolo-asignado-paciente2.module').then( m => m.ProtocoloAsignadoPaciente2PageModule)
  },
  {
    path: 'protocolo-asignado-paciente3',
    loadChildren: () => import('./pages/protocolo-asignado-paciente3/protocolo-asignado-paciente3.module').then( m => m.ProtocoloAsignadoPaciente3PageModule)
  },
  {
    path: 'seleccion-pre-post-protocolo',
    loadChildren: () => import('./pages/seleccion-pre-post-protocolo/seleccion-pre-post-protocolo.module').then( m => m.SeleccionPrePostProtocoloPageModule)
  },
  {
    path: 'seleccion-fecha-tratamiento',
    loadChildren: () => import('./pages/seleccion-fecha-tratamiento/seleccion-fecha-tratamiento.module').then( m => m.SeleccionFechaTratamientoPageModule)
  },
  {
    path: 'que-seha-seleccionado',
    loadChildren: () => import('./pages/que-seha-seleccionado/que-seha-seleccionado.module').then( m => m.QueSehaSeleccionadoPageModule)
  },
  {
    path: 'protocolo-asignado',
    loadChildren: () => import('./pages/protocolo-asignado/protocolo-asignado.module').then( m => m.ProtocoloAsignadoPageModule)
  },
  {
    path: 'lista-protocolos-sin',
    loadChildren: () => import('./pages/lista-protocolos-sin/lista-protocolos-sin.module').then( m => m.ListaProtocolosSinPageModule)
  },
  {
    path: 'lista-protocolos-con',
    loadChildren: () => import('./pages/lista-protocolos-con/lista-protocolos-con.module').then( m => m.ListaProtocolosConPageModule)
  },
  {
    path: 'anadir-crear-protocolo',
    loadChildren: () => import('./pages/anadir-crear-protocolo/anadir-crear-protocolo.module').then( m => m.AnadirCrearProtocoloPageModule)
  },
  {
    path: 'emergente-eliminar',
    loadChildren: () => import('./pages/emergente-eliminar/emergente-eliminar.module').then( m => m.EmergenteEliminarPageModule)
  },
  {
    path: 'crear-nuevo-protocolo',
    loadChildren: () => import('./pages/crear-nuevo-protocolo/crear-nuevo-protocolo.module').then( m => m.CrearNuevoProtocoloPageModule)
  },
  {
    path: 'ver-protocolo-creado-admin',
    loadChildren: () => import('./pages/ver-protocolo-creado-admin/ver-protocolo-creado-admin.module').then( m => m.VerProtocoloCreadoAdminPageModule)
  },
  {
    path: 'ver-protocolo-creado-admin1',
    loadChildren: () => import('./pages/ver-protocolo-creado-admin1/ver-protocolo-creado-admin1.module').then( m => m.VerProtocoloCreadoAdmin1PageModule)
  },
  {
    path: 'ver-protocolo-creado-admin2',
    loadChildren: () => import('./pages/ver-protocolo-creado-admin2/ver-protocolo-creado-admin2.module').then( m => m.VerProtocoloCreadoAdmin2PageModule)
  },
  {
    path: 'ver-protocolo-creado-admin3',
    loadChildren: () => import('./pages/ver-protocolo-creado-admin3/ver-protocolo-creado-admin3.module').then( m => m.VerProtocoloCreadoAdmin3PageModule)
  },
  {
    path: 'nuevo-protocolo',
    loadChildren: () => import('./pages/nuevo-protocolo/nuevo-protocolo.module').then( m => m.NuevoProtocoloPageModule)
  },
  {
    path: 'nuevo-protocolo1',
    loadChildren: () => import('./pages/nuevo-protocolo1/nuevo-protocolo1.module').then( m => m.NuevoProtocolo1PageModule)
  },
  {
    path: 'nuevo-protocolo2',
    loadChildren: () => import('./pages/nuevo-protocolo2/nuevo-protocolo2.module').then( m => m.NuevoProtocolo2PageModule)
  },
  {
    path: 'nuevo-protocolo-suplementacion',
    loadChildren: () => import('./pages/nuevo-protocolo-suplementacion/nuevo-protocolo-suplementacion.module').then( m => m.NuevoProtocoloSuplementacionPageModule)
  },
  {
    path: 'nuevo-protocolo-ejercicio',
    loadChildren: () => import('./pages/nuevo-protocolo-ejercicio/nuevo-protocolo-ejercicio.module').then( m => m.NuevoProtocoloEjercicioPageModule)
  },
  {
    path: 'nuevo-protocolo-final',
    loadChildren: () => import('./pages/nuevo-protocolo-final/nuevo-protocolo-final.module').then( m => m.NuevoProtocoloFinalPageModule)
  },
  {
    path: 'nuevo-protocolo-final1',
    loadChildren: () => import('./pages/nuevo-protocolo-final1/nuevo-protocolo-final1.module').then( m => m.NuevoProtocoloFinal1PageModule)
  },
  {
    path: 'nuevo-protocolo-final2',
    loadChildren: () => import('./pages/nuevo-protocolo-final2/nuevo-protocolo-final2.module').then( m => m.NuevoProtocoloFinal2PageModule)
  },
  {
    path: 'nuevo-protocolo-final-suplementacion',
    loadChildren: () => import('./pages/nuevo-protocolo-final-suplementacion/nuevo-protocolo-final-suplementacion.module').then( m => m.NuevoProtocoloFinalSuplementacionPageModule)
  },
  {
    path: 'nuevo-protocolo-final-ejercicio',
    loadChildren: () => import('./pages/nuevo-protocolo-final-ejercicio/nuevo-protocolo-final-ejercicio.module').then( m => m.NuevoProtocoloFinalEjercicioPageModule)
  },
  {
    path: 'asignar-protocolo-paciente1',
    loadChildren: () => import('./pages/asignar-protocolo-paciente1/asignar-protocolo-paciente1.module').then( m => m.AsignarProtocoloPaciente1PageModule)
  },
  {
    path: 'asignar-protocolo-paciente2',
    loadChildren: () => import('./pages/asignar-protocolo-paciente2/asignar-protocolo-paciente2.module').then( m => m.AsignarProtocoloPaciente2PageModule)
  },
  {
    path: 'seleccionar-paciente',
    loadChildren: () => import('./pages/seleccionar-paciente/seleccionar-paciente.module').then( m => m.SeleccionarPacientePageModule)
  },
  {
    path: 'nueva-difusion',
    loadChildren: () => import('./pages/nueva-difusion/nueva-difusion.module').then( m => m.NuevaDifusionPageModule)
  },
  {
    path: 'listado-pacientes-difusion',
    loadChildren: () => import('./pages/listado-pacientes-difusion/listado-pacientes-difusion.module').then( m => m.ListadoPacientesDifusionPageModule)
  },
  {
    path: 'filtrar-pacientes',
    loadChildren: () => import('./pages/filtrar-pacientes/filtrar-pacientes.module').then( m => m.FiltrarPacientesPageModule)
  },
  {
    path: 'filtrar-pacientes1',
    loadChildren: () => import('./pages/filtrar-pacientes1/filtrar-pacientes1.module').then( m => m.FiltrarPacientes1PageModule)
  },
  {
    path: 'filtrar-pacientes2',
    loadChildren: () => import('./pages/filtrar-pacientes2/filtrar-pacientes2.module').then( m => m.FiltrarPacientes2PageModule)
  },
  {
    path: 'seleccion-pacientes-filtro',
    loadChildren: () => import('./pages/seleccion-pacientes-filtro/seleccion-pacientes-filtro.module').then( m => m.SeleccionPacientesFiltroPageModule)
  },
  {
    path: 'seleccion-pacientes-filtro-difusion1',
    loadChildren: () => import('./pages/seleccion-pacientes-filtro-difusion1/seleccion-pacientes-filtro-difusion1.module').then( m => m.SeleccionPacientesFiltroDifusion1PageModule)
  },
  {
    path: 'servicios-adicionales-vender',
    loadChildren: () => import('./pages/servicios-adicionales-vender/servicios-adicionales-vender.module').then( m => m.ServiciosAdicionalesVenderPageModule)
  },
  {
    path: 'nuevo-producto',
    loadChildren: () => import('./pages/nuevo-producto/nuevo-producto.module').then( m => m.NuevoProductoPageModule)
  },
  {
    path: 'servicios-adicionales-misproductos',
    loadChildren: () => import('./pages/servicios-adicionales-misproductos/servicios-adicionales-misproductos.module').then( m => m.ServiciosAdicionalesMisproductosPageModule)
  },
  {
    path: 'editar-perfil',
    loadChildren: () => import('./pages/editar-perfil/editar-perfil.module').then( m => m.EditarPerfilPageModule)
  },
  {
    path: 'editar-perfil1',
    loadChildren: () => import('./pages/editar-perfil1/editar-perfil1.module').then( m => m.EditarPerfil1PageModule)
  },
  {
    path: 'editar-perfil2',
    loadChildren: () => import('./pages/editar-perfil2/editar-perfil2.module').then( m => m.EditarPerfil2PageModule)
  },
  {
    path: 'editar-perfil3',
    loadChildren: () => import('./pages/editar-perfil3/editar-perfil3.module').then( m => m.EditarPerfil3PageModule)
  },
  {
    path: 'editar-perfil4',
    loadChildren: () => import('./pages/editar-perfil4/editar-perfil4.module').then( m => m.EditarPerfil4PageModule)
  },
  {
    path: 'editar-perfil5',
    loadChildren: () => import('./pages/editar-perfil5/editar-perfil5.module').then( m => m.EditarPerfil5PageModule)
  },
  {
    path: 'caso-exito3',
    loadChildren: () => import('./pages/caso-exito3/caso-exito3.module').then( m => m.CasoExito3PageModule)
  },
  {
    path: 'caso-exito4',
    loadChildren: () => import('./pages/caso-exito4/caso-exito4.module').then( m => m.CasoExito4PageModule)
  },
  {
    path: 'caso-exito5',
    loadChildren: () => import('./pages/caso-exito5/caso-exito5.module').then( m => m.CasoExito5PageModule)
  },
  {
    path: 'caso-exito6',
    loadChildren: () => import('./pages/caso-exito6/caso-exito6.module').then( m => m.CasoExito6PageModule)
  },
  {
    path: 'suscripciones',
    loadChildren: () => import('./pages/suscripciones/suscripciones.module').then( m => m.SuscripcionesPageModule)
  },
  {
    path: 'registro-perdidos',
    loadChildren: () => import('./pages/registro-perdidos/registro-perdidos.module').then( m => m.RegistroPerdidosPageModule)
  },
  {
    path: 'info-solicitud-producto',
    loadChildren: () => import('./pages/info-solicitud-producto/info-solicitud-producto.module').then( m => m.InfoSolicitudProductoPageModule)
  },
  {
    path: 'editar-perfil6',
    loadChildren: () => import('./pages/editar-perfil6/editar-perfil6.module').then( m => m.EditarPerfil6PageModule)
  },
  {
    path: 'editar-perfil7',
    loadChildren: () => import('./pages/editar-perfil7/editar-perfil7.module').then( m => m.EditarPerfil7PageModule)
  },
  {
    path: 'mensajes-con-prof',
    loadChildren: () => import('./pages/mensajes-con-prof/mensajes-con-prof.module').then( m => m.MensajesConProfPageModule)
  },


 






];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
