# Oreilly Learning Python 4th Edition Chapter 12 : while and for loops
# ------------------------------------------------------------------------
L = [1,2,3,4,5]

p = 0
for x in L:
    y = x + p
    p = y

print L
print y

for i in range(len(L)):
    print '2:', i, L[i]
    L[i] += 1

print L

i = 0
while i < len(L):
    L[i] += 1
    i += 1

print L

L1 = [1,2,3,4]
L2 = [5,6,7,8]

print zip(L1, L2)
print list(zip(L1, L2))

for (x, y) in zip (L1, L2):
    print(x, y, '--', x+y)

T1, T2, T3 = (1,2,3), (4,5,6), (7,8,9)
print T3
print list(zip(T1, T2, T3))    

S1 = 'abc'
S2 = 'xyz123'

print list(zip(S1, S2))

print map(ord, 'spam')
print list(map(ord, 'spam'))

print map(None, S1, S2)

res = []
for c in 'spam': res.append(ord(c))
print res

D1 = {'spam':1, 'eggs':3, 'toast':5}
print D1

D11 = {}
D11['spam'] = 11
print D11


keys = ['spam', 'eggs', 'toast']
vals = [1,3,5]
D111 = list(zip(keys, vals))
print D111

D2 = {}
for(k, v) in zip(keys, vals): D2[k] = v
print D2

D3 = dict(zip(keys, vals))
print D3

S = 'spam'
offset = 0
for item in S:
    print item, 'appears at offset', offset
    offset += 1


for (offset, item) in enumerate(S):
    print item, 'appears at offset', offset

E = enumerate(S)
print E
print next(E)
print next(E)
print next(E)

dict1 = { 'hi mulder': 'okay scully' }

print "dict1['hi mulder']", dict1['hi mulder']

dict1['second member'] = 'jain'
print "dict1['second member']", dict1['second member']





