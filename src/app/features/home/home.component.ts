import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
// CAMBIA ESTA LÍNEA - usa ../ dos veces para subir a app/
import { BirthdayAnimationComponent } from '../birthday-animation/birthday-animation.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, BirthdayAnimationComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showAnimation = true;

  ngOnInit() {
    setTimeout(() => {
      this.showAnimation = false;
    }, 3500);
  }
}