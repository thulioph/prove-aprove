<?php include('_head.php'); ?>

<section id="signin" class="container-fluid signin">
  <div class="row">
    <aside class="form-signin col-xs-12">
      <form id="form-signin" action="app">
        <div class="form-group">
          <label for="inputEmailSignin">Email</label>
          <input type="email" class="form-control" id="inputEmailSignin" placeholder="Seu email">
        </div>

        <div class="form-group">
          <label for="inputSenhaSignin">Senha</label>
          <input type="password" class="form-control" id="inputSenhaSignin" placeholder="Sua senha">
        </div>

        <button type="submit" class="btn btn-primary btn-block">Entrar</button>
      </form>

      <a class="link" href="change-pass">Esqueci minha senha</a>

      <p id="return-signup" class="col-xs-12 text-danger return-form">
        <!-- Retorno do formulário aqui. -->
      </p>
    </aside>
  </div>
</section>

<?php include('_scripts.php'); ?>
