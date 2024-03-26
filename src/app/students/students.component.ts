import { Component } from '@angular/core';
import { student } from '../student';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  students: student[] = [];

  formGroupStudent : FormGroup;

  constructor(private formBuilder : FormBuilder){
    this.formGroupStudent = formBuilder.group({
      id : [''],
      name : [''],
      course : ['']
    });
  }

  save(){
    this.students.push(this.formGroupStudent.value);
  }
}
