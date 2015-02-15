function recuperarSenha() {
  new fries.Toast({
    content: 'A senha foi enviada para o seu email cadastrado.',
    duration: fries.Toast.duration.LONG
  });

  window.setTimeout(redirect('signin', 'forgot-pass'), 3000);
}

function confirmaReceita() {
  new fries.Toast({
    content: 'Sua receita foi adicionada.',
    duration: fries.Toast.duration.LONG
  });

  window.setTimeout(redirect('receitas', 'user/adicionar-receita'), 3000);
}

function createAccount() {
  new fries.Toast({
    content: 'Seu cadastro foi efetuado.',
    duration: fries.Toast.duration.LONG
  });

  window.setTimeout(redirect('signin', 'signup'), 3000);
}

function redirect(destino, atual) {
  var page = atual + '/';
  var href = window.location.href + destino +'/';
  var novaUrl = href.replace(page, '');

  window.location.href = novaUrl;
}
