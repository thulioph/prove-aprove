<?php include('_head.php'); ?>

<body>
  <!-- =========================================================================
    HEADER
    ============================================================================= -->
  <header class="header-primary">
    <a href="#" class="open-main-menu">MENU</a>
    <a href="#" class="pull-right open-user-menu">USER CONFIG</a>
  </header>
  <!-- =========================================================================
    MAIN
    ============================================================================= -->
  <main id="main" class="main">
      <!-- =========================================================================
      OFF-CANVAS
      ============================================================================= -->
      <!-- off-canvas-left -->
      <section id="off-canvas-left" class="full-page">
        <nav class="main-nav template-nav">
          <ul>
            <li>MENU</li>
            <li><a href="#" data-id="#wrap-home" class="change-page">Home</a></li>
            <li><a href="#" data-id="#wrap-contact" class="change-page">Contato</a></li>
          </ul>
        </nav>
        <nav class="user-config-nav template-nav">
          <ul>
            <li>MENU CONFIG USUÁRIO</li>
            <li>Nome do Usuário</li>
            <li><a href="#" data-id="#wrap-user-perfil" class="change-page">Perfil</a></li>
            <li><a href="#">Deslogar</a></li>
          </ul>
        </nav>
      </section>
      <!-- =========================================================================
      PAGES
      ============================================================================= -->
      <!-- wrap-home -->
      <section id="wrap-home" class="full-page iscroll-container active transition-normal">
        <div class="wrap-content">
          <h1>LISTANDO RECEITA POR CATEGORIA</h1>
          <div class="data-base-content" style="font-size:20px">

          </div>
        </div>
        <!--
        <div id="maisum" class="panLeftToClose" style="">
          TESTANDO PULL LEFT
        </div>
        -->
      </section>
      <!-- wrap-contact -->
      <section id="wrap-contact" class="full-page">
        <div class="wrap-content">
          <h1>CONTATO</h1>
          <p>lorem ipsum lorem lorem ipsum lorem lorem ipsum lorem lorem ipsum lorem lorem ipsum lorem lorem ipsum lorem lorem ipsum lorem   </p>
        </div>
      </section>
      <!-- wrap-contact -->
      <section id="wrap-user-perfil" class="full-page">
        <div class="wrap-content">
          <h1>PERFIL USUÁRIO</h1>
          <p>lorem ipsum lorem lorem ipsum lorem lorem ipsum lorem lorem ipsum lorem lorem ipsum lorem lorem ipsum lorem lorem ipsum lorem   </p>
        </div>
      </section>
  </main>
  <!-- =========================================================================
    FOOTER
    ============================================================================= -->
  <footer class="footer-primary">
  </footer>

<?php include('_scripts.php'); ?>
