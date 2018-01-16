import { ItemCarrinho } from "./shared/item-carrinho.model";
import { Oferta } from "./shared/oferta.model";

export class CarrinhoService {
    public itens: ItemCarrinho[] = [];


    public exibirItens(): ItemCarrinho[] {
        console.log('itens' , this.itens);
        return this.itens;
    }

    public incluirItem(oferta: Oferta): void {

        let itemCarrinho: ItemCarrinho = new ItemCarrinho(
            oferta.id,
            oferta.imagens[0],
            oferta.titulo,
            oferta.descricao_oferta,
            oferta.valor,
            1
        );
       let itemCarrinhoEncontrado = this.buscarPorId(itemCarrinho.id);
       if (itemCarrinhoEncontrado) {
            itemCarrinhoEncontrado.quantidade++;
       } else {
        this.itens.push(itemCarrinho);
       }
       
       
    }

    public buscarPorId(id: number): ItemCarrinho {
        return  this.itens.find((item: ItemCarrinho) =>  item.id === id);
    }

    public totalCarrinhoCompras(): number {
        let total: number = 0;

        this.itens.map((item) => {
            total = total + (item.valor*item.quantidade);
        });

        return total;
    }

    public adicionarQuantidade(itemCarrinho: ItemCarrinho): void {
        console.log('item', itemCarrinho);

        let itemCarrinhoEncontrado = this.buscarPorId(itemCarrinho.id);

        if (itemCarrinhoEncontrado) {
            itemCarrinhoEncontrado.quantidade++;
        }
    }

    public diminuirQuantidade(itemCarrinho: ItemCarrinho): void {
        console.log('item', itemCarrinho);

        let itemCarrinhoEncontrado = this.buscarPorId(itemCarrinho.id);

        if (itemCarrinhoEncontrado) {
            itemCarrinhoEncontrado.quantidade--;

            if (itemCarrinhoEncontrado.quantidade === 0) {
                this.itens.splice(this.itens.indexOf(itemCarrinhoEncontrado),1);
            }
        }
    }
}


