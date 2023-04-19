
  const name = ["Guadalupe", "Ollie", "Aki"];
    let event = "surprise";
  function writeCards(name, event){
    let thankYou = []
          for (let i = 0; i < name.length; i++){
            thankYou.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
                      };
     return thankYou 
  };
  writeCards();

  
  function countDown(count){
    while (count > -1){console.log(count--)}
  }



