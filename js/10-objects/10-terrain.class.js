
/**
 * @author ©Towns.cz
 * @fileOverview Creates class T.Objects.Story
 */
//======================================================================================================================



T.Objects.Terrain = class extends T.Objects.Object{


    clone(){//todo all classes should have this method
        return(new T.Objects.Terrain(JSON.parse(JSON.stringify(this))));
    }


    getCode(prefered_width){

        return(this.design.data.image);

    }


    getColor(){

        return(this.design.data.color);

    }






    //todo getImage(){}


};

