import { Component, inject, signal, HostListener } from '@angular/core';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
})
export class Navbar {
  content = inject(ContentService);
  mobileOpen = signal(false);
  scrolled = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 20);
  }

  toggleMobile() {
    this.mobileOpen.update((v) => !v);
  }

  closeMobile() {
    this.mobileOpen.set(false);
  }
}
