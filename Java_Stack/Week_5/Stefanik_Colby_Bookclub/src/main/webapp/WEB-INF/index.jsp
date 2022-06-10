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
			<h1>Welcome!</h1>
			<p>Join our growing community!</p>
			<div class="d-flex flex-row justify-content-between">
				<div class="form-group row">
					<h3>Register</h3>
					<form:form action="/register" method="post" modelAttribute="newUser">
						<div>
							<form:label class="col-sm-4 col-form-label" path="userName">Name:</form:label>
							<form:errors class="alert alert-warning form-control" path="userName" />
							<form:input type="userName" path="userName"
								placeholder="Enter name" />
						</div>
						<div>
							<form:label class="col-sm-4 col-form-label" path="email">Email address:</form:label>
							<form:errors class="alert alert-warning form-control" path="email" />
							<form:input type="email" path="email"
								placeholder="Enter email" />
						</div>
						<div>
							<form:label class="col-sm-4 col-form-label" path="password">Password:</form:label>
							<form:errors class="alert alert-warning form-control" path="password" />
							<form:input type="password" path="password"
								placeholder="Password" />
						</div>
						<div>
							<form:label class="col-sm-4 col-form-label" path="confirmPW">Confirm Password:</form:label>
							<form:errors class="alert alert-warning form-control" path="confirmPW" />
							<form:input type="confirmPW" path="confirmPW"
								placeholder="Confirm Password" />
						</div>
						<button type="submit" class="btn btn-primary">Submit</button>
					</form:form>
				</div>
				<div class="form-group row">
					<h3>Login</h3>
					<form:form action="/login" method="post" modelAttribute="newLogin">
						<div>
							<form:label class="col-sm-4 col-form-label" path="email">Email address:</form:label>
							<form:errors class="alert alert-warning form-control" path="email" />
							<form:input type="email" path="email"
								placeholder="Enter email" />
						</div>
						<div>
							<form:label class="col-sm-4 col-form-label" path="password">Password:</form:label>
							<form:errors class="alert alert-warning form-control" path="password" />
							<form:input type="password" path="password"
								placeholder="Password" />
						</div>
						<button type="submit" class="btn btn-primary">Login</button>
					</form:form>
				</div>
			</div>
		</div>
	</body>
</html>