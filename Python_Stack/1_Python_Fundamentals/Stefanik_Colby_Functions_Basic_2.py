def countdown(num):
    output = []
    for i in range(num,-1,-1):
        output.append(i)
    return output
print(countdown(5))

def printAndReturn(x):
    print(x[0])
    print(x[1])
printAndReturn([1,2])

def firstPlusLength(x):
    return x[0] + len(x)
print(firstPlusLength([1,2,3,4,5]))

def valuesGreaterThanSecond(x):
    if len(x) < 2:
        return False
    y = []
    for i in range(0,len(x)):
        if x[i] > x[1]:
            y.append(x[i])
    print(len(y))
    return y
print(valuesGreaterThanSecond([5,4,3,8,12,4]))

def lengthAndValue(size,value):
    x = []
    for i in range(0, size):
        x.append(value)
    return x
print(lengthAndValue(10,14))