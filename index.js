const obj = {
    name : 'tivakron',
    grage : '2.5',
    credit : '60'
}

const funcgrede = (name1 = 'defaultname',grage1= 0.0,credit1= 0) => {

    if(credit1>=60)
    {
        if(grage1 == 0.0){
            grage1 = 'F'
        }else if(grage1 == 1.0){
            grage1 = 'D'
        }else if(grage1 == 1.5){
            grage1 = 'D+'
        }else if(grage1 == 2.0){
            grage1 = 'C'
        }else if(grage1 == 2.5){
            grage1 = 'C+'
        }else if(grage1 == 3.0){
            grage1 = 'B'
        }else if(grage1 == 3.5){
            grage1 = 'B+'
        }else if(grage1 == 4.0){
            grage1 = 'A'
        }      
    }
    else
    {
        if(grage1 == 2.5){
            grage1 = 'D'
        }else if(grage1 == 3.0){
            grage1 = 'D+'
        }else if(grage1 == 3.5){
            grage1 = 'C'
        }else if(grage1 == 4.0){
            grage1 = 'C+'
        }else{
            grage1 = 'F'
        }
    }
        
    
    const obj2 = {
        name : name1,
        grage : grage1,
        credit : credit1}  
        
        return obj2

     
   

}


let test1 = funcgrede('time',4,50)
console.log(test1)