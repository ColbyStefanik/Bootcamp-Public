class BankAccount:
    intRate = 5 #default value
    balance = 0 #default value
    def __init__(self, intRate, balance):
        self.intRate = intRate
        self.balance = balance

    def makeDeposit(self, amount):
        self.balance += amount
        return self
    
    def makeWithdrawal(self, amount):
        if self.balance < amount:
            print("Insufficient funds: Charging a $5 fee")
            self.balance -= 5
        else:
            self.balance -= amount
        return self

    def displayAccountInfo(self):
        print(f"Interest rate: {self.intRate}%")
        print(f"Balance: ${self.balance}")
        return self
    
    def yieldInterest(self):
        self.balance += (self.balance * self.intRate)/100
        return self

account1 = BankAccount(.5, 5000)
account2 = BankAccount(.5, 10000)

account1.makeDeposit(2000).makeDeposit(3000).makeDeposit(2000).makeWithdrawal(2000).yieldInterest().displayAccountInfo()
account2.makeDeposit(2000).makeDeposit(4000).makeWithdrawal(3000).makeWithdrawal(1000).makeWithdrawal(4000).makeWithdrawal(2000).yieldInterest().displayAccountInfo()