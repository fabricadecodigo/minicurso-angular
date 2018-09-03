import { Observable } from 'rxjs';
import { ProdutoService } from './../shared/produto.service';
import { Produto } from './../shared/produto';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {
  produto: Produto
  title: string = '';

  constructor(private route: ActivatedRoute, private router: Router, private produtoService: ProdutoService) { }

  ngOnInit() {
    this.title = 'Novo produto';
    this.produto = new Produto();

    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.produtoService.getById(parseInt(id)).subscribe(resp => {
        this.produto = resp;
        this.title = `Alterando o produto: ${this.produto.nome}`;
      });
    }
  }

  onSubmit() {
    let observable: Observable<Produto>;

    if (this.produto.id) {
      observable = this.produtoService.update(this.produto);
    } else {
      observable = this.produtoService.insert(this.produto);
    }

    observable.subscribe(() => {
      this.router.navigate(['/produtos']);
    });
  }
}
