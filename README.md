# -Grade-calculation
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
