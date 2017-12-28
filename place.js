var sb = require("./sandbox.js");

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

        
        module.exports.id = id;
        module.exports.init = init;
        module.exports.show = show;
        

