function shortToast() {
  new fries.Toast({
    content: 'A senha foi enviada para o seu email cadastrado.',
    duration: fries.Toast.duration.LONG
  });
}

function dialog() {
  new fries.Toast({
    content: 'Sua receita foi adicionada.',
    duration: fries.Toast.duration.LONG
  });

  window.setTimeout(redirect, 3000);

  function redirect() {
    var page = 'adicionar-receita/'
    var href = window.location.href = 'http://localhost:8888/unibratec-pos/projeto-final/prove-aprove/#/user/';

    href.replace(page);
  }
}

