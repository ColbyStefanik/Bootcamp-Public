package bookclub.models;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="books")
public class Book {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	
	@NotEmpty(message="You need a name to recomend a book")
    @Size(min=1, max=100, message="Book name must be between 1 and 100 characters")
	private String name;
	
	@NotEmpty(message="You need the author name to recomend a book")
    @Size(min=1, max=100, message="Author must be between 1 and 100 characters")
	private String author;
	
	@NotEmpty(message="What are your thoughts, why are you recomending this? You need to add something.")
    @Size(min=1, max=500, message="Your thoughts must be between 1 and 500 characters")
	private String thoughts;
	
	@Column(updatable=false)
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date createdAt;
    
    @DateTimeFormat(pattern="yyyy-MM-dd")
    private Date updatedAt;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="users_id")
    private User user;
    
    public Book() {}
    
    public Book(Long id, String name, String author, String thoughts, Date createdAt, Date updatedAt, User user) {
    	this.id = id;
    	this.name = name;
    	this.author = author;
    	this.thoughts = thoughts;
    	this.createdAt = createdAt;
    	this.updatedAt = updatedAt;
    	this.user = user;
    }
    
    //Setters
    public void setId(Long id) {
    	this.id = id;
    }
    public void setName(String name) {
    	this.name = name;
    }
    public void setAuthor(String author) {
    	this.author = author;
    }
    public void setThoughts(String thoughts) {
    	this.thoughts = thoughts;
    }
    public void setCreatedAt(Date createdAt) {
    	this.createdAt = createdAt;
    }
    public void setUpdatedAt(Date updatedAt) {
    	this.updatedAt = updatedAt;
    }
    public void setUser(User user) {
    	this.user = user;
    }
    
    //Getters
    public Long getId() {
    	return id;
    }
    public String getName() {
    	return name;
    }
    public String getAuthor() {
    	return author;
    }
    public String getThoughts() {
    	return thoughts;
    }
    public Date getCreatedAt() {
    	return createdAt;
    }
    public Date getUpdatedAt() {
    	return updatedAt;
    }
    public User getUser() {
    	return user;
    }
}
