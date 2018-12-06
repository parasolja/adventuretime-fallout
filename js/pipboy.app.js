$(document).ready(function(){
	
	console.log("loaded");
	var weapons = [
		{
			"name": "scarlet",
			"damage": "medium",
			"type": "sword",
			"owner": "Finn",
			"image": "scarlet.png"
		},
		{
			"name": "root",
			"damage": "medium",
			"type": "sword",
			"owner": "Finn",
			"image": "root.png"

		},
		{
			"name": "finnsw",
			"damage": "heavy",
			"type": "sword",
			"owner": "Finn",
			"image": "finnsword.png"

		},
		{
			"name": "demon",
			"damage": "heavy",
			"type": "sword",
			"owner": "Finn",
			"image": "demon.png"

		},
		{
			"name": "jake",
			"damage": "medium",
			"type": "sword",
			"owner": "none",
			"image": "jake.png"
		},
		{
			"name": "axbass",
			"damage": "medium",
			"type": "hybrid",
			"owner": "Marceline",
			"image": "axbass.png"
		},
		{
			"name": "fiona",
			"damage": "medium",
			"type": "sword",
			"owner": "Fiona",
			"image": "fiona.png"
			
		}
		];
	
	$('.item-list a').on('mouseenter', function(e){
		var current_item = $(e.currentTarget).attr('class');
		console.log(current_item);
		
		for(item in weapons){
			if(weapons[item].name == current_item){
				console.log(weapons[item])
				
				var container = $('.item-stats');
				container.find('.damage').html(weapons[item].damage);
				container.find('.type').html(weapons[item].type);
				container.find('.owner').html(weapons[item].owner);
				
				var anotherContainer = $('.center-image-inv');
				anotherContainer.children("img").attr("src", weapons[item].image);
			}		
		}
	});
	
});