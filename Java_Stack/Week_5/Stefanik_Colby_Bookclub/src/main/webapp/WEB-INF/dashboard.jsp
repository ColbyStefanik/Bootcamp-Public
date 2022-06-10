<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
		<link
			href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
			rel="stylesheet"
			integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
			crossorigin="anonymous">
		<meta charset="UTF-8">
		<title>Book Club</title>
	</head>
	<body>
		<div class="container">
			<h1>
				Welcome to the Bookshelf,
				<c:out value="${validUser.userName}" />
			</h1>
			<nav class="navbar navbar-expand-lg p-2 mb-3">
				<button class="navbar-toggler" type="button" data-toggle="collapse"
					data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
					aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div class="navbar-nav">
						<a class="nav-item nav-link active" href="/dashboard">Home</a> <a
							class="nav-item nav-link" href="/newBook">Add a Book</a>
							 <a class="nav-item nav-link" href="/logout">Logout</a>
					</div>
				</div>
			</nav>
			<table class="table">
				<thead>
					<tr>
						<th>Book Name</th>
						<th>Author</th>
						<th>Posted By</th>
					</tr>
				</thead>
				<tbody>
					<c:forEach items="${allBooks}" var="book">
						<tr>
							<td><a href="/viewBook/${book.id}">${book.name}
							</a></td>
							<td>${book.author}</td>
							<td>${book.user.userName}</td>
					</c:forEach>
				</tbody>
			</table>
		</div>
	</body>
</html>