var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	
	fabric.Image.fromURL('better.jpg',function(Img){
        block_image_object=Img;
        
        block_image_object.scaleToWidth(300);
        block_image_object.scaleToHeight(210);
        block_image_object.set({
            top:100,
            left:185
        });
        canvas.add(block_image_object);
    });
}

function playSound(){
	x.play();
}
