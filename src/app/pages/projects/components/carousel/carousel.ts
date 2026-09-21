
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

type ProjectSlide = {
  title: string;
  period: string;
  role: string;
  summary: string;
  stack: string[];
};

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
  standalone: true,
  imports: [CommonModule, CarouselModule],

})
export class Carousel {
  responsiveOptions = [
    {
      breakpoint: '900px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  slides: ProjectSlide[] = [
    {
      title: 'Betsson Group',
      period: 'Aug 2025 — Present',
      role: 'QA Automation Engineer',
      summary:
        'Designed and executed test scenarios for frontend flows, reported defects in Jira, and supported Agile delivery with Playwright-based validation in a high-traffic product environment.',
      stack: ['Playwright', 'Jira', 'Agile Scrum']
    },
    {
      title: 'LenioLabs',
      period: 'Apr 2023 — Aug 2025',
      role: 'QA Automation Engineer',
      summary:
        'Worked across frontend and backend automation projects with Playwright and Cypress, improving product reliability and release confidence through structured, repeatable validation.',
      stack: ['Playwright', 'Cypress', 'API Testing']
    },
    {
      title: 'FabFitFun',
      period: 'Nov 2021 — Apr 2023',
      role: 'QA Automation Engineer',
      summary:
        'Led QA strategy while automating web and API checks with WebDriverIO and Axios, helping the team keep quality aligned with delivery pace.',
      stack: ['WebDriverIO', 'Axios', 'QA Strategy']
    },
    {
      title: '123Seguro',
      period: 'Jul 2019 — Jan 2020',
      role: 'Chapter Lead QA Automation Engineer',
      summary:
        'Owned technical and quality-process decisions for the automation area, coordinated execution, and supported the team with WebDriverIO and Cypress-based regression coverage.',
      stack: ['WebDriverIO', 'Cypress', 'Leadership']
    },
    {
      title: 'Avantrip / BibamGroup',
      period: 'Nov 2017 — Jul 2019',
      role: 'QA Automation Engineer',
      summary:
        'Automated regression checks and environment validation with JavaScript on WebDriverIO, while building Jenkins sanity jobs and SonarQube quality checks to strengthen release readiness.',
      stack: ['WebDriverIO', 'Jenkins', 'SonarQube']
    }
  ];
}