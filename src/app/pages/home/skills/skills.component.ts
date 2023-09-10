import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss', '../home.component.scss'],
})
export class SkillsComponent implements OnInit {

  skills: { name: string; urlPath: string }[] = [
    {
      name: 'JavaScript',
      urlPath: './assets/images/jsicon.png',
    },
    {
      name: 'Angular',
      urlPath: './assets/images/angular.png',
    },
    {
      name: 'HTML/CSS',
      urlPath: './assets/images/Group 205.png',
    },
    {
      name: 'SCRUM',
      urlPath: './assets/images/Group 226.png',
    },
    {
      name: 'Git',
      urlPath: './assets/images/Git-Icon-1788C 2.png',
    },
    {
      name: 'Design Thinking',
      urlPath: './assets/images/Group 20.png',
    },
    {
      name: 'Rest API',
      urlPath: './assets/images/icons8-rest-api-80 2.png',
    },
    {
      name: 'Test automation',
      urlPath: './assets/images/icons8-test-lab-96 2.png',
    },
    {
      name: 'Databases',
      urlPath: './assets/images/icons8-database-52 2.png',
    },
    {
      name: 'C#',
      urlPath: './assets/images/Csharp_Logo.png',
    },
    {
      name: 'Dotnet',
      urlPath: './assets/images/dotnet6-logo.png',
    },
    {
      name: 'Azure Pipelines',
      urlPath: './assets/images/azurePipelines.png',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
