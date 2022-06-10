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
		<title>Detail View</title>
	</head>
	<body>
		<div class="container">
			<h1>
				Detail View for 
				<c:out value="${book.name}" />
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
			<h2>
				<h5>${book.user.userName}</h5> read <h5>${book.name}</h5>
				by <h5>${book.author}.</h5>
			</h2>
			<div>
				<h3>Here are ${book.user.userName}'s thoughts</h3>
				<textarea rows="10" cols="60">${book.thoughts}</textarea>
				<div>
					<c:if test="${sessionScope.userId == book.user.id}">
						<form:form action="/editBook/${book.id}" method="get">
							<button class="btn btn-primary">Edit</button>
						</form:form>
					</c:if>
				</div>
			</div>
		</div>
	</body>
</html>