import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from '@app/core/models/service.model';
import { ServicesService } from './services.service';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  services$: Observable<Service[]>;
  servicesForm: any;
  param = { value: 'world' };

  constructor(private servicesService: ServicesService, private fb: FormBuilder) { }

  ngOnInit() {
    this.services$ = this.servicesService.getAllServices();
    this.servicesForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      price: new FormControl()
    });

    this.servicesForm = this.fb.group({
      id: [''],
      name: [''],
      price: ['']
    });
  }

  onSubmit() {
    console.log(this.servicesForm.value);
  }
}
