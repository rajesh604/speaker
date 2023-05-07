const synth = window.speechSynthesis;
const inputTxt = document.querySelector('#input-txt');
const speakBtn = document.querySelector('#speak-btn');

speakBtn.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(inputTxt.value);
    synth.speak(utterance);
});
