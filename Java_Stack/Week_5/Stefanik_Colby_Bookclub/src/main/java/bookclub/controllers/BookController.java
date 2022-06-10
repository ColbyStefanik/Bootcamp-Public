package bookclub.controllers;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import bookclub.services.BookService;
import bookclub.services.UserService;
import bookclub.models.Book;
import bookclub.models.User;

@Controller
public class BookController {
	
	@Autowired
	private UserService userService;
	@Autowired
	private BookService bookService;

	@GetMapping("/dashboard")
    public String dashboard(HttpSession session, Model model) {
    	
    	Long sessionId = (Long) session.getAttribute("userId");
    	if(userService.getUser(sessionId) == null) {
    		return "redirect:/";
    	}

    	model.addAttribute("allBooks", bookService.getAllBooks());
        User user = userService.getUser(sessionId);
        model.addAttribute("validUser", user);

      	return "dashboard.jsp";
    }
	
	@GetMapping("/viewBook/{id}")
    public String viewBook(@PathVariable Long id, Model model, HttpSession session) {
    	
		Long sessionId = (Long) session.getAttribute("userId");
    	if(userService.getUser(sessionId) == null) {
    		return "redirect:/";
    	}
    	
    	model.addAttribute("book", bookService.getBook(id));
    	return "viewBook.jsp";
    }
	
	@GetMapping("/newBook")
    public String createBook(@ModelAttribute("newBook") Book book, HttpSession session,  Model model) {
    	
		Long sessionId = (Long) session.getAttribute("userId");
    	if(userService.getUser(sessionId) == null) {
    		return "redirect:/";
    	}
    	
    	User user = userService.getUser(sessionId);
        model.addAttribute("validUser", user);
    	
    	return "newBook.jsp";
    }
	
	@PostMapping("/saveBook")
    public String saveBook(@Valid @ModelAttribute("newBook") Book book, BindingResult results, 
    		Model model, HttpSession session) {

        if(results.hasErrors()) {
            model.addAttribute("newBook", book);
            return "newBook.jsp";
        }
    	
        Long sessionId = (Long) session.getAttribute("userId");
    	if(userService.getUser(sessionId) == null) {
    		return "redirect:/";
    	}
    	
    	bookService.createBook(sessionId, book);

    	return "redirect:/dashboard";
    }
	
	@GetMapping("/editBook/{id}")
    public String editBook(@PathVariable Long id, @ModelAttribute("book") Book book, 
    		Model model, HttpSession session) {
    	
		Long sessionId = (Long) session.getAttribute("userId");
    	if(userService.getUser(sessionId) == null) {
    		return "redirect:/";
    	}
    	
    	model.addAttribute("book", bookService.getBook(id));
    	return "editBook.jsp";
    }
	
	@PutMapping("/updateBook/{id}")
    public String updateBook(@Valid @PathVariable Long id, 
    		@ModelAttribute("book") Book book, BindingResult results, 
    		Model model, HttpSession session) {
    	
        if(results.hasErrors()) {
            model.addAttribute("book", book);
            return "editBook.jsp";
        }
        
        Long sessionId = (Long) session.getAttribute("userId");
    	if(userService.getUser(sessionId) == null) {
    		return "redirect:/";
    	}
    	
    	bookService.updateBook(book);
    	return "redirect:/viewBook/{id}";
    }
}
