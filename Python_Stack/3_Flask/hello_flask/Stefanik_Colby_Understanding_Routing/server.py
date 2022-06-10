from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return 'Hello World!'

@app.route('/dojo')
def dojo():
    return 'Dojo!'

@app.route('/hello/<string:name>')
def hello(name):
    print(name)
    return "Hello, " + name

@app.route('/repeat/<int:num>/<string:word>')
def repeatNums(num, word):
    return f"{word * num}"

if __name__=="__main__":
    app.run(debug=True)