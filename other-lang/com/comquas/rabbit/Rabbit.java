package com.comquas.rabbit;

import android.util.Log;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Created by saturngod on 23/1/15.
 */
public class Rabbit {

    public static String zg2uni(String input) {


        int inc = 0;

        String[] zawgyi = new String[79];
        String[] unicode = new String[79];

        zawgyi[inc]= "(\u103D|\u1087)";
        unicode[inc]="\u103E";

        inc++;
        zawgyi[inc]= "\u103C";
        unicode[inc]="\u103D";

        inc++;
        zawgyi[inc]= "(\u103B|\u107E|\u107F|\u1080|\u1081|\u1082|\u1083|\u1084)";
        unicode[inc]="\u103C";

        inc++;
        zawgyi[inc]= "(\u103A|\u107D)";
        unicode[inc]="\u103B";

        inc++;
        zawgyi[inc]= "\u1039";
        unicode[inc]="\u103A";

        inc++;
        zawgyi[inc]= "\u106A";
        unicode[inc]="\u1009";

        inc++;
        zawgyi[inc]= "\u106B";
        unicode[inc]="\u100A";

        inc++;
        zawgyi[inc]= "\u106C";
        unicode[inc]="\u1039\u100B";

        inc++;
        zawgyi[inc]= "\u106D";
        unicode[inc]="\u1039\u100C";

        inc++;
        zawgyi[inc]= "\u106E";
        unicode[inc]="\u100D\u1039\u100D";

        inc++;
        zawgyi[inc]= "\u106F";
        unicode[inc]="\u100D\u1039\u100E";


        inc++;
        zawgyi[inc]= "\u1070";
        unicode[inc]= "\u1039\u100F";

        inc++;
        zawgyi[inc]= "(\u1071|\u1072)";
        unicode[inc]= "\u1039\u1010";

        inc++;
        zawgyi[inc]= "\u1060";
        unicode[inc]="\u1039\u1000";
        inc++;
        zawgyi[inc]= "\u1061";
        unicode[inc]="\u1039\u1001";
        inc++;
        zawgyi[inc]= "\u1062";
        unicode[inc]="\u1039\u1002";
        inc++;
        zawgyi[inc]= "\u1063";
        unicode[inc]="\u1039\u1003";
        inc++;
        zawgyi[inc]= "\u1065";
        unicode[inc]="\u1039\u1005";


        inc++;
        zawgyi[inc]= "\u1068";
        unicode[inc]="\u1039\u1007";
        inc++;
        zawgyi[inc]= "\u1069";
        unicode[inc]="\u1039\u1008";




        inc++;
        zawgyi[inc]= "(\u1073|\u1074)";
        unicode[inc]= "\u1039\u1011";


        inc++;
        zawgyi[inc]= "\u1075";
        unicode[inc]="\u1039\u1012";
        inc++;
        zawgyi[inc]= "\u1076";
        unicode[inc]="\u1039\u1013";
        inc++;
        zawgyi[inc]= "\u1077";
        unicode[inc]="\u1039\u1014";
        inc++;
        zawgyi[inc]= "\u1078";
        unicode[inc]="\u1039\u1015";
        inc++;
        zawgyi[inc]= "\u1079";
        unicode[inc]="\u1039\u1016";
        inc++;
        zawgyi[inc]= "\u107A";
        unicode[inc]="\u1039\u1017";
        inc++;
        zawgyi[inc]= "\u107C";
        unicode[inc]="\u1039\u1019";

        inc++;
        zawgyi[inc]= "\u1085";
        unicode[inc]= "\u1039\u101C";


        inc++;
        zawgyi[inc]= "\u1033";
        unicode[inc]="\u102F";

        inc++;
        zawgyi[inc]= "\u1034";
        unicode[inc]="\u1030";

        inc++;
        zawgyi[inc]= "\u103F";
        unicode[inc]="\u1030";

        inc++;
        zawgyi[inc]= "\u1086";
        unicode[inc]="\u103F";

        inc++;
        zawgyi[inc]= "\u1088";
        unicode[inc]="\u103E\u102F";

        inc++;
        zawgyi[inc]= "\u1089";
        unicode[inc]="\u103E\u1030";

        inc++;
        zawgyi[inc]= "\u108A";
        unicode[inc]="\u103D\u103E";


        //kinzi list

        inc++;
        zawgyi[inc]= "([\u1000-\u1021])\u1064";
        unicode[inc]="\u1004\u103A\u1039$1";



        inc++;
        zawgyi[inc]= "([\u1000-\u1021])\u108B";
        unicode[inc]="\u1004\u103A\u1039$1\u102D";

        inc++;
        zawgyi[inc]= "([\u1000-\u1021])\u108C";
        unicode[inc]="\u1004\u103A\u1039$1\u102E";

        inc++;
        zawgyi[inc]= "([\u1000-\u1021])\u108D";
        unicode[inc]="\u1004\u103A\u1039$1\u1036";

        inc++;
        zawgyi[inc]= "\u108E";
        unicode[inc]="\u102D\u1036";

        inc++;
        zawgyi[inc]= "\u108F";
        unicode[inc]="\u1014";

        inc++;
        zawgyi[inc]= "\u1090";
        unicode[inc]="\u101B";

        inc++;
        zawgyi[inc]= "\u1091";
        unicode[inc]="\u100F\u1039\u1091";


        //fix ka bar
        inc++;
        zawgyi[inc]= "\u1019\u102C(\u107B|\u1093)";
        unicode[inc]="\u1019\u1039\u1018\u102C";

        inc++;
        zawgyi[inc]= "(\u107B|\u1093)";
        unicode[inc]="\u103A\u1018";

        inc++;
        zawgyi[inc]= "(\u1094|\u1095)";
        unicode[inc]="\u1037";

        //1096 á‚– zawgyi in unicod ??? I don't know
        inc++;
        zawgyi[inc]= "\u1096";
        unicode[inc]="\u1039\u1010\u103D";


        inc++;
        zawgyi[inc]= "\u1097";
        unicode[inc]="\u100B\u1039\u100B";

        inc++;
        zawgyi[inc]= "\u103C([\u1000-\u1021])([\u1000-\u1021])?";
        unicode[inc]="$1\u103C$2";

        inc++;
        zawgyi[inc]= "([\u1000-\u1021])\u103C\u103A";
        unicode[inc]="\u103C$1\u103A";

        inc++;
        zawgyi[inc]= "\u1031([\u1000-\u1021])(\u103E)?(\u103B)?";
        unicode[inc]="$1$2$3\u1031";

        inc++;
        zawgyi[inc]= "([\u1000-\u1021])\u1031([\u103B\u103C\u103D])";
        unicode[inc]="$1$2\u1031";



        inc++;
        zawgyi[inc]= "\u1032\u103D";
        unicode[inc]="\u103D\u1032";

        inc++;
        zawgyi[inc]= "\u103D\u103B";
        unicode[inc]="\u103B\u103D";

        //reorder
        inc++;
        zawgyi[inc]= "\u103A\u1037";
        unicode[inc]="\u1037\u103A";

        inc++;
        zawgyi[inc]= "\u102F(\u102D|\u102E|\u1036|\u1037)\u102F";
        unicode[inc]="\u102F$1";

        inc++;
        zawgyi[inc]= "\u102F\u102F";
        unicode[inc]="\u102F";

        inc++;
        zawgyi[inc]= "(\u102F|\u1030)(\u102D|\u102E)";
        unicode[inc]="$2$1";

        inc++;
        zawgyi[inc]= "(\u103E)(\u103B|\u1037)";
        unicode[inc]="$2$1";

        inc++;
        zawgyi[inc]= "\u1025(\u103A|\u102C)";
        unicode[inc]="\u1009$1";

        inc++;
        zawgyi[inc]= "\u1025\u102E";
        unicode[inc]="\u1026";

        inc++;
        zawgyi[inc]= "\u1005\u103B";
        unicode[inc]="\u1008";

        inc++;
        zawgyi[inc]= "\u1036(\u102F|\u1030)";
        unicode[inc]="$1\u1036";

        inc++;
        zawgyi[inc]= "\u1031\u1037\u103E";
        unicode[inc]="\u103E\u1031\u1037";

        inc++;
        zawgyi[inc]= "\u1031\u103E\u102C";
        unicode[inc]="\u103E\u1031\u102C";

        inc++;
        zawgyi[inc]= "\u105A";
        unicode[inc]="\u102B\u103A";

        inc++;
        zawgyi[inc]= "\u1031\u103B\u103E";
        unicode[inc]="\u103B\u103E\u1031";

        inc++;
        zawgyi[inc]= "(\u102D|\u102E)(\u103D|\u103E)";
        unicode[inc]="$2$1";

        inc++;
        zawgyi[inc]= "\u102C\u1039([\u1000-\u1021])";
        unicode[inc]="\u1039$1\u102C";


        inc++;
        zawgyi[inc]= "\u103C\u1004\u103A\u1039([\u1000-\u1021])";
        unicode[inc]="\u1004\u103A\u1039$1\u103C";

        inc++;
        zawgyi[inc]= "\u1039\u103C\u103A\u1039([\u1000-\u1021])";
        unicode[inc]="\u103A\u1039$1\u103C";

        inc++;
        zawgyi[inc]= "\u103C\u1039([\u1000-\u1021])";
        unicode[inc]="\u1039$1\u103C";

        inc++;
        zawgyi[inc]= "\u1036\u1039([\u1000-\u1021])";
        unicode[inc]="\u1039$1\u1036";

        inc++;
        zawgyi[inc]= "\u1092";
        unicode[inc]="\u100B\u1039\u100C";



        inc++;
        zawgyi[inc]= "\u104E";
        unicode[inc]="\u104E\u1004\u103A\u1038";

        inc++;
        zawgyi[inc]= "\u1040(\u102B|\u102C|\u1036)";
        unicode[inc]="\u101D$1";

        inc++;
        zawgyi[inc]= "\u1025\u1039";
        unicode[inc]="\u1009\u1039";


        //because of Android JDK 7 bugs
        // if $1 is missing , it use null instead of empty
        // so , I need to clear null
        input = input.replace("null","\uFFFF\uFFFF");




        for(int k =0 ; k<=inc; k++) {

            input = input.replaceAll(zawgyi[k],unicode[k]);
            input = input.replace("null","");

        }


        input = input.replace("\uFFFF\uFFFF","null");
        return input;
    }

