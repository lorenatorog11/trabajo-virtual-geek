'use strict'

const contador = {
    valorMax: 10,
    valorMin: 0,
    valorInicial: 7,
    valorActual: 7,    
    aumentar: function() {
        if(this.valorActual<this.valorMax){            
            this.valorActual = this.valorActual + 1;
            console.log(this.valorActual);
            
        }
    },
    disminuir: function() {
        if(this.valorActual>this.valorMin){            
            this.valorActual = this.valorActual - 1;
            console.log(this.valorActual);
            
        }
    },
    reestablecer: function() {           
        this.valorActual = this.valorInicial;
        console.log(this.valorActual);
    },

}
console.log(contador);
document.querySelector('.aumentar').addEventListener('click', ()=>contador.aumentar());
document.querySelector('.disminuir').addEventListener('click', ()=>contador.disminuir());
document.querySelector('.reestablecer').addEventListener('click', ()=>contador.reestablecer());
