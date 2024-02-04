import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/Produto.model';
import { ProdutoService } from 'src/app/produto.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent {
  public get router(): Router {
    return this._router;
  }
  public set router(value: Router) {
    this._router = value;
  }
  public get produtoService(): ProdutoService {
    return this._produtoService;
  }
  public set produtoService(value: ProdutoService) {
    this._produtoService = value;
  }

  public produto: Produto = new Produto(0, "", "", "", 0)

  constructor(private _produtoService: ProdutoService, private _router: Router) { }

  cadastrar(): void{
    this._produtoService.CadastrarProduto(this.produto).subscribe(
      _produto => {
        this.produto = new Produto(0,"","","",0)
        alert("Cadastro efetuado com sucesso")
      },
      err => 
      alert("Erro ao cadastrar")
      
    );
    this.router.navigate(["restrito/lista"])
  }

}
