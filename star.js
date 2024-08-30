function StarsLoop(){
    let star = "* "
    for (let i = 1; i <= 10; i++) {  
        let pattern = '';  
        for (let j = 1; j <= i; j++) {  
            pattern += star; 
        }  
        console.log(pattern);  
    }

}

StarsLoop();



