import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const produtos = [
      { id: 1, nome: 'Hambúrguer', descricao: 'Pão, bife de hambúrger 90g, salada e batata', preco: 8.50 },
      { id: 2, nome: 'X-Búrguer', descricao: 'Pão, bife de hambúrger 90g, 1 fatia de queijo, salada e batata', preco: 10.50 },
      { id: 3, nome: 'X-Bacon', descricao: 'Pão, bife de hambúrger 90g, 1 fatia de queijo, 2 fatia de bacon, salada e batata', preco: 12.50 },
      { id: 4, nome: 'X-Tudo', descricao: 'Pão, 2 bifes de hambúrger 90g, 2 fatias de queijo, 4 fatias de bacon, salada e batata', preco: 14.50 }
    ];
    return {produtos};
  }
}
