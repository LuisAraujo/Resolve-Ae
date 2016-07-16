$(document).ready(function() {

    $("#btHotCode").click(function(){
        window.location.assign("#");
    });

    $("#btPascal").click(function(){
        window.location.assign("Pascal");
    });

    $("#btC").click(function(){
        window.location.assign("C");
    });

    $("#btPython").click(function(){
        window.location.assign("Python");
    });

    $("#btStackCode").click(function(){
        window.location.assign("StackCode");
    });


    $("#btPesquisa").click(function(){
        buscaQuestoes($("#pesquisapost").val() );
    });



    /*SOCIAL*/
    $("#btFace").click(function(){
        window.open("http://www.facebook.com");
    });

    $("#btTwitter").click(function(){
        window.open("http://twitter.com/");
    });

    $("#btGithub").click(function(){
        window.open("http://github.com");
    });

});



function buscaQuestoes(strBusca){

  $("#descricao_sessao").text("Resultados para a busca: " + strBusca );
  $("#listpost").html("<div id='loading'></div>");


}