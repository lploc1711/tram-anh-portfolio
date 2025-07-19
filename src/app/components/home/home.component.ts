import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  profileData = {
    fullName: 'Dr. Le Ngoc Tram Anh',
    title: 'Research Scientist – Ph.D. in Food Science and Technology',
    introduction: "I'm a passionate researcher in gut microbiome, food science, and human health.",
    email: 'lengoctr001@e.ntu.edu.sg',
    linkedIn: 'https://linkedin.com/in/ngoc-tram-anh-le-873541150'
  };
}
