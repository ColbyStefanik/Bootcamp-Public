from flask import Flask, session

app = Flask(__name__)

app.secret_key = "dont look at mah secrit docs!"