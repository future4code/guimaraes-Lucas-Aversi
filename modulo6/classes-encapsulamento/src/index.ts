//Exercício 1

//A - O construtor serve para iniciar um objeto criado a partir de uma classe. Ele pode ser chamado com os valores passados via parâmetro ao iniciar uma nova classe.

//b uma vez.

//c usando os getters - pega o atributo // e setters - configura
class Transaction {
    private description: string 
    private value: number 
    private date: string

    constructor(description: string,
         value: number, date: string) {
            this.description = description, 
            this.value = value, 
            this.date = date }
}
class UserAccount {
    private cpf: string; 
    private name: string; 
    private age: number; 
    private balance: number = 0; 
    private transactions: Transaction[] = [];

    constructor(cpf: string, name: string, age: number,) { 
        console.log("Chamando o construtor da classe UserAccount") 
        this.cpf = cpf; 
        this.name = name; 
        this.age = age; 
    }
    public getCpf(): string { return this.cpf }
    public getName(): string { return this.name }
    public getAge(): number { return this.age }
    public getBalance(): number { return this.balance }
    public getTransactions(): Transaction[] { return this.transactions; }
    public setName(newName:string ): string{return this.name = newName}

}
const firstUser: UserAccount = new UserAccount("123.123.123.12", "Aversi", 31)
console.log(firstUser)
console.log(firstUser.setName("Lucas"))
console.log(firstUser)