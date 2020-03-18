// var a = 1;
// var b = 2;
// function f(a,b){
//     var c = a+b

//     return c
// }

// var res = f(a,b)
// console.log("->"+f(a,b))
// console.log(res)





// const multiply = (a,b) => {
//     return a*b
// }

// var result = multiply(5,2)
// console.log(result) 

// function multiply1(a,b){

//     return a*b
// }

// var result1 = multiply1(5,3)
// console.log(result1)
const obj = {
    name : 'tivakron',
    grage : 'A',
    credit : '60'
}

const funcgrede = (name = 'defaultname',grage= 'defaultgrage',credit= 'defaultcredit') => {
if(credit<60){
    grage = 'F'
return ` name :${name}\n grage :${grage}\n credit :${credit}`
}else if(credit>60){
    grage = 'A'
return ` name :${name}\n grage :${grage}\n credit :${credit}`
}else{
    return ` name :${name}\n grage :${grage}\n credit :${credit}`
}
}

console.log(funcgrede(obj.name,obj.grage))
let test1 = funcgrede('time','A','50')
console.log(test1)