define(["./sandbox"], function(sb){

	var thumbs, attr, id, href;

	id = 'pictures';

	function init(){

		thumbs = document.getElementById('thumbs');
		attr = thumbs.getElementsByTagName('a');

		for (var i = 0; i < attr.length; i++) {
			$on(attr[i], 'click', reverse);

		}
	}

	function reverse(e){
		e.preventDefault();

        href = this.getAttribute('href');

		sb.notify({type: 'show-board', data:href})

	}
		
		return {
		id: id,
		init: init,
		reverse: reverse
	}

})

	
