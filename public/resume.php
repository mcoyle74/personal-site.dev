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
	<title>Resume</title>

	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

	<!-- Optional theme -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">

	<link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'>

	<link rel="stylesheet" type="text/css" href="/css/style-main.css">

</head>

<body>
	<?= $navbar ?>

	<div class="container">
		<img src="/img/coyle-resume.jpg" class="profile-pic" alt="Michael Coyle Profile Picture">
		<h1>Michael David Coyle</h1>
		<p>	mcoyle74@gmail.com</p>
		<h2>Education</h2>
		<h3>Codeup Full-Stack Bootcamp, <small>San&nbsp;Antonio, TX, 2016</small></h3>
		<p>Proficiency in PHP, JavaScript, Laravel, jQuery</p>
		<p>Exposure to MySQL, Linux, Apache/nginx, cloud deployments</p>
		<h3>The University of Texas at Austin</h3>
		<h4>Master of Fine Arts, 2010</h4>
		<h3>School of the Art Institute of Chicago</h3>
		<h4>Bachelor of Fine Arts, 2007</h4>
		<h3>San Antonio College</h3>
		<p>3.5 GPA, 1999-2005</p>

	</div>

	<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <!-- Latest compiled and minified JavaScript -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
</body>
</html>