/**
 * @author ©Towns.cz
 * @fileOverview Creates static T.ArrayFunctions
 */
//======================================================================================================================



module T {

    interface ObjectWithId{
        id: string | number;
    }


    /**
     * Additional functions to manipulate with array.
     */
    export class ArrayFunctions {


        /**
         * @static
         * Searches an item with ID in array
         * @param {object} array Array of objects with ID
         * @param {*} id Searched ID
         * @returns {number} Key of object with this ID, -1 if not exist
         */
        static id2i(array: Array<ObjectWithId>, id:string):number {

            for(var i=0,l=array.length;i<l;i++){
                if (array[i].id == id)return i;
            }

            return -1;

        }


//======================================================================================================================

        /**
         * @static
         * Searches an item with ID in array
         * @param {object} array Array of objects with ID
         * @param {*} id Searched ID
         * @param {string} error_message when iten not exists
         * @returns {object} Object with this ID, null if not exist
         */
        static id2item(array: Array<ObjectWithId>, id: string, error_message = ''):ObjectWithId {

            for (var i in array) {
                if (array[i].id == id)return array[i];
            }

            if (error_message) {
                throw new Error(error_message);
            } else {
                return null;
            }

        }


        //======================================================================================================================

        /**
         * @static
         * Delete an item with ID in array
         * @param {object} array Array of objects with ID
         * @param {*} id Searched ID
         * @returns {boolean}
         */
        static idRemove(array: Array<ObjectWithId>, id: string):boolean {//todo refactor use this not splice

            for (var i=0,l=array.length;i<l;i++) {
                if (array[i].id == id) {
                    array.splice(i, 1);
                    return true;
                }
            }
            return false;

        }


        //======================================================================================================================


        /**
         * Iterate through 2D array
         * @static
         * @param array
         * @param {function} callback
         */
        static iterate2D(array: Array<any>, callback: Function):void {

            //r(array);

            for (var y = 0, yLen = array.length; y < yLen; y++) {
                for (var x = 0, xLen = array[y].length; x < xLen; x++) {

                    callback(y, x);
                    /*todo refactor to x,y*/

                }
            }

        }

        //======================================================================================================================

        /**
         * @static
         * @param array
         * @param from
         * @param to
         * @return {array} Removed items
         */
        static removeItems(array:Array<any>, from:number, to:number):Array {
            var rest = array.slice((to || from) + 1 || array.length);
            array.length = from < 0 ? array.length + from : from;
            return array.push.apply(array, rest);
        }


        //======================================================================================================================


        /** todo should it be under T.ArrayFunctions
         *
         * @param {object} obect
         * @param {array} path
         */
        static filterPath(object: Object, path: Array<string>, setValue: any):any {
            

            for (var path_i in path) {

                var object_key = path[path_i];

                if (path_i < path.length - 1 || typeof setValue == 'undefined') {

                    if (typeof object[object_key] == 'undefined') {

                        return (undefined);
                        //throw new Error('filterPath: Key \''+object_key+'\' in path in object is undefined');
                    }

                    object = object[object_key];

                } else {

                    object[object_key] = setValue;

                    return (true);


                }

            }

            return (object);


        }


        //======================================================================================================================


        /**
         *
         * @param {Array} array
         * @returns {Array} Array containing only unique values
         */
        static unique(array: Array<any>):Array<any> {
            var n = {}, r = [];
            for (var i = 0; i < array.length; i++) {
                if (!n[array[i]]) {
                    n[array[i]] = array;
                    r.push(array[i]);
                }
            }
            return r;
        }


        //======================================================================================================================


        /**
         * Creates html table from JS array
         * @param {Array} array array
         * @param {string} additional_class
         * @returns {string} html
         */
        static array2table(array:Array<Array<string>>, additional_class = ''):string {
            //todo check

            var html = '';

            var rows = array.length;
            var cols_table = array[0].length;//todo is is best solution?


            html += '<table class="' + additional_class + '">';
            for (var row = 0; row < rows; row++) {


                html += '<tr>';

                var cols = array[row].length;
                var cols_span = cols_table - cols;

                for (var col = 0; col < cols; col++) {

                    if (col == cols - 1 && cols_span !== 0) {

                        html += '<td colspan="' + (cols_span + 1) + '">';

                    } else {

                        html += '<td>';

                    }


                    html += array[row][col];
                    html += '</td>';


                }

                html += '</tr>';


            }
            html += '</table>';

            return (html);

        }


        /**
         * extract keys from Array
         * @param {object} object
         * @returns {Array}
         */
        static getKeys(object:Object):Array<string> {

            var keys = [];
            for (var k in object) keys.push(k);
            return (keys);

        }


    }


}