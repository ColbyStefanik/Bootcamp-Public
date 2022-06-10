from ..config.mysqlconnection import connectToMySQL
from flask_app.models import author

class Book:
    def __init__(self, data):
        self.id = data['id']
        self.title = data['title']
        self.num_of_pages = data['num_of_pages']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        # list of the authors who has favorited this book
        self.authors_who_favorited = []


    @classmethod
    def get_all(cls):
        query = "SELECT * FROM books;"
        books = []
        results = <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>Show Book</title>
</head>
<body>
    <div class="d-flex justify-content-around flex-wrap">
        <div class="col-6">
            <h2 class="text-center">Title: {{book.title}}</h2>
            <p>Favorited by:</p>
            {% for author in book.authors_who_favorited %}
            <p>{{author.name}}</p>
            {% endfor %}
        </div>
        <form action="/join/author" method="post" class="col-6">
            <h2 class="text-info">Add Book's Favorite</h2>
            <input type="hidden" name="book_id" value="{{book.id}}">
            <div class="form-group">
                <label for="author_id">Book:</label>
                <select name="author_id" class="form-control" >
                    {% for author in unfavorited_authors %}
                        <option value="{{author.id}}">{{author.name}}</option>
                    {% endfor %}
                </select>
            </div>
            <input type="submit" value="Add Book" class="btn btn-primary">
        </form>
    </div>
</body>
</html>.query_db(query)
        for row in results:
            books.append(cls(row))
        return books
    
    @classmethod
    def save(cls,data):
        query = "INSERT INTO books (title,num_of_pages) VALUES (%(title)s,%(num_of_pages)s);"
        return connectToMySQL('books').query_db(query,data)

    @classmethod
    def get_by_id(cls,data):
        query = "SELECT * FROM books LEFT JOIN favorites ON books.id = favorites.book_id LEFT JOIN authors ON authors.id = favorites.author_id WHERE books.id = %(id)s;"
        results = connectToMySQL('books').query_db(query,data)

        book = cls(results[0])

        for row in results:
            if row['authors.id'] == None:
                break
            data = {
                "id": row['authors.id'],
                "name": row['name'],
                "created_at": row['authors.created_at'],
                "updated_at": row['authors.updated_at']
            }
            book.authors_who_favorited.append(author.Author(data))
        return book

    @classmethod
    def unfavorited_books(cls,data):
        query = "SELECT * FROM books WHERE books.id NOT IN ( SELECT book_id FROM favorites WHERE author_id = %(id)s );"
        results = connectToMySQL('books').query_db(query,data)
        books = []
        for row in results:
            books.append(cls(row))
        print(books)
        return books