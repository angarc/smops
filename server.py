from flask import Flask, render_template, request
import commander
import time
app = Flask(__name__)
commands = []


@app.route('/')
def index():
    return render_template('smops-frontend/build/index.html')

@app.route('/create-user',methods=["POST"])
def createUser():
    request.form['username']
    request.form['userpasswd']
    request.form['userTwilioAPIKey']
    request.form['SMSNumber']

@app.route('/get-user-data',methods=["POST"])
def getUserData():
    request.form['username']
    request.form['userpasswd']

@app.route('/modify-user-data',methods=["POST"])
def modifyUserData():
    #FOR SECURITY REASONS
    request.form['username']
    request.form['userpasswd']
    #Modifications
    request.form['userTwilioAPIKey']
    request.form['SMSNumber']

@app.route('/get-machine-info',methods=["POST","GET"])
def getMachineInfo():
    return """{name:"nice machine"}"""

@app.route('/test-command',methods=["POST","GET"])
def testCommand():
        if request.method == 'POST':
            return "None"
        elif request.method == "GET":
            myCommander = commander.Commander()
            myCommander.runCommand(request.args.get("command")[1:-1])
            return myCommander.readCommand()

if __name__ == '__main__':
    app.run()