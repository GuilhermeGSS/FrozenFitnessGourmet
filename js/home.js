/*

	JAVASCRIPT HOME

*/

$(document).ready(function(){
	alinharMenuLateral();
});

function alinharMenuLateral(){

	var altura_conteudo;
	
	altura_conteudo = $(".conteudo").css("height");
	altura_conteudo = altura_conteudo.substr(0,altura_conteudo.lastIndexOf("p"));

	$(".box_menu_lateral").css("height",altura_conteudo);
}