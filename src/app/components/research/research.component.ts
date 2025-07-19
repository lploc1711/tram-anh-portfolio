import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-research',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})
export class ResearchComponent {
  researchExperiences = [
    {
      title: 'Research Assistant at NTU',
      period: 'Aug 2024 – Feb 2025',
      location: 'Nanyang Technological University, Singapore',
      description: 'Leading research on upcycling fruit processing byproducts for enhanced food preservation and delivery systems. Focus on developing sustainable methods to convert agricultural waste into value-added functional food ingredients with improved bioactivity and stability.',
      highlights: [
        'Developed novel encapsulation techniques for bioactive compounds',
        'Optimized extraction methods for fruit waste valorization',
        'Characterized antimicrobial and antioxidant properties',
        'Evaluated probiotic delivery systems'
      ]
    },
    {
      title: 'Intern Researcher at KIST',
      period: 'Sep 2019 – Jul 2020',
      location: 'Korea Institute of Science and Technology, Korea',
      description: 'Conducted research on photodynamic therapy effects using hypericin and light treatments on Caenorhabditis elegans model organisms. Investigated the molecular mechanisms of natural compound effects on longevity and health span.',
      highlights: [
        'Performed C. elegans lifespan assays',
        'Analyzed photodynamic effects of hypericin',
        'Conducted dose-response studies',
        'Evaluated oxidative stress responses'
      ]
    }
  ];

  researchAreas = [
    {
      area: 'Gut Microbiome Research',
      description: 'Investigating complex interactions between dietary components and gut microbial communities to understand health outcomes and develop targeted interventions.',
      icon: '🦠'
    },
    {
      area: 'Lactic Acid Bacteria Studies',
      description: 'Developing and optimizing beneficial bacterial strains for improved probiotic applications and therapeutic interventions in food systems.',
      icon: '🧬'
    },
    {
      area: 'Gut Permeability Analysis',
      description: 'Analyzing intestinal barrier function and permeability changes in response to various food components and probiotic treatments.',
      icon: '🔬'
    },
    {
      area: 'Probiotic Encapsulation',
      description: 'Creating advanced delivery systems for probiotics to enhance survival and efficacy during processing, storage, and gastrointestinal transit.',
      icon: '💊'
    },
    {
      area: 'Food Preservation Technologies',
      description: 'Innovating sustainable preservation methods using natural compounds, beneficial microorganisms, and novel processing techniques.',
      icon: '🛡️'
    },
    {
      area: 'Functional Food Development',
      description: 'Designing foods with enhanced health benefits through targeted microbiome modulation and bioactive compound delivery systems.',
      icon: '🍎'
    }
  ];

  techniques = [
    'Precision fermentation processes',
    'Microbiome analysis and sequencing',
    'Advanced analytical chemistry (HPLC, GC-MS, LC-MS)',
    'Probiotic encapsulation and delivery',
    'C. elegans model organism studies',
    'Food waste valorization techniques',
    'Antimicrobial and antioxidant testing',
    'Gut permeability assessment'
  ];
}
