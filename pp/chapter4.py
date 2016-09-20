import sys
"""
test
"""
def printArr(arr):
    sys.stdout.write('[')
    idx = 0
    for e in arr:
        sys.stdout.write(str(e))
        idx = idx + 1
        if idx < len(arr):
            sys.stdout.write(', ') 
    sys.stdout.write("]\n")

# core data type
j=1
theNumbers = [1234, 3.111, 3+4j]
printArr(theNumbers)

theStrings = ['spam', "guido's", b'a\x01c']
printArr(theStrings)

print 'last item=>', theStrings[-1]
print 'find', theStrings[0].find('p')
print 'replace', theStrings[0].replace('p', 'z')
print 'formatting', '%s, eggs, and %s' % ('spam', 'SPAM!')
print 'formatting', '{0}, eggs, and {1}'.format('spam', 'SPAM!')

print 'functions', 'abc'.upper(), 'S'.isalpha(), 'abccccc\n '.rstrip()
 

theTuples = (1,2,3,'helo', "mulder's")
printArr(theTuples)
