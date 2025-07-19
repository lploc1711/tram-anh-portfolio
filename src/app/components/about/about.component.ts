import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  aboutText = `I am a Vietnamese-born research scientist with a passionate interest in gut microbiome–food interactions and their impact on human health. My research journey has taken me across multiple countries, giving me strong international research experience in Singapore, Korea, and Vietnam. I specialize in exploring how food components interact with our gut microbiome to influence health outcomes, combining traditional food science knowledge with cutting-edge biotechnology.

My work focuses on developing sustainable food technologies that not only preserve and enhance nutritional value but also promote gut health through targeted microbiome interactions. I have extensive experience in fermentation processes, probiotic development, and the valorization of food processing byproducts into functional food ingredients.`;

  personalBackground = `Growing up in Vietnam, I developed an early fascination with the traditional fermented foods of my culture and their health benefits. This curiosity led me to pursue biotechnology studies at Can Tho University, where I first encountered the world of beneficial bacteria and their applications in food science. My academic journey then took me to Korea for my Master's degree, where I expanded my research into the molecular mechanisms of bioactive compounds using C. elegans as a model organism.

Currently completing my Ph.D. at Nanyang Technological University in Singapore, I have focused my research on upcycling fruit processing byproducts to enhance food preservation and delivery systems. This work represents my commitment to sustainable food science and circular economy principles.`;
}
