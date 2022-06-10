package com.Counter;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import javax.servlet.http.HttpSession;

@RestController
public class CounterController {
	
	@RequestMapping("")
	public String index(HttpSession session, Model model) {
		if (session.getAttribute("count") == null) {
			 session.setAttribute("count", 0);
		}
		else {
			Integer currentCount = (Integer) session.getAttribute("count");
			currentCount++;
			model.addAttribute("countToShow", currentCount);
		}
		return "index.jsp";
	}
	
	@RequestMapping("/Counter")
	public String counterPage(HttpSession session) {
		Integer currentCount = 0;
		if (session.getAttribute("count") == null) {
			 session.setAttribute("count", 0);
		}
		else {
			currentCount = (Integer) session.getAttribute("count");
		}
		return "counter.jsp";
	}
}