from flask import request, render_template, jsonify, make_response
from flaskreact import app, db
from flaskreact.models.users import User
from sqlalchemy import exc

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/users/', methods=['POST'])
def create_user():
    try: 
        args = (request.json['email'], request.json['password'])
        print(args)
        result = db.engine.execute(f"INSERT INTO USERS(email, password) VALUES('{args[0]}', '{args[1]}');")
        return make_response(jsonify({"message": "OK"}), 200)
    except exc.IntegrityError:
        # Violation of DBMS constraints
        print("IntegrityError")
        return make_response(jsonify({"message": "Insertion rejected. Please check all fields"}), 400)
    except exc.ProgrammingError:
        # Invalid SQL
        print("ProgrammingError")
        return make_response(jsonify({"message": "Syntax Error"}), 400)
    except exc.OperationalError:
        # DBMS disconnected?
        print("OperationalError")
        return make_response(jsonify({"message": "DB Operational Error. Please try again later"}), 500)    
    except:
        print("generic error")
        return make_response(jsonify({"message": "Database Error. Please try again."}), 500)

@app.route('/register/', methods=['POST'])
def save_credentials():
    try: 
        args = (request.json['phone_number'], request.json['authentication_sid'], request.json['token'], request.json['email'])
        print(args)
        result = db.engine.execute(f"UPDATE USERS SET phone_number='{args[0]}', authentication_sid='{args[1]}', token='{args[2]}' WHERE email='{args[3]}';")
        return make_response(jsonify({"message": "OK"}), 200)
    except exc.IntegrityError:
        # Violation of DBMS constraints
        print("IntegrityError")
        return make_response(jsonify({"message": "Insertion rejected. Please check all fields"}), 400)
    except exc.ProgrammingError:
        # Invalid SQL
        print("ProgrammingError")
        return make_response(jsonify({"message": "Syntax Error"}), 400)
    except exc.OperationalError:
        # DBMS disconnected?
        print("OperationalError")
        return make_response(jsonify({"message": "DB Operational Error. Please try again later"}), 500)    
    except:
        print("generic error")
        return make_response(jsonify({"message": "Database Error. Please try again."}), 500)
