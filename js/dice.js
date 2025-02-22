function dice(event){
    event.preventDefault();
    const max=max_input.value();
    const number=number_input.value();
    const additional=additional_input.value();
    var dice=0;

    for (i=0; i<number;i++){
        var dice1=Math.floor(Math.random()*max);
        dice=dice+dice1;
    }
    dice=dice+additional;
    document.getElementById('output').innerText= dice;



}

button.addEventListener('click',dice);