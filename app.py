from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def app_init():
    log = 'register/login'
    username = 'username'
    return render_template('index.html', log=log, username=username)

if __name__ == '__main__':
    app.run(debug=True)