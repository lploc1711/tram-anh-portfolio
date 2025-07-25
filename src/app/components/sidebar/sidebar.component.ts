import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

interface NavigationItem {
  label: string;
  route: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isMobileMenuOpen = false;

  profileData = {
    name: 'Dr. Ngoc Tram Anh Le',
    title: 'Ph.D. in Food Science and Technology',
    subtitle: ['Research Scientist'],
    imageUrl: 'assets\\images\\ta_avatar.jpg'
  };

  navigationItems: NavigationItem[] = [
    { label: 'Home', route: '/home' },
    { label: 'Education', route: '/education' },
    { label: 'Working Experience', route: '/working-experience' },
    { label: 'Publications', route: '/publications' },
    { label: 'Skills', route: '/skills' },
    { label: 'Awards', route: '/awards' },
    { label: 'Conferences', route: '/conferences' },
    { label: 'Contact', route: '/contact' }
  ];

  constructor(private router: Router) {}

  onSectionClick(route: string) {
    this.router.navigate([route]);
    // Close mobile menu after navigation on mobile
    if (window.innerWidth <= 768) {
      this.isMobileMenuOpen = false;
    }
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}
