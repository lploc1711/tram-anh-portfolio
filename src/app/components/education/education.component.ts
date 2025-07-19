import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  thesis: string;
  additionalInfo?: string;
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
      thesis: 'Upcycling of fruit processing byproducts for enhancing food preservation and delivery'
    },
    {
      degree: 'MSc in Biochemistry',
      institution: 'Gangneung-Wonju National University + KIST',
      location: 'Korea',
      period: '2017–2019',
      thesis: 'Effects of hypericin and light on Caenorhabditis elegans'
    },
    {
      degree: 'BSc in Biotechnology',
      institution: 'Can Tho University',
      location: 'Vietnam',
      period: '2012–2017',
      thesis: 'Production of thermotolerant Lactobacillus plantarum L54',
      additionalInfo: 'with Michigan State University program'
    }
  ];
}
