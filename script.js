

/*Funções para trocar conteudo da tela*/ 

function TrocaDeConteudo(Botão){

    var ImgDragão = document.getElementById("ImgDragão");
    var titulo = document.getElementById("Titulo");
    var descricao = document.getElementById("Descrição");



    switch(Botão){

        case "B1":      
            ImgDragão.src = "Imagens/Balerion.png";
            ImgDragão.style.objectPosition = "75%";/* é usada para alinhar o conteúdo de um elemento <img> (ou qualquer outro elemento substituível) dentro de seu contêiner*/
            document.getElementById('AlterarMargem').style.marginTop = "340px"; /*procura pelo nome do id e altera no css o 'margintop'*/ 
            titulo.innerHTML = "Balerion the Black Dread";
            descricao.innerHTML = "O maior e mais veterano dos dragões Targaryen, Balerion, foi montado por Aegon the Conqueror e mais tarde, ainda que durante um espaço de tempo muito curto, pelo Rei Viserys I. O dragão negro e vermelho morreu antes do início de House of the Dragon, mas a sua gigantesca caveira pode ser apreciada em exposição no Red Keep.";


            break;

        case "B2":
                ImgDragão.src = "Imagens/Vhagar.png";
                ImgDragão.style.objectPosition = "35%";/* é usada para alinhar o conteúdo de um elemento <img> (ou qualquer outro elemento substituível) dentro de seu contêiner*/
                document.getElementById('AlterarMargem').style.marginTop = "90px"; /*procura pelo nome do id e altera no css o 'margintop'*/ 
                titulo.innerHTML = "Vhagar";
                descricao.innerHTML = "O segundo maior dragão dos Targaryens é Vhagar, uma fêmea ancestral e a última que voou durante a conquista de Aegon, quando serviu a Rainha Visenya Targaryen. Juntos, destruíram toda a armada Arryn nas águas de Gulltown. Vhagar foi batizada em homenagem a um Deus de Old Valyria, e será protagonista de um capítulo posterior de House of the Dragon.";
            break;

        case "B3":
            ImgDragão.src = "Imagens/Syrax.png";
            ImgDragão.style.objectPosition = "70%";/* é usada para alinhar o conteúdo de um elemento <img> (ou qualquer outro elemento substituível) dentro de seu contêiner*/
            document.getElementById('AlterarMargem').style.marginTop = "90px"; /*procura pelo nome do id e altera no css o 'margintop'*/ 
            titulo.innerHTML = "Syrax";
            descricao.innerHTML = "Syrax é a enorme e formidável fêmea da Princesa Rhaenyra (interpretada por Milly Alcock como jovem e Emma D’Arcy como adulta em House of the Dragon)";

        
            break;

        case "B4":
            ImgDragão.src = "Imagens/Caraxes.jpg";
            ImgDragão.style.objectPosition = "55%";/* é usada para alinhar o conteúdo de um elemento <img> (ou qualquer outro elemento substituível) dentro de seu contêiner*/
            document.getElementById('AlterarMargem').style.marginTop = "90px"; /*procura pelo nome do id e altera no css o 'margintop'*/ 
            titulo.innerHTML = "Caraxes";
            descricao.innerHTML = "Conhecido como Blood Wyrm, este enorme dragão vermelho é o companheiro do Príncipe Daemon Targaryen (Matt Smith) e tal como ele, é poderoso e admiravelmente feroz.";

        
            break;

        case "B5":
            ImgDragão.src = "Imagens/Sunfyre.jpg";
            ImgDragão.style.objectPosition = "60%";/* é usada para alinhar o conteúdo de um elemento <img> (ou qualquer outro elemento substituível) dentro de seu contêiner*/
            document.getElementById('AlterarMargem').style.marginTop = "400px"; /*procura pelo nome do id e altera no css o 'margintop'*/ 
            titulo.innerHTML = "Sunfyre";
            descricao.innerHTML = "Com as suas chamas e escamas douradas, não é de admirar que este enorme e formidável dragão seja conhecido como “Sunfyre the Golden.” É ele quem acompanha Aegon II Targaryen (que em House of the Dragon será interpretado por Tom Glynn-Carney como um adulto e Ty Tennant enquanto jovem).";

        
            break;

        case "B6":
            ImgDragão.src = "Imagens/Vermithor.jpg";
            ImgDragão.style.objectPosition = "65%"; /* é usada para alinhar o conteúdo de um elemento <img> (ou qualquer outro elemento substituível) dentro de seu contêiner*/
            document.getElementById('AlterarMargem').style.marginTop = "90px"; /*procura pelo nome do id e altera no css o 'margintop'*/ 
            titulo.innerHTML = "Vermithor";
            descricao.innerHTML = "O terceiro maior dragão, é descrito como 'velho e grisalho' em 'The World of Ice & Fire'. Em tempos, foi ele o dragão de Jaehaerys I Targaryen, também conhecido como Old King.";

        
            break;


        default:
            ImgDragão.src = "Imagens/Balerion.png";
            ImgDragão.style.objectPosition = "75%";/* é usada para alinhar o conteúdo de um elemento <img> (ou qualquer outro elemento substituível) dentro de seu contêiner*/
            document.getElementById('AlterarMargem').style.marginTop = "340px"; /*procura pelo nome do id e altera no css o 'margintop'*/ 
            titulo.innerHTML = "Balerion the Black Dread";
            descricao.innerHTML = "O maior e mais veterano dos dragões Targaryen, Balerion, foi montado por Aegon the Conqueror e mais tarde, ainda que durante um espaço de tempo muito curto, pelo Rei Viserys I. O dragão negro e vermelho morreu antes do início de House of the Dragon, mas a sua gigantesca caveira pode ser apreciada em exposição no Red Keep.";
           
            break;
    }

}


/*Faz o botão ficar ativo até clicar em outro*/


function ModoAtivo(button) {

   
    const buttons = document.querySelectorAll('.Botão');  /*procura todos os elementos .Botão no style.CSS* e armazena em "const buttons"*/

    buttons.forEach(btn => btn.classList.remove('Ativado')); /*buttons.forEach(btn => btn.classList.remove('Ativado')); é usada para percorrer todos os elementos na NodeList buttons (que foi obtida usando document.querySelectorAll('.Botão')) e remover a classe 'Ativado' de cada um deles.*/

    // Adiciona a classe 'active' ao botão clicado
    return button.classList.add('Ativado'); /*.classList.add('Ativado') é usada para adicionar a classe 'Ativado' a um elemento específico. o botão clicado*/
}

/*Faz o botão ficar ativo até clicar em outro*/
