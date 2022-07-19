//////HERANÇA E POLIMORFISMO

//HERANÇA

////Exercício 1~

//A- Não seria possível imprimir a senha tendo em vista que está como private e nenhum metodo para torna-la publica foi criado. 

//B - Uma vez
class User {
  private id: string;
  private email: string;
  private name: string;
  protected password: string;

  constructor(
		id: string,
		email: string,
		name: string,
		password: string
	){
		console.log("Chamando o construtor da classe User")
		this.id = id
		this.email = email
		this.name = name 
		this.password = password
	}

	public getId(): string {
		return this.id
	}

	public getEmail(): string {
		return this.email
	}

	public getName(): string {
		return this.name
	}
    public interoduceYourself(): string {
        return `Olá, bom dia eu sou o ${this.name}!`
    }
}
const firstUser: User = new User("1", "Aversi@gmail.com", "Aversi", "suaTia");
console.log(firstUser.getEmail(), firstUser.getId(), firstUser.getName())

////Exercício 2

// A- Uma vez.

// B- Duas vezes, acredito que seja a primeira pela chamado do constructor da class user, e outra vez no constructor da class customer, ja que customer extende ao User.


class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }
    public getPurchases(): number {
        return this.purchaseTotal;
      }
      public getpw(): string {
        return this.password;
      }
  }

  const firstCustomer: Customer = new Customer("001","customer1@email.com","customer1","pw123","455-665-225")

////Exercício 3

// A- 
console.log("firstCostumer ID=>",firstCustomer.getId())
console.log("firstCostumer EMAIL=>",firstCustomer.getEmail())
console.log("firstCostumer NAME=>",firstCustomer.getName())
console.log("firstCostumer PASSWORD=>",firstCustomer.getpw())
console.log("firstCostumer CREDITCARD=>",firstCustomer.getCreditCard())
console.log("firstCostumer PRUCHASES=>",firstCustomer.getPurchases())

//B- Não, o dado password esta encapsulado como private, apenas a classe consegue acessar esse tipo dado, não suas filhas. Corrigiríamos esse "problema" trocando private por protected na class User.


////Exercício 4

// Feito.

////Exercício 5

// Feito.

////Exercício 6

  class Employee extends User{
    protected admissionDate: Date
    protected baseSalary:number

    constructor(id: string,
        email: string,
        name: string,
        password: string,
        admissionDate: Date,
        baseSalary: number)
        { super(id, email, name, password);
            this.admissionDate = admissionDate;
            this.baseSalary = baseSalary;
            }
    public getAdmissionDate(): Date {
		return this.admissionDate
	    }

	public getBaseSalary(): number {
		return this.baseSalary
	    }

  }
  const firstEmployee :Employee= new Employee("1","Lucas@email","Lucas","123",new Date(2022,0o1,26), 5000)
  console.log(firstEmployee)


    ////POLIMORFISMO      
    
////Exercício 1

// A - Consegui imprimir todas

interface Client {
    name: string;
    registrationNumber: number;
    consumedEnergy: number;
  
    calculateBill(): number;
  }

  const client: Client = {
    name: "Goli",
    registrationNumber: 1,
    consumedEnergy: 100,
  
    calculateBill: () => {
      const newBill = client.consumedEnergy*3.75
      return newBill;
    }
  }

  console.log(`Client name is ${client.name}`)
  console.log(`Client registration is ${client.registrationNumber}`)
  console.log(`Client has consumed a total of ${client.consumedEnergy} KWH`)
  console.log(`Client total bill is ${client.calculateBill()} reais`)


  ////Exercício 2

  // A- Ela me diz que não é possivel criar uma instancia de uma classe abstrata.
  // B - trocar o encapsulador abstract?

abstract class Place {
  constructor(protected cep: string) {}

