import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { MensajeComponent } from './features/mensaje/mensaje.component';
import { GaleriaComponent } from './features/galeria/galeria.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: '¡Feliz Cumpleaños! 🎉' },
  { path: 'mensaje', component: MensajeComponent, title: 'Mensaje especial 💌' },
  { path: 'galeria', component: GaleriaComponent, title: 'Galería 📸' },
  { path: '**', redirectTo: '' }
];
