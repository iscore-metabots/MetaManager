"use strict";

var LimitedStack = require('../utility/LimitedStack');
var Command = require('./Command');
var Vector = require('../utility/Vector');

class Robot{

    constructor(){
        this._name = "Jabberwockie";
        
        this._commands = new LimitedStack(20, new Command("start"));
    }

    setUp(options){
        if(options){

            this._name = options.name;
            this._position = new Vector(options.position);

            return this;
        }else{
            return undefined;
        }
    }

    modify(options){
        this._name = options.name || this._name;
    }

    addExecutedCommand(command){
        this._commands.add(command);
    }

    getExecutedCommands(){
        return this._commands;
    }
    
    getLastCommand(){
        return this._commands.head();
    }

}
module.exports = Robot;