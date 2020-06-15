    var lista = [],
        listaOrdenada = [];
        document.getElementById("elementoOriginal").innerHTML=lista;
    function Agregar() {
        if(document.getElementById("valor").value!='')
        
        {
            valor=document.getElementById("valor").value;
            if(document.getElementById('AgregarInicio').checked)
            {
                lista.unshift(valor);
                document.getElementById("elementoOriginal").innerHTML=lista;
            }
            if(document.getElementById('AgregarFinal').checked)
            {
                lista.push(valor);
                document.getElementById("elementoOriginal").innerHTML=lista;
            }
            
            }
        else
        alert("No hay valor para agregar!!")
        listaOrdenada = lista
    }

    function Eliminar() {
        lista.shift();
        document.getElementById("elementoOriginal").innerHTML=lista;
    }

    function Ordenar() {
        var n,
            aux,
            
        n = listaOrdenada.length;
        
        for (let k = 1; k < n; k++) {
            for (let i = 0; i < (n - 1); i++) {
                if (listaOrdenada[i] == 0) {
                    aux = listaOrdenada[i];
                    listaOrdenada[i] = listaOrdenada[i + 1];
                    listaOrdenada[i + 1] = aux;
                }
                    
            
        }
    }
    document.getElementById("Ordenado").innerHTML=listaOrdenada;
}

function Limpiar() {
    listaOrdenada = []
    lista = []
    document.getElementById("Ordenado").innerHTML=listaOrdenada;
    document.getElementById("elementoOriginal").innerHTML=lista;  
}
console.log(listaOrdenada)

    
    


