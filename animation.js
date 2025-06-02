/*color change animation*/
const colors = ["red","orange","yellow","green","blue","indigo","violet"];

function updateBackground() {
      const gradient = `linear-gradient(30deg, ${colors.join(", ")})`;
      document.body.style.background = gradient;
    }

    setInterval(function () {
      const firstColor = colors.shift();
      colors.push(firstColor);
      updateBackground();
    }, 100); 
    updateBackground();

    const checkbox = document.getElementById('audio-toggle');
  const audio = document.getElementById('bg-audio');

  checkbox.addEventListener('change', function () {
    if (this.checked) {
      audio.play();
    } else {
      audio.pause();
    }
  });