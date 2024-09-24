document.getElementById('donate-btn').addEventListener('click',function(){
    document.getElementById('donet-sec').classList.remove('hidden');
    document.getElementById('history-sec').classList.add('hidden');
    document.getElementById('donate-btn').classList.add('bg-lime-500');
    document.getElementById('history-btn').classList.remove('bg-lime-500');

})

document.getElementById('history-btn').addEventListener('click',function(){
    document.getElementById('history-sec').classList.remove('hidden');
    document.getElementById('donet-sec').classList.add('hidden');
    document.getElementById('history-btn').classList.add('bg-lime-500');
    document.getElementById('donate-btn').classList.remove('bg-lime-500');
    

})