
/**
 * @author ©Towns.cz
 * @fileOverview Creates class T.Objects.Story
 */
//======================================================================================================================



T.Objects.Story = class extends T.Objects.Object{

    clone(){//todo all classes should have this method
        return(new T.Objects.Story(JSON.parse(JSON.stringify(this))));
    }

    getMarkdown(){
        return(this.content.data);
    }




};
