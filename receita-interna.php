<?php include('_head.php'); ?>

<body>
  <div class="container-fluid">
    <header id="header-primary" class="header-primary">
      <a href="#" id="menu" class="link-global">
        <span class="glyphicon glyphicon-list"></span>
      </a>

      <a href="#" id="user" class="link-global">
        <span class="glyphicon glyphicon-user"></span>
      </a>
    </header>

    <div class="row">
      <main id="main" class="col-xs-12 main">
        <h3 class="greeting text-info">Que tal fazer esta receita?</h3>

        <section id="recipes-internal" class="recipes">
          <aside class="recipes-info">
            <header>
              <div class="image"></div>
              <h3>Lasanha</h3>
              <p class="recipes-time">1h 40m - 20 porções</p>
            </header>

            <div id="recipes-preparation" class="recipes-preparation">
              <ul>
                <li>Molho de Tomate</li>
                <li>Queijo</li>
                <li>Carne Moída</li>
                <li>Molho de Tomate</li>
                <li>Queijo</li>
                <li>Carne Moída</li>
              </ul>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
                eos consequuntur fuga natus blanditiis omnis voluptates
                dignissimos molestias, non, nam obcaecati impedit optio facilis
                officiis tempore nemo, aperiam deleniti. Harum natus laborum
                reiciendis, minus nobis excepturi obcaecati suscipit aperiam
                commodi odit iusto! Sapiente aperiam nihil sit distinctio odio,
                vel qui aspernatur sed itaque nisi officia, delectus nam
                recusandae. Praesentium quos odio est tempore reiciendis nisi
                accusamus unde eligendi aliquam repellat veritatis, odit sunt
                corporis alias laudantium deleniti hic voluptates natus.
                Deleniti reiciendis nam cum dolorem rerum sunt nemo velit.
              </p>
            </div>

            <footer class="recipes-options">
              <div class="col-xs-4">
                <label for="aprovaReceita">Você aprova esta receita?</label>
                <input type="radio" id="aprovaReceita" class="approve" value="option1">
              </div>

              <div class="col-xs-4">
                <label>Você avalia esta receita?</label>
                <select class="form-control">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </select>
              </div>

              <div class="col-xs-4">
                <label for="favoritaReceita">Você favorita esta receita?</label>
                <input type="radio" id="favoritaReceita" class="favorite" value="option2">
              </div>
            </footer>
          </aside>
        </section>
      </main>
    </div>
  </div>

<?php include('_scripts.php'); ?>
