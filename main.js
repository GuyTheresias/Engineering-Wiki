function backBtn() {
    document.getElementById('schools').hidden = false;
    document.getElementById('schools').scrollIntoView({ behavior: 'smooth' });
    
    document.getElementById('vFPU').hidden = true;
    document.getElementById('iFPU').hidden = true;
    document.getElementById('vFIT').hidden = true;
    document.getElementById('iFIT').hidden = true;
    document.getElementById('vUCF').hidden = true;
    document.getElementById('iUCF').hidden = true;
    document.getElementById('vFSU').hidden = true;
    document.getElementById('iFSU').hidden = true;
    document.getElementById('vUF').hidden = true;
    document.getElementById('iUF').hidden = true;

    document.getElementById('back').hidden = true;


}
function showFPU() {
    document.getElementById('schools').hidden = true;
    let vFPU = document.getElementById('vFPU');
    vFPU.hidden = false;
    vFPU.scrollIntoView({ behavior: 'smooth' });
    document.getElementById('iFPU').hidden = false;
    document.getElementById('back').hidden = false;
}

function showFIT() {
    document.getElementById('schools').hidden = true;
    let vFIT = document.getElementById('vFIT');
    vFIT.hidden = false;
    vFIT.scrollIntoView({ behavior: 'smooth' });
    document.getElementById('iFIT').hidden = false;
    document.getElementById('back').hidden = false;
}

function showUCF() {
    document.getElementById('schools').hidden = true;
    let vUCF = document.getElementById('vUCF');
    vUCF.hidden = false;
    vUCF.scrollIntoView({ behavior: 'smooth' });
    document.getElementById('iUCF').hidden = false;
    document.getElementById('back').hidden = false;
}

function showFSU() {
    document.getElementById('schools').hidden = true;
    let vFSU = document.getElementById('vFSU');
    vFSU.hidden = false;
    vFSU.scrollIntoView({ behavior: 'smooth' });
    document.getElementById('iFSU').hidden = false;
    document.getElementById('back').hidden = false;
}

function showUF() {
    document.getElementById('schools').hidden = true;
    let vUF = document.getElementById('vUF');
    vUF.hidden = false;
    vUF.scrollIntoView({ behavior: 'smooth' });
    document.getElementById('iUF').hidden = false;
    document.getElementById('back').hidden = false;
}
