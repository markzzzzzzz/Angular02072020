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
  id: number;
 

  constructor(private route: ActivatedRoute, private projectService: ProjectService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id']
    })
    this.project = this.projectService.getProject(this.id) 
    this.initForm()
  }
  
  initForm() {
    this.projectEditForm = new FormGroup({
      name: new FormControl(this.project.name),
      description: new FormControl(this.project.description),
      deadline: new FormControl(this.project.deadline),
      picture: new FormControl(this.project.picture),
    })
  }
  onSubmit(form: FormGroup){
    this.projectService.updateProject(form.value, this.id)
  }

}


