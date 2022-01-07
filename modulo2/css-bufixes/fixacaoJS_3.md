```
**Resposta do exercício fixação3 de JS**

function calculaNota(ex, p1, p2) {
  let mediafinal = (ex+p1+p2)/3 
  if (mediafinal >= 9 && mediafinal <= 10){
    return "A"
  }
  else if (mediafinal < 9 && mediafinal >=7.5){
    return "B"
  }
  else if (mediafinal <7.5 && mediafinal >=6){
    return "C"
  }
  else if (mediafinal <6 && mediafinal >=0){
    return "D"
  }
  
}
```