$(document).ready(function(){
	
	console.log("loaded");
	var weapons = [
		{
			"name": "scarlet",
			"damage": medium,
			"type": sword,
			"owner": Finn
		},
		{
			"name": "root",
			"damage": medium,
			"type": sword,
			"owner": Finn
		},
		{
			"name": "finnsw",
			"damage": heavy,
			"type": sword,
			"owner": Finn
		},
		{
			"name": "night",
			"damage": heavy,
			"type": sword,
			"owner": Finn
		},
		{
			"name": "jake",
			"damage": medium,
			"type": sword,
			"owner": none
		},
		{
			"name": "axbass",
			"damage": medium,
			"type": hybrid,
			"owner": Marceline
		},
		{
			"name": "electode",
			"damage": medium,
			"type": weapon,
			"owner": PrincessBubblegum
		}
		];
	
	$('.item-list a').on('mouseenter', function(e){
		var current_item = $(e.currentTarget).attr('class');
		console.log(current_item);
	});
	
});