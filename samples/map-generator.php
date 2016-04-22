<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Towns-shared object price sample</title>



<script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
<script src="https://code.jquery.com/ui/1.11.3/jquery-ui.min.js"></script>
<script>
    var module={};
    var global=window;
    global.Towns = {};
</script>
<?php
$files=array_merge(
    glob('../js/*.js'),
    glob('../js/*/*.js')
);
foreach($files as $file):

?>
<script src="<?=$file?>"></script>
<?php endforeach; ?>




<script>
    $(function(){

        var on_row = 8;
        var on_row_ = 0;

        while(on_row>=1) {

            var horizont=Math.pow(2,10+9);

            var map_size_px = 1.3,
                map_radius = 200 / on_row,
                map_center = {
                    x: (Math.random()-0.5)*horizont,
                    y: (Math.random()-0.5)*horizont
                };


            var jQueryCanvas = $('<canvas></canvas>');


            jQueryCanvas
                    .attr('width', map_radius * 2 * map_size_px)
                    .attr('height', map_radius * 2 * map_size_px)
                    .addClass('mapCircle')
                    //.css('position','fixed')
                    //.css('top' ,'calc(50% - '+(map_radius*map_size_px)+'px )')
                    //.css('left','calc(50% - '+(map_radius*map_size_px)+'px )')
            ;


            var ctx = jQueryCanvas[0].getContext('2d');


            var objects = [];
            T.World.mapGenerator.completeObjects(objects, map_center, map_radius, false);

            objects.forEach(function(object){


                if(object.type=='terrain'){


                    var x=object.x+map_radius-map_center.x;
                    var y=object.y+map_radius-map_center.y;

                    ctx.beginPath();
                    ctx.rect(Math.floor(x * map_size_px), Math.floor(y * map_size_px), Math.ceil(map_size_px), Math.ceil(map_size_px));
                    ctx.fillStyle = object.getColor();
                    ctx.fill();


                }else
                if(object.type=='natural'){

                    var x=object.x+map_radius-map_center.x;
                    var y=object.y+map_radius-map_center.y;


                    ctx.beginPath();
                    ctx.arc(Math.floor(x * map_size_px), Math.floor(y * map_size_px),Math.ceil(map_size_px),0,2*Math.PI);
                    ctx.fillStyle = '#fff';
                    ctx.strokeStyle = '#000';
                    ctx.stroke();
                    ctx.fill();

                }



             });




            $('#maps').append(jQueryCanvas);


            on_row_ ++;
            if(on_row_>=on_row){

                on_row_=0;
                on_row=on_row/2;
                $('#maps').append('<br>');

            }




        }


    });
</script>
<style>

.mapCircle{

    display: inline-block;

    border: 2px solid #444;
    border-radius: 9999px;

    /**/
}


</style>
</head>
<body>


<div id="maps" style="text-align: center;width: 100%;">
</div>


</body>
</html>