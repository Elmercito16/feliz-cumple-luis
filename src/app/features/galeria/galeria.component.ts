import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent {
  fotos = [
    { src: 'assets/galeria/foto1.png', alt: 'Celebración con amigos', caption: 'Momentos inolvidables' },
    { src: 'assets/galeria/foto3.png', alt: 'Momentos divertidos', caption: 'Risas y diversión' },
    { src: 'assets/galeria/foto4.png', alt: 'Momentos especiales', caption: 'Jajaja' },
    { src: 'assets/galeria/foto5.png', alt: 'Sorpresa', caption: 'Celebrando jeje' },
    { src: 'assets/galeria/foto6.png', alt: 'Sorpresa del cumpleañero', caption: 'La gran sorpresa' },
    { src: 'assets/galeria/foto7.png', alt: 'Sorpresa cumpleaños', caption: 'La sorpresa' },
    { src: 'assets/galeria/foto8.png', alt: 'Sorpresa hoy', caption: 'El regalo' },
    { src: 'assets/galeria/foto9.png', alt: 'Sorpresa mañana', caption: 'Mañana sorpresa' },
    { src: 'assets/galeria/foto10.png', alt: 'Sorpresa segundo día', caption: 'Segunda sorpresa' },
    { src: 'assets/galeria/foto11.png', alt: 'Sorpresa tercer día', caption: 'Tercera sorpresa' },
    { src: 'assets/galeria/foto12.png', alt: 'Sorpresa cuarto día', caption: 'Cuarta sorpresa' },
    { src: 'assets/galeria/foto13.png', alt: 'Sorpresa quinto día', caption: 'Quinta sorpresa' },
    { src: 'assets/galeria/foto14.png', alt: 'Sorpresa sexto día', caption: 'Sexta sorpresa' },
    { src: 'assets/galeria/foto15.png', alt: 'Sorpresa séptimo día', caption: 'Séptima sorpresa' },
    { src: 'assets/galeria/foto16.png', alt: 'Sorpresa octavo día', caption: 'Octava sorpresa' },
    { src: 'assets/galeria/foto17.png', alt: 'Sorpresa noveno día', caption: 'Novena sorpresa' },
    { src: 'assets/galeria/foto18.png', alt: 'Sorpresa décimo día', caption: 'Décima sorpresa' }
  ];

  abrirFoto(foto: any) {
    console.log('Foto seleccionada:', foto);
  }

  getRandomCatEmoji(): string {
    const catEmojis = ['😺', '😸', '😻', '🐱', '😽'];
    return catEmojis[Math.floor(Math.random() * catEmojis.length)];
  }
}
