"""
1
2
2
2
2
"""


# lslslslsl
language = ['python', 'perl', 'c', 'java', 'nodejs']

mylang = "c++"

#for lang in language:
for lang in ['python', 'perl', 'c', 'java', 'nodejs', mylang]:
    if lang in ['python', 'perl']:
        print ("%-6s need interpreter" % lang)
    elif lang in ['c', 'java']:
        print ("%6s need compiler" % lang)
    else:
        print ("%6s should not\" \\ reach here" % lang)


a=100
b=3

print ("%5s=%5d and 100-3=%5d" % ("100+---3", a+b , 97))
print ("junsang is %d length" % len("junsang"))
print ("junsang is %s" % "junsang".upper())
print (a*b)
print (a**b)
print (a%b)
print (a/b*1.0)
print (a/(b*1.0))
print (a//b)

a = "Hi mulder"
print (a[1], a[5], a[3:8])


