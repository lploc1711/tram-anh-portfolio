import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      title: 'Fermentation',
      icon: '🧪',
      skills: [
        'Precision and solid fermentation, in vitro (fecal) fermentation, in vitro digestion model (INFOGEST) simulation',
      ]
    },
    {
      title: 'Molecular biology',
      icon: '🧬',
      skills: [
        'DNA extraction and purification, qPCR, PCR, whole genome extraction',
        'Analyze the data of 16s RNA amplicon sequencing, annotating species at each taxonomic level (phylum, family, genus and species), processing data of alpha and beta diversity, PCoA, LEfSe'
      ]
    },
    {
      title: 'Carbohydrate processing',
      icon: '🌾',
      skills: [
        'Starch extraction and resistant starch production',
        'Enzyme hydrolysis and autohydrolysis using sand bath',
        'Glycosyl composition analysis',
        'Maillard reaction (carbohydrate-protein conjugation)'
      ]
    },
    {
      title: 'Food science and biotechnology',
      icon: '🍎',
      skills: [
        'Food valorization, bacterial growth kinetic, HPLC, GC-MS, GC-FID and LC-MS',
        'Food packaging film production',
        'Food sensory analysis (E- tongue)',
        'Material analysis: FTIR, XRD, tensile strength analysis, viscosity analysis, thermal property analysis (TGA/DTG/DSC), SEM, texture analysis',
        'Color measurement and quantification using spectrophotometer and colorimeter (CIELAB color space)',
        'Probiotic microencapsulation: spray-drying, freeze-drying'
      ]
    },
    {
      title: 'Caenorhabditis elegans study and biochemistry',
      icon: '🔬',
      skills: [
        'Lifespan assay, toxicity assay, nematode gut permeability measurement, photodynamic treatment, fluorescence, UV-vis',
        'Cell culture, Western blot, MTT test, ImageJ analysis'
      ]
    }
  ];

  trackByTitle(index: number, category: SkillCategory): string {
    return category.title;
  }

  trackBySkill(index: number, skill: string): string {
    return skill;
  }

  getTotalSkills(): number {
    return this.skillCategories.reduce((total, category) => total + category.skills.length, 0);
  }

  getAverageSkillsPerCategory(): number {
    return Math.round(this.getTotalSkills() / this.skillCategories.length);
  }
}
