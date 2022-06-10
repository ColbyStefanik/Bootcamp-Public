from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def rootBoard():
    return render_template("index.html", xNum=4, yNum=4, color1="white", color2="black")

@app.route('/<int:xNum>')
def xBoard(xNum):
    return render_template("index.html", xNum=xNum, yNum=4, color1="white", color2="black")

@app.route('/<int:xNum>/<int:yNum>')
def xNyBoard(xNum, yNum):
    return render_template("index.html", xNum=xNum, yNum=yNum, color1="white", color2="black")

@app.route('/10/10')
def tenBoard():
    return render_template("index.html", xNum=10, yNum=10, color1="white", color2="black")

@app.route('/<int:xNum>/<int:yNum>/<string:color1>/<string:color2>')
def colorBoard(xNum, yNum, color1, color2):
    return render_template("index.html", xNum=xNum, yNum=yNum, color1=color1, color2=color2)

if __name__=="__main__":
    app.run(debug=True)