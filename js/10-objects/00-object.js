
/**
 * @author ©Towns.cz
 * @fileOverview ...
 */
//======================================================================================================================
T.Objects = T.Objects || {};
var A/*Actual Namespace*/ = T.Objects;




A.Object = class{

    constructor(object){

        for(var key in object){
            this[key] = object[key];
        }

    }

    //todo jsdoc
    getPosition(){
        return(new T.Position(this.x,this.y));
    }

};