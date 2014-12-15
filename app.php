<?php include('_head.php'); ?>

<body>
  <div class="container-fluid">
    <?php include('_header.php'); ?>

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
