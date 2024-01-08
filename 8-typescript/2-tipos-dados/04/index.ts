const etiquetas = (
    item: { produto: string, lote: number, ano: number, qtd: number }
): string[] => {
    let etiquetas: string[] = [];

    for (let i = 1; i <= item.qtd; i++) {
        etiquetas.push(
            `${item.lote}-${item.ano}-${String(i).padStart(3, '0')}`
        )
    }

    return etiquetas;
}

console.log(etiquetas({
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 5
}));
