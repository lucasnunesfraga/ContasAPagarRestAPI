import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContaService } from '../services/conta.service';
import { Conta } from '../models/conta';

@Component({
  selector: 'contas',
  templateUrl: './contas.component.html',
  styleUrls: ['./contas.component.scss']
})
export class ContasComponent implements OnInit {
  contas$: Observable<Conta[]>;

  constructor(private contaService: ContaService) {
  }

  ngOnInit() {
    this.loadContas();
  }

  loadContas() {
    this.contas$ = this.contaService.getContas();
  }

  delete(postId) {
    const ans = confirm('Deletar este id: ' + postId);
    if (ans) {
      this.contaService.deleteConta(postId).subscribe((data) => {
        this.loadContas();
      });
    }
  }
}