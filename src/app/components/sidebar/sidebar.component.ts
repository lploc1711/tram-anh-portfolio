import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationService, SectionType } from '../../services/navigation.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isMobileMenuOpen = false;

  profileData = {
    name: 'Dr. Anh Le Ngoc Tram',
    title: 'Ph.D. in Food Science and Technology',
    subtitle: ['Research Scientist'],
    imageUrl: 'assets\\images\\ta_avatar.jpg'
  };

  navigationItems = [
    { label: 'Home', section: 'home' as SectionType },
    { label: 'Education', section: 'education' as SectionType },
    { label: 'Research', section: 'research' as SectionType },
    { label: 'Publications', section: 'publications' as SectionType },
    { label: 'Skills', section: 'skills' as SectionType },
    { label: 'Awards', section: 'awards' as SectionType },
    { label: 'Conferences', section: 'conferences' as SectionType },
    { label: 'Contact', section: 'contact' as SectionType }
  ];

  constructor(private navigationService: NavigationService) {}

  get activeSection() {
    return this.navigationService.getActiveSection();
  }

  onSectionClick(section: SectionType) {
    this.navigationService.setActiveSection(section);
    // Close mobile menu after navigation on mobile
    if (window.innerWidth <= 768) {
      this.isMobileMenuOpen = false;
    }
  }

  isActive(section: SectionType): boolean {
    return this.activeSection() === section;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}
