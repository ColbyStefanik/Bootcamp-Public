class Pet:
    def __init__(self, name, type, tricks, health, energy):
        self.name = name
        self.type = type
        self.tricks = tricks
        self.health = health
        self.energy = energy

    def sleep(self):
        self.energy += 25

    def eat(self):
        self.energy += 5
        self.health += 10

    def play(self):
        self.health += 5
        self.energy -= 10

    def noise(self):
        print("Bark Bark!")

class Ninja:
    def __init__(self, first_name, last_name, treats, pet_food, pet):
        self.firstName = first_name
        self.lastName = last_name
        self.treats = treats
        self.petFood = pet_food
        self.pet = pet

    def walk(self):
        self.pet.play()

    def feed(self):
        self.pet.eat()
        self.petFood -= 1

    def bathe(self):
        self.pet.noise()

bestBoi = Pet("Blitz", "German Shepard", "jump", 20, 20)
ninja = Ninja("Robert", "Jacob", "Meat Filled Bones", 4, bestBoi)

ninja.walk()
ninja.feed()
ninja.bathe()