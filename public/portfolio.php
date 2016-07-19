<?php

function pageController()
{
	require_once 'navbar.php';

	return [
		'navbar' => $navbar
	]; 
}

extract(pageController());

?>

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
	<?= $navbar ?>
	
	<div class="container">
		<h1>Portfolio</h1>
	</div>
	
	<div class="container">
		<div class="row">
			<div class="col-sm-4 col-md-4">
				<a href="/calculator.html" class="thumbnail" target="_blank">
					<img src="/img/calculator.png" alt="Calculator">
					<div class="caption">
						<h3>Calculator</h3>
						<p>HTML, CSS and JavaScript</p>
						<p>
							A basic calculator. The layout is based on iOS Calculator, but the color scheme is that of the US and Texas flag.
							<br>
							Percent (%) and plus-minus(&plusmn;) buttons only work on the left operand, and a new operator does not clear the right operand.
						</p>
						<div class="progress">
							<div class="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style="width: 95%;">
								95%
							</div>
						</div>
					</div>

				</a>
			</div>

			<div class="col-sm-4 col-md-4">
				<a href="/weather_map.html" class="thumbnail" target="_blank">
					<img src="/img/weather_map.png" alt="Weather Map">
					<div class="caption">
						<h3>Weather Application</h3>
						<p>HTML, CSS, Bootstrap, JavaScript, jQuery and openweathermap.org API</p>
						<p>
							Gives a 3-day weather forecast based on a form input or by dragging the map marker. Includes a background image based on the forecast.
							<br>
							Fully functional.
						</p>
					</div>
				</a>
			</div>

			<div class="col-sm-4 col-md-4">
				<a href="/simon.html" class="thumbnail" target="_blank">
					<img src="/img/simon.png" alt="Simple Simon">
					<div class="caption">
						<h3>Simple Simon Game</h3>
						<p>HTML, CSS, JavaScript and jQuery.</p>
						<p>
							Memory game with optional styles.
							<br>
							The game logic works, but I'm looking to add at least two more styles.
						</p>
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