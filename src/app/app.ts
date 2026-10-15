import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header';
import { Homepage } from './homepage/homepage';


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, Homepage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('SysCADE');
}
