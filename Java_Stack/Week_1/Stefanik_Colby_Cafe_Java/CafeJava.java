public class CafeJava {

    public static void main(String[] args) {
        // APP VARIABLES
        // Lines of text that will appear in the app. 
        String generalGreeting = "Welcome to Cafe Java, ";
        String pendingMessage = ", your order will be ready shortly";
        String readyMessage = ", your order is ready";
        String displayTotalMessage = "Your total is $";
        
        // Menu variables (add yours below)
        double mochaPrice = 3.5;
        double dripCoffeePrice = 2.5;
        double lattePrice = 4;
        double cappucinePrice = 4.5;
    
        // Customer name variables (add yours below)
        String customer1 = "Cindhuri";
        String customerSam = "Sam";
        String customerJimmy = "jimmy";
        String customerNoah = "Noah";
    
        // Order completions (add yours below)
        boolean isReadyOrder1 = false;
        boolean isReadyOrderSam = false;
        boolean isReadyOrderJimmy = false;
        boolean isReadyOrderNoah = false;
    
        // APP INTERACTION SIMULATION (Add your code for the challenges below)
        // Example:
        System.out.println(generalGreeting + customer1); // Displays "Welcome to Cafe Java, Cindhuri"
    	// ** Your customer interaction print statements will go here ** //
        System.out.println(customer1 + "'s order is not yet ready");
        if(isReadyOrderNoah){
            System.out.println(customerNoah + ", your order is ready. That will be $" + cappucinePrice);
        }
        else{
            System.out.println("Sorry, your order is not ready yet.");
        }
        System.out.println(customerSam + " that will be $" + (lattePrice + lattePrice));
        if(isReadyOrderSam){
            System.out.println(customerSam + ", your order is ready.");
        }
        else{
            System.out.println("Sorry, your order is not ready yet.");
        }
        System.out.println(customerJimmy + ", verry sorry but you were undercharged. Your remaining total is $" + (lattePrice - dripCoffeePrice));
    }
}