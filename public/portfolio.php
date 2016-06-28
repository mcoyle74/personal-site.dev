<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Portfolio</title>
	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

	<!-- Optional theme -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">
	<link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'>
	
	<link rel="stylesheet" type="text/css" href="/css/style-main.css">
</head>

<body>
	<nav class="navbar navbar-static-top">
		<div class="container">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#mdc-navbar" aria-expanded="false">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="/index.html">Michael David Coyle</a>
			</div>
			<div class="collapse navbar-collapse navbar-right" id="mdc-navbar">
				<ul class="nav navbar-nav">
					<li><a href="/resume.html" id="resume">Resume</a></li>
					<li><a href="/portfolio.php" id="portfolio">Portfolio</a></li>
					<li><a href="/contact.php" id="contact">Contact</a></li>
					<li><a href="/login.php" id="login">Sign in</a></li>
				</ul>
			</div>
		</div>
	</nav>
	
	<div class="container">
		<h1>Portfolio</h1>
	</div>
	
	<div class="container">
		<div class="row">
			<div class="col-sm-4 col-md-4">
				<a href="/calculator.html" class="thumbnail">
					<img src="/img/calculator.png" alt="Calculator">
					<div class="caption">
						<h3>Calculator</h3>
						<p>HTML, CSS and JavaScript</p>
						<p>Percent (%) and plus-minus(&plusmn;) buttons are not yet functional.</p>
						<div class="progress">
							<div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style="width: 90%;">
								90%
							</div>
						</div>
					</div>

				</a>
			</div>
			<div class="col-sm-4 col-md-4">
				<a href="/weather_map.html" class="thumbnail">
					<img src="/img/weather_map.png" alt="Weather Map">
					<div class="caption">
						<h3>Weather Application</h3>
						<p>HTML, CSS, Bootstrap, JavaScript, jQuery and openweathermap.org API</p>
						<p>Fully functional, but looking to add extra styling based on the forecast.</p>
						<div class="progress">
							<div class="progress-bar" role="progressbar" aria-valuenow="96" aria-valuemin="0" aria-valuemax="100" style="width: 96%;">
								96%
							</div>
						</div>
					</div>
				</a>
			</div>
			<div class="col-sm-4 col-md-4">
				<a href="/simon.html" class="thumbnail">
					<img src="/img/simon.png" alt="Simple Simon">
					<div class="caption">
						<h3>Simple Simon Game</h3>
						<p>HTML, CSS, JavaScript and jQuery.</p>
						<p>The game is fully functional, but I'm looking to add two more CSS options.</p>
						<div class="progress">
							<div class="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style="width: 95%;">
								95%
							</div>
						</div>
					</div>
				</a>
			</div>

			</div>
	</div>

	<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<!-- Latest compiled and minified JavaScript -->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
</body>
</html>