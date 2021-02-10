import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ContaService } from '../services/conta.service';
import { Conta } from '../models/conta';

@Component({
  selector: 'conta-add-edit',
  templateUrl: './conta-add-edit.component.html',
  styleUrls: ['./conta-add-edit.component.scss']
})
export class ContaAddEditComponent implements OnInit {
  form: FormGroup;
  isLoadingResults = false;

  constructor(private contaService: ContaService, private formBuilder: FormBuilder, private avRoute: ActivatedRoute, private router: Router) { }
  
  ngOnInit() {
    this.form = this.formBuilder.group({
      'Nome': [null, Validators.required],
      'ValorOriginal': [null, Validators.required],
      'DataVencimento': [null, Validators.required],
      'DataPagamento': [null, Validators.required]
    });
  }
  

  save(form: NgForm) {
    this.isLoadingResults = true;
    this.contaService.saveConta(form)
      .subscribe(res => {
        this.isLoadingResults = false;
        this.router.navigate(['/']);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

  cancel() {
    this.router.navigate(['/']);
  }  
}
