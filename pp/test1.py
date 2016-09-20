import signal, os, time

S = 'ace'
for x in S:
  for y in S:
    print(x + y + ' ')
#----------------------------

class Found(Exception): 
    pass

def searcher():
    if (True):
        raise Found() 
    else:
        return

try: 
    searcher()
except Found: 
    print ('found okay')
else:
    print ('found fail')

#----------------------------

class C:
  data = 'spam'
  def __gt__(self, other):
    return self.data > other
  def __lt__(self, other):
    return self.data < other

X = C()
print (x > 'ham')
print (x < 'ham')

#----------------------------

class FormatError(Exception):
    logfile = 'formaterror.log'
    def __init__(self, line, file):
        self.line = line
        self.file = file

    def logerror(self):
        log = open(self.logfile, 'a')
        log.write ( "Error at %s %d\n" % (self.file, self.line) )    

def parser():
    raise FormatError(42, file='spam.txt')

try:
    parser()
except FormatError as X:
    X.logerror()

#----------------------------

def getLocalTime():
    return time.asctime( time.localtime(time.time()) )

def sigAlarmHandler(signum, frame):
    print "signal got ", signum, getLocalTime()

ticks = time.time() 
print "Start ticks", ticks, getLocalTime()

xcount = 0

while xcount < 3:
    xcount = xcount + 1
    signal.signal(signal.SIGALRM, sigAlarmHandler)
    signal.alarm(5)    
    time.sleep(10)

ticks = time.time() 
print "End ticks", ticks, getLocalTime()

#----------------------------

def sigusr1handler(signum, frame):
    print "signal got ", signum, getLocalTime()

 
print "Run Sig SIGUSR1 ", getLocalTime(), "my Pid", os.getpid()

# kill -USR1 2193  
signal.signal(signal.SIGUSR1, sigusr1handler) 
time.sleep(100)
 
print "End SIGUSR1",  getLocalTime()



#----------------------------
print "good day"



