package com.comquas.rabbit;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
 * Created by saturngod on 23/1/15.
 */
public class Rabbit {

  public static String uni2zg(String input) {

      String rule = "{{UNI2ZG}}";

      return replace_with_rule(rule,input);
  }
  
    public static String zg2uni(String input) {


        String rule = "{{ZG2UNI}}";

        return replace_with_rule(rule,input);

    }



    public static String replace_with_rule(String rule,String output) {

        try {
            JSONArray rule_array = new JSONArray(rule);
            int max_loop = rule_array.length();

            //because of JDK 7 bugs in Android
            output = output.replace("null","\uFFFF\uFFFF");

            for(int i = 0 ; i < max_loop; i ++) {

                JSONObject obj = rule_array.getJSONObject(i);
                String from = obj.getString("from");
                String to = obj.getString("to");

                output = output.replaceAll(from,to);
                output = output.replace("null","");

            }
        } catch (JSONException e) {
            e.printStackTrace();
        }

        output = output.replace("\uFFFF\uFFFF","null");
        return output;

    }


}
