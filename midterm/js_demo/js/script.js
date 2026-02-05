function askName() {
    var nameReturn = document.getElementById('ask-name');
    var name = prompt('Please enter your name in the box below:');
    if (name ==''){
        alert('Please try again.');
    } else {
        nameReturn.innerHTML = 'Hello ' + name + '! Nice to meet you!'
    }
}

function askQuestion() { 
    var p=prompt('How much wood would a woodchuck chuck if a woodchuck could chuck wood?');
    //in the code below != means not equal to
    if (p !=null) {
        document.getElementById('question').innerHTML = 'Wow! ' + p + ' is a lot of wood!';
    }

    }