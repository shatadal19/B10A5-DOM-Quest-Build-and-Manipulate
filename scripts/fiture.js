document.getElementById('donate-btn').addEventListener('click', function(){
    // event.preventDefault();
    document.getElementById('donet-sec').classList.remove('hidden');
    document.getElementById('history-sec').classList.add('hidden');
    console.log('hello')

})

document.getElementById('history-btn').addEventListener('click', function(){
    event.preventDefault();
    document.getElementById('history-sec').classList.remove('hidden');
    document.getElementById('donet-sec').classList.add('hidden');
    console.log('hello')
    

})