<em>18 - Entrega: Estendendo o Oregon Trail com Herança</em>

<h1>Entrega - Estendendo o Oregon Trail com Herança</h1>

Relembre como usar herança/delegação para estender um objeto de classe criando uma nova variação da classe original. Aqui está um exemplo:

```
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
```

Nesta Entrega, você irá estender seu código do Oregon Trail para usar herança para criar dois novos tipos de viajante: Doctor (Médico) e Hunter (Caçador). Eles terão todas as outras características de qualquer outro Viajante, com essas diferenças:

Um Médico é um Viajante com um método adicional:

<h2>heal(traveler)</h2>

Passe outro Viajante como parâmetro para o método .heal(), e a propriedade isHealthy dele é mudada para true.

<hr>

Um Caçador é um Viajante que se dá melhor encontrando comida, mas também precisa de mais comida. Ele começa com 2 comidas em vez de apenas 1 como os outros viajantes. Ele também pode dar comida para outros viajantes:

<h2>hunt()</h2>

Aumente a comida do caçador em 5. (Um viajante convencional ganha apenas 2.)

<h2>eat()</h2>

Consome 2 unidades da comida do caçador. Se um caçador não tiver 2 comidas quando for instruído a comer, ele come o quanto puder (0 ou 1 unidade), mas o caçador não fica mais saudável. (Um viajante normal come apenas 1 unidade de comida.)

<h2>giveFood(traveler, numOfFoodUnits)</h2>

Transfere numOfFoodUnits do caçador para outro viajante. Se o caçador tiver menos comida do que foi instruído a dar, então nenhuma comida é transferida.

<h1>Teste</h1>

Substitua o código de teste no final da sua implementação original de Oregon Trail por este novo código de teste para verificar se ele está funcionando apropriadamente. (Não modifique este código!)

```
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
```

<h1>Envio</h1>

Faça o push do código para o seu repositório GitLab e implemente-o via GitLab pages. No Canvas, envie a url do seu Gitlab Pages (por exemplo https://username.gitlab.io/oregon-trail-inheritance/). No GitLab, adicione ka-br-correcoes como membro do seu projeto com a permissão "Reporter".