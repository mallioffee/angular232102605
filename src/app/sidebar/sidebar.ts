import { Component, Input, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css'],
})
export class Sidebar implements AfterViewInit {
  @Input() modulName: string = '';
  username: string = '';

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private cookieService: CookieService
  ) {}

  ngAfterViewInit(): void {
    this.username = this.cookieService.get('userId');

    const links = this.el.nativeElement.querySelectorAll('.nav-link');
    links.forEach((link: HTMLElement) => {
      this.renderer.listen(link, 'click', () => {
        const body = document.querySelector('body');
        if (body?.classList.contains('sidebar-open')) {
          this.renderer.removeClass(body, 'sidebar-open');
          this.renderer.addClass(body, 'sidebar-collapse');
        }
      });
    });

    const saved = localStorage.getItem('adminlte-theme');
    const body = document.body;
    const header = document.querySelector('.main-header') as HTMLElement;

    if (saved === 'dark') {
      body.classList.add('dark-mode');

      if (header) {
        header.classList.remove('navbar-white', 'navbar-light');
        header.classList.add('navbar-dark', 'navbar-primary');
      }
    } else {
      if (header) {
        header.classList.remove('navbar-dark', 'navbar-primary');
        header.classList.add('navbar-white', 'navbar-light');
      }
    }
  }

  toggleTheme() {
    const body = document.body;
    const header = document.querySelector('.main-header') as HTMLElement;

    const isDark = body.classList.contains('dark-mode');

    // toggle body
    body.classList.toggle('dark-mode');

    // toggle header class AdminLTE
    if (header) {
      if (!isDark) {
        // dari light → dark
        header.classList.remove('navbar-white', 'navbar-light');
        header.classList.add('navbar-dark', 'navbar-primary'); // atau navbar-dark navbar-dark
      } else {
        // dari dark → light
        header.classList.remove('navbar-dark', 'navbar-primary');
        header.classList.add('navbar-white', 'navbar-light');
      }
    }

    // simpan tema
    localStorage.setItem('adminlte-theme', isDark ? 'light' : 'dark');
  }
}
