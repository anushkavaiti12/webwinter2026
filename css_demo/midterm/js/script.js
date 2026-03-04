document.addEventListener('DOMContentLoaded', function() {


    document.getElementById('btn1').addEventListener('click', function() {
        alert('Hello! This is button 1.');
    });

    document.getElementById('btn2').addEventListener('click', function() {
        alert('Hello! This is button 2.');
    });

  
    function askName() {
        const nameReturn = document.getElementById('ask-name');
        const name = prompt('Please enter your name in the box below:');
        if (name === '') {
            alert('Please try again.');
        } else {
            nameReturn.innerHTML = 'Hello ' + name + '! Nice to meet you!';
        }
    }

    function askExperience() {
        const exp = prompt('How experienced are you at badminton? (Beginner / Intermediate / Advanced)');
        if (exp != null && exp !== '') {
            document.getElementById('question').innerHTML = 'Got it! You consider yourself: ' + exp + '.';
        } else {
            document.getElementById('question').innerHTML = 'No experience entered.';
        }
    }

    document.getElementById('btnName').addEventListener('click', askName);
    document.getElementById('btnQuestion').addEventListener('click', askExperience);

});