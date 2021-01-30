import commander
import twilio
import secrets
import requests

processes = {}
dead_processes{}

while True:
    #Checks if any new sms came through
    getDataRequest = requests.get("""http://localhost:5000/has-data")""")
    newCommands = getDataRequest.json()
    if False: #Adds the new command
        command = ""
        commandParts = list(bashlex.split(command))
        process = subprocess.Popen(commandParts,
                    stdout=subprocess.PIPE, 
                    stderr=subprocess.PIPE)
        processID = secrets.token_urlsafe(16)
        processes[processID] = {"processObject":process,"outputLines":[]}
            


    #Updates the output lines
    for processID in processes.keys():
        process = processes[processID]["processObject"]
        newLine = process.stdout.readline().strip()
        if (len(newLine) > 0):
            processes[processID]["outputLines"].append(newline)
        return_code = process.poll()
        if return_code is not None:
            for output in process.stdout.readlines():
                processes[processID]["outputLines"].append(output.strip())
            #moves to the graveyard
            dead_processes[processID] =  processes[processID]
            del  processes[processID]

            #WARNS SOMETHING TO THE USER
    

