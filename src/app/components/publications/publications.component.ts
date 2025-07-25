import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Publication {
  authors: string;
  year: number;
  title: string;
  journal: string;
  tags: string[];
  doi?: string;
  url?: string;
  youtube?: string;
}

interface Patent {
  authors: string;
  year: number;
  month: string;
  title: string;
  description: string;
  managementNumber: string;
  referenceNumber: string;
  tags: string[];
}

@Component({
  selector: 'app-publications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent {
  publications: Publication[] = [
    {
      authors: 'Bae, W. Y., Nguyen, U. T. T., Tram Anh Ngoc Le., Tran, S. H., Lee, S., Hong, S. C., ... & Kang, K.',
      year: 2025,
      title: 'Lacticaseibacillus casei HY2782 improves the intestinal barrier and tract environment and ultimately prolongs the lifespan of Caenorhabditis elegans',
      journal: 'Food & Function',
      tags: ['Probiotics', 'Intestinal Barrier', 'C. elegans', 'Lifespan'],
      doi: '10.1039/D5FO01239B',
      url: 'https://doi.org/10.1039/D5FO01239B'
    },
    {
      authors: 'Tram Anh Ngoc Le, Wei Ning Chen',
      year: 2025,
      title: 'Microencapsulation of Lactobacillus plantarum by avocado seed-type 3 resistant starch and okara protein isolate',
      journal: 'Food Chemistry Advances',
      tags: ['Microencapsulation', 'Lactobacillus', 'Resistant Starch', 'Okara Protein'],
      doi: '10.1016/j.focha.2025.100964',
      url: 'https://www.sciencedirect.com/science/article/pii/S2772753X25000802'
    },
    {
      authors: 'Nguyen, U. T. T., Youn, E., Le, Tram Anh Ngoc, Ha, N. M., Tran, S. H., Lee, S., ... & Kang, K.',
      year: 2024,
      title: 'Photodynamic treatment increases the lifespan and oxidative stress resistance of Caenorhabditis elegans',
      journal: 'Free Radical Biology and Medicine',
      tags: ['Photodynamic Therapy', 'Oxidative Stress', 'C. elegans', 'Lifespan'],
      doi: '10.1016/j.freeradbiomed.2024.04.581',
      url: 'https://www.sciencedirect.com/science/article/pii/S0891584924004581'
    },
    {
      authors: 'Le, Tram Anh Ngoc, and Wei Ning Chen',
      year: 2024,
      title: 'Composite films produced from upcycling of tropical fruit seeds are capable of monitoring shrimp freshness',
      journal: 'Food and Humanity',
      tags: ['Composite Films', 'Upcycling', 'Food Packaging', 'Freshness Monitoring'],
      doi: '10.1016/j.foohum.2024.100234',
      url: 'https://www.sciencedirect.com/science/article/pii/S2949824424000090',
      youtube: 'https://www.youtube.com/watch?v=HjGqhaEZMHs'
    },
    {
      authors: 'Le, Tram Anh Ngoc, Jaslyn Jie Lin Lee, and Wei Ning Chen',
      year: 2023,
      title: 'Stimulation of lactic acid production and Lactobacillus plantarum growth in the coculture with Bacillus subtilis using jackfruit seed starch',
      journal: 'Journal of Functional Foods',
      tags: ['Lactic Acid', 'Coculture', 'Jackfruit Seed', 'Starch'],
      doi: '10.1016/j.jff.2023.105535',
      url: 'https://www.sciencedirect.com/science/article/pii/S1756464623001354',
      youtube: 'https://youtu.be/l75UzVlBI4M?si=PzcoQv7qcoRHtmBv'
    },
    {
      authors: 'Le, Tram Anh Ngoc, Jae Wook Lee, Baskar Selvaraj and Kyungsu Kang',
      year: 2019,
      title: 'Measuring the Effects of Bacteria and Chemicals on the Intestinal Permeability of Caenorhabditis elegans',
      journal: 'Journal of Visualized Experiments',
      tags: ['C. elegans', 'Intestinal Permeability', 'Methodology', 'Bacteria'],
      url: 'https://www.jove.com/video/60419/measuring-effects-bacteria-chemicals-on-intestinal-permeability?status=a62425k'
    },
    {
      authors: 'Joo Yeon Kim, Le, Tram Anh Ngoc, So Young Lee, Dae-Geum Song, Sung-Chul Hong, Kwang Hyun Cha, Jae Wook Lee, Cheol-Ho Pan and Kyungsu Kang',
      year: 2019,
      title: '3,3\'-Diindolylmethane improves the Intestinal Permeability Dysfunction in Cultured Human Intestinal Cells and the Model Animal Caenorhabditis elegans',
      journal: 'Journal of Agriculture and Food Chemistry',
      tags: ['Diindolylmethane', 'Intestinal Permeability', 'Human Cells', 'C. elegans'],
      doi: '10.1021/acs.jafc.9b03039',
      url: 'https://pubs.acs.org/doi/abs/10.1021/acs.jafc.9b03039'
    },
    {
      authors: 'Seemi Tasnim Alam, Le, Tram Anh Ngoc, Jin-Soo Park, Hak Cheol Kwon, Kyungsu Kang',
      year: 2019,
      title: 'Antimicrobial Biophotonic Treatment of Ampicillin-Resistant Pseudomonas aeruginosa with Hypericin and Ampicillin Cotreatment Followed by Orange Light',
      journal: 'Pharmaceutics',
      tags: ['Antimicrobial', 'Biophotonic', 'Hypericin', 'Pseudomonas'],
      doi: '10.3390/pharmaceutics11120641',
      url: 'https://www.mdpi.com/1999-4923/11/12/641'
    },
    {
      authors: 'Le Ngoc Tram Anh, Dang Tri Trung, Nguyen Ngoc Thanh, Huynh Xuan Phong, Bui Hoang Dang Long, Ngo Thi Phuong Dung',
      year: 2016,
      title: 'Isolation and selection of Lactic Acid Bacteria applied for fermentation of papaya juice [Phân lập và tuyển chọn vi khuẩn acid lactic có khả năng ứng dụng trong lên men nước đu đủ]',
      journal: 'Journal of Dong Thap University',
      tags: ['Lactic Acid Bacteria', 'Fermentation', 'Papaya Juice', 'Vietnamese'],
      url: 'https://sj.ctu.edu.vn/ql/docgia/tacgia-44750/baibao-41282.html'
    }
  ];

  patents: Patent[] = [
    {
      authors: 'Seemi Tasnim Alam, Le, Tram Anh Ngoc, Jin-Soo Park, Hak Cheol Kwon, Kyungsu Kang',
      year: 2019,
      month: 'November',
      title: 'Composite for photodynamic reaction to reduce and kill gram positive and gram negative bacteria, and antimicrobial composition, sterilizing composition and sterilization method using the same',
      description: '그람 양성균 및 그람 음성균의 감소 및 사멸을 위한 광역학 반응용 복합조성물, 및 이를 이용한 항균 조성물, 살균 조성물 및 살균방법',
      managementNumber: 'K10360',
      referenceNumber: 'PN129202KR',
      tags: ['Photodynamic Reaction', 'Antimicrobial', 'Sterilization', 'Patent']
    }
  ];

  getJournalIcon(journal: string): string {
    if (journal.includes('Food')) return '🍎';
    if (journal.includes('Chemistry')) return '🧪';
    if (journal.includes('Radical')) return '⚛️';
    if (journal.includes('Agriculture')) return '🌾';
    if (journal.includes('Visualized')) return '�';
    if (journal.includes('Pharmaceutics')) return '💊';
    return '�📄';
  }

  getYearRange(): string {
    const years = this.publications.map(pub => pub.year);
    const minYear = Math.min(...years);
    const maxYear = Math.max(...years);
    return `${minYear}-${maxYear}`;
  }
}
