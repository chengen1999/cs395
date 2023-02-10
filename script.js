"use strict";

function changeColor() {
	let color = document.body.style.color;
	if (color === 'crimson'){
		document.body.style.color = 'darkorange';
	}
    else if(color === 'darkorange'){
        document.body.style.color = 'gold';
    }
    else if(color === 'gold'){
        document.body.style.color = 'lime';
    }
    else if(color === 'lime'){
        document.body.style.color = 'cyan';
    }
    else if(color === 'cyan'){
        document.body.style.color = 'darkblue';
    }
    else if(color === 'darkblue'){
        document.body.style.color = 'darkorchid';
    }
    else if(color === 'darkorchid'){
        document.body.style.color = 'lavender';
    }
    else if(color === 'lavender'){
        document.body.style.color = 'silver';
    }
   
    else{
       document.body.style.color = 'crimson';
   }
    
}




