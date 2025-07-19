const box = document.querySelector('.box');

function launchConfetti() {
    let count = 0;
    const interval = setInterval(() => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
        count++;
        if (count === 5) clearInterval(interval); // 5 bursts
    }, 300);
}

function renderFinalLove() {
    box.innerHTML = `
    <img src="/pictures/HPPY.gif" />
    <h2>Yayyy I lopppp uuuu too! ❤️❤️🤍🤍</h2>
    `;
    launchConfetti()
}

function renderFinalLove2() {
    box.innerHTML = `
    <img src="/pictures/HPPY.gif" />
    <h2>HAHAHA I KNEW ITT I lopppp uuuu too! 😁😁</h2>
    `;
    launchConfetti()
}

function renderFine() {
    box.innerHTML = `
        <img src="/pictures/fine.gif" />
        <h2>FINEE 😠😠</h2>
        <div class="btns">
            <button id="yes6">YES</button>
            <button id="no6" disabled=disabled>UPS</button>
        </div>
    `;
    document.getElementById('yes6').addEventListener('click', renderFinalLove2);
}

function renderDesperate() {
    box.innerHTML = `
        <img src="/pictures/PLEASE.gif" />
        <h2>PLEASE BABYY😭😭🥺</h2>
        <div class="btns">
            <button id="yes5">Yes</button>
            <button id="no5">Nah</button>
        </div>
    `;
    document.getElementById('yes5').addEventListener('click', renderFinalLove);
    document.getElementById('no5').addEventListener('click', renderFine);
}

function renderImGonnaCry() {
    box.innerHTML = `
        <img src="/pictures/im gonnna cry.gif" />
        <h2>im gonna CRYY....😔😭😭</h2>
        <div class="btns">
            <button id="yes4">Yes</button>
            <button id="no4">Nah</button>
        </div>
    `;
    document.getElementById('yes4').addEventListener('click', renderFinalLove);
    document.getElementById('no4').addEventListener('click', renderDesperate);
}

function renderPlease() {
    box.innerHTML = `
        <img src="/pictures/pleaseeeee.gif" />
        <h2>please...??🥺😔</h2>
        <div class="btns">
            <button id="yes3">Yes</button>
            <button id="no3">Nah</button>
        </div>
    `;
    document.getElementById('yes3').addEventListener('click', renderFinalLove);
    document.getElementById('no3').addEventListener('click', renderImGonnaCry);
}

function renderAreYouSure() {
    box.innerHTML = `
        <img src="/pictures/are u sure.gif" />
        <h2>Are you sureee? 🥺</h2>
        <div class="btns">
            <button id="yes2">Yes</button>
            <button id="no2">Nah</button>
        </div>
    `;
    document.getElementById('yes2').addEventListener('click', renderFinalLove);
    document.getElementById('no2').addEventListener('click', renderPlease);
}


document.getElementById('yes').addEventListener('click', renderFinalLove);
document.getElementById('no').addEventListener('click', renderAreYouSure);