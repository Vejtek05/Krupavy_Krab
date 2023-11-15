const MINIMUM = 75;
const MAXIMUM = 100;
const jmenoUzivatele = window.prompt('Jak ti mám říkat?', 'Anonyme');
window.alert(`Ahoj, ${jmenoUzivatele}!`);
const jeZena = window.confirm('Jsi žena?');

if (jeZena) {
  const rokNarozeni = window.prompt('V jakém roce ses narodila?');
  const narozeniny = window.confirm('Už jsi měla letos narozeniny?');
  let vekUzivatele = 2023 - Number(rokNarozeni);

  if (!narozeniny) {
    vekUzivatele --;
  }

  if (Number(vekUzivatele) >= MINIMUM && Number(vekUzivatele) < MAXIMUM) {
    console.log(vekUzivatele);
    window.alert(`Gratuluji, můžeš na web!`);
  }

  else {
    if (!isNaN(Number(vekUzivatele))) {
      window.alert(`Lituji, nemáš ten správný věk!`);
    }
    else {
      window.alert(`${vekUzivatele} není číslo!`);
    }
  }
}

else {
  window.alert('Fuj! Kšá! Sem nesmíš!');
}