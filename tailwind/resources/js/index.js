    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', './data/products.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        
        if(this.readyState == 4 && this.status == 200){
            
            let datos = JSON.parse(this.responseText);

            let productos = document.querySelector('#products');
            productos.innerHTML = '';

            for(let item of datos) {

                productos.innerHTML += 
                `      
        
                    <article class="rounded overflow-hidden shadow-lg">
                        
                        <img class="w-full" src="${item.imagen}?auto=compress&cs=tinysrgb&dpr=1&w=500 bg-white" alt="Falta la foto" >

                        <div class=" px-1.5 py-4">
                            <h1 class="font-semibold text-lg inline-block ml-5">
                                ${item.referencia}
                            </h1>
                            <p class="text-gray-500 text-sm ml-5">
                                ${item.detalles}
                            </p>
                        </div>

                        <div class="px-6 py-4 flex flex-row items-center">
                            <p class="py-1 text-base font-semibold text-black mr-1 flex flex-row items-center">
                             ${item.precio}
                            </p>
                        </div>
                    </article>
                `
                
            }
        }
    }