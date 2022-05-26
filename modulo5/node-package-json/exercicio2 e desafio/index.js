//2

const operacao = process.argv[2]
const num1 = Number (process.argv[3])
const num2 = Number (process.argv[4])


switch(operacao){
	case "soma":
		console.log ('\x1b[31m%s\x1b[0m',`O resultado da soma é:`, num1+num2)
		break;
	case "subt":
		console.log ('\x1b[32m%s\x1b[0m',`O resultado da subtração é:`, num1-num2)
		break;
    case "mult":
        console.log ('\x1b[33m%s\x1b[0m',`O resultado da multiplicação é:`, num1*num2)
        break;
    case "div":
        console.log ('\x1b[34m%s\x1b[0m',`O resultado da divisão é:`, num1/num2)
        break;
    case "resto":
        console.log ('\x1b[35m%s\x1b[0m',`O resto da operação desejada é:`, num1%num2)
        break;
        
}

