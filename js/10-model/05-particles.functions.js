/**
 * @author Towns.cz
 * @fileOverview Creates object Particles with static methods
 */
//======================================================================================================================
T.Model = T.Model || {};
var A/*Actual Namespace*/ = T.Model;



A.Particles = {};


/**
 * Add missing params into particle
 * @static
 * @param {object} particle
 * @return {object} particle
 */
A.Particles.cParams = function(particle){//todo ?? maybe rename


    if(typeof particle.skew==='undefined'){
        particle.skew={};
    }
    if(typeof particle.skew.z==='undefined'){
        particle.skew.z={x:0,y:0};
    }

    //-------------

    if(typeof particle.shape.top === 'undefined') {
        particle.shape.top = 1;
    }


    if(typeof particle.shape.bottom === 'undefined') {
        particle.shape.bottom = 1;
    }


    if(typeof particle.rotation === 'undefined'){
        particle.rotation=0;
    }

    return(particle);

};


//======================================================================================================================

/**
 * Get 3D model from particle
 * @static
 * @param particle
 * @return {object} 3D model
 */
A.Particles.get3D = function(particle){

    var resource={};



    particle= T.Model.Particles.cParams(particle);//todo refactor use replace cParams with ||

    if(particle.shape.type=='prism') {

        //-------------------------------------------------------------------prism

        var x = particle.position.x;
        var y = particle.position.y;
        var z = particle.position.z;// * 2;


        var x_ = particle.size.x;
        var y_ = particle.size.y;
        var z_ = particle.size.z;


        //r(x_,y_);
        //r(particle.shape.n);


        /**/
        resource.points=[];
        resource.polygons=[[],[]];
        resource.polygons2D=[[],[]];

        for(var level=0;level<2;level++){


            //---------------------------


            if(level==0){
                var base=particle.shape.bottom;

            }else{
                var base=particle.shape.top;
            }


            //--------

            for(var n = 0;n<particle.shape.n;n++){

                //------------------XYZ ratio

                if(!is(particle.shape.rotated)){

                    var x__=0.5*x_*Math.cos(n/particle.shape.n*Math.PI*2+T.Math.deg2rad(180+180/particle.shape.n))*base+x_*(level*particle.skew.z.x),
                        y__=0.5*y_*Math.sin(n/particle.shape.n*Math.PI*2+T.Math.deg2rad(180+180/particle.shape.n))*base+y_*(level*particle.skew.z.y),
                        z__=z_*level;

                }else{

                    var tmp=(2-(Math.cos(T.Math.deg2rad(180/particle.shape.n))));//todo better

                    var x__=x_*((level*2)-1);//*(level-0.5);//+x_*(level*particle.skew.z.x),

                        y__=0.5*y_*Math.sin(n/particle.shape.n*Math.PI*2+T.Math.deg2rad(180+180/particle.shape.n));//+y_*(level*particle.skew.z.y),


                        z__=(1)*0.5*(


                                z_*Math.cos(n/particle.shape.n*Math.PI*2+T.Math.deg2rad(180+180/particle.shape.n))*tmp


                                +z_*((Math.cos(T.Math.deg2rad(180/particle.shape.n))))*tmp
                            );

                }




                //------------------ XY Rotation

                var DistDeg_=T.Math.xy2distDeg(x__,y__);//todo refactor all like DistDeg, etc...
                DistDeg_.deg+=particle.rotation;
                var xy_=T.Math.distDeg2xy(DistDeg_.dist,DistDeg_.deg);

                x__=xy_.x;
                y__=xy_.y;



                //------------------

                resource.points.push([x+x__,y+y__,z+z__]);



                if(level==0){

                    //r(n,1,particle.shape.n,(n+1+particle.shape.n));
                    resource.polygons[0].push(n+1);
                    resource.polygons[1].push(n+1+particle.shape.n);

                    resource.polygons2D[0].push(n+1);
                    resource.polygons2D[1].push(n+1+particle.shape.n);


                    resource.polygons.push([
                        (n!=0?n:particle.shape.n),
                        n+1,
                        n+1+particle.shape.n,
                        (n!=0?n:particle.shape.n)+particle.shape.n

                    ]);

                }

            }
        }/**/

        //-------------------------------------------------------------------
    }else{

        throw 'Unknown particle shape '+particle.shape.type;

    }

    return resource;

};


/**
 * Get 2D lines from particle
 * @static
 * @param {object} particle
 * @param {number} base 0=bottom, 1=top
 * @return {Array} 2D lines
 */
