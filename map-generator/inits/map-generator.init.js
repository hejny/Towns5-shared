
/**
 * @author ©Towns.cz
 * @fileOverview ...
 */
//======================================================================================================================
//-----------------------Creating namespace Towns.MapGenerator
var Towns = Towns || {};
Towns.MapGenerator = Towns.MapGenerator || {};
var A/*Actual Namespace*/ = Towns.MapGenerator;
//-----------------------

//-----------------------Loading modules if running under node js
if(typeof window=='undefined'){

    Towns.Math = require(__dirname+'/../../math/math.js');
    A.Terrain = require(__dirname+'/../classes/terrain.class.js');
    A.Biotope = require(__dirname+'/../classes/biotope.class.js');
    A.MapGenerator = require(__dirname+'/../classes/map-generator.class.js');
    A.terrains = require(__dirname+'/terrains.init.js');

}
//-----------------------
//======================================================================================================================





A.mapGenerator = module.exports = new A.MapGenerator(

    function(x,y){

        //var z=(x/y)*50;

        if(x+y<0){
            x=-x;
            y=-y;
        }



        var n= 0,
            max_possible_n=0;


        x=x+1*Math.sin(y);
        y=y+1*Math.sin(x);


        //x=Math.floor(x/2.6);
        //y=Math.floor(y/2.6);
        //x=Math.floor(x/4);
        //y=Math.floor(y/4);


        for(var i= 0;i<19;i++){


            n+=Math.round(Math.pow(Math.pow(x,2)+Math.pow(y,2),1.1))%3;
            max_possible_n+=2;

            x=Math.floor(x/3);
            y=Math.floor(y/3);

            var xy = Towns.Math.xyRotate(x,y,57);

            x=xy.x;
            y=xy.y;

        }



        n=n/max_possible_n;



        n=n-0.5;
        var sign=Towns.Math.sign(n);
        n=Math.abs(n)*2;
        n=Math.pow(n,1/3);
        n=(n/2*sign)+0.5;



        //return(0.1);//only grass
        //return(0.2);//only watter

        //console.log(n);
        return(n);

    },

    new A.Biotope([
        { from: ( 0/100) , terrain: A.terrains[ 5]},
        { from: ( 5/100) , terrain: A.terrains[ 7]},
        { from: ( 7/100) , terrain: A.terrains[ 3]},
        { from: ( 9/100) , terrain: A.terrains[12]},
        { from: (11/100) , terrain: A.terrains[ 9]},
        { from: (12/100) , terrain: A.terrains[ 4]},
        { from: (14/100) , terrain: A.terrains[11]},
        { from: (29/100) , terrain: A.terrains[ 1]},
        { from: (30/100) , terrain: A.terrains[11]},
        { from: (39/100) , terrain: A.terrains[ 4]},
        { from: (42/100) , terrain: A.terrains[ 9]},
        { from: (49/100) , terrain: A.terrains[12]},
        { from: (57/100) , terrain: A.terrains[ 8]},
        { from: (59/100) , terrain: A.terrains[10]},
        { from: (60/100) , terrain: A.terrains[ 8]},
        { from: (34/100) , terrain: A.terrains[10]},
        { from: (68/100) , terrain: A.terrains[13]},
        { from: (73/100) , terrain: A.terrains[ 4]},
        { from: (87/100) , terrain: A.terrains[ 6]}
    ]),


    function(object,virtual_objects){

        if(object.type!='terrain')return;

        if(object.design.data.image==5){

            virtual_objects.push(
                {

                    x: object.x,
                    y: object.y,
                    type: 'natural',
                    design: {
                        type: 'natural',
                        data:{
                            image:'rock0dark0'
                        }
                    }

                }
            );


        }else
        if(object.design.data.image==10){


            virtual_objects.push(
                {

                    x: object.x,
                    y: object.y,
                    type: 'natural',
                    design: {
                        type: 'natural',
                        data:{
                            image:'tree0'
                        }
                    }

                }
            );


        }


    }


);


















