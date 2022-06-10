package com.HelloHuman;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
public class HelloController {

	@RequestMapping("")
	public String giveName(
			@RequestParam(value="firstName", required=false) String firstName,
			@RequestParam(value="lastName", required=false) String lastName
			) {
		
		String fullName;
		
		if(firstName == null && lastName == null) {
			fullName = "Human";
		}
		else if (firstName != null && lastName != null) {
			fullName = firstName + " " + lastName;
		}
		else {
			fullName = firstName == null ?
				" " + lastName:
				" " + firstName;
		}
		
		return String.format(
				"<a href='/'>Go Back</a>"
				+ "<h1>Hello %s!</h1>"
				+ "", fullName);
				
	}
}