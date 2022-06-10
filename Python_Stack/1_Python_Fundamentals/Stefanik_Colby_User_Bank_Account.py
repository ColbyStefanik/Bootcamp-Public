class BankAccount:
    intRate = 5 #default value
    balance = 0 #default value
    def __init__(self, intRate, balance):
        self.intRate = intRate
        self.balance = balance

class User:
    name = "name" #default value
    email = "email" #default value
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account = BankAccount(5, 0)

    def makeDeposit(self, amount):
        self.account.balance += amount
        return self
    
    def makeWithdrawal(self, amount):
        if self.account.balance < amount:
            print("Insufficient funds: Charging a $5 fee")
            self.account.balance -= 5
        else:
            self.account.balance -= amount
        return self

    def displayAccountInfo(self):
        print(f"Interest rate: {self.account.intRate}%")
        print(f"Balance: ${self.account.balance}")
        return self
    
    def yieldInterest(self):
        self.account.balance += (self.account.balance * self.account.intRate)/100
        return self

account1 = User("Johnathan", "johnathan@example.com")
account2 = User("Richard", "richard@example.com")

account1.makeDeposit(10000).makeDeposit(3000).makeDeposit(2000).makeWithdrawal(2000).yieldInterest().displayAccountInfo()
account2.makeDeposit(10000).makeDeposit(4000).makeWithdrawal(3000).makeWithdrawal(1000).makeWithdrawal(4000).makeWithdrawal(2000).yieldInterest().displayAccountInfo()