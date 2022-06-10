for x in range(0, 150):
    print(x)

for x in range(5, 1005, 5):
    print(x)

for x in range(0, 100):
    if x % 10 == 0:
        print("Coding Dojo")
    elif x % 5 == 0:
        print("Coding")
    else:
        print(x)

finalNum = 0

for x in range(1, 500000, 2):
    finalNum = finalNum + x
print(finalNum)

for x in range(2018, 0, -4):
    print(x)

lowNum = 0
highNum = 1000
mult = 25

for x in range(lowNum, highNum, mult):
    print(x)