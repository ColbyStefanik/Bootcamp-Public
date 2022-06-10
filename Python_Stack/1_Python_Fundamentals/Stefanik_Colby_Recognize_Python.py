num1 = 42 #variable declaration, number
num2 = 2.3 #variable declaration, number
boolean = True #variable declration, boolean
string = 'Hello World' #variable declaration, string
pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives'] #variable declaration, object
person = {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False} #variable declaration, object
fruit = ('blueberry', 'strawberry', 'banana') #variable declaration, object
print(type(fruit)) #print fruit
print(pizza_toppings[1]) #print variable 2 in pizza_toppinggs
pizza_toppings.append('Mushrooms') #add variable to pizza_toppings
print(person['name']) #print 'name' from person variable
person['name'] = 'George' #change variable in person
person['eye_color'] = 'blue' #change variable in person
print(fruit[2]) #print variable 3 in fruit

if num1 > 45: #if statement
    print("It's greater")
else: #else statement
    print("It's lower")

if len(string) < 5: #if statement
    print("It's a short word!")
elif len(string) > 15: #if else statement
    print("It's a long word!")
else: #else statement
    print("Just right!")

for x in range(5): #for loop, start
    print(x)
for x in range(2,5):
    print(x)
for x in range(2,10,3):
    print(x)
x = 0
while(x < 5): #while loop, start
    print(x)
    x += 1 #while loop, increment

pizza_toppings.pop() #remove variable from pizza toppings
pizza_toppings.pop(1) #remove variable 2 from pizza toppings

print(person) #print person object
person.pop('eye_color') #remove variable from person
print(person) #print person object

for topping in pizza_toppings: #for loop, start
    if topping == 'Pepperoni': #if statement
        continue
    print('After 1st if statement') #print statement
    if topping == 'Olives': #if statement
        break #stop for loop

def print_hello_ten_times(): #function,
    for num in range(10): #argument
        print('Hello') #return

print_hello_ten_times() #call function

def print_hello_x_times(x): #function, x paramater
    for num in range(x): #argument
        print('Hello') #return

print_hello_x_times(4) #call function, 4 paramater

def print_hello_x_or_ten_times(x = 10): #function, 10 paramater
    for num in range(x): #argument
        print('Hello') #return 

print_hello_x_or_ten_times() #call function
print_hello_x_or_ten_times(4)  #call function, 4 paramater


"""
Bonus section
"""

# print(num3) #num3 not defined, error
# num3 = 72 #variable declaration
# fruit[0] = 'cranberry' #change variable in fruit 1st variable
# print(person['favorite_team']) #that is not defined, error
# print(pizza_toppings[7]) #there is no 8th variable to pizza toppings, error
#   print(boolean) #print boolean
# fruit.append('raspberry') #add variable to fruit
# fruit.pop(1) #remove variable 2 from fruit