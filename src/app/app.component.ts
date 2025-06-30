import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  template: `
  <app-header/>
  <main>
  <router-outlet/>
  </main>`,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'anand-portfolio';
}
