<?php include('_head.php'); ?>

<section id="change-pass" class="container-fluid change-pass">
  <div class="row">
    <aside class="form-change-pass col-xs-12">

      <form id="form-change-pass" action="signin">
        <div class="form-group">
          <label for="inputEmailChangePass">Email</label>
          <input type="email" class="form-control" id="inputEmailChangePass" placeholder="Seu email">
        </div>

        <button type="submit" class="btn btn-success btn-block">Alterar Senha</button>
      </form>

      <p id="return-signup" class="col-xs-12 text-info return-form">
        Um link para redefinição de senha foi enviado para o email cadastrado.
      </p>
    </aside>
  </div>
</section>

<?php include('_scripts.php'); ?>
