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
	<title>About Michael</title>
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
		<h1>About Me</h1>
	</div>
	
	<div class="container">
		<div class="row">
			<div class="col-md-8">
				<blockquote id="borges">
					I am not sure that I exist, actually. I am all the writers that I have read, all the people that I have met, all the women that I have loved; all the cities that I have visited, all my ancestors.<br>&mdash;Jorge Luis Borges
				</blockquote>
				<h4>Bio:<h4>
				<ul>
					<li>Born April 10, 1974 in San Antonio, Texas.</li>
					<li>Served in the United States Marine Corps in the mid 90s.</li>
					<li>I spent the late 90s builing furniture.</li>
					<li>Began studying visual arts at San Antonio College in 1999, built a portfolio and in 2005 won a merit scholarship to The School of the Art Institute of Chicago.</li>
					<li>I have two amazing children I love and cherish more than anything.</li>
					<li>I accepted a fellowship from The University of Texas at Austin's Department of Art and Art History and spent three years there as a graduate student and teaching assistant.</li>
					<li>Recently graduated from <a href="http://codeup.com" target="_blank">Codeup</a>, an immersive learning program focused on full-stack web development.</li>
					<li>Currently I teach Drawing and Art Appreciation at San Antonio College, and I'm looking for an opportunity in web development.</li>
					<li>I am always learning.</li>
				</ul>
			
				<h4>Education:</h4>
				<ul>
					<li>Master of Fine Arts, <a href="https://www.utexas.edu/finearts/aah/academic/studio-art/graduate/overview" target="_blank">The University of Texas at Austin</a>, 2010</li>
					<li>Bachelor of Fine Arts, <a href="http://www.saic.edu/index.html" target="_blank">The School of the Art Institute of Chicago</a>, 2007</li>
				</ul>
				
				<h4>Interests:<h4>
					<ul>
						<li>I enjoy movies, food, billiards, chess and games, riddles and puzzles of all sorts. I can solve a Rubik's cube in under a minute.</li>
					</ul>
			</div>
			<div class="col-md-4">
			</div>
		</div>
	</div>

	<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<!-- Latest compiled and minified JavaScript -->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
</body>
</html>