const obj = {
    name : 'tivakron',
    grage : '2.5',
    credit : '60'
}

const funcgrede = (name1 = 'defaultname',grage1= 'defaultgrage',credit1= 0) => {

    if(credit1<60){
        credit1 = 0
        
    }else{
        credit1 = credit1
    }
    const obj2 = {
        name : name1,
        grage : grage1,
        credit : credit1}  
        
        return obj2

     
   

}


let test1 = funcgrede('time','4.00',60)
console.log(test1)