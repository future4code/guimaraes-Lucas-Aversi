export const bestAttempt = (a:string,b:string,c:string) =>{
    if(a > b && a > c){return a}
    else if(b > c && b > a){return b}
    else{return c}
  }