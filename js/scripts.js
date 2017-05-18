
//USER LOGIC BELOW
$(document).ready(function(){
	var taggedObject = (function(){
		var $imgs = $("figure img");
		var buttons = $('#tags');
		var tagged = {};
	});

	$img.each(function() {
		var img = this;
		var tags = $(this).data('tags');

		if(tags) {
			tags.split(',').forEach(function(tagName) {
				if (tagged[tagName] == null) {
					tagged[tagName] = [];
				}
				// tagged = {
				// 	paper-girls: [Paper-Girls-bang.jpg,]
				// 	the-photographer: []
				// 	anyas-ghost: []
				// 	dressing: []
				// 	wrinkles: []
				// 	zita: []
				// 	borb: []
				// 	march: []
				// 	sculptor: []
				// 	pleasant: []
				//
				// }
				tagged[tagName].push(img);

			});
		}
	});
(function(){
	$('<button/>,' {
		text: 'Show All',
		class: 'active',
		click: function(){
			$(this)
				.addClass('active')
				.siblings()
				.removeClass('active');
			$img.show();
		}
	}).appendTo($buttons);
	$each(tagged, function(tagName){
		$('<button/>'), {
			text: tagName + '(' + tagged[tagName].length + ')',
			click: function(){
				$(this)
					.addClass('active')
					.siblings()
					.removeClass('active');
				$imgs
					.hide()
					.filter(tagged[tagName])
					.show();
				}
			}).appendTo($buttons);
	});
}());






















// On click of cover image, get id

// $(".item").click(function(e) {
//   var clickedId = e.target.id;
//   console.log(clickedId);
//   var targetClass = "." + clickedId;
//   console.log(targetClass);
//   $(".square").hide();
//   $(targetClass).show();
// });
//
// $(".square").click(function(x) {
//   // var displayTags = [];
//   var clickedClasses = x.target.className;
//   var displayTags = clickedClasses.split(" ")
//   console.log(displayTags);
//
//   //Output tags of clicked image to text.
//   for (i = 1; i < displayTags.length; i++) {
//     return displayTags[i];
//   }
//
// 	});
// });
