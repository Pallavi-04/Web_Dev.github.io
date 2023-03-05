function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);
    const key = document.querySelector(`.key[data-key="${e.key}"]`);

    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0; //rewind audio to start again
    audio.play();
}

function transitionRemove(e) {
    if (e.propertyName !== 'transform')
        return; //skip if not transform
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', transitionRemove));

window.addEventListener('keydown', playSound);