//code is base on following two table
//http://my.wikipedia.org/wiki/File:Zawgyi_character_map_(color).png
//http://my.wikipedia.org/wiki/File:Unicode_character_map_(color).png

//using following tool
//http://rishida.net/tools/conversion/
//Keymagic Zawgyi Unicode 


/*
            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
                    Version 2, December 2004

 Copyright (C) 2004 Sam Hocevar <sam@hocevar.net>

 Everyone is permitted to copy and distribute verbatim or modified
 copies of this license document, and changing it is allowed as long
 as the name is changed.

            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
   TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

  0. You just DO WHAT THE FUCK YOU WANT TO.

*/

function uni2zg (input)
{
    var output = input;

    var _unicode =new Array();
    var _zawgyi=new Array();

    var tmp;//for looping tmp value
    var i;

    var inc = 0;


    //ပက်ဆင့်  င်္

    //do first because
    //\u1004\u103A\u1039\u1000\u102D will problem
    //without doing this one first, \u1039\u1000 will be pat sit
    _unicode[inc]=/\u1004\u103A\u1039/g;
    _zawgyi[inc]="\u1064";


    inc++;
    _unicode[inc] = /\u1039\u1010\u103D/g;
    _zawgyi[inc] = "\u1096";
    
    
    //နူနွနှနု and follow by pat sint န္တ because of 1039 , move here from 108x
    inc++;
    _unicode[inc]=/\u1014(?=[\u1030\u103D\u103E\u102F\u1039])/g;
    _zawgyi[inc]= "\u108F"


    inc++;

    _unicode[inc]=/\u102B\u103A/g;
    _zawgyi[inc]="\u105A";
    
    
    //because of 1039
    //ဋ္ဌ
    inc++;
    _unicode[inc]=/\u100B\u1039\u100C/g;
    _zawgyi[inc]="\u1092";

    //င်္ီ
    inc++;
    _unicode[inc]=/\u102D\u1036/g;
    _zawgyi[inc]="\u108E";

    //၎င်း
    inc++;
    _unicode[inc]=/\u104E\u1004\u103A\u1038/g;
    _zawgyi[inc]="\u104E";
    
    
    //ဥ follow by ု or ူ or 1039 ဥူ ဥု
    inc++;
    _unicode[inc]=/[\u1025\u1009](?=[\u1039\u102F\u1030])/g;
    _zawgyi[inc]="\u106A";
    
    inc++;
    _unicode[inc]=/[\u1025\u1009](?=[\u103A])/g;
    _zawgyi[inc]="\u1025";
    
    
    
   	 //ည ခြေထောက် အပြတ် ညှ ညူ
    inc++;
    _unicode[inc]=/\u100A(?=[\u1039\u102F\u1030\u103D])/g;
    _zawgyi[inc]="\u106B";
    
    inc++;
    _unicode[inc]=/(\u1039[\u1000-\u1021])\u102F/g;
    _zawgyi[inc]="$1\u1033";
    
        inc++;
    _unicode[inc]=/(\u1039[\u1000-\u1021])\u1030/g;
    _zawgyi[inc]="$1\u1034";

    ////////////////
    // Start 106X //
    ///////////////
    //ပက်ဆင့် က
    inc++;
    _unicode[inc]=/\u1039\u1000/g;
    _zawgyi[inc]="\u1060";

    //ပက်ဆင့်  ခ
    inc++;
    _unicode[inc]=/\u1039\u1001/g;
    _zawgyi[inc]="\u1061";

    //ပက်ဆင့်  ဂ
    inc++;
    _unicode[inc]=/\u1039\u1002/g;
    _zawgyi[inc]="\u1062";

    //ပက်ဆင့်  ဃ
    inc++;
    _unicode[inc]=/\u1039\u1003/g;
    _zawgyi[inc]="\u1063";



    //ပက်ဆင့်  စ
    inc++;
    _unicode[inc]=/\u1039\u1005/g;
    _zawgyi[inc]="\u1065";

    //ပက်ဆင့်  ဇ
    inc++;
    _unicode[inc]=/\u1039\u1007/g;
    _zawgyi[inc]="\u1068";

    //ပက်ဆင့်  ဇ
    inc++;
    _unicode[inc]=/\u1039\u1008/g;
    _zawgyi[inc]="\u1069";

    

   

    //ည ခြေထောက် အပြတ် ညှ ညူ
    inc++;
    _unicode[inc]=/\u100A(?=[\u1039\u102F\u1030])/g;
    _zawgyi[inc]="\u106B";


    //္ဋ
    inc++;
    _unicode[inc]=/\u1039\u100B/g;
    _zawgyi[inc]="\u106C";

    //္ဌ
    inc++;
    _unicode[inc]=/\u1039\u100C/g;
    _zawgyi[inc]="\u106D";

    //ဍ္ဍ
    inc++;
    _unicode[inc]=/\u100D\u1039\u100D/g;
    _zawgyi[inc]="\u106E";


    //ဎ္ဍ
    inc++;
    _unicode[inc]=/\u100E\u1039\u100D/g;
    _zawgyi[inc]="\u106F";

    ////////////////
    // End 106X //
    ///////////////

    ////////////////
    // Start 107X //
    ///////////////

    //ပက်ဆင့် ဏ
    inc++;
    _unicode[inc]=/\u1039\u100F/g;
    _zawgyi[inc]="\u1070";

    //ပက်ဆင့် တ
    //in zawgyi in has 2 တ for ပက်ဆင့်
    //ignore and I will use 1071 for now
    inc++;
    _unicode[inc]=/\u1039\u1010/g;
    _zawgyi[inc]="\u1071";


    //ပက်ဆင့် ထ
    //in zawgyi in has 2 ထ for ပက်ဆင့် >.<
    //ignore and I will use 1073 for now
    inc++;
    _unicode[inc]=/\u1039\u1011/g;
    _zawgyi[inc]="\u1073";

    //ပက်ဆင့်  ဒ
    inc++;
    _unicode[inc]=/\u1039\u1012/g;
    _zawgyi[inc]="\u1075";

    //ပက်ဆင့်  ဓ
    inc++;
    _unicode[inc]=/\u1039\u1013/g;
    _zawgyi[inc]="\u1076";

    //ပက်ဆင့်  ဓ
    inc++;
    _unicode[inc]=/\u1039\u1013/g;
    _zawgyi[inc]="\u1076";

    //ပက်ဆင့်  န
    inc++;
    _unicode[inc]=/\u1039\u1014/g;
    _zawgyi[inc]="\u1077";

    //ပက်ဆင့်  ပ
    inc++;
    _unicode[inc]=/\u1039\u1015/g;
    _zawgyi[inc]="\u1078";

    //ပက်ဆင့်  ဖ
    inc++;
    _unicode[inc]=/\u1039\u1016/g;
    _zawgyi[inc]="\u1079";

    //ပက်ဆင့် ဗ
    inc++;
    _unicode[inc]=/\u1039\u1017/g;
    _zawgyi[inc]="\u107A";

    //ပက်ဆင့် ဘ
    inc++;
    _unicode[inc]=/\u1039\u1018/g;
    _zawgyi[inc]="\u107B";

    //ပက်ဆင့် မ
    inc++;
    _unicode[inc]=/\u1039\u1019/g;
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
    _unicode[inc]=/\u1039\u101C/g;
    _zawgyi[inc]="\u1085";

    //ဿ
    inc++;
    _unicode[inc]=/\u103F/g;
    _zawgyi[inc]="\u1086";

    //​ြှ
    inc++;
    _unicode[inc]=/(\u103C)\u103E/g;
    _zawgyi[inc]="$1\u1087";

    //ွှ
    inc++;
    _unicode[inc]=/\u103D\u103E/g;
    _zawgyi[inc]="\u108A";

    //use 1064 because I already convert at first
    //\u1004\u103A\u1039\u1000\u102D will convert to
    //\u1064\u1000\u102D

    inc++;
    _unicode[inc]=/(\u1064)([\u1031]?)([\u103C]?)([\u1000-\u1021])\u102D/g;
    _zawgyi[inc]="$2$3$4\u108B";

    inc++;
    _unicode[inc]=/(\u1064)([\u1031]?)([\u103C]?)([\u1000-\u1021])\u102E/g;
    _zawgyi[inc]="$2$3$4\u108C";

    inc++;
    _unicode[inc]=/(\u1064)([\u1031]?)([\u103C]?)([\u1000-\u1021])\u1036/g;
    _zawgyi[inc]="$2$3$4\u108D";

    

    ////////////////
    // End 108X //
    ///////////////


    ////////////////
    // Start 108X //
    ///////////////

    //ရု ရူ
    inc++;
    _unicode[inc]=/\u101B(?=[\u102F\u1030\u103D\u108A])/g;
    _zawgyi[inc]= "\u1090";


    //ဏ္ဍ
    inc++;
    _unicode[inc]=/\u100F\u1039\u100D/g;
    _zawgyi[inc]="\u1091";

    

    //u1093 is the same like 107B
    //u1096 already done

    inc++;
    _unicode[inc] = /\u100B\u1039\u100B/g;
    _zawgyi[inc] = "\u1097";

    ////////////////
    // End 108X //
    ///////////////

    //time to clear 1039
    
    //reorder ta way doe
	inc++;
    _unicode[inc] = /([\u1000-\u1021\u1029\u1090])([\u1060-\u1069\u106C\u106D\u1070-\u107C\u1085\u108A])?([\u103B-\u103E]*)?\u1031/g;
    _zawgyi[inc] = "\u1031$1$2$3";
    
    //reoder yayint
    inc++;
    _unicode[inc] = /([\u1000-\u1021\u1029])([\u1060-\u1069\u106C\u106D\u1070-\u107C\u1085])?(\u103C)/g;
    _zawgyi[inc] ="$3$1$2";
    
    //move ng thet , ya pin , ya yin, wa swe , ta chown ngin
    inc++;
    _unicode[inc]=/\u103A/g;
    _zawgyi[inc]="\u1039";
    
    inc++;
    _unicode[inc]=/\u103B/g;
    _zawgyi[inc]="\u103A";
    
    inc++;
    _unicode[inc]=/\u103C/g;
    _zawgyi[inc]="\u103B";
    
    inc++;
    _unicode[inc]=/\u103D/g;
    _zawgyi[inc]="\u103C";
    
    inc++;
    _unicode[inc]=/\u103E/g;
    _zawgyi[inc]="\u103D";
    
    
   
   	//mostly done
   	//need to do normalize the zawgyi
   	
   	
   	//change ှ ု to ှု
	
	inc++;
   	_unicode[inc]=/\u103D\u102F/g;
   	_zawgyi[inc]= "\u1088";
   	
   	//move the အောက်က မြစ်
   	inc++;
   	_unicode[inc]=/([\u102F\u1030\u1014\u101B\u103C\u108A\u103D\u1088])([\u1032\u1036]{0,1})\u1037/g;
   	_zawgyi[inc]= "$1$2\u1095";
   	
   	inc++;
   	_unicode[inc]=/\u102F\u1095/g;
   	_zawgyi[inc]= "\u102F\u1094";
   	
   	//for na and ya
   	inc++;
   	_unicode[inc]=/([\u1014\u101B])([\u1032\u1036\u102D\u102E\u108B\u108C\u108D\u108E])\u1037/g;
   	_zawgyi[inc]= "$1$2\u1095";
   	
   	//\u1095\u1039
   	inc++;
   	_unicode[inc]=/\u1095\u1039/g;
   	_zawgyi[inc]= "\u1094\u1039";
   	
   	//change ု
   	
   	//for ya yint
   	inc++;
   	_unicode[inc]=/([\u103A\u103B])([\u1000-\u1021])\u102F/g;
   	_zawgyi[inc]= "$1$2\u1033";
   	
   	//for ya pint
   	inc++;
   	_unicode[inc]=/\u103A\u102F/g;
   	_zawgyi[inc]= "\u103A\u1033";
   	
   	inc++;
   	_unicode[inc]=/\u103A([\u1036\u102D\u102E\u108B\u108C\u108D\u108E])\u102F/g;
   	_zawgyi[inc]= "\u103A$1\u1033";

   	//change ူ
   	
   	//for ya yint
   	inc++;
   	_unicode[inc]=/([\u103A\u103B])([\u1000-\u1021])\u1030/g;
   	_zawgyi[inc]= "$1$2\u1034";
   	
   	
   	//for ya pint
   	 inc++;
   	_unicode[inc]=/\u103A\u1030/g;
   	_zawgyi[inc]= "\u103A\u1034";
   	
	inc++;
   	_unicode[inc]=/\u103A([\u1036\u102D\u102E\u108B\u108C\u108D\u108E])\u1030/g;
   	_zawgyi[inc]= "\u103A$1\u1034";
   	
   	
   	//change to ှ ူ
   	inc++;
   	_unicode[inc]=/\u103D\u1030/g;
   	_zawgyi[inc]="\u1089";
   	
   	//change ya yint a kyi
   	
   	inc++;
   	_unicode[inc]=/\u103B([\u1000\u1003\u1006\u100F\u1010\u1011\u1018\u101A\u101C\101E\u101F])/g;
   	_zawgyi[inc]= "\u107E$1";

   	inc++;
   	_unicode[inc]=/\u107E([\u1000\u1003\u1006\u100F\u1010\u1011\u1018\u101A\u101C\101E\u101F])([\u103C\u108A])([\u1032\u1036\u102D\u102E\u108B\u108C\u108D\u108E])/g;
   	_zawgyi[inc]= "\u1084$1$2$3";
   	
   	inc++;
   	_unicode[inc]=/\u107E([\u1000\u1003\u1006\u100F\u1010\u1011\u1018\u101A\u101C\101E\u101F])([\u103C\u108A])/g;
   	_zawgyi[inc]= "\u1082$1$2";
   	
   	inc++;
   	_unicode[inc]=/\u107E([\u1000\u1003\u1006\u100F\u1010\u1011\u1018\u101A\u101C\101E\u101F])([\u1032\u1036\u102D\u102E\u108B\u108C\u108D\u108E])/g;
   	_zawgyi[inc]= "\u1080$1$2";
   	
   	
   	//change ya yint a tae
   	
   	inc++;
   	_unicode[inc]=/\u103B([\u1000-\u1021])([\u103C\u108A])([\u1032\u1036\u102D\u102E\u108B\u108C\u108D\u108E])/g;
   	_zawgyi[inc]= "\u1083$1$2$3";
   	
   	inc++;
   	_unicode[inc]=/\u103B([\u1000-\u1021])([\u103C\u108A])/g;
   	_zawgyi[inc]= "\u1081$1$2";
   	
   	inc++;
   	_unicode[inc]=/\u103B([\u1000-\u1021])([\u1032\u1036\u102D\u102E\u108B\u108C\u108D\u108E])/g;
   	_zawgyi[inc]= "\u107F$1$2";
   	

	inc++;
	_unicode[inc]=/\u103A\u103D/g;
   	_zawgyi[inc]= "\u103D\u103A";
   	
	inc++;
	_unicode[inc]=/\u103A([\u103C\u108A])/g;
   	_zawgyi[inc]= "$1\u107D";
	
	
   	
   	
    for(i=0;i<=inc;i++)
    {

        output=output.replace(_unicode[i],_zawgyi[i]);
    }
    return output;
}
