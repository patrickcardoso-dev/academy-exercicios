type TBase = {
    id: number;
}

export abstract class Base<T extends TBase> {
    protected tabela: T[];

    listar(): T[] {
        return this.tabela;
    }

    detalhar(id: number): T | undefined {
        return this.tabela.find(elemento => elemento.id === id);
    }

    cadastrar(objeto: T): void {
        this.tabela.push(objeto);
    }

    editar(id: number, objeto: T): void {
        const obj = this.tabela.find(elemento => elemento.id === id);
        const indexObj = this.tabela.findIndex(elemento => elemento.id === id);

        if (obj) {
            const novoObj = Object.assign(obj, objeto)
            this.tabela.splice(indexObj, 1, novoObj)
        }
    }

    excluir(id: number): void {
        const indexObj = this.tabela.findIndex(elemento => elemento.id === id);

        this.tabela.splice(indexObj, 1)
    }
}