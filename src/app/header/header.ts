import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-header',
  styleUrl: './header.css',
  template: ` 
<header class="vh">
  <a class="vh-logo" href="#">Studio Halden</a>
  
  <!-- Adicionada a referência #menuButton, o evento (click) e a interpolação do atributo aria-expanded -->
  <button 
    #menuButton
    class="vh-toggle" 
    type="button" 
    [attr.aria-expanded]="isMenuOpen" 
    aria-controls="vh-menu" 
    aria-label="Menu" 
    (click)="toggleMenu()">
    <i></i><i></i><i></i>
  </button>
  
  <!-- Adicionada a interpolação do atributo data-open -->
  <div 
    class="vh-menu" 
    id="vh-menu"
    [attr.data-open]="isMenuOpen ? '' : null">
    <nav aria-label="Main">
      <ul>
        <li><a href="#" aria-current="page">Work</a></li>
        <li><a href="#">Studio</a></li>
        <li><a href="#">Journal</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
    <p class="vh-foot">Riga & London<br>hello@example.com</p>
  </div>
</header>
  `,
})
export class HeaderComponent {
  isMenuOpen = false;

  // Obtém a referência do botão no DOM para podermos aplicar o foco nele
  @ViewChild('menuButton') menuButton!: ElementRef<HTMLButtonElement>;

  // Alterna o estado do menu
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Escuta o pressionamento da tecla Escape globalmente
  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
      this.menuButton?.nativeElement.focus(); // Retorna o foco ao botão
    }
  }

  // Escuta o redimensionamento da tela (equivalente ao matchMedia do JS original)
  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth >= 992 && this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }
}