
/**
 * @author ©Towns.cz
 * @fileOverview ...
 */
//======================================================================================================================
T.World = T.World || {};//todo create namespace




T.World.mapGenerator = new T.MapGenerator(

    T.Math.blurXY(function(x,y){

        //todo//var key='x'+x+'y'+y;
        //todo//if(typeof z_map_cache[key]!='undefined'){
        //todo//    return(z_map_cache[key]);
        //todo//}


        const div=100;


        var n= 0;
        var max_possible_n=0;


        for(var i= 0;i<13;i++){

            n += Math.round(Math.pow(x*y-66, 2)) % (div + 1);

            max_possible_n+=div;

            x=Math.floor(x/3);
            y=Math.floor(y/3);

            var xy = T.Math.xyRotate(x,y,57);

            x=xy.x;
            y=xy.y;

        }



        n=n/max_possible_n;

        if(n<0)n-=Math.floor(n);
        if(n>1)n-=Math.floor(n);

        //todo//z_map_cache[key]=n;
        return(n);

    },2)
    ,
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0002,0.0002,0.0002,0.0002,0.0002,0.0002,0.0002,0.0002,0.0002,0.0002,0.0003,0.0003,0.0003,0.0003,0.0004,0.0005,0.0006,0.0007,0.0009,0.0009,0.0009,0.001,0.0011,0.0011,0.0011,0.0011,0.0012,0.0012,0.0013,0.0013,0.0015,0.0016,0.0017,0.0017,0.0017,0.002,0.0021,0.0023,0.0024,0.0028,0.0031,0.0033,0.0034,0.0037,0.0044,0.0045,0.0047,0.0049,0.0049,0.0051,0.0054,0.0058,0.0061,0.0062,0.0064,0.0067,0.0071,0.0074,0.0075,0.0078,0.0082,0.0083,0.0084,0.0088,0.0092,0.0097,0.0102,0.0107,0.0112,0.0123,0.0131,0.0139,0.0147,0.0149,0.0153,0.0163,0.0168,0.0175,0.0181,0.0188,0.0193,0.0203,0.0212,0.022,0.0221,0.0224,0.0227,0.0232,0.0239,0.0251,0.0256,0.0264,0.0268,0.0281,0.0286,0.0294,0.0301,0.0312,0.0317,0.0328,0.0338,0.035,0.0356,0.0368,0.0377,0.0387,0.0402,0.0409,0.0422,0.0438,0.0446,0.0458,0.0475,0.0486,0.0502,0.0513,0.052,0.0534,0.0539,0.0548,0.056,0.0568,0.0578,0.0595,0.0607,0.0624,0.0634,0.0644,0.0664,0.0677,0.0694,0.071,0.072,0.0734,0.0747,0.0757,0.0767,0.0785,0.0794,0.0805,0.0817,0.0826,0.084,0.0856,0.087,0.0883,0.0898,0.0915,0.0923,0.094,0.0945,0.0958,0.0972,0.0983,0.0996,0.1014,0.1031,0.1048,0.1057,0.1072,0.1087,0.1103,0.1111,0.1126,0.1143,0.1161,0.1171,0.1189,0.1203,0.1219,0.1238,0.1251,0.1261,0.1273,0.129,0.1303,0.1315,0.1324,0.1331,0.1341,0.1355,0.1368,0.1387,0.1397,0.1408,0.1427,0.1437,0.145,0.1462,0.1479,0.1498,0.1512,0.1521,0.1538,0.1549,0.1566,0.1581,0.1594,0.1616,0.1628,0.1642,0.1652,0.1669,0.1682,0.17,0.1713,0.1727,0.1742,0.1764,0.1782,0.1795,0.1817,0.1835,0.1851,0.1859,0.1865,0.188,0.1894,0.191,0.1921,0.1935,0.1947,0.1962,0.1975,0.1986,0.2001,0.2011,0.2022,0.2028,0.2046,0.2058,0.2069,0.2079,0.2093,0.2105,0.2122,0.2135,0.2145,0.2154,0.2163,0.2171,0.2183,0.2193,0.22,0.2212,0.2221,0.2235,0.2245,0.2261,0.2276,0.2284,0.2293,0.2303,0.2313,0.2327,0.2341,0.2356,0.2369,0.2374,0.2392,0.2405,0.242,0.2435,0.2449,0.2466,0.2481,0.25,0.2509,0.2525,0.2539,0.2552,0.2561,0.2577,0.2589,0.2615,0.2627,0.2646,0.2657,0.2671,0.269,0.2706,0.2719,0.2732,0.2743,0.2764,0.2779,0.28,0.2818,0.2828,0.2844,0.2866,0.288,0.2892,0.2912,0.2926,0.2938,0.2963,0.2979,0.2996,0.3013,0.3028,0.3052,0.3066,0.3077,0.3098,0.312,0.3142,0.3159,0.3173,0.3194,0.3213,0.3231,0.3258,0.3281,0.3297,0.332,0.3347,0.3363,0.3384,0.3409,0.3432,0.3464,0.3483,0.35,0.3528,0.3564,0.3592,0.3624,0.3651,0.3687,0.3708,0.3732,0.3755,0.379,0.3811,0.3836,0.3865,0.3888,0.3912,0.3948,0.3974,0.3998,0.4019,0.4045,0.4082,0.4106,0.4145,0.4168,0.4195,0.4221,0.4247,0.4266,0.4293,0.4313,0.4364,0.439,0.4432,0.4467,0.4498,0.4531,0.4553,0.4588,0.4614,0.4654,0.4689,0.4725,0.4765,0.4786,0.4813,0.4857,0.4898,0.4931,0.4975,0.5013,0.5058,0.5102,0.5134,0.5177,0.5224,0.5252,0.5292,0.5327,0.5366,0.5404,0.5433,0.5484,0.5514,0.5548,0.5591,0.5624,0.5661,0.5702,0.5745,0.5791,0.5832,0.5869,0.5914,0.5954,0.6003,0.6041,0.6087,0.6126,0.6173,0.6215,0.6263,0.6304,0.6348,0.6383,0.6414,0.6452,0.6494,0.6525,0.6563,0.6604,0.6647,0.6691,0.672,0.6752,0.6806,0.6839,0.6879,0.6916,0.6961,0.701,0.7046,0.7077,0.7116,0.7164,0.7194,0.7235,0.7288,0.7331,0.7371,0.7412,0.7475,0.7527,0.7562,0.761,0.7647,0.7685,0.7722,0.7761,0.7809,0.7852,0.7893,0.7931,0.7961,0.799,0.8027,0.8068,0.8099,0.8133,0.8171,0.8213,0.8259,0.8294,0.8336,0.8377,0.8407,0.8441,0.8479,0.8513,0.8546,0.858,0.8611,0.8636,0.8679,0.8715,0.8751,0.8782,0.8813,0.8846,0.888,0.891,0.8943,0.8967,0.9004,0.903,0.9054,0.9082,0.9113,0.9142,0.9167,0.9189,0.9213,0.9236,0.9269,0.9291,0.9309,0.9331,0.9362,0.9384,0.9397,0.9418,0.944,0.9455,0.9474,0.9489,0.9505,0.9533,0.955,0.9564,0.9581,0.96,0.9614,0.9626,0.9641,0.9658,0.9679,0.9688,0.9706,0.9718,0.9731,0.9744,0.9757,0.9767,0.9785,0.9796,0.9806,0.9817,0.9827,0.9832,0.9838,0.9846,0.9851,0.9859,0.9864,0.9867,0.9876,0.9885,0.9887,0.9891,0.9898,0.9902,0.9912,0.9913,0.9917,0.9922,0.9928,0.9931,0.9932,0.9932,0.9938,0.9941,0.9943,0.9947,0.9954,0.996,0.9961,0.9961,0.9962,0.9965,0.9966,0.9969,0.997,0.9972,0.9974,0.9975,0.9976,0.998,0.998,0.9981,0.9981,0.9986,0.9987,0.9989,0.999,0.9992,0.9992,0.9992,0.9994,0.9995,0.9995,0.9996,0.9996,0.9996,0.9996,0.9997,0.9997,0.9997,0.9997,0.9997,0.9998,0.9998,0.9998,0.9999,0.9999,0.9999,0.9999,0.9999,0.9999,0.9999,0.9999,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ,

    new T.MapGenerator.Biotope([

        { amount: 120 , terrain: T.World.terrains[ 1]},//moře
        { amount: 40 , terrain: T.World.terrains[11]},//řeka
        { amount: 30 , terrain: T.World.terrains[ 4]},//písek
        { amount: 20 , terrain: T.World.terrains[12]},//tráva jaro
        { amount: 40 , terrain: T.World.terrains[ 9]},//tráva toxic
        { amount: 20 , terrain: T.World.terrains[ 8]},//tráva normal
        { amount: 20 , terrain: T.World.terrains[10]},//les
        { amount: 50 , terrain: T.World.terrains[ 4]},//písek
        { amount: 10 , terrain: T.World.terrains[13]},//tráva pozim
        { amount: 20 , terrain: T.World.terrains[ 5]},//kamení
        { amount: 60 , terrain: T.World.terrains[ 3]},//sníh/led
        { amount: 10 , terrain: T.World.terrains[10]},//les
        { amount: 60 , terrain: T.World.terrains[ 7]},//sníh/led
        { amount: 10 , terrain: T.World.terrains[ 5]},//kamení



    ]),


    function(object,virtual_objects){

        if(object.type!='terrain')return;

        if(object.design.datT.World.image==5){
            virtual_objects.push(
                {

                    x: object.x,//todo
                    y: object.y,//todo
                    type: 'natural',
                    design: {
                        type: 'natural',
                        data:{
                            image:'rock'+Math.floor(T.Math.randomSeedPosition(1,{x:object.x,y:object.y})*6)%6+'dark'+Math.floor(T.Math.randomSeedPosition(2,{x:object.x,y:object.y})*4)%4,
                            size: 0.5+T.Math.randomSeedPosition(5,{x:object.x,y:object.y})*1
                        }
                    }

                }
            );


        }else
        if(object.design.datT.World.image==10){
                        virtual_objects.push(
                {

                    x: object.x,//todo
                    y: object.y,//todo
                    type: 'natural',
                    design: {
                        type: 'natural',
                        data:{
                            image:'tree'+Math.floor(T.Math.randomSeedPosition(3,{x:object.x,y:object.y})*10)%10,
                            size: 1+T.Math.randomSeedPosition(6,{x:object.x,y:object.y})/2
                        }
                    }

                }
            );


        }


    }


);


















