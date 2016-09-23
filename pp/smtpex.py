#!/usr/bin/python
 
import smtplib


message = """From: Exxo <mulder@obskorea.com>
To: mulder <mulder@obskorea.com>
MIME-Version: 1.0
Content-type: text/html
Subject: SMTP HTML e-mail test

This is an e-mail message to be sent in HTML format

<b>This is HTML message.</b>
<h1>This is headline.</h1>
"""

try:
   smtpObj = smtplib.SMTP('smtp.cafe24.com', 587, 'localhost')
   smtpObj.set_debuglevel(1)

   smtpObj.ehlo()
   smtpObj.starttls() 
   smtpObj.login("xxx@xxx.com", "xxxx") 
  
   smtpObj.sendmail("xxx@xxx.com", ["xxx@xxx.com"], message)    

   smtpObj.quit()
   print "Successfully sent email"
except Exception:
   print "Error: unable to send email", Exception
