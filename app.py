from flask import Flask, render_template, request, session
import mysql.connector

HOST = 'localhost'
DATABASE = 'denvie_application'
USER = 'denvieapp'
PASSWORD = 'denviedb'

app = Flask(__name__)
sessionId = []
inputData = []

# CLEAR SPECIAL CHARECTERS FROM INTEGER DATA FUNCTION
def clear_int(value):
      value = value
      string = ''

      for item in value:
            string = string + str(item)

            del_suffix = string[:-2]
            del_prefix = del_suffix[1:]
            data = del_prefix

            return int(data)

# FECTH DATA FROM DATABASE FUNCTION
def fetch_data(sql_statement, data_source):

    db_connection = mysql.connector.connect(host = HOST, database = DATABASE, user = USER, password = PASSWORD, auth_plugin='caching_sha2_password')
    cursor = db_connection.cursor()

    sql_statement = sql_statement
    data_source = data_source
    cursor.execute(sql_statement, data_source)
    db_data = cursor.fetchall()
    cursor.close()

    print(db_data)
    return db_data

# SESSION AUTHENTICATOR FUNCTION
def session_authenticator():

    session_id = session.get('id')
    sessionId.append(session_id)

    if str(session_id) == 'None':
        sessionId.clear()
        print('session authenticator returned false')
        return False

    else:
        sql_statement = "select exists (select id from user where id=%s);"
        data_source = sessionId
        db_data = fetch_data(sql_statement, data_source)
        data = clear_int(db_data)

        if data == 1:
            sessionId.clear()
            print('session authenticator renturned true')
            return True
        
        elif data == 0:
            sessionId.clear()
            print('session authenticator returned false')
            return False

# SET SESSION FUNCTION
def set_session():

      sql_statement = "select id from user where username=%s and password=%s;"
      data_source = inputData
      db_data = fetch_data(sql_statement, data_source)
      
      data = clear_int(db_data)

      session['id'] = data
      print('session initiated')

# USER AUTHENTICATOR FUNCTION
def user_authentication():
    username = request.form['username']
    password = request.form['password']
    inputData.append(username)
    inputData.append(password)
    
    sql_statement = "select exists (select * from user where username=%s and password=%s);"
    data_source = inputData
    db_data = fetch_data(sql_statement, data_source)
    data = clear_int(db_data)
    
    if data == 1:
      set_session()
      inputData.clear()
      print('user authenticator returned True')
      return True

    elif data == 0:
      inputData.clear()
      print('user authenticator returned False')
      return False
    
    else:
         print('user_authentication function error')

def create_acc():

def check_email():

# USER LOGIN FUNCTION
@app.route('/login',methods=['POST','GET'])
def login():
    if request.method == 'POST':
        
        if user_authentication() == True:
             print('user logged on')
             return main()
        
        elif user_authentication() == False:
              print('user login failed')
              return main()

        else:
              print('login function error')
              return main()

# USER REGISTRATION
@app.route('/register', methods=['POST'])
def register():
    
    if check_email() == True:
        print('email address already exists')
        return main()
    
    elif check_email() == False:
        creat_acc()
        return main()

@app.route('/')
def main():

    if session_authenticator() == True:
            
        log = ''
        username = 'username'
        
        return render_template('index.html', log=log, username=username)

    elif session_authenticator() == False:

        log = 'register/login'
        guest = 'guest'

        return render_template('index.html', log=log, username=guest)
    
    else:
        print('session authenticator function failed')
        return render_template('index.html', log='', username='')

if __name__ == '__main__':
    app.run(debug=True)