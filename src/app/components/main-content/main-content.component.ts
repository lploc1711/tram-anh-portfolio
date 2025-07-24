import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationService } from '../../services/navigation.service';
import { HomeComponent } from '../home/home.component';
import { EducationComponent } from '../education/education.component';
import { ResearchComponent } from '../research/research.component';
import { PublicationsComponent } from '../publications/publications.component';
import { SkillsComponent } from '../skills/skills.component';
import { AwardsComponent } from '../awards/awards.component';
import { ConferencesComponent } from '../conferences/conferences.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    CommonModule,
    HomeComponent,
    EducationComponent,
    ResearchComponent,
    PublicationsComponent,
    SkillsComponent,
    AwardsComponent,
    ConferencesComponent,
    ContactComponent
  ],
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent {
  constructor(private navigationService: NavigationService) {}

  get activeSection() {
    return this.navigationService.getActiveSection();
  }
}
