public class Item {

    private String name;
    private double price;

    public Item(){ //Default values
        this.name = "Generic Product"; //Oh boy I can't wait for Generic Product!
        this.price = 0;
    }

    public Item(String name, double price) {
        this.name = name;
        this.price = price;
    }

    public String getName(){
        return this.name;
    }

    public double getPrice(){
        return this.price;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}