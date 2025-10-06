import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-birthday-animation',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="animation-overlay" *ngIf="showAnimation">
      <div class="celebration-container">
        <div class="birthday-message">
          ¡Feliz Cumpleaños
          <span class="name">Luis Maldonado!</span>
        </div>
      </div>
      <div class="confetti-container" #confettiContainer></div>
    </div>
  `,
  styles: [`
    .animation-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    .celebration-container {
      position: relative;
      text-align: center;
      z-index: 10;
    }

    .birthday-message {
      font-size: 4rem;
      font-weight: bold;
      color: #FFD700;
      text-shadow: 
        0 0 10px rgba(255, 215, 0, 0.8),
        0 0 20px rgba(255, 215, 0, 0.6),
        0 0 30px rgba(255, 215, 0, 0.4),
        3px 3px 6px rgba(0, 0, 0, 0.5);
      animation: messageAppear 1s ease-out, pulse 2s ease-in-out 1s infinite;
    }

    .name {
      display: block;
      font-size: 5rem;
      margin-top: 1rem;
      background: linear-gradient(45deg, #FFD700, #FFA500, #FF6347);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: messageAppear 1s ease-out 0.3s both, rainbow 2s linear infinite;
    }

    @keyframes messageAppear {
      0% { opacity: 0; transform: scale(0.5) translateY(-100px); }
      60% { transform: scale(1.1) translateY(0); }
      100% { opacity: 1; transform: scale(1) translateY(0); }
    }

    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }

    @keyframes rainbow {
      0%, 100% { filter: hue-rotate(0deg); }
      50% { filter: hue-rotate(60deg); }
    }

    .confetti-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }

    :host ::ng-deep .confetti {
      position: absolute;
      width: 10px;
      height: 10px;
      animation: confettiFall 3s linear forwards;
    }

    @keyframes confettiFall {
      0% { transform: translateY(0) rotate(0deg); opacity: 1; }
      100% { transform: translateY(120vh) rotate(720deg); opacity: 0; }
    }

    :host ::ng-deep .balloon {
      position: absolute;
      width: 50px;
      height: 60px;
      border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
      animation: balloonFloat 3s ease-out forwards;
    }

    @keyframes balloonFloat {
      0% { transform: translateY(0); opacity: 1; }
      100% { transform: translateY(-150vh); opacity: 0; }
    }

    :host ::ng-deep .emoji {
      position: absolute;
      font-size: 30px;
      animation: emojiFall 3s ease-out forwards;
    }

    @keyframes emojiFall {
      0% { transform: translateY(0) rotate(0deg) scale(0); opacity: 1; }
      50% { transform: translateY(50vh) rotate(180deg) scale(1); }
      100% { transform: translateY(120vh) rotate(360deg) scale(0.5); opacity: 0; }
    }

    @media (max-width: 768px) {
      .birthday-message { font-size: 2.5rem; }
      .name { font-size: 3rem; }
    }
  `]
})
export class BirthdayAnimationComponent implements OnInit, OnDestroy {
  showAnimation = true;
  private timeoutId?: number;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    // ✅ Solo ejecutar en el navegador (evita errores SSR)
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => this.startAnimation(), 500);

      this.timeoutId = window.setTimeout(() => {
        this.showAnimation = false;
      }, 3500);
    }
  }

  ngOnDestroy() {
    if (this.timeoutId) clearTimeout(this.timeoutId);
  }

  private startAnimation() {
    if (!isPlatformBrowser(this.platformId)) return; // seguridad SSR
    const container = document.querySelector('.confetti-container');
    if (!container) return;

    const colors = ['#FFD700', '#FF6347', '#4169E1', '#32CD32', '#FF1493', '#FFA500', '#9370DB', '#00CED1'];
    const emojis = ['🎉', '🎊', '🎂', '🎈', '🎁', '✨', '⭐', '💫'];

    // Confeti
    for (let i = 0; i < 100; i++) {
      setTimeout(() => {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        confetti.style.width = (Math.random() * 8 + 5) + 'px';
        confetti.style.height = (Math.random() * 8 + 5) + 'px';
        container.appendChild(confetti);
        setTimeout(() => confetti.remove(), 3000);
      }, i * 20);
    }

    // Globos
    for (let i = 0; i < 15; i++) {
      setTimeout(() => {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = Math.random() * 100 + '%';
        balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        balloon.style.animationDelay = Math.random() * 0.3 + 's';
        container.appendChild(balloon);
        setTimeout(() => balloon.remove(), 3000);
      }, i * 150);
    }

    // Emojis
    for (let i = 0; i < 30; i++) {
      setTimeout(() => {
        const emoji = document.createElement('div');
        emoji.className = 'emoji';
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = Math.random() * 100 + '%';
        emoji.style.animationDelay = Math.random() * 0.5 + 's';
        container.appendChild(emoji);
        setTimeout(() => emoji.remove(), 3000);
      }, i * 80);
    }
  }
}