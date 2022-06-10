package bookclub.services;

import java.util.List;
import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bookclub.models.LoginUser;
import bookclub.models.User;
import bookclub.repositories.UserRepository;

@Service
public class UserService {
	
	@Autowired
    private UserRepository userRepository;
	
	public User createUser(User newUser) {
		
    	String hashed = BCrypt.hashpw(newUser.getPassword(), BCrypt.gensalt());
    	newUser.setPassword(hashed);
		
		return userRepository.save(newUser);
	}
    
    public User checkUserLogin(LoginUser newLoginObject) {
        
    	Optional<User> returnUser = userRepository.findByEmail(newLoginObject.getEmail());
		
		if(returnUser.isEmpty()) {
			return null;
		}
		
		if(!BCrypt.checkpw(newLoginObject.getPassword(), returnUser.get().getPassword())) {
			return null;
		}
		
		return returnUser.get();
    }
    
	public List<User> getAllUsers() {
		return userRepository.findAll();
	}

	public User getUser(Long id) {
		return userRepository.findById(id).orElse(null);
	}
	
	public User getUserByEmail(String email) {
		return userRepository.findByEmail(email).orElse(null);
	}
	
	public User updateUser(User user) {
		return userRepository.save(user);
	}
	
	public void deleteUser(Long id) {
		userRepository.deleteById(id);
	}
}
