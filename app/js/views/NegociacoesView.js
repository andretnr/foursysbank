class NegociacoesView {
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }
    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
    template(model) {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
    
                <tbody>
                ${model.retornaArray().map(negociacao => `<tr>
                        <td>
                        ${negociacao.data.getUTCDate()}/
                        ${negociacao.data.getUTCMonth() + 1}/
                        ${negociacao.data.getUTCFullYear()}</td>
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor}</td>
                        <td>${negociacao.volume}</td>
                    </tr>                        
                    `).join('')} 

                </tbody>
    
                <tfoot>
                </tfoot>
            </table>               
            `;
    }
}
