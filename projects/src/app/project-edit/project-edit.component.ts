import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { ProjectService } from '../project.service';


@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {
  projectEditForm: FormGroup
  project;
  id;

  constructor(private route: ActivatedRoute, private projectService: ProjectService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
    this.id=params["id"]})
    this.project=this.projectService.getProject(this.id)
    console.log(this.project)
  }

  onSubmit(){}

  initForm() {
    this.projectEditForm = new FormGroup({
      name: new FormControl(this.id.name),
      description: new FormControl(this.id.description),
      deadline: new FormControl(this.id.deadline),
  })

}

}
