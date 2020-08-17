import { Component, OnInit } from '@angular/core';
import { ProjectService } from "../project.service";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
      this.projects = this.projectService.getProjects();
      console.log(this.projects)
  }

  onAdditional(project){
    project.commentButtonActive = !project.commentButtonActive
    console.log(project)
  }

  commentButtonActive(){
    let allProjects = this.projectService.getProjects();
    this.projects = allProjects.map(project => ({...project, commentButtonActive: false}))
  }

  onActive(project) {
    project.active = !project.active;
  }

}
