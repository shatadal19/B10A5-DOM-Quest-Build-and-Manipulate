var today = new Date();
var time = today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();

document.getElementById('sub1-btn').addEventListener('click', function(event){
    event.preventDefault();
    const donteN = getInputFieldByValuedId('d-n');
    const Mblance = getInputFieldByValuedIdInnertext('m-blance');

    if(isNaN(donteN)){
        alert('Failed To donet Money');
        return;
    }
   
    
    if(donteN>0 && Mblance>=donteN){
        const blanceN = getInputFieldByValuedIdInnertext('t-n');
        const nBlanceN = blanceN + donteN;
        console.log(nBlanceN);
        document.getElementById('t-n').innerText =nBlanceN;
        const Mblance = getInputFieldByValuedIdInnertext('m-blance');
        const nMBlance = Mblance - donteN;
        document.getElementById('m-blance').innerText =nMBlance;

        const div =document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.classList.add('card');
        div.classList.add('card-side');
        div.classList.add('rounded-lg');
        // div.classList.add('shadow-3xl');
        div.innerHTML = `
        
        <h2 class=" text-3xl font-bold text-black"> ${donteN}BDT Donate for Flood at Noakhali, Bangladesh <p>And the time is ${time}</p></h2>
        
        `;
        document.getElementById('insertion').appendChild(div);
        // const div = document.createElement('div');
        // div.classList.add('card card-side bg-base-300 shadow-3xl');
        // div.innerHTML = `
        // <h2 class="${donteN} text-3xl font-bold">Donate for Flood at Noakhali, Bangladesh</h2>
        // `;
        // document.getElementById('insertion').appendChild(div);
    }
   
})


document.getElementById('sub2-btn').addEventListener('click', function(event){
    event.preventDefault();
    const donteF = getInputFieldByValuedId('d-f');
    const Mblance = getInputFieldByValuedIdInnertext('m-blance');

    if(isNaN(donteF)){
        alert('Failed To donet Money');
        return;
    }
  

    if(donteF>0 && Mblance>=donteF){
        const blanceF = getInputFieldByValuedIdInnertext('t-f');
        const nBlanceF = blanceF + donteF;
        // console.log(nBlanceN);
        document.getElementById('t-f').innerText =nBlanceF;
        const Mblance = getInputFieldByValuedIdInnertext('m-blance');
        const nMBlance = Mblance - donteF;
        document.getElementById('m-blance').innerText =nMBlance;
        const div =document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.classList.add('card');
        div.classList.add('card-side');
        div.classList.add('rounded-lg');
        // div.classList.add('shadow-3xl');
        div.innerHTML = `
        
        <h2 class=" text-3xl font-bold text-black"> ${donteF} BDT Donate for Flood Relief in Feni,Bangladesh <p>And the time is ${time}</p></h2>
        
        `;
        document.getElementById('insertion').appendChild(div);
        
    }
   
})


document.getElementById('sub3-btn').addEventListener('click', function(event){
    event.preventDefault();
    const donteQ = getInputFieldByValuedId('d-Q');
    const Mblance = getInputFieldByValuedIdInnertext('m-blance');

    if(isNaN(donteQ)){
        alert('Failed To donet Money');
        return;
    }
    
    if(donteQ>0 && Mblance>=donteQ){
        const blanceQ = getInputFieldByValuedIdInnertext('t-Q');
        const nBlanceQ = blanceQ + donteQ;
        console.log(nBlanceQ);
        document.getElementById('t-Q').innerText =nBlanceQ;
        const Mblance = getInputFieldByValuedIdInnertext('m-blance');
        const nMBlance = Mblance - donteQ;
        document.getElementById('m-blance').innerText =nMBlance;
        const div =document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.classList.add('card');
        div.classList.add('card-side');
        div.classList.add('rounded-lg');
        // div.classList.add('shadow-3xl');
        div.innerHTML = `
        
        <h2 class=" text-3xl font-bold text-black"> ${donteQ}BDT Donate for Aid for Injured in the Quota Movement <p>And the time is ${time}</p></h2>
        
        `;
        document.getElementById('insertion').appendChild(div);
    }
   
})