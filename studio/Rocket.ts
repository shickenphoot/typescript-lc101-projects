import {Payload} from './Payload';
import { Cargo } from './Cargo';
import { Astronaut } from './Astronaut';
export class Rocket implements Payload {
    massKg:number;
    name: string;
    totalCapacityKg:number;
    cargoItems: Cargo[]=[];
    astronauts: Astronaut[]=[];

    constructor (name:string, total:number){
        this.name=name;
        this.totalCapacityKg=total;
    }
    sumMass(items: Payload[]):number{
        return items.reduce((a,b)=> a+b.massKg,0)
    }
    currentMassKg(): number{
        return this.sumMass(this.astronauts)+this.sumMass(this.cargoItems)
    }
    canAdd(item: Payload): boolean{
        if(this.currentMassKg()+item.massKg<=this.totalCapacityKg){
            return true;
        }else{
            return false;
        }
    }
    addCargo(cargo: Cargo){
        if(this.canAdd(cargo)){
            this.cargoItems.push(cargo);
            return true;
        }else{
            return false;
        }
    }
    addAstronaut(astronaut: Astronaut){
        if(this.canAdd(astronaut)){
            this.astronauts.push(astronaut);
            return true;
        }else{
            return false;
        }
    }
    // properties and methods
 }