import { Injectable, signal } from '@angular/core';

export type SectionType = 'home' | 'about' | 'education' | 'research' | 'publications' | 'skills' | 'awards' | 'conferences' | 'contact';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private activeSection = signal<SectionType>('home');

  getActiveSection() {
    return this.activeSection.asReadonly();
  }

  setActiveSection(section: SectionType) {
    this.activeSection.set(section);
  }
}
