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
      period: 'Aug 2024 – Present',
      location: 'Nanyang Technological University, Singapore',
      highlights: [
        'Led the development and implementation of research protocols for NTU\'s food safety initiative, focusing on biogenic amines and mycotoxin detection in food products.',
        'Drove forward NTU\'s food safety research, significantly contributing to the university\'s reputation for academic excellence.',
        'Established a pivotal partnership with Seng Song Supermarket to improve the shelf-life of food items.',
        'Pioneered innovative food packaging technologies that signal product freshness, boosting consumer confidence.'
      ]
    },
    {
      title: 'Intern Researcher at KIST',
      period: 'Sep 2019 – Jul 2020',
      location: 'Korea Institute of Science and Technology, Korea',
      highlights: [
        'Partnered with Korean Yakult on pioneering probiotic research to enhance treatment of gut bowel disease, leveraging cellular and C. elegans models, with potential for international patent.',
        'Executed comprehensive data collection, analysis, and interpretation employing sophisticated statistical software and PerkinElmer® Operetta high-content imaging systems.',
        'Published in the Journal of Visualized Experiments (JOVE) on the utilization of Operetta technology for disease screening processes.',
        'Performed photodynamic therapy experiments utilizing orange and UV light, immunofluorescence, and infrared techniques.',
        'Contributed to the drafting and revision of academic manuscripts, coordinated journal submissions, and developed presentations for academic conferences.'
      ]
    }
  ];


}
