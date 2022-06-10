from flask import Flask, render_template, session, redirect, request
from user import User

app = Flask(__name__)

app.secret_key="A ninja wuz ere"

@app.route('/')
def index():
    return redirect('/users')

@app.route('/users')
def read():
    return render_template("read.html", users = User.get_all())

@app.route('/user/new')
def create():
    return render_template("create.html")

@app.route('/user/create',methods=['POST'])
def createUser():
    print(request.form)
    User.save(request.form)
    return redirect('/users')

if __name__=="__main__":
    app.run(debug=True)