const botao = document.getElementById('Botao_Stat');
  const somDeClick = new Audio('assets/sounds/click-button.mp3');

  botao.addEventListener('click', () => {
    somDeClick.currentTime = 0;
    somDeClick.play();
  });