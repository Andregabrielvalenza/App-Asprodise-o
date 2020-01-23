import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'ventas-comisiones',
    loadChildren: () => import('./ventas-comisiones/ventas-comisiones.module').then( m => m.VentasComisionesPageModule)
  },
  {
    path: 'ventas-ventas',
    loadChildren: () => import('./ventas-ventas/ventas-ventas.module').then( m => m.VentasVentasPageModule)
  },
  {
    path: 'porque-resgistrar',
    loadChildren: () => import('./porque-resgistrar/porque-resgistrar.module').then( m => m.PorqueResgistrarPageModule)
  },
  {
    path: 'seguro-vida',
    loadChildren: () => import('./seguro-vida/seguro-vida.module').then( m => m.SeguroVidaPageModule)
  },
  {
    path: 'vida-solicitudes',
    loadChildren: () => import('./vida-solicitudes/vida-solicitudes.module').then( m => m.VidaSolicitudesPageModule)
  },
  {
    path: 'vida-formulario',
    loadChildren: () => import('./vida-formulario/vida-formulario.module').then( m => m.VidaFormularioPageModule)
  },
  {
    path: 'vida-listo',
    loadChildren: () => import('./vida-listo/vida-listo.module').then( m => m.VidaListoPageModule)
  },
  {
    path: 'mis-clientes',
    loadChildren: () => import('./mis-clientes/mis-clientes.module').then( m => m.MisClientesPageModule)
  },
  {
    path: 'perfil-agente',
    loadChildren: () => import('./perfil-agente/perfil-agente.module').then( m => m.PerfilAgentePageModule)
  },
  {
    path: 'cliente',
    loadChildren: () => import('./cliente/cliente.module').then( m => m.ClientePageModule)
  },
  {
    path: 'seguro-salud',
    loadChildren: () => import('./seguro-salud/seguro-salud.module').then( m => m.SeguroSaludPageModule)
  },
  {
    path: 'salud-solicitudes',
    loadChildren: () => import('./salud-solicitudes/salud-solicitudes.module').then( m => m.SaludSolicitudesPageModule)
  },
  {
    path: 'salud-formulario',
    loadChildren: () => import('./salud-formulario/salud-formulario.module').then( m => m.SaludFormularioPageModule)
  },
  {
    path: 'inversiones',
    loadChildren: () => import('./inversiones/inversiones.module').then( m => m.InversionesPageModule)
  },
  {
    path: 'inversiones-solicitudes',
    loadChildren: () => import('./inversiones-solicitudes/inversiones-solicitudes.module').then( m => m.InversionesSolicitudesPageModule)
  },
  {
    path: 'inversiones-formulario',
    loadChildren: () => import('./inversiones-formulario/inversiones-formulario.module').then( m => m.InversionesFormularioPageModule)
  },
  {
    path: 'agregar-editar-evento',
    loadChildren: () => import('./agregar-editar-evento/agregar-editar-evento.module').then( m => m.AgregarEditarEventoPageModule)
  },
  {
    path: 'agregar-editar-meta',
    loadChildren: () => import('./agregar-editar-meta/agregar-editar-meta.module').then( m => m.AgregarEditarMetaPageModule)
  },
  {
    path: 'inbox',
    loadChildren: () => import('./inbox/inbox.module').then( m => m.InboxPageModule)
  },
  {
    path: 'agenda',
    loadChildren: () => import('./agenda/agenda.module').then( m => m.AgendaPageModule)
  },
  {
    path: 'venta-meta',
    loadChildren: () => import('./venta-meta/venta-meta.module').then( m => m.VentaMetaPageModule)
  },
  {
    path: 'ventaja-uno',
    loadChildren: () => import('./ventaja-uno/ventaja-uno.module').then( m => m.VentajaUnoPageModule)
  },
  {
    path: 'ventaja-dos',
    loadChildren: () => import('./ventaja-dos/ventaja-dos.module').then( m => m.VentajaDosPageModule)
  },
  {
    path: 'resgistro',
    loadChildren: () => import('./resgistro/resgistro.module').then( m => m.ResgistroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'red-agente',
    loadChildren: () => import('./red-agente/red-agente.module').then( m => m.RedAgentePageModule)
  },
  {
    path: 'splash-uno',
    loadChildren: () => import('./splash-uno/splash-uno.module').then( m => m.SplashUnoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
