public class Gorilla extends Mammal {
	public Gorilla(int energyLevel) {
		super(energyLevel);
	}
	public void throwSomething() {
		System.out.println("I threw something");
		energyLevel -= 5;
	}
	public void eatBanana() {
		System.out.println("Eating a banana for that potassium");
		energyLevel += 10;
	}
	public void climb() {
		System.out.println("Climbing, as any good primate should");
		energyLevel -= 10;
	}
}