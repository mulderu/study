import signal, os, time

def handler(signum, frame):
    print 'Signal handler called with signal', signum
    signal.alarm(0) 
    #raise IOError("Couldn't open device!")

ticks = time.time()
print "this ticks", ticks

# Set the signal handler and a 5-second alarm
signal.signal(signal.SIGALRM, handler)
signal.alarm(5)

ticks = time.time()
print "this ticks", ticks

# This open() may hang indefinitely
#fd = os.open('/dev/ttyS0', os.O_RDWR)

#signal.alarm(0)          # Disable the alarm
time.sleep(30)

ticks = time.time()
print "this ticks", ticks
