package bookclub.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bookclub.models.Book;
import bookclub.models.User;
import bookclub.repositories.BookRepository;

@Service
public class BookService {
	
	@Autowired
    private BookRepository bookRepository;
	@Autowired
    private UserService userService;
	
	public Book createBook(Long userId, Book book) {
		User user = userService.getUser(userId);
		book.setUser(user);
		return bookRepository.save(book);
	}
	
	public Book getBook(Long id) {
		return bookRepository.findById(id).orElse(null);
	}
	
	public List<Book> getAllBooks() {
		return bookRepository.findAll();
	}
	
	public Book updateBook(Book book) {
		return bookRepository.save(book);
	}
	
	public void deleteBook(Long id) {
		bookRepository.deleteById(id);
	}
}
