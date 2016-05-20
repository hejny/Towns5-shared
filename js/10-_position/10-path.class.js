/**
 * @author ©Towns.cz
 * @fileOverview Creates class T.Path
 */
//======================================================================================================================



T.Path = class {

    /**
     * @param {...T.PositionDate} Position with date at least 2
     */
    constructor() {

        this.array_position_date = Array.prototype.slice.call(arguments);

        if(this.array_position_date.length<2){
            throw new Error('Thare must be at least 2 params when constructing T.Path.');
        }


        var position_date,last_date=-1;
        for(var i= 0,l=this.array_position_date.length;i<l;i++) {

            position_date = this.array_position_date[i];
            
            if(position_date instanceof T.PositionDate){}else{
                throw new Error('All Params when constructing T.Path must be T.PositionDate');
            }
            
            if(last_date>=position_date.date){
                throw new Error('Dates should be consecutive when constructing T.Path.');
            }

            last_date=position_date.date;


        }

    }

    /**
     *
     * @param {Array.<T.Position>} array_position
     * @param {number} speed
     * @param {Date} date
     * @returns {T.Path}
     */
    static newConstantSpeed(array_position,speed,date=0){

        if(date===0){
            date = new Date();
        }else
        if(typeof date==='number'){
            date = new Date(date);
        }


        if(array_position.length<2){
            throw new Error('Thare must be at least 2 params when constructing T.Path.');
        }

        var array_position_date = [
            new T.PositionDate(array_position[0].x,array_position[0].y,date)
        ];


        var last_position = array_position[0];


        var position_date,distance;
        for(var i=1,l=array_position.length;i<l;i++) {

            position_date = array_position[i];


            if(position_date instanceof T.Position){}else{
                throw new Error('All Params when constructing T.Path via newConstantSpeed must be T.Position');
            }


            distance = last_position.getDistance(position_date);
            date = new Date(date + distance/speed*1000);

            last_position=position_date;



            array_position_date.push(
                new T.PositionDate(array_position[i].x,array_position[i].y,date)
            );

        }


        return new this.apply(this,array_position_date);

    }


    /**
     * Count in which segment is T.Path progress
     * @param date
     * @returns {number}
     */
    private countSegment(date) {

        //------------------------Not started or finished

        if(this.array_position_date[0].date>date){
            return(0);
        }else
        if(this.array_position_date[this.array_position_date.length-1].date<=date){
            return(this.array_position_date.length-1);
        }


        //------------------------In progress

        var A, B, x,y;
        for(var i=0,l=this.array_position_date.length-1;i<l;i++) {
            A = this.array_position_date[i];
            B = this.array_position_date[i];

            if(A.date<=date && B.date>date){

                return(i);

            }


        }


        throw new Error('Error while counting segment in T.Path');

    }


    /**
     * Counts position at 'date'
     * @param {Date} date
     * @returns {T.Position}
     */
    countPosition(date) {

        //------------------------Not started or finished

        if(this.array_position_date[0].date>date){
            return(this.array_position_date[0].getPosition());
        }else
        if(this.array_position_date[this.array_position_date.length-1].date<=date){
            return(this.array_position_date[this.array_position_date.length-1].getPosition());
        }


        //------------------------In progress

        var segment = this.countSegment(date);

        A = this.array_position_date[segment];
        B = this.array_position_date[segment+1];

        x = T.Math.proportions(A.date,date,B.date, A.x, B.x);
        y = T.Math.proportions(A.date,date,B.date, A.y, B.y);

        return(new T.Position(x,y));


    }


    /**
     * Counts rotation at 'date'
     * @param date
     * @returns {number} degrees
     */
    countRotation(date) {

        var segment = this.countSegment(date);

        A = this.array_position_date[segment];
        B = this.array_position_date[segment+1];

        B.getPosition().moveBy(A.getPosition().multiply(-1));

        var polar = B.getPositionPolar();

        return(polar.getDegrees());

    }

    /**
     * Counts Speed at 'date'
     * @param date
     * @returns {number} fields/s
     */
    countSpeed(date) {

        var segment = this.countSegment(date);

        A = this.array_position_date[segment];
        B = this.array_position_date[segment+1];

        var distance = A.getDistance(B);
        var duration= B.date- A.date;

        return(distance/duration);

    }


    /**
     * Is path in progress (true) or it has not started(false) or it is finished(false)?
     * @param {Date} date
     * @returns {boolean}
     */
    inProgress(date) {

        if(this.array_position_date[0].date>date){
            return(false);
        }else
        if(this.array_position_date[this.array_position_date.length-1].date<=date){
            return(false);
        }else{
            return(true);
        }
    }


    //todo maybe countProgress


    /**
     * Converts T.Path to string
     * @returns {string}
     */
    toString(){
        return this.array_position_date.join(', ');
    }



};