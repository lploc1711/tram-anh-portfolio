import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-conferences',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './conferences.component.html',
  styleUrls: ['./conferences.component.scss']
})
export class ConferencesComponent {
  oralPresentations = [
    {
      year: '2023',
      title: 'Utilization of Jackfruit Seed Waste for Functional Food Development',
      conference: 'European Federation of Food Science and Technology (EFFoST)',
      location: 'Valencia, Spain',
      description: 'Presented research on sustainable food waste valorization'
    },
    {
      year: '2023',
      title: 'Upcycling Avocado Seeds: Novel Approaches for Food Preservation',
      conference: 'EFFoST International Conference',
      location: 'Valencia, Spain',
      description: 'Innovative methods for converting agricultural waste into value-added products'
    },
    {
      year: '2019',
      title: 'Effects of Hypericin on Caenorhabditis elegans Longevity',
      conference: 'Korean Society for Applied Biological Chemistry (KSABC)',
      location: 'Seoul, Korea',
      description: 'Investigation of natural compound effects on model organism lifespan'
    },
    {
      year: '2018',
      title: 'Diindolylmethane Studies on C. elegans Health and Longevity',
      conference: 'KSABC Annual Conference',
      location: 'Busan, Korea',
      description: 'Exploring bioactive compounds for health promotion'
    }
  ];

  posterPresentations = [
    {
      year: '2024',
      title: 'Gut Microbiome Modulation through Fermented Food Interventions',
      conference: 'International Conference on Food Microbiology',
      location: 'Singapore',
      description: 'Research on microbiome-food interactions'
    },
    {
      year: '2023',
      title: 'Probiotic Encapsulation Techniques for Enhanced Stability',
      conference: 'Asia-Pacific Food Science Conference',
      location: 'Bangkok, Thailand',
      description: 'Advanced delivery systems for probiotic organisms'
    },
    {
      year: '2022',
      title: 'Functional Properties of Fruit Processing Byproducts',
      conference: 'World Food Science Congress',
      location: 'Virtual Conference',
      description: 'Sustainable utilization of agricultural waste streams'
    },
    {
      year: '2019',
      title: 'Thermotolerant Lactobacillus plantarum for Tropical Applications',
      conference: 'Asian Conference on Food and Nutrition',
      location: 'Ho Chi Minh City, Vietnam',
      description: 'Development of climate-adapted probiotic strains'
    },
    {
      year: '2018',
      title: 'Light-induced Effects of Hypericin in Nematode Models',
      conference: 'International Photobiology Congress',
      location: 'Incheon, Korea',
      description: 'Photodynamic effects of natural compounds'
    }
  ];
}
