import { ProdutoService } from './../shared/produto.service';
import { Produto } from './../shared/produto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {
  title: string = 'Produtos';
  produtos: Produto[];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.produtoService.getAll().subscribe(resp => {
      this.produtos = resp;
    })
  }
}
