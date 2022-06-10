<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="/css/style.css">
		<title>Ninja Gold Game</title>
	</head>
	<body>
		<h2>Your Gold: <c:out value="${gold}"/></h2>
		<table>
			<tr>
			  <td>
			  	<h3>Farm</h3>
				<p>(earns 10-20 gold)</p>
				<form action="/gold" method="post"><input class="button" type="submit" name="farm" value="Find Gold!"/></form>
			  </td>
			  <td>
			  	<h3>Cave</h3>
				<p>(earns 5-10 gold)</p>
				<form action="/gold" method="post"><input class="button" type="submit" name="cave" value="Find Gold!"/></form>
			  </td>
			  <td>
			  	<h3>House</h3>
				<p>(earns 2-5 gold)</p>
				<form action="/gold" method="post"><input class="button" type="submit" name="house" value="Find Gold!"/></form>
			  </td>
			  <td>
			  	<h3>Quest</h3>
				<p>(earns/takes 0-50 gold)</p>
				<form action="/gold" method="post"><input class="button" type="submit" name="quest" value="Find Gold!"/></form>
			  </td>
			</tr>
		</table>
		<br>
			<h2>Activities:</h2>
		<br>
		<iframe src="/activities/" title="Activities Iframe"></iframe>
	</body>
</html>