	public getCep(): string {
		return this.cep;
  }
}

  ////Exercício 3
  

  class Residence extends Place {
    constructor(
      private dwellersQuantity: number,
  
      cep: string
    ) {
      super(cep);
    }
    
    public getDwellersQuantity(): number {
      return this.dwellersQuantity
    }
  }
  
  class     Commerce extends Place {
    constructor(
      private floorsQuantity: number,
      // Refere-se à quantidade de andares do lugar
  
      cep: string
    ) {
      super(cep);
    }
  
    public getFloorsQuantity(): number {
      return this.floorsQuantity;
    }
  }
  
  class Industry extends Place {
    constructor(
      private machinesQuantity: number,
      // Refere-se à quantidade de máquinas do local
  
      cep: string
    ) {
      super(cep);
    }
  
    public getMachinesQuantity(): number {
      return this.machinesQuantity;
    }
  }

  const firstResidence: Residence = new Residence(5,"222,222,222-22")
  const firstCommerce: Commerce = new Commerce(10,"222,555,555-22")
  const firstIndustry: Industry = new Industry(2,"777,222,888-22")

  console.log(`firstResidence has ${firstResidence.getDwellersQuantity()} dwellers and zipcode is ${firstResidence.getCep()}`)
  console.log(`firstCommmerce has ${firstCommerce.getFloorsQuantity()} floors and zipcode is ${firstCommerce.getCep()}`)
  console.log(`firstIndustry has ${firstIndustry.getMachinesQuantity()} machines and zipcode is ${firstIndustry.getCep()}`)

    ////Exercício 4


    class ResidentialClient extends Residence implements Client {
        constructor(
          public name: string,
          public registrationNumber: number,
          public consumedEnergy: number,
          private cpf: string,
          residentsQuantity: number,
          cep: string
        ) {
          super(residentsQuantity, cep);
        }
      
        public getCpf(): string {
          return this.cpf;
        }
      
        public calculateBill(): number {
          return this.consumedEnergy * 0.75;
        }
      }

      const firstResidentialClient :ResidentialClient = new ResidentialClient("Aversi", 7, 250,"383.383.383-38",5,"222.222.222.07")

      console.log(`Residential client ${firstResidentialClient.name} registration number ${firstResidentialClient.registrationNumber} your total bill is ${firstResidentialClient.calculateBill()} reais`)

          ////Exercício 5

          //A - as semelhanças sao os dados da interface Client
          //B - as diferenças sao os dados herdados, uma vem de residence a outra de commerce, logo uma herda residentsQuantity e a outra floorQuantity além da contar ser mais barata para o cliente comercial
    
          class CommercialClient extends Commerce implements Client {
            constructor(
              public name: string,
              public registrationNumber: number,
              public consumedEnergy: number,
              private cnpj: string,
              residentsQuantity: number,
              cep: string
            ) {
              super(residentsQuantity, cep);
            }
          
            public getCnpj(): string {
              return this.cnpj;
            }
          
            public calculateBill(): number {
              return this.consumedEnergy * 0.53;
            }
          }

          const firstCommercialClient :CommercialClient = new CommercialClient("Aversi LTDA", 777, 1500,"555555555555/1000-25",5,"222.222.222.07")

          console.log(firstCommercialClient)


          console.log(`${firstCommercialClient.name}, CNPJ ${firstCommercialClient.getCnpj()}, your bill this month is ${firstCommercialClient.calculateBill()} 
          `)


          //EXERCICIO 6

          class IndustrialClient extends Industry implements Client {
            constructor(
              public name: string,
              public registrationNumber: number,
              public consumedEnergy: number,
              private industryNumber: string,
              machinesQuantity: number,
              cep: string
            ) {
              super(machinesQuantity, cep);
            }
          
            public getIndustryNumber(): string {
              return this.industryNumber;
            }
          
            public calculateBill(): number {
              return this.consumedEnergy * 0.53;
            }
          }

          const firstIndustrialClient :IndustrialClient = new IndustrialClient("Aversi ENTERPRISES", 4, 10000,"777",5,"06851-500")

          console.log(firstIndustrialClient)

          console.log(`${firstIndustrialClient.name}, CNPJ ${firstIndustrialClient.getIndustryNumber()}, your bill this month is ${firstIndustrialClient.calculateBill()} 
          `)
