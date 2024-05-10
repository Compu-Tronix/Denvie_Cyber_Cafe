from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def app_init():
    log = 'register/login'
    username = 'username'
    guest = 'guest'
    var=0
    if var ==0:
        return render_template('index.html', log=log, username=guest)
    else:
        return render_template('index.html', log='', username=username)

if __name__ == '__main__':
    app.run(debug=True)