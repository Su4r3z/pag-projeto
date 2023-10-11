function mostrarInput(id) {
    let esfera = document.querySelector("#" + id).previousElementSibling;
    let input = document.getElementById(id);
    let esfera2 = document.getElementById('#input2');

    if (id === 'input2') {
        esfera.style.transform = "translateX(-10px)";
      } else {
        // Move as outras esferas para a esquerda
        esfera.style.transform = "translateX(-10px)";
      }
    // Torna o input visível
    setTimeout(function () {
      input.style.opacity = 0.5;
      input.style.width = "200px";
    }, 0);
  }

  function naoOcultar(id) {
    let input = document.getElementById(id);
    input.oninput = null;
  }

  function trocarImagem(element) {
    // Trocar a imagem de fundo quando a esfera for clicada
    element.style.backgroundImage = "url('../img/desbloquear.png')";
  }