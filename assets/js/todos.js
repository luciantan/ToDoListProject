//check off specific Todos By clicking
$("ul").on("click","li",function(){
	/*if($(this).css("color")==="rgb(128, 128, 128)"){
		$(this).css({
			color:"black",
			textDecoration: "none"
		});
	}else{
		$(this).css({
			color:"gray",
			textDecoration:"line-through"
		});

	}*/
	$(this).toggleClass("completed");
});

//click on x to delete todo
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grab the todo text from input
		var todoText = $(this).val();
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span> "+todoText+"</li>");
		$(this).val("");
	}
});

$(".fa-pencil").click(function(){
	$("input[type='text']").fadeToggle();
});