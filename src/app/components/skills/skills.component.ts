import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skillCategories = [
    {
      title: 'Fermentation & Food Processing',
      icon: '🧪',
      skills: [
        'Precision fermentation',
        'Lactic acid bacteria',
        'Food valorization',
        'Food preservation techniques',
        'Byproduct upcycling'
      ]
    },
    {
      title: 'Molecular Biology',
      icon: '🧬',
      skills: [
        'DNA extraction',
        'PCR/qPCR',
        '16S rRNA sequencing',
        'Microbiome analysis',
        'Genetic engineering'
      ]
    },
    {
      title: 'Analytical Techniques',
      icon: '🔬',
      skills: [
        'HPLC',
        'GC-MS',
        'LC-MS',
        'FTIR',
        'SEM',
        'TGA',
        'DSC',
        'Spectrophotometry'
      ]
    },
    {
      title: 'Probiotic Encapsulation',
      icon: '💊',
      skills: [
        'Spray drying',
        'Freeze drying',
        'Microencapsulation',
        'Delivery systems'
      ]
    },
    {
      title: 'Biological Models',
      icon: '🦠',
      skills: [
        'C. elegans lifespan assays',
        'Gut permeability studies',
        'Cell culture techniques',
        'Bioactivity testing'
      ]
    },
    {
      title: 'Software & Data Analysis',
      icon: '💻',
      skills: [
        'ImageJ',
        'GraphPad Prism',
        'R programming',
        'Python',
        'Statistical analysis',
        'Data visualization'
      ]
    }
  ];

  trackByTitle(index: number, category: any): string {
    return category.title;
  }

  trackBySkill(index: number, skill: string): string {
    return skill;
  }
}
