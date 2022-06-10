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

@app.route('/user/edit/<int:id>')
def edit(id):
    data ={ 
        "id":id
    }
    return render_template("edit.html",user=User.get_one(data))

@app.route('/user/show/<int:id>')
def show(id):
    data ={ 
        "id":id
    }
    return render_template("show.html",user=User.get_one(data))


@app.route('/user/update',methods=['POST'])
def update():
    User.update(request.form)
    return redirect('/users')

@app.route('/user/destroy/<int:id>')
def destroy(id):
    data ={
        'id': id
    }
    User.destroy(data)
    return redirect('/users')

if __name__=="__main__":
    app.run(debug=True)