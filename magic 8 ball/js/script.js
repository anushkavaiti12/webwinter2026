alert('hi')
function magic8ball() {
    var fortune = getafortune();
    showfortune(fortune);
}

function getafortune() {
    var fortunes = ["yes", "no", "maybe", "ask again"]
    var random = rando(fortunes.length)
    return fortunes[random];
}

 function rando(max){
     var lessthan_number = Math.random() * max
    return Math.floor(lessthan_number)
    
    }


function showfortune(fortune) {     
    document.getElementById("answer").innerHTML = fortune;
}