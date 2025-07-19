import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-awards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent {
  awards = [
    {
      year: '2020-2024',
      title: 'NTU Research Scholarship',
      organization: 'Nanyang Technological University',
      description: 'Full scholarship covering tuition and living expenses for Ph.D. studies',
      type: 'scholarship'
    },
    {
      year: '2020',
      title: 'Top 100 Best Korean Research Award',
      organization: 'Korean Scientific Community',
      description: 'Recognition for outstanding research contribution',
      type: 'award'
    },
    {
      year: '2018',
      title: 'Best Research Presentation Award',
      organization: 'Gangneung-Wonju National University',
      description: 'Excellence in research presentation and findings',
      type: 'award'
    },
    {
      year: '2017',
      title: 'Outstanding Research Achievement',
      organization: 'Can Tho University',
      description: 'Recognition for exceptional undergraduate research work',
      type: 'award'
    },
    {
      year: '2016',
      title: 'Best Poster Presentation',
      organization: 'Korean Academic Conference',
      description: 'Excellence in scientific poster presentation',
      type: 'award'
    },
    {
      year: '2015',
      title: 'Korean Government Exchange Scholarship',
      organization: 'Government of South Korea',
      description: 'Prestigious international exchange scholarship program',
      type: 'scholarship'
    },
    {
      year: '2015',
      title: 'Research Excellence Prize',
      organization: 'Vietnam National University',
      description: 'Outstanding performance in biotechnology research',
      type: 'award'
    }
  ];

  getIconForType(type: string): string {
    switch (type) {
      case 'scholarship':
        return '🎓';
      case 'award':
        return '🏆';
      default:
        return '🏅';
    }
  }

  trackByFn(index: number, item: any): any {
    return item.title || index;
  }
}
