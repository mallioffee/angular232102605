import { Component, Input, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css']
})
export class Sidebar implements AfterViewInit {
  @Input() modulName: string = "";

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
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
  }
  
}
