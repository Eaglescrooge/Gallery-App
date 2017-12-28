define(["./sandbox"], function(sb){

	var id, info, setImage;

	id = "board"

	function init() {
        sb.listen({'show-board' : show}, id)
	}

    function show(href) {
        info = document.getElementById('placeholder')

        setImage = info.childNodes[0];

        setImage.setAttribute('src', href);
    }

        return {
        id: id,
        init: init,
        show: show
        }
})
