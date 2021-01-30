import twilio
import secrets
import requests
import time
import bashlex
import subprocess
processes = {}
deadProcesses = {}
import os
from twilio.rest import Client


# Your Account Sid and Auth Token from twilio.com/console
# and set the environment variables. See http://twil.io/secure
account_sid = 'TWILIO_ACCOUNT_SID'
auth_token = 'TWILIO_AUTH_TOKEN'
client = Client(account_sid, auth_token)


def sendUserSMS(sender,receiver,message,client):
    #print("Sent message")
    #print("From: " + sender)
    #print("To: " + receiver)
    #print("Message: ")
    #print(message)
    if False:
        message = client.messages \
        .create(
            body=message,
            from_=sender,
            to=receiver
        )

def printCommands():
    for processID,process in processes.items():
        print(process["outputLines"])

while True:
    try:
        #Checks if any new sms came through
        getDataRequest = requests.get("""http://localhost:5000/get-data""")

        newMessages = getDataRequest.json()["messages"]
        if len(newMessages) > 0:
            print(newMessages)
        for messageId,message in newMessages.items(): #Adds the new commands and begins running them
            print(message)
            commandParts = list(bashlex.split(message['Body']))
            process = subprocess.Popen(commandParts,
                        stdout=subprocess.PIPE, 
                        stderr=subprocess.PIPE)
            processID = secrets.token_urlsafe(16)
            processes[processID] = {"processObject":process, "userID":message["AccountSid"],"outputLines":[]
            , "from":message["From"],"to":message["To"]
            }
                


        #Updates the output lines
        keysToDie = []
        for processID in processes.keys():
            process = processes[processID]["processObject"]
            newLine = process.stdout.readline().strip().decode("utf-8")
            if len(newLine) > 0:
                processes[processID]["outputLines"].append(newLine)
                sendUserSMS(processes[processID]["to"],processes[processID]["from"],newLine,client)
            return_code = process.poll()
            if return_code is not None:

                newLines = []
                for output in process.stdout.readlines():
                    newLines.append(output.strip().decode("utf-8"))

                sendUserSMS(processes[processID]["to"],processes[processID]["from"],"\n".join(newLines + ["PROCESS FINISHED: " + str(return_code)]),client) 
                processes[processID]["outputLines"] += newLines
                processes[processID]["outputLines"].append("PROCESS FINISHED: " + str(return_code))
                #moves to the graveyard
            
                deadProcesses[processID] =  processes[processID]
                deadProcesses[processID]["return_code"] = return_code
                keysToDie.append(processID)
                print(deadProcesses[processID]["outputLines"])
                print("DEAD")

                #WARNS SOMETHING TO THE USER
        for key in keysToDie:
            del processes[key]
        
        printCommands()
    except Exception as e:
        print(e)
    time.sleep(1)

