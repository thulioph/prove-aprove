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

  <!-- CSS -->
  <link rel="stylesheet" href="dist/css/style.min.css">

</head>

<body>
  <header class="header-primary">
	</header>

	<main id="main" class="main">
	</main>

	<footer class="footer-primary">
	</footer>


	<!-- JS -->
  <script src="dist/js/scripts.min.js"></script>
  <script src="dist/js/libs.min.js"></script>
  <script src="src/js/app/app.js"></script>

	<!-- BrowserSync -->
  <script type='text/javascript'>//<![CDATA[
;document.write("<script defer src='//HOST:3000/socket.io/socket.io.js'><\/script><script defer src='//HOST:3001/client/browser-sync-client.0.9.1.js'><\/script>".replace(/HOST/g, location.hostname));
//]]></script>

</body>
</html>
