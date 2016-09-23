#!/usr/bin/python
 
import MySQLdb

def show_db_rows(cursor): 
    # Prepare SQL query to INSERT a record into the database.
    sql = "SELECT * FROM EMPLOYEE"
    try:
        # Execute the SQL command
        cursor.execute(sql)
        # Fetch all the rows in a list of lists.
        results = cursor.fetchall()
        for row in results:
            fname  = row[0]
            lname  = row[1]
            age    = row[2]
            sex    = row[3]
            income = row[4]
            # Now print fetched result
            print "fname=%s,lname=%s,age=%d,sex=%s,income=%d" % \
                    (fname, lname, age, sex, income )
    except:
        print "Error: unable to fecth data"



 
# open db
db = MySQLdb.connect("127.0.0.1","testuser","test","test" )

cursor = db.cursor()

cursor.execute("SELECT VERSION()")

data = cursor.fetchone()

print "Database version : %s" % data



# Drop table if it already exist using execute() method.
cursor.execute("DROP TABLE IF EXISTS EMPLOYEE")

# Create table as per requirement
sql = """CREATE TABLE EMPLOYEE (
         FIRST_NAME  CHAR(20) NOT NULL,
         LAST_NAME  CHAR(20),
         AGE INT,  
         SEX CHAR(1),
         INCOME FLOAT )"""

cursor.execute(sql)


# Prepare SQL query to INSERT a record into the database.
sql = """INSERT INTO EMPLOYEE(FIRST_NAME,
         LAST_NAME, AGE, SEX, INCOME)
         VALUES ('Mac', 'Mohan', 20, 'M', 2000)"""
try:
   # Execute the SQL command
   cursor.execute(sql)
   # Commit your changes in the database
   db.commit()
except:
   # Rollback in case there is any error
   db.rollback()


# Prepare SQL query to INSERT a record into the database.
sql = "INSERT INTO EMPLOYEE(FIRST_NAME, \
       LAST_NAME, AGE, SEX, INCOME) \
       VALUES ('%s', '%s', '%d', '%c', '%d' )" % \
       ('Mac2', 'Mohan2', 20, 'W', 2000)
try:
   # Execute the SQL command
   cursor.execute(sql)
   # Commit your changes in the database
   db.commit()
except:
   # Rollback in case there is any error
   db.rollback()


# Prepare SQL query to INSERT a record into the database.
sql = "SELECT * FROM EMPLOYEE \
       WHERE INCOME > '%d'" % (1000)
try:
   # Execute the SQL command
   cursor.execute(sql)
   # Fetch all the rows in a list of lists.
   results = cursor.fetchall()
   for row in results:
      fname  = row[0]
      lname  = row[1]
      age    = row[2]
      sex    = row[3]
      income = row[4]
      # Now print fetched result
      print "fname=%s,lname=%s,age=%d,sex=%s,income=%d" % \
             (fname, lname, age, sex, income )
except:
   print "Error: unable to fecth data"



# Prepare SQL query to UPDATE required records
sql = "UPDATE EMPLOYEE SET AGE = AGE + 1 WHERE SEX = '%c'" % ('M')
try:
   # Execute the SQL command
   cursor.execute(sql)
   # Commit your changes in the database
   db.commit()
except:
   # Rollback in case there is any error
   db.rollback()

show_db_rows(cursor)


# Prepare SQL query to DELETE required records
sql = "DELETE FROM EMPLOYEE WHERE AGE > '%d'" % (20)
try:
   # Execute the SQL command
   cursor.execute(sql)
   # Commit your changes in the database
   db.commit()
except:
   # Rollback in case there is any error
   db.rollback()

show_db_rows(cursor)


db.close()

"""
Database version : 5.6.30                                                                                                                                    
fname=Mac,lname=Mohan,age=20,sex=M,income=2000                                                                                                               
fname=Mac2,lname=Mohan2,age=20,sex=W,income=2000                                                                                                             
fname=Mac,lname=Mohan,age=21,sex=M,income=2000                                                                                                               
fname=Mac2,lname=Mohan2,age=20,sex=W,income=2000                                                                                                             
mulder@~/Project/mulder/study/pp$                                                                                                                            
mulder@~/Project/mulder/study/pp$                                                                                                                            
mulder@~/Project/mulder/study/pp$ python dbapi.py                                                                                                            
Database version : 5.6.30                                                                                                                                    
fname=Mac,lname=Mohan,age=20,sex=M,income=2000                                                                                                               
fname=Mac2,lname=Mohan2,age=20,sex=W,income=2000                                                                                                             
fname=Mac,lname=Mohan,age=21,sex=M,income=2000                                                                                                               
fname=Mac2,lname=Mohan2,age=20,sex=W,income=2000                                                                                                             
fname=Mac2,lname=Mohan2,age=20,sex=W,income=2000  
"""