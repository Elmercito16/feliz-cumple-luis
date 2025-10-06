import { Component, OnInit, OnDestroy, PLATFORM_ID, Inject, ViewChild, ElementRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BirthdayAnimationComponent } from '../birthday-animation/birthday-animation.component';

@Component({ 
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, BirthdayAnimationComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;
  
  showAnimation = true;
  isPlaying = false;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    setTimeout(() => {
      this.showAnimation = false;
    }, 3500);

    if (this.isBrowser) {
      setTimeout(() => {
        this.toggleMusic();
      }, 4000);
    }
  }

  toggleMusic() {
    if (!this.isBrowser || !this.audioPlayer) return;

    const audio = this.audioPlayer.nativeElement;
    audio.volume = 0.4;

    if (this.isPlaying) {
      audio.pause();
      this.isPlaying = false;
      console.log('Audio pausado');
    } else {
      audio.play().then(() => {
        this.isPlaying = true;
        console.log('Audio reproduciéndose');
      }).catch(error => {
        console.error('Error:', error);
        alert('No se pudo reproducir el audio. Verifica el archivo.');
      });
    }
  }

  ngOnDestroy() {
    if (this.isBrowser && this.audioPlayer) {
      this.audioPlayer.nativeElement.pause();
    }
  }
}