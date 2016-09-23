#!/usr/bin/python
 
import re
line = "Cats are smarter than dogs"

matchObj = re.match( r'(.*) are (.*?) .*', line, re.M|re.I)
 
if matchObj:
   print "matchObj.group() : ", matchObj.group()
   print "matchObj.group(1) : ", matchObj.group(1)
   print "matchObj.group(2) : ", matchObj.group(2) 
else:
   print "No match!!"



searchObj = re.search( r'(.*) are (.*?) .*', line, re.M|re.I)

if matchObj:
   print "searchObj.group() : ", searchObj.group()
   print "searchObj.group(1) : ", searchObj.group(1)
   print "searchObj.group(2) : ", searchObj.group(2) 
else:
   print "No match!!"   

#Matching Versus Searching
#Python offers two different primitive operations based on regular expressions: 
# match checks for a match only at the beginning of the string, 
# while search checks for a match anywhere in the string (this is what Perl does by default).


matchObj = re.match( r'dogs', line, re.M|re.I)
if matchObj:
   print "match --> matchObj.group() : ", matchObj.group()
else:
   print "No match!!"

searchObj = re.search( r'dogs', line, re.M|re.I)
if searchObj:
   print "search --> searchObj.group() : ", searchObj.group()
else:
   print "Nothing found!!"

#
# substitute string
#
phone = "2004-959-559 # This is Phone Number"

# Delete Python-style comments
num = re.sub(r'#.*$', "", phone)
print "Phone Num : ", num

# Remove anything other than digits
num = re.sub(r'\D', "", phone)    
print "Phone Num : ", num


""" 

matchObj.group() :  Cats are smarter than dogs                                                                                                               
matchObj.group(1) :  Cats                                                                                                                                    
matchObj.group(2) :  smarter                                                                                                                                 
searchObj.group() :  Cats are smarter than dogs                                                                                                              
searchObj.group(1) :  Cats                                                                                                                                   
searchObj.group(2) :  smarter                                                                                                                                
No match!!                                                                                                                                                   
search --> searchObj.group() :  dogs                                                                                                                         
Phone Num :  2004-959-559                                                                                                                                    
Phone Num :  2004959559              
"""