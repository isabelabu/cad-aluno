import { Component } from '@angular/core';
import { Student } from '../student';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  students: Student[] = [];

  formGroupStudent : FormGroup;

  constructor(private formBuilder : FormBuilder, private service: StudentService){
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
