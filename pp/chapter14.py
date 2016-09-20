for x in [1,2,3,4]: 
    print  x ** 2

for x in 'spam': print(x * 2)    


 

prices = {
    "banana": 4,
    "apple": 2,
    "orange": 1.5,
    "pear": 3
}

stock = {
    "banana": 6,
    "apple": 0,
    "orange": 32,
    "pear": 15
}
result =0

for product in prices:
    profit = prices[product] * stock[product]
    print " >", product, prices[product], "*", stock[product] ,  "=" , profit 
    result = result + profit
    
print "total=>", result

