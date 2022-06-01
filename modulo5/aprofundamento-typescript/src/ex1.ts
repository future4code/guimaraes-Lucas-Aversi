// 1 A


const minhaString:string | number = 14


// retorna erro pois o tipo definido é string. Para fazer funcionar é preciso usar o separador | Ou.


//1 B

const meuNumero:number | string = '14'

//Para fazer funcionar é preciso usar o separador | Ou.

//1C

type person = {
    name:string,
    age:number,
    favColor:string
}



const person1: person ={
    name: 'lucas',
    age: 31,
    favColor: 'red'
}

const person2: person ={
    name: 'Geraldo',
    age: 310,
    favColor: 'violet'
}

const person3: person ={
    name: 'Renata',
    age: 38,
    favColor: 'amarelo'
}

const person4: person ={
    name: 'Dona B',
    age: 60,
    favColor:"red"
}



//1 D

enum Cor {
	VERMELHA="ação",
	LARANJA="drama",
	AMARELA="comédia",
	VERDE="romance",
	AZUL="terror",
    ANIL="anil",
    VIOLETA="violeta"
}

const person5: person ={
    name: 'Pedro Bó',
    age: 10,
    favColor: Cor.AMARELA
}


