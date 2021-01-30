import subprocess
import twilio
import bashlex

class Commander():
    def __init__(self):
        self.process,self.stdout,self.stderr = None,None,None
    def runCommand(self,command):
        print("TEEEEEESTING ------------------------ ")
        print(command)
        commandParts = list(bashlex.split(command))
        print(commandParts)
        if "|" not in commandParts:
            self.process = subprocess.Popen(commandParts,
                     stdout=subprocess.PIPE, 
                     stderr=subprocess.PIPE)
    def readCommand(self):
        self.stdout, self.stderr = self.process.communicate()
        return self.stdout.decode('utf-8')