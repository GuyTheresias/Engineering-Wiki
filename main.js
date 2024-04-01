function showFPU() {
    document.getElementById('schools').hidden = true;
    let vFPU = document.getElementById('vFPU');
    vFPU.hidden = false;
    vFPU.scrollIntoView({ behavior: 'smooth' });
    document.getElementById('iFPU').hidden = false;
}

function showFIT() {
    document.getElementById('schools').hidden = true;
    let vFIT = document.getElementById('vFIT');
    vFIT.hidden = false;
    vFIT.scrollIntoView({ behavior: 'smooth' });
    document.getElementById('iFIT').hidden = false;
}