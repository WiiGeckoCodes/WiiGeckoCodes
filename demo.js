(function( $ ) {
	"use strict";

	$(function() {
		$( window ).konami({
			cheat: function() {
				$(this).flashembed("http://wiigeckocodes.github.io/easteregg/swf/hey.swf");
			} // end cheat
		});
		
		$('#input1').konami( { eventName: 'konami.with.message', message: 'Code on Input 1' } );
		$('#input2').konami( { eventName: 'konami.with.message', message: 'Code on Input 2' } );
		$('.odd').konami( { eventName: 'konami.with.message', message: 'Code on an odd-numbered input' } );
	
		$(window).on('konami.with.message', function(event, opts) {
			alert('Cheat code with message: ' + opts.message);
		});
	});
}(jQuery));
