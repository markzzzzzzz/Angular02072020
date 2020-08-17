import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  Projects = [
    {name:'The New Mutants', description:'Sci-Fi', deadline: '28.08', picture: 'https://m.media-amazon.com/images/M/MV5BNjA4M2E4MWUtZTc2ZC00YmMyLWFkMzQtNTVlNmZkODFjZmExXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX140_CR0,0,140,209_AL_.jpg', active: true},
    {name:'Fatima', description:'Drama', deadline: '29.08', picture: 'https://m.media-amazon.com/images/M/MV5BZTY4OWExZDYtN2ZkNy00ODA5LWE1MTktNGM3NzhmYTAwOTYyXkEyXkFqcGdeQXVyMTA2MDQ3MTQ3._V1_UY209_CR0,0,140,209_AL_.jpg', active: true},
    {name:'Tenet', description:'Sci-Fi', deadline: '4.09', picture: 'https://m.media-amazon.com/images/M/MV5BOGJmZjcxNTAtYjViZS00YzJmLTlkMzgtZmVkYTQ5YjUwMjIyXkEyXkFqcGdeQXVyNjMwMzc3MjE@._V1_UX182_CR0,0,182,268_AL_.jpg', active: true},
    {name:'Wonder Woman', description:'Fantasy', deadline: '02.10', picture: 'https://m.media-amazon.com/images/M/MV5BZGVhZDBlZjgtMGNmNi00OTIyLWI1NzQtMzE5ZWQ0NzFmMjg0XkEyXkFqcGdeQXVyMTA2OTQ3MTUy._V1_UY209_CR0,0,140,209_AL_.jpg', active: true},
    {name:'Connected', description:'Comedy', deadline: '23.10', picture: 'https://m.media-amazon.com/images/M/MV5BNjE0ZGQyZDAtMmZmOS00MGI3LTgyZWEtM2VhZTQxZDM2Mjk3XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_UX140_CR0,0,140,209_AL_.jpg', active: true},
  ]

  constructor() { }

  getProjects() {
    return this.Projects.slice();
  }

  getProject(i:number) {
    return this.Projects[i];  
  }

}