A.Particles.get2Dlines = function(particle,base){


    var resource=this.get3D(particle);

    var lines=[];

    var polygons2D=[resource.polygons2D[base]];

    for(var pn in polygons2D){

        /*lines[pn]=[];

        for(var pt in resource.polygons[pn]) {

            var point = resource.points[resource.polygons[pn][pt] - 1];
            lines[pn][ps] = [point[0], point[1]];

        }*/

        for(var i=-1,l=polygons2D[pn].length;i<l-1;i++){


            if(i!=-1)
                var point1=i;
            else
                var point1=l-1;

            var point2=i+1;


            //r(resource.polygons[pn],point1);

            point1 = resource.points[polygons2D[pn][point1] - 1];
            point2 = resource.points[polygons2D[pn][point2] - 1];


            lines.push(
                [
                    {
                        x: point1[0],
                        y: point1[1]
                    },{
                        x: point2[0],
                        y: point2[1]
                    }
                ]
            );


        }

    }



    //r(lines);

    return(lines);

};


//======================================================================================================================

//todo maybe refactor move to Math
/**
 * Detect collision between 2 2D lines
 * @static
 * @param {array} lines1
 * @param (array) lines2
 * @return {boolean}
 */
A.Particles.collisionLinesDetect = function(lines1,lines2){

    for (var i1 in lines1) {
        for (var i2 in lines2) {

            if (T.Math.lineCollision(
                    lines1[i1][0].x,
                    lines1[i1][0].y,
                    lines1[i1][1].x,
                    lines1[i1][1].y,
                    lines2[i2][0].x,
                    lines2[i2][0].y,
                    lines2[i2][1].x,
                    lines2[i2][1].y
                )) {

                //r('collision2D is true', particle1, particle2);
                return (true);
            }


        }
    }

    return false;


};

//----------------------------------------------------------------------------------------------------------------------

/**
 * Detect collision between 2 particles
 * @static
 * @param {object} particle1 bottom
 * @param (object) particle2 top
 * @return {boolean}
 */
A.Particles.collision2D = function(particle1,particle2){


    var lines1 = Particles.get2Dlines(particle1,1);
    var lines2 = Particles.get2Dlines(particle2,0);

    //-------------------------------Corner collision


    var collision=Particles.collisionLinesDetect(lines1,lines2);

    //-------------------------------Inner convex collision

    /**/if(!collision){

        collision=function(){


            var k=100;

            for(i=0;i<2;i++){

                if(i==0){
                    var outer=JSON.parse(JSON.stringify(lines2));
                    var inner=/*deepCopy*/(lines1[0]);
                }else{
                    var outer=JSON.parse(JSON.stringify(lines1));
                    var inner=/*deepCopy*/(lines2[0]);
                }



                var inner1=JSON.parse(JSON.stringify(inner));
                var inner2=JSON.parse(JSON.stringify(inner));



                var inner_vector_x=inner[1].x-inner[0].x;
                var inner_vector_y=inner[1].y-inner[0].y;

                inner1[0].x-=inner_vector_x*k;
                inner1[0].y-=inner_vector_y*k;


                inner2[1].x+=inner_vector_x*k;
                inner2[1].y+=inner_vector_y*k;


                inner1=[inner1];
                inner2=[inner2];

                var collision1=Particles.collisionLinesDetect(inner1,outer);
                var collision2=Particles.collisionLinesDetect(inner2,outer);


                if(collision1 && collision2){

                    return(true);

                }

            }


            return(false);

        }();


    }/**/


    //-------------------------------

    //-------------------------------Debug TDD
    /**var size=100;
    var src=createCanvasViaFunctionAndConvertToSrc(
        size*2,size*2,function(ctx){

            //ctx.strokeStyle = '#000000';
            //ctx.strokeWidth = 2;

            ctx.beginPath();

            var lines_=[lines1,lines2];
            for(var key in lines_){

                ctx.beginPath();
                for(var i= 0,l=lines_[key].length;i<l;i++){

                   ctx.moveTo(lines_[key][i][0].x+size,lines_[key][i][0].y+size);
                   ctx.lineTo(lines_[key][i][1].x+size,lines_[key][i][1].y+size);

                }
                ctx.stroke();
                ctx.closePath();

            }

        }


    );
    $('body').append('<img src="'+src+'" border='+(collision?2:0)+'>');/**/
    //-------------------------------

    return(collision);


};