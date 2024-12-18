  const burgerMenu = document.querySelector('.menu-button'); 
  const closeButton = document.querySelector('#closeButton'); 
  const overlay = document.querySelector('#overlay');

  burgerMenu.addEventListener('click', () => {
      overlay.style.display = 'flex';
  });
  closeButton.addEventListener('click', () => {
      overlay.style.display = 'none';
  });
  overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
          overlay.style.display = 'none';
      }
  });
  function setActive(buttonId) {
          
    document.querySelectorAll('.button').forEach(button => {
    button.classList.remove('active');
        });

         
      document.getElementById(buttonId).classList.add('active');
      }