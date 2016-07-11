var Supervisor = require('./Supervisor');

var exports = module.exports = {};

class SimpleSupervisor extends Supervisor{
    constructor(name){
        super(name);
    }

    step() {
        if (this.robots.size > 0) {
            if (this.robots.get(0).position.x > 20) {
                this.robots.get(0).position.x = 0;
            }

            this.robots.get(0).velocity.x = 5;
        }
    }
    
    onOrder(message){
        Supervisor.retransmitMessage(message);
    }
}

exports.simple = SimpleSupervisor;