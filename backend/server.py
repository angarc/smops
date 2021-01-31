from flask import Flask, render_template, request
from twilio.twiml.messaging_response import MessagingResponse


import time
import json
app = Flask(__name__)
commands = []
messages={}

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


#HIGHLY INSECURE, WE NEED TO MAKE SURE THAT THIS IS SUBSTITUTED FOR A DATABASE
@app.route('/get-data',methods=["POST","GET"])
def getData():
    oldMessages = dict(messages)
    messages.clear()
    return json.dumps({"messages":oldMessages})

#HIGLHY INSECURE, WE NEED TO MAKE SURE THAT ONLY TWILIO CAN REACH US HERE
@app.route("/receive-sms", methods=['POST'])
def sms_reply():
    #print(request.form.to_dict())
    data = {"From":request.form['From'],"To":request.form['To'],"Body":request.form['Body'],"AccountSid":request.form["AccountSid"]}
    messageId = request.form["MessageSid"]
    messages[messageId] = data
    return "200"

if __name__ == '__main__':
    app.run()