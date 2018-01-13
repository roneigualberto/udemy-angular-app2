import { ItemCarrinho } from "./shared/item-carrinho.model";


class CarrinhoService {
    public itens: ItemCarrinho[] = [];


    public exibirItens(): ItemCarrinho[] {
        console.log('itens' , this.itens);
        return this.itens;
    }
}



export default CarrinhoService;