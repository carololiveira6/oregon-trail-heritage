/* EXAMPLE */

class Dog {
    constructor(name, breed, isGoodBoy) {
       this.name = name;
       this.breed = breed;
       this.isGoodBoy = isGoodBoy;
    }
 
    sit() {
        // sitting code here
    }
 }
 
 class GuardDog extends Dog {
    constructor(name, breed, isGoodBoy, attackWord) {
       super(name, breed, isGoodBoy)
       this.attackWord = attackWord;
    }
 
    bark() {
       // barking code here
    }
 }


/* SOLUTION */

class Traveler {
    constructor(name, food = 1, isHealthy = true) {
        this.name = name; // string
        this.food = food; // número com valor inicial 1
        this.isHealthy = isHealthy; // boolean - indica se está doente - inicia com TRUE
    }

    hunt() {
        let travelerFood = 2;
        this.food += travelerFood;
    }

    eat() {
        if (this.food === 0 || this.food < 0) {
            this.isHealthy = false;
            this.food = 0;
        } else { 
            this.food--;
        }
    }
};

/* ...usar herança para criar dois novos tipos de viajante: Doctor (Médico) e Hunter (Caçador). Eles terão todas as outras características de qualquer outro Viajante... (aula 14) */

class Doctor extends Traveler { // classe filha herda do pai
    constructor(name, food, isHealthy) { // classe filha
        super(name, food, isHealthy) // classe pai
    }

    heal(passengers) {
        if (passengers.isHealthy === false) {
            passengers.isHealthy = true;
        }
    }
}

class Hunter extends Traveler {
    constructor(name, food = 2, isHealthy) {
        super (name, food, isHealthy)
    }

    // food com valor inicial 2 e aumenta de 5 em 5
    // consome 2 unidades de food

    hunt() {
        let travelerFood = 5;
        this.food = this.food + travelerFood
    }

    // se food !== 2 come o quanto puder (0 ou 1) então isHealthy = false

    eat() {
        if (this.food < 2) {
            this.isHealthy = false;
            this.food = 0;
        } else {
        this.food = this.food - 2;
        }
    }

    // transfere comida para outro viajante exceto se tiver menos comida que a instrução
    // numOfFoodUnits é o número de food para ser transferido

    giveFood(traveler, numOfFoodUnits) {
        if (this.food >= numOfFoodUnits) {
            traveler.food += numOfFoodUnits;
            this.food = this.food - numOfFoodUnits;
        } else {
            this.food;
        }
    }
}

class Wagon {
    constructor(capacity, passengers = []) {
        this.capacity = capacity; // número - quantidade máxima de passageiros
        this.passengers = passengers; // array - inicialmente vazio
    }

    getAvailableSeatCount() {
        let emptySeats = this.capacity - this.passengers.length;

        if (emptySeats < 0) {
            return 0;
        } else {
            return emptySeats;
        }
    }

    join(traveler) {
        if (this.passengers.length < this.capacity) {
            this.passengers.push(traveler);
        }
    }

    shouldQuarantine() {
        let sickPassenger = false
        for (let i = 0; i < this.passengers.length; i++) {
            if (this.passengers[i].isHealthy === false) {
                sickPassenger = true;
            }
        }
        return sickPassenger
    }

    totalFood() {
        let allFood = 0;
        for (let i = 0; i < this.passengers.length; i++) {
            allFood = allFood + this.passengers[i].food;
        }
        return allFood;
    }
};

/* TEST */

// Cria uma carroça que comporta 4 pessoas
let wagon = new Wagon(4);
// Cria cinco viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let drsmith = new Doctor('Dr. Smith');
let sarahunter = new Hunter('Sara');
let maude = new Traveler('Maude');

console.log(`#1: There should be 4 available seats. Actual: ${wagon.getAvailableSeatCount()}`);

wagon.join(henrietta);
console.log(`#2: There should be 3 available seats. Actual: ${wagon.getAvailableSeatCount()}`);

wagon.join(juan);
wagon.join(drsmith);
wagon.join(sarahunter);

wagon.join(maude); // Não tem espaço para ela!
console.log(`#3: There should be 0 available seats. Actual: ${wagon.getAvailableSeatCount()}`);

console.log(`#4: There should be 5 total food. Actual: ${wagon.totalFood()}`);

sarahunter.hunt(); // pega mais 5 comidas
drsmith.hunt();

console.log(`#5: There should be 12 total food. Actual: ${wagon.totalFood()}`);

henrietta.eat();
sarahunter.eat();
drsmith.eat();
juan.eat();
juan.eat(); // juan agora está doente (sick)

console.log(`#6: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`);
console.log(`#7: There should be 7 total food. Actual: ${wagon.totalFood()}`);

drsmith.heal(juan);
console.log(`#8: Quarantine should be false. Actual: ${wagon.shouldQuarantine()}`);

sarahunter.giveFood(juan, 4);
sarahunter.eat(); // Ela só tem um, então ela come e fica doente

console.log(`#9: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`);
console.log(`#10: There should be 6 total food. Actual: ${wagon.totalFood()}`);