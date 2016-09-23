#!/usr/bin/python
 
import socket

s = socket.socket()         # Create a socket object
host = socket.gethostname() # Get local machine name
host = "127.0.0.1"
port = 12345                # Reserve a port for your service.

print host
print port 

s.bind((host, port))        # Bind to the port

s.listen(5)                 # Now wait for client connection.
while True:
   c, addr = s.accept()     # Establish connection with client.
   print 'Got connection from', addr
   c.send('This is Server : Thank you for connecting\n')
   c.close()                # Close the connection

  