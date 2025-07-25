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
      year: '2019',
      title: 'Biophotonic Effect of Hypericin in Caenorhabditis elegans',
      authors: 'Le, Tram Anh Ngoc and Kyungsu Kang',
      conference: '2019 International Symposium and Annual Meeting of the KSABC',

    },
    {
      year: '2016',
      title: 'Isolation and utilisation of Lactic Acid Bacteria for fermentation process of papaya juice',
      titleVietnamese: 'Phân lập và sử dụng vi khuẩn acid lactic trong quá trình lên men nước đu đủ',
      authors: 'Le Ngoc Tram Anh, Dang Tri Trung, Nguyen Ngoc Thanh, Huynh Xuan Phong, Bui Hoang Dang Long, Ngo Thi Phuong Dung',
      conference: 'Young Scientist Symposium at Can Tho University 2016',
      conferenceVietnamese: 'Hội nghị nhà khoa học trẻ Đại học Cần Thơ 2016',

    }
  ];

  posterPresentations = [
    {
      year: '2023',
      month: 'November',
      title: 'Characterization and Exploration of Utilizing Starch from Jackfruit Seeds, Avocado Seeds, and Durian Seeds for Lactic Acid Generation',
      authors: 'Le, Tram Anh Ngoc, and Chen Wei Ning',
      conference: 'The 37th The European Federation of Food Science and Technology (EFFoST) International Conference',

    },
    {
      year: '2019',
      month: 'January',
      title: 'Effects of 3,3′-Diindolylmethane on the Gut Health in Human Intestinal Cells and Caenorhabditis elegans',
      authors: 'Le, Tram Anh Ngoc, Joo Yeon Kim, So Young Lee, Seemi Tasnim Alam, Cheol-Ho Pan and Kyungsu Kang',
      conference: '24th Korean Society for Molecular and Cellular Biology [KSMCB]– Caenorhabditis elegans division',

    },
    {
      year: '2018',
      month: 'June',
      title: '3,3′-Diindolylmethane Improves Gut Health in Human Intestinal Cells and Caenorhabditis elegans Model',
      authors: 'Le, Tram Anh Ngoc, Kyungsu Kang',
      conference: '2018 International Symposium and Annual Meeting of the Korean Society for Applied Biological Chemistry [KSABC]: Applied Biological Chemistry for the Fourth Industrial Revolution',

    }
  ];

  getTotalPresentations(): number {
    return this.oralPresentations.length + this.posterPresentations.length;
  }

  getYearRange(): string {
    const allYears = [
      ...this.oralPresentations.map(p => parseInt(p.year)),
      ...this.posterPresentations.map(p => parseInt(p.year))
    ];
    const minYear = Math.min(...allYears);
    const maxYear = Math.max(...allYears);
    return `${minYear}–${maxYear}`;
  }
}
