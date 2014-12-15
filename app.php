<?php include('_head.php'); ?>

<body>
  <div class="container-fluid">
    <header id="header-primary" class="header-primary">
      <a href="#categories" class="link-global">
        <span class="glyphicon glyphicon-list"></span>
      </a>

      <a href="#config" class="link-global">
        <span class="glyphicon glyphicon-user"></span>
      </a>
    </header>

    <!-- offcanvas left -->
    <aside id="categories" class="off-canvas categories">
      <h3 class="greeting text-info">Escolha alguma categoria.</h3>
      <input type="search" class="input-search form-control" placeholder="Busque alguma categoria digitando.">

      <ul class="categories-list">
        <li class="categories-item"><a href="#" class="categories-link">Aves</a></li>
        <li class="categories-item"><a href="#" class="categories-link">Bebidas</a></li>
        <li class="categories-item"><a href="#" class="categories-link">Bolos</a></li>
        <li class="categories-item"><a href="#" class="categories-link">Carnes</a></li>
        <li class="categories-item"><a href="#" class="categories-link">Doces</a></li>
        <li class="categories-item"><a href="#" class="categories-link">Especiais</a></li>
        <li class="categories-item"><a href="#" class="categories-link">Lanches</a></li>
        <li class="categories-item"><a href="#" class="categories-link">Massas</a></li>
        <li class="categories-item"><a href="#" class="categories-link">Peixes e Frutos do Mar</a></li>
        <li class="categories-item"><a href="#" class="categories-link">Prato Único</a></li>
        <li class="categories-item"><a href="#" class="categories-link">Saladas</a></li>
        <li class="categories-item"><a href="#" class="categories-link">Sopas</a></li>
      </ul>
    </aside>

    <!-- offcanvas right -->
    <aside id="config" class="off-canvas config">
      <h3 class="greeting text-info">Seu perfil.</h3>

      <ul class="config-list">
        <li class="config-item"><a href="#" class="config-link">Adicionar Receita</a></li>
        <li class="config-item"><a href="#" class="config-link">Minhas Receitas</a></li>
        <li class="config-item"><a href="#" class="config-link">Receitas Favoritas</a></li>
        <li class="config-item"><a href="#" class="config-link">Receitas Aprovadas</a></li>
        <li class="config-item"><a href="#" class="config-link">Receitas Avaliadas</a></li>
        <li class="config-item"><a href="#" class="config-link">Alterar Senha</a></li>
        <li class="config-item"><a href="index" class="config-link">Sair</a></li>
      </ul>
    </aside>

    <!-- Main -->
    <div class="row">
      <main id="main" class="main">
        <section id="recipes"> <!-- Recipes -->
          <h3 class="greeting text-info">O que você deseja?</h3>

          <ul class="recipe-list">
            <li class="recipe-item featured">
              <a href="receita-interna" class="recipe-link">
                <h4 class="recipe-title">Lasanha</h4>
                <figure class="recipe-image">
                  <img src="src/images/recipes/lasanha.jpg" alt="Foto de uma Lasanha">
                </figure>
              </a>
            </li>

            <li class="recipe-item">
              <a href="receita-interna" class="recipe-link">
                <h4 class="recipe-title">Drink</h4>
                <figure class="recipe-image">
                  <img src="src/images/recipes/drink.jpg" alt="Foto de uma Drink">
                </figure>
              </a>
            </li>

            <li class="recipe-item">
              <a href="receita-interna" class="recipe-link">
                <h4 class="recipe-title">Brigadeiro</h4>
                <figure class="recipe-image">
                  <img src="src/images/recipes/brigadeiro.jpg" alt="Foto de uma Brigadeiro">
                </figure>
              </a>
            </li>

            <li class="recipe-item">
              <a href="receita-interna" class="recipe-link">
                <h4 class="recipe-title">Empada</h4>
                <figure class="recipe-image">
                  <img src="src/images/recipes/empada.jpg" alt="Foto de uma Empada">
                </figure>
              </a>
            </li>

            <li class="recipe-item">
              <a href="receita-interna" class="recipe-link">
                <h4 class="recipe-title">Pão de Queijo</h4>
                <figure class="recipe-image">
                  <img src="src/images/recipes/pao-de-queijo.jpg" alt="Foto de uma Pão de Queijo">
                </figure>
              </a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  </div>

<?php include('_scripts.php'); ?>
