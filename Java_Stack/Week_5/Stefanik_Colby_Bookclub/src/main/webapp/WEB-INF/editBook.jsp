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
		<title>Edit Book</title>
	</head>
	<body>
		<div class="container">
			<h1>
				Editing a book, 
				<c:out value="${book.user.userName}" />
				?
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
			<div class="form-group row">
					<form:form action="/updateBook/${book.id}" method="put" modelAttribute="book">
						<form:hidden path="user"/>
						<div>
							<form:label class="col-sm-4 col-form-label" path="name">Title:</form:label>
							<form:errors class="alert alert-warning form-control" path="name" />
							<form:input type="name" path="name"
								placeholder="${book.name}" />
						</div>
						<div>
							<form:label class="col-sm-4 col-form-label" path="author">Author:</form:label>
							<form:errors class="alert alert-warning form-control" path="author" />
							<form:input type="author" path="author"
								placeholder="${book.author}" />
						</div>
						<div>
							<form:label class="col-sm-4 col-form-label" path="thoughts">My Thoughts:</form:label>
							<form:errors class="alert alert-warning form-control" path="thoughts" />
							<form:input type="thoughts" path="thoughts"
								placeholder="${book.thoughts}" />
						</div>
						<button type="submit" class="btn btn-primary">Submit</button>
				</form:form>
			</div>
		</div>
	</body>
</html>