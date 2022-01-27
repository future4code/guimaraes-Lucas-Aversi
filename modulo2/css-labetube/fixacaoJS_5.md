```
**Resposta do exercício fixação5 de JS**

    function criarArrayNomesAnimais() {

    const animais = [
      { nome: "Cachorro", classificacao: "mamífero" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
    ]
    
let nomeAnimais = animais.map ((item, index, array) =>{
    return item.nome})
    return (nomeAnimais)
    }
    
}
```