    public static String uni2zg(String input) {

        int inc = 0;

        String[] _unicode = new String[100];
        String[] _zawgyi = new String[100];


        //ပက်ဆင့်  င်္

        //do first because
        //\u1004\u103A\u1039\u1000\u102D will problem
        //without doing this one first, \u1039\u1000 will be pat sit
        _unicode[inc]="\u1004\u103A\u1039";
        _zawgyi[inc]="\u1064";


        inc++;
        _unicode[inc] = "\u1039\u1010\u103D";
        _zawgyi[inc] = "\u1096";


        //နူနွနှနု and follow by pat sint န္တ because of 1039 , move here from 108x
        inc++;
        _unicode[inc]="\u1014(?=[\u1030\u103D\u103E\u102F\u1039])";
        _zawgyi[inc]= "\u108F";


        inc++;

        _unicode[inc]="\u102B\u103A";
        _zawgyi[inc]="\u105A";


        //because of 1039
        //ဋ္ဌ
        inc++;
        _unicode[inc]="\u100B\u1039\u100C";
        _zawgyi[inc]="\u1092";

        //င်္ီ
        inc++;
        _unicode[inc]="\u102D\u1036";
        _zawgyi[inc]="\u108E";

        //၎င်း
        inc++;
        _unicode[inc]="\u104E\u1004\u103A\u1038";
        _zawgyi[inc]="\u104E";


        //ဥ follow by ု or ူ or 1039 ဥူ ဥု
        inc++;
        _unicode[inc]="[\u1025\u1009](?=[\u1039\u102F\u1030])";
        _zawgyi[inc]="\u106A";

        inc++;
        _unicode[inc]="[\u1025\u1009](?=[\u103A])";
        _zawgyi[inc]="\u1025";



        //ည ခြေထောက် အပြတ် ညှ ညူ
        inc++;
        _unicode[inc]="\u100A(?=[\u1039\u102F\u1030\u103D])";
        _zawgyi[inc]="\u106B";

        inc++;
        _unicode[inc]="(\u1039[\u1000-\u1021])\u102F";
        _zawgyi[inc]="$1\u1033";

        inc++;
        _unicode[inc]="(\u1039[\u1000-\u1021])\u1030";
        _zawgyi[inc]="$1\u1034";

        ////////////////
        // Start 106X //
        ///////////////
        //ပက်ဆင့် က
        inc++;
        _unicode[inc]="\u1039\u1000";
        _zawgyi[inc]="\u1060";

        //ပက်ဆင့်  ခ
        inc++;
        _unicode[inc]="\u1039\u1001";
        _zawgyi[inc]="\u1061";

        //ပက်ဆင့်  ဂ
        inc++;
        _unicode[inc]="\u1039\u1002";
        _zawgyi[inc]="\u1062";

        //ပက်ဆင့်  ဃ
        inc++;
        _unicode[inc]="\u1039\u1003";
        _zawgyi[inc]="\u1063";



        //ပက်ဆင့်  စ
        inc++;
        _unicode[inc]="\u1039\u1005";
        _zawgyi[inc]="\u1065";

        //ပက်ဆင့်  ဇ
        inc++;
        _unicode[inc]="\u1039\u1007";
        _zawgyi[inc]="\u1068";

        //ပက်ဆင့်  ဇ
        inc++;
        _unicode[inc]="\u1039\u1008";
        _zawgyi[inc]="\u1069";





        //ည ခြေထောက် အပြတ် ညှ ညူ
        inc++;
        _unicode[inc]="\u100A(?=[\u1039\u102F\u1030])";
        _zawgyi[inc]="\u106B";


        //္ဋ
        inc++;
        _unicode[inc]="\u1039\u100B";
        _zawgyi[inc]="\u106C";

        //္ဌ
        inc++;
        _unicode[inc]="\u1039\u100C";
        _zawgyi[inc]="\u106D";

        //ဍ္ဍ
        inc++;
        _unicode[inc]="\u100D\u1039\u100D";
        _zawgyi[inc]="\u106E";


        //ဎ္ဍ
        inc++;
        _unicode[inc]="\u100E\u1039\u100D";
        _zawgyi[inc]="\u106F";

        ////////////////
        // End 106X //
        ///////////////

        ////////////////
        // Start 107X //
        ///////////////

        //ပက်ဆင့် ဏ
        inc++;
        _unicode[inc]="\u1039\u100F";
        _zawgyi[inc]="\u1070";

        //ပက်ဆင့် တ
        //in zawgyi in has 2 တ for ပက်ဆင့်
        //ignore and I will use 1071 for now
        inc++;
        _unicode[inc]="\u1039\u1010";
        _zawgyi[inc]="\u1071";


        //ပက်ဆင့် ထ
        //in zawgyi in has 2 ထ for ပက်ဆင့် >.<
        //ignore and I will use 1073 for now
        inc++;
        _unicode[inc]="\u1039\u1011";
        _zawgyi[inc]="\u1073";

        //ပက်ဆင့်  ဒ
        inc++;
        _unicode[inc]="\u1039\u1012";
        _zawgyi[inc]="\u1075";

        //ပက်ဆင့်  ဓ
        inc++;
        _unicode[inc]="\u1039\u1013";
        _zawgyi[inc]="\u1076";

        //ပက်ဆင့်  ဓ
        inc++;
        _unicode[inc]="\u1039\u1013";
        _zawgyi[inc]="\u1076";

        //ပက်ဆင့်  န
        inc++;
        _unicode[inc]="\u1039\u1014";
        _zawgyi[inc]="\u1077";

        //ပက်ဆင့်  ပ
        inc++;
        _unicode[inc]="\u1039\u1015";
        _zawgyi[inc]="\u1078";

        //ပက်ဆင့်  ဖ
        inc++;
        _unicode[inc]="\u1039\u1016";
        _zawgyi[inc]="\u1079";

        //ပက်ဆင့် ဗ
        inc++;
        _unicode[inc]="\u1039\u1017";
        _zawgyi[inc]="\u107A";

        //ပက်ဆင့် ဘ
        inc++;
        _unicode[inc]="\u1039\u1018";
        _zawgyi[inc]="\u107B";

        //ပက်ဆင့် မ
        inc++;
        _unicode[inc]="\u1039\u1019";
        _zawgyi[inc]="\u107C";

        //Ignore for ရရစ် ရပင့် အသေးအကြီး
        //will use with normalize zawgyi

        ////////////////
        // End 107X //
        ///////////////


        ////////////////
        // Start 108X //
        ///////////////

        //ပက်ဆင့် လ
        inc++;
        _unicode[inc]="\u1039\u101C";
        _zawgyi[inc]="\u1085";

        //ဿ
        inc++;
        _unicode[inc]="\u103F";
        _zawgyi[inc]="\u1086";

        //​ြှ
        inc++;
        _unicode[inc]="(\u103C)\u103E";
        _zawgyi[inc]="$1\u1087";

        //ွှ
        inc++;
        _unicode[inc]="\u103D\u103E";
        _zawgyi[inc]="\u108A";

        //use 1064 because I already convert at first
        //\u1004\u103A\u1039\u1000\u102D will convert to
        //\u1064\u1000\u102D

        inc++;
        _unicode[inc]="(\u1064)([\u1031]?)([\u103C]?)([\u1000-\u1021])\u102D";
        _zawgyi[inc]="$2$3$4\u108B";

        inc++;
        _unicode[inc]="(\u1064)([\u1031]?)([\u103C]?)([\u1000-\u1021])\u102E";
        _zawgyi[inc]="$2$3$4\u108C";

        inc++;
        _unicode[inc]="(\u1064)([\u1031]?)([\u103C]?)([\u1000-\u1021])\u1036";
        _zawgyi[inc]="$2$3$4\u108D";



        ////////////////
        // End 108X //
        ///////////////


        ////////////////
        // Start 108X //
        ///////////////

        //ရု ရူ
        inc++;
        _unicode[inc]="\u101B(?=[\u102F\u1030\u103D\u108A])";
        _zawgyi[inc]= "\u1090";


        //ဏ္ဍ
        inc++;
        _unicode[inc]="\u100F\u1039\u100D";
        _zawgyi[inc]="\u1091";



        //u1093 is the same like 107B
        //u1096 already done

        inc++;
        _unicode[inc] = "\u100B\u1039\u100B";
        _zawgyi[inc] = "\u1097";

        ////////////////
        // End 108X //
        ///////////////

        //time to clear 1039

        //reorder ta way doe
        inc++;
        _unicode[inc] = "([\u1000-\u1021\u1029\u1090])([\u1060-\u1069\u106C\u106D\u1070-\u107C\u1085\u108A])?([\u103B-\u103E]*)?\u1031";
        _zawgyi[inc] = "\u1031$1$2$3";

        //reoder yayint
        inc++;
        _unicode[inc] = "([\u1000-\u1021\u1029])([\u1060-\u1069\u106C\u106D\u1070-\u107C\u1085])?(\u103C)";
        _zawgyi[inc] ="$3$1$2";

        //move ng thet , ya pin , ya yin, wa swe , ta chown ngin
        inc++;
        _unicode[inc]="\u103A";
        _zawgyi[inc]="\u1039";

        inc++;
        _unicode[inc]="\u103B";
        _zawgyi[inc]="\u103A";

        inc++;
        _unicode[inc]="\u103C";
        _zawgyi[inc]="\u103B";

        inc++;
        _unicode[inc]="\u103D";
        _zawgyi[inc]="\u103C";

        inc++;
        _unicode[inc]="\u103E";
        _zawgyi[inc]="\u103D";



        //mostly done
        //need to do normalize the zawgyi


        //change ှ ု to ှု

        inc++;
        _unicode[inc]="\u103D\u102F";
        _zawgyi[inc]= "\u1088";

        //move the အောက်က မြစ်
        inc++;
        _unicode[inc]="([\u102F\u1030\u1014\u101B\u103C\u108A\u103D\u1088])([\u1032\u1036]{0,1})\u1037";
        _zawgyi[inc]= "$1$2\u1095";

        inc++;
        _unicode[inc]="\u102F\u1095";
        _zawgyi[inc]= "\u102F\u1094";

        //for na and ya
        inc++;
        _unicode[inc]="([\u1014\u101B])([\u1032\u1036\u102D\u102E\u108B\u108C\u108D\u108E])\u1037";
        _zawgyi[inc]= "$1$2\u1095";

        //\u1095\u1039
        inc++;
        _unicode[inc]="\u1095\u1039";
        _zawgyi[inc]= "\u1094\u1039";

        //change ု

        //for ya yint
        inc++;
        _unicode[inc]="([\u103A\u103B])([\u1000-\u1021])\u102F";
        _zawgyi[inc]= "$1$2\u1033";

        //for ya pint
        inc++;
        _unicode[inc]="\u103A\u102F";
        _zawgyi[inc]= "\u103A\u1033";

        inc++;
        _unicode[inc]="\u103A([\u1036\u102D\u102E\u108B\u108C\u108D\u108E])\u102F";
        _zawgyi[inc]= "\u103A$1\u1033";

        //change ူ

        //for ya yint
        inc++;
        _unicode[inc]="([\u103A\u103B])([\u1000-\u1021])\u1030";
        _zawgyi[inc]= "$1$2\u1034";


        //for ya pint
        inc++;
        _unicode[inc]="\u103A\u1030";
        _zawgyi[inc]= "\u103A\u1034";

        inc++;
        _unicode[inc]="\u103A([\u1036\u102D\u102E\u108B\u108C\u108D\u108E])\u1030";
        _zawgyi[inc]= "\u103A$1\u1034";


        //change to ှ ူ
        inc++;
        _unicode[inc]="\u103D\u1030";
        _zawgyi[inc]="\u1089";

        //change ya yint a kyi

        inc++;
        _unicode[inc]="\u103B([\u1000\u1003\u1006\u100F\u1010\u1011\u1018\u101A\u101C\101E\u101F])";
        _zawgyi[inc]= "\u107E$1";

        inc++;
        _unicode[inc]="\u107E([\u1000\u1003\u1006\u100F\u1010\u1011\u1018\u101A\u101C\101E\u101F])([\u103C\u108A])([\u1032\u1036\u102D\u102E\u108B\u108C\u108D\u108E])";
        _zawgyi[inc]= "\u1084$1$2$3";

        inc++;
        _unicode[inc]="\u107E([\u1000\u1003\u1006\u100F\u1010\u1011\u1018\u101A\u101C\101E\u101F])([\u103C\u108A])";
        _zawgyi[inc]= "\u1082$1$2";

        inc++;
        _unicode[inc]="\u107E([\u1000\u1003\u1006\u100F\u1010\u1011\u1018\u101A\u101C\101E\u101F])([\u1032\u1036\u102D\u102E\u108B\u108C\u108D\u108E])";
        _zawgyi[inc]= "\u1080$1$2";


        //change ya yint a tae

        inc++;
        _unicode[inc]="\u103B([\u1000-\u1021])([\u103C\u108A])([\u1032\u1036\u102D\u102E\u108B\u108C\u108D\u108E])";
        _zawgyi[inc]= "\u1083$1$2$3";

        inc++;
        _unicode[inc]="\u103B([\u1000-\u1021])([\u103C\u108A])";
        _zawgyi[inc]= "\u1081$1$2";

        inc++;
        _unicode[inc]="\u103B([\u1000-\u1021])([\u1032\u1036\u102D\u102E\u108B\u108C\u108D\u108E])";
        _zawgyi[inc]= "\u107F$1$2";


        inc++;
        _unicode[inc]="\u103A\u103D";
        _zawgyi[inc]= "\u103D\u103A";

        inc++;
        _unicode[inc]="\u103A([\u103C\u108A])";
        _zawgyi[inc]= "$1\u107D";



      //because of Android JDK 7 bugs
      // if $1 is missing , it use null instead of empty
      // so , I need to clear null
        input = input.replace("null","\uFFFF\uFFFF");




        for(int k =0 ; k<=inc; k++) {

            input = input.replaceAll(_unicode[k],_zawgyi[k]);
            input = input.replace("null","");

        }


        input = input.replace("\uFFFF\uFFFF","null");
        return input;
    }


}
