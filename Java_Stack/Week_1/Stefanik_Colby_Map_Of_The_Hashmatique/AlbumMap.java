import java.util.HashMap;
import java.util.Set;

public class AlbumMap {
    public static void main(String[] args) {
        HashMap<String, String> trackList = new HashMap<String, String>();

        //Lets make em a nightcore band, why not
        trackList.put("Nightcore - Burn It All Down", "This aint where the legends come from, you're not what a hero looks like.");
        trackList.put("Nightcore - Odds Are", "They always end up running an I don't mind.");
        trackList.put("Nightcore - Animal", "Dangerous, how we toe the line.");
        trackList.put("Nightcore - Fever Dream", "It feels like we're living in a dream.");
        //First lines only cause no full lyrics written down for me to C&P

        Set<String> keys = trackList.keySet();
        for(String key : keys) {
            System.out.println(key);
            System.out.println(trackList.get(key));    
        }
    }
}