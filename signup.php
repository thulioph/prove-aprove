<?php include('_head.php'); ?>

<section id="signup" class="container-fluid signup">
  <div class="row">
    <aside class="form-signup col-xs-12">
      <form id="form-signup" action="app">
        <div class="form-group">
          <label for="inputNomeSignup">Nome</label>
          <input type="text" class="form-control" id="inputNomeSignup" placeholder="Seu nome">
        </div>

        <div class="form-group">
          <label for="inputEmailSignup">Email</label>
          <input type="email" class="form-control" id="inputEmailSignup" placeholder="Seu email">
        </div>

        <div class="form-group">
          <label for="inputSenhaSignup">Senha</label>
          <input type="password" class="form-control" id="inputSenhaSignup" placeholder="Sua senha">
        </div>

        <button type="submit" class="btn btn-primary btn-block">Criar conta</button>
      </form>

      <p id="return-signup" class="col-xs-12 text-success return-form">
        Retorno do formulário aqui.
      </p>
    </aside>
  </div>
</section>

<?php include('_scripts.php'); ?>
