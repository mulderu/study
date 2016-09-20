import time
import signal
import lib

def scrape():
        # Assume we are hitting Streaming API
        # and doing something buzzwordy with it
        while True:
                lib.scrape_me_bro()
                time.sleep(2)

def reload_libs(signum, frame):
        print "Received Signal: %s at frame: %s" % (signum, frame)
        print "Excuting a Lib Reload"
        reload(lib)

# Register reload_libs to be called on restart
signal.signal(signal.SIGHUP, reload_libs)

# Main
scrape()
