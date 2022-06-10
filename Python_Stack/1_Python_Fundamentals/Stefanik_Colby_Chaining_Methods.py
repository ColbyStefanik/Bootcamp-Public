class User:
    def __init__(self, name, email):
        self.name = "Name"
        self.email = "email"
        self.accountBalance = 0

    def makeDeposit(self, amount):
        self.accountBalance += amount
        return self

    def makeWithdrawal(self, amount):
        self.accountBalance -= amount
        return self

    def displayUserBalance(self):
        print(self.accountBalance)
        return self

    def transferMoney(self, otherUser, amount):
        self.accountBalance -= amount
        otherUser.accountBalance += amount
        return self



user1 = User("Robert Jacobs", "email")
user2 = User("Johnathan Wilde", "email")
user3 = User("Gordon Freeman", "email")

user1.makeDeposit(100).makeDeposit(200).makeDeposit(500).makeWithdrawal(400).displayUserBalance()

user2.makeDeposit(500).makeDeposit(1000).makeWithdrawal(200).makeWithdrawal(300).displayUserBalance()

user3.makeDeposit(10000).makeWithdrawal(200).makeWithdrawal(600).makeWithdrawal(200).displayUserBalance()

user1.transferMoney(user3, 200).displayUserBalance()
user3.displayUserBalance()

#jeez thats a lot of activity, they money laundering?