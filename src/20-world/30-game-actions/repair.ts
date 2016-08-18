/**
 * @author ©Towns.cz
 * @fileOverview Creates configuration of game conditions via instance T.World.game
 */
//======================================================================================================================

namespace T.World {

    interface ActionRepairParamsObject{
        repair: number;
        cooldown: number;
    }


    World.game.installActionClass(
        {
            repair: 0
        },
        class extends T.Game.ActionActive {

            public params:ActionRepairParamsObject;

            getType() {
                return ('repair');
            }


            countPriceBase() {
                return ((1 / (this.params.repair / 100)) * 1000 * 0.05);
            }


            getPriceResources() {

                return ([
                    new T.Resources({'wood': 4}),
                    new T.Resources({'clay': 2}),
                    new T.Resources({'stone': 3}),
                    new T.Resources({'iron': 4})
                ]);
            }


            /*static execute(){
             //todo
             }*/


        }
    );


}