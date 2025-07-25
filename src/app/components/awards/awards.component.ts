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
      year: '2020 - 2024',
      title: 'NTU research scholarship',
      organization: 'awarded by NTU',
      type: 'scholarship'
    },
    {
      year: '2020',
      title: 'The top 100 best Korean Research Award',
      organization: 'Korean Research Community',
      type: 'award'
    },
    {
      year: '2018',
      title: 'The second prize of the best presentation',
      organization: 'awarded by KIST',
      type: 'award'
    },
    {
      year: '2017',
      title: 'Valedictorian of the course',
      organization: 'awarded by Institute of Biotechnology Research and Development Youth Union of Can Tho University',
      type: 'achievement'
    },
    {
      year: '2017',
      title: 'The consolation prize of the best research',
      organization: 'awarded by Ministry of Science and Technology of Vietnam',
      type: 'award'
    },
    {
      year: '2016',
      title: 'The first prize of the best research',
      organization: 'awarded by Can Tho University',
      type: 'award'
    },
    {
      year: '2016',
      title: 'The third prize of the best research',
      organization: 'awarded by Can Tho University',
      type: 'award'
    },
    {
      year: '2015',
      title: 'Korean Government Exchange Scholarship',
      organization: 'funded by NIIED',
      type: 'scholarship'
    }
  ];

  getIconForType(type: string): string {
    switch (type) {
      case 'scholarship':
        return '🎓';
      case 'award':
        return '🏆';
      case 'achievement':
        return '🏅';
      default:
        return '�️';
    }
  }

  trackByFn(index: number, item: any): any {
    return item.title || index;
  }

  getScholarshipCount(): number {
    return this.awards.filter(award => award.type === 'scholarship').length;
  }

  getAwardCount(): number {
    return this.awards.filter(award => award.type === 'award').length;
  }

  getAchievementCount(): number {
    return this.awards.filter(award => award.type === 'achievement').length;
  }

  formatYear(year: string): string {
    // Check if year contains a range (e.g., "2020 - 2024")
    if (year.includes(' - ')) {
      const [startYear, endYear] = year.split(' - ');
      return `${startYear}–${endYear}`;
    }
    return year;
  }

  getYearLabel(year: string): string {
    if (year.includes(' - ')) {
      return 'Duration';
    }
    return 'Year';
  }
}
