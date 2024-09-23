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
    }
   
})