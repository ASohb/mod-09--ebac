$(document).ready(function(){ //JQuery funciona a partir do cifrão
    //alert("Ola jQuery")
   /*console.log(document.querySelector('header button'));
    console.log($('header button'));

    Pode ser feito assim a função do click ou igual feito abaixo de forma mais curta.
    document.querySelector('header button').addEventListener('click',function(){

    })*/
    $('header button').click(function(){
       // alert("Expandir formulário")
       $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        //console.log("submit")
        e.preventDefault();
        const enderecoDaNovaImagem= $('#endereco-imagem-nova').val();

        //console.log(enderecoDaNovaImagem)
        const novoItem = $('<li style="display:none"></li>');
        $(`<img src='${enderecoDaNovaImagem}' />`).appendTo(novoItem); //Leva a nova imagem para o novoItem
        $(`
            <div class="overlay-imagem-link">
              <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                Ver imagem em tamanho real 
                </a>
             </div>
        `).appendTo(novoItem);//Leva a nova imagem para o novoItem
        $(novoItem).appendTo('ul');
        $(novoItem).appendTo('ul').delay(100).fadeIn(1000);//fadeIn =surgir , para funcionar tive que adicionar o delay para o navegador ter tempo pra processar completamente a adição do elemento ao DOM.
        $('#endereco-imagem-nova').val('')
    })
})
