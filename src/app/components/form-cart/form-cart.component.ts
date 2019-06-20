import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-cart',
  templateUrl: './form-cart.component.html',
  styleUrls: ['./form-cart.component.scss']
})
export class FormCartComponent implements OnInit {

  form:FormGroup;
  
  
  constructor(private fb:FormBuilder) { 
    this.form = this.fb.group({
      "firstname": ["", Validators.required],
      "email": ["", Validators.required],
      "adress": ["", Validators.required],
      "city": ["", Validators.required]
    })
  }

  ngOnInit() {
  }

  


}
