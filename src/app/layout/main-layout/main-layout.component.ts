import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
  standalone: true,
  imports: [RouterModule, CommonModule],
})
export class MainLayoutComponent {
  showSidebar = true;
  activeNavLinks: { [key: string]: boolean } = {};
  isMenuOpen: boolean = true;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.isMenuOpen = window.innerWidth >= 768;
  }

  toggleSublinks(navLink: any) {
    if (navLink.sublinks) {
      this.activeNavLinks[navLink.navName] =
        !this.activeNavLinks[navLink.navName];
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
    console.log(this.showSidebar);
  }
}
