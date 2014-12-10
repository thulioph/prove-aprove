<?php include('Constants.php'); ?>

<!doctype html>
<html xmlns:og="http://ogp.me/ns" lang="pt-br">
<head>
	<meta charset="utf-8" />

	<title><?php echo _TITLE ?></title>

  <!-- META TAGS -->
  <meta name="viewport" content="width=device-width, user-scalable=no">
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black" />
  <meta name="apple-touch-fullscreen" content="yes" />
  <meta name="HandheldFriendly" content="true" />
  <meta name="format-detection" content="telephone=yes">
  <meta http-equiv="cleartype" content="on">

  <!-- Apple Touch Icon -->
  <link rel="apple-touch-icon" href="touch-icon@2x.png">
  <link rel="apple-touch-icon" sizes="76x76" href="touch-icon-ipad.png">
  <link rel="apple-touch-icon" sizes="120x120" href="touch-icon@2x.png">
  <link rel="apple-touch-icon" sizes="152x152" href="touch-icon-ipad@2x.png">

  <!-- CSS 
  <link rel="stylesheet" href="dist/css/style.min.css">-->
  <link rel="stylesheet" href="src/css/reset.css">
  <link rel="stylesheet" href="src/css/style-leonardo.css">

</head>

<body>
  <header class="header-primary">
	</header>

	<main id="main" class="main">

    <section id="off-canvas-left" class="full-page">
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contato</li>
        </ul>  
      </nav>
    </section>

    <section id="wrap-home" class="full-page active">
      <div class="wrap-content">
        <h1>2 Home</h1>
        <p>lorem ipsum lorem lorem ipsum lorem lorem ipsum lorem lorem ipsum lorem lorem ipsum lorem lorem ipsum lorem lorem ipsum lorem   </p>
      </div>
      <div id="maisum" class="panLeftToClose" style="">
        TESTANDO PULL LEFT
      </div>
      <div id="container">
        <div id="pad">Toque &<br>arrastes</div>
      </div>
      <div id="ponteiro"></div>
    </section>




	</main>

	<footer class="footer-primary">
	</footer>


	<!-- JS 
  <script src="dist/js/scripts.min.js"></script>
  <script src="dist/js/libs.min.js"></script>-->
  <!-- JS-libs -->
  <script src="src/js/libs/jquery-2.1.1.min.js"></script>
  <script src="src/js/libs/classListfix.js"></script>
  <script src="src/js/libs/fastclickjs.js"></script>
  <script src="src/js/libs/hammer.js"></script>
  <!-- JS-modules -->
  <script src="src/js/app/APP.js"></script>
  <script src="src/js/app/APP.Functions.js"></script>
  <script src="src/js/app/APP.Navigation.js"></script>
  <script src="src/js/app/APP.Hammer.js"></script>

	<!-- BrowserSync 
  <script type='text/javascript'>//<![CDATA[
;document.write("<script defer src='//HOST:3000/socket.io/socket.io.js'><\/script><script defer src='//HOST:3001/client/browser-sync-client.0.9.1.js'><\/script>".replace(/HOST/g, location.hostname));
//]]></script>-->

</body>
</html>
