package bookclub.models;

import java.sql.Date;
import java.util.List;

import javax.persistence.CascadeType;
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

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="users")
public class User {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	
	@NotEmpty(message="Username is required!")
    @Size(min=3, max=30, message="Username must be between 3 and 30 characters")
    private String userName;
    
    @NotEmpty(message="Email is required!")
    @Email(message="Please enter a valid email!")
    private String email;
    
    @NotEmpty(message="Password is required!")
    @Size(min=8, max=128, message="Password must be between 8 and 128 characters")
    private String password;
    
    @Transient
    @NotEmpty(message="Confirmation Password is required!")
    @Size(min=8, max=128, message="Confirmation Password must be between 8 and 128 characters")
    private String confirmPW;
    
    @Column(updatable=false)
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date createdAt;
    
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date updatedAt;
    
    @OneToMany(mappedBy = "user", cascade=CascadeType.ALL, fetch=FetchType.LAZY)
    private List<Book> books;
    
    public User() {}
    
    public User(Long id, String userName, String email, String password, String confirmPW, Date createdAt, Date updatedAt, List<Book> books) {
    	this.id = id;
    	this.userName = userName;
    	this.email = email;
    	this.password = password;
    	this.confirmPW = confirmPW;
    	this.createdAt = createdAt;
    	this.updatedAt = updatedAt;
    	this.books = books;
    }
    
    //Setters
    public void setId(Long id) {
    	this.id = id;
    }
    public void setUserName(String userName) {
    	this.userName = userName;
    }
    public void setEmail(String email) {
    	this.email = email;
    }
    public void setPassword(String password) {
    	this.password = password;
    }
    public void setConfirmPW(String confirmPW) {
    	this.confirmPW = confirmPW;
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
    
    //Getters
    public Long getId() {
    	return id;
    }
    public String getUserName() {
    	return userName;
    }
    public String getEmail() {
    	return email;
    }
    public String getPassword() {
    	return password;
    }
    public String getConfirmPW() {
    	return confirmPW;
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
}
