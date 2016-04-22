/**
 * @author ©Towns.cz
 * @fileOverview Creates class actions
 */
//======================================================================================================================
//-----------------------Creating namespace T (=global.Towns).Game
var T = global.Towns;
T.Game = T.Game || {};
var A/*Actual Namespace*/ = T.Game;
module.exports = Towns;
//-----------------------
//======================================================================================================================


/**
 *
 * @param {string} type enum('active', 'passive', 'triggered') //todo refactor
 * @param {object} params {param: type}
 * @param {function} price_base
 * @param {array} price_resources_list
 * @param {function} perform
 * @constructor
 */
A.ActionType = function(type, params, price_base, price_resources_list, perform){
    this.type = type;
    this.params = params;
    this.price_base = price_base;
    this.price_resources_list = price_resources_list;
    this.perform = perform;
};