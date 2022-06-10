class User:
    def __init__(self, name, email):
        self.name = "Name"
        self.email = "email"
        self.accountBalance = 0

    def makeDeposit(self, amount):
        self.accountBalance += amount

    def makeWithdrawal(self, amount):
        self.accountBalance -= amount

    def displayUserBalance(self):
        print(self.accountBalance)

    def transferMoney(self, otherUser, amount):
        self.accountBalance -= amount
        otherUser.accountBalance += amount



user1 = User("Robert Jacobs", "email")
user2 = User("Johnathan Wilde", "email")
user3 = User("Gordon Freeman", "email")

user1.makeDeposit(100)
user1.makeDeposit(200)
user1.makeDeposit(500)
user1.makeWithdrawal(400)
user1.displayUserBalance()

user2.makeDeposit(500)
user2.makeDeposit(1000)
user2.makeWithdrawal(200)
user2.makeWithdrawal(300)
user2.displayUserBalance()

user3.makeDeposit(10000)
user3.makeWithdrawal(200)
user3.makeWithdrawal(600)
user3.makeWithdrawal(200)
user3.displayUserBalance()

user1.transferMoney(user3, 200)
user1.displayUserBalance()
user3.displayUserBalance()

#jeez thats a lot of activity, they money laundering?