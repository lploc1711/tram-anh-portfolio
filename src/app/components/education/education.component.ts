import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Education {
  degree: string;
  institution: string;
  highlights: string[];
  location: string;
  period: string;
  thesis: string;
  additionalInfo?: string;
  supervisor?: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  education: Education[] = [
    {
      degree: 'Ph.D. in Food Science and Technology',
      institution: 'Nanyang Technological University (NTU)',
      location: 'Singapore',
      period: '2020–2025',
      thesis: 'Upcycling of fruit processing byproducts for enhancing food preservation and delivery',
      supervisor: 'Prof. Wei Ning Chen, William',
      highlights: [
        'Investigated gut microbiome modulation through prebiotics and probiotics via in vitro fecal fermentation and metagenomic analysis.',
        'Enhanced and refined fermentation processes.',
        'Explored sustainable food and non-food production utilizing food waste.',
      ],
    },
    {
      degree: 'MSc in Biochemistry',
      institution: 'Gangneung Wonju National University [GWNU] – collaborative program with Korea Institute of Science and Technology [KIST], Natural Product Informatics Research Center.',
      location: 'Korea',
      period: '2017–2019',
      thesis: 'Investigating the effects of hypericin and light to Caenorhabditis elegans.',
      supervisor: 'Assoc. Prof. Dr. Kyungsu KANG, Prof. SangGuan YOU',
      highlights: [
        'Investigated the efficacy of natural products on intestinal barrier integrity using Caenorhabditis elegans and human gut cell assays.',
        'Analyzed protein and gene expression in a nematode model to assess biological impacts.',
      ]
    },
    {
      degree: 'BSc in Biotechnology',
      institution: 'Can Tho University [CTU] integrated program with Michigan State University, Vietnam Institute of Biotechnology Research and Development',
      location: 'Vietnam',
      period: '2012–2017',
      thesis: 'Production of thermotolerant lactic acid bacteria Lactobacillus plantarum L54 product having antimicrobial capacity',
      supervisor: 'Assoc. Prof. Dr. Phuong-Dung Thi NGO',
      highlights: [
        'Expertise in food fermentation processes.',
        'Proficient in isolation and identification of Lactic acid bacteria.',
        'Skilled in production and optimization of probiotic products.'
      ],
    }
  ];

  getDegreeLevel(degree: string): string {
    if (degree.includes('Ph.D.')) return 'PhD';
    if (degree.includes('MSc') || degree.includes('Master')) return 'MSc';
    if (degree.includes('BSc') || degree.includes('Bachelor')) return 'BSc';
    return 'DEG';
  }

  getDegreeIcon(degree: string): string {
    if (degree.includes('Ph.D.')) return '🎓';
    if (degree.includes('MSc') || degree.includes('Master')) return '📚';
    if (degree.includes('BSc') || degree.includes('Bachelor')) return '🎯';
    return '📖';
  }
}
