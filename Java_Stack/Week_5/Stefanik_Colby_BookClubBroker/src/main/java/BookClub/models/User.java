package BookClub.models;

import java.sql.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Entity
@Table(name="users")
public class User {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	
	@NotEmpty(message="Username is required!")
    @Size(min=3, max=30, message="Username must be between 3 and 30 characters")
    private String name;
	
	@NotEmpty(message="Email is required!")
    @Email(message="Please enter a valid email!")
    private String email;
    
    @NotEmpty(message="Password is required!")
    @Size(min=8, max=128, message="Password must be between 8 and 128 characters")
    private String password;
    
    @Transient
    @NotEmpty(message="Password is required!")
    @Size(min=8, max=128, message="Password must be between 8 and 128 characters")
    private String confirm;

    @Column(updatable=false)
	private Date createdAt;
	private Date updatedAt;
	
	@OneToMany(mappedBy="user", fetch=FetchType.LAZY)
	private List<Book> books;
	
	@Column(updatable=false)
    @OneToMany(mappedBy="user", fetch = FetchType.LAZY)
    private List<Book> borrowedBooks;
    
    public User() {}
    
    public User(String name, String email, String password, String confirm, Date createdAt, Date updatedAt) {
    	this.name = name;
    	this.email = email;
    	this.password = password;
    	this.confirm = confirm;
    	this.createdAt = createdAt;
    	this.updatedAt = updatedAt;
    }
    
    //Setters
    public void setID(Long id) {
    	this.id = id;
    }
    public void setName(String name) {
    	this.name = name;
    }
    public void setEmail(String email) {
    	this.email = email;
    }
    public void setPassword(String password) {
    	this.password = password;
    }
    public void setConfirm(String confirm) {
    	this.confirm = confirm;
    }
    public void setCreatedAt(Date createdAt) {
    	this.createdAt = createdAt;
    }
    public void setUpdatedAt(Date updatedAt) {
    	this.updatedAt = updatedAt;
    }
    public void setBooks(List<Book> books) {
		this.books = books;
	}
    public void setBorrowedBooks(List<Book> borrowedBooks) {
		this.borrowedBooks = borrowedBooks;
	}
    
    //Getters
    public Long getId() {
    	return id;
    }
    public String getName() {
    	return name;
    }
    public String getEmail() {
    	return email;
    }
    public String getPassword() {
    	return password;
    }
    public String getConfirm() {
    	return confirm;
    }
    public Date getCreatedAt() {
    	return createdAt;
    }
    public Date getUpdatedAt() {
    	return updatedAt;
    }
    public List<Book> getBooks() {
		return books;
	}
    public List<Book> getBorrowedBooks() {
		return borrowedBooks;
	}
}
