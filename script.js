window.onload = function generateExcuse() {
    let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
    let what = ['eat', 'pissed', 'crushed', 'broked'];
    let when = ['before the class', 'right in time', 'when I finished', 'during my lunch', 'while I was praying'];

    var rand1 = Math.floor((Math.random() * who.length));
    var rand2 = Math.floor((Math.random() * what.length));
    var rand3 = Math.floor((Math.random() * when.length));
    
    document.querySelector('.excuse').innerHTML = who[rand1] +" "+ what[rand2] +" "+  when[rand3];
}
