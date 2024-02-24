use std::borrow::Cow;

use fancy_regex::{Captures, Regex};

struct RabbitRules {
    from: &'static str,
    to: &'static str,
}

pub struct Rabbit;

impl Rabbit {
    pub fn uni2zg(input: &str) -> String {
        let uni2zg_rules: Vec<RabbitRules> = vec![
            RabbitRules {
                from:"\u{1004}\u{103a}\u{1039}",
                to :"\u{1064}",
            },
            RabbitRules {
                from:"\u{1039}\u{1010}\u{103d}",
                to :"\u{1096}",
            },
            RabbitRules {
                from:"\u{102b}\u{103a}",
                to :"\u{105a}",
            },
            RabbitRules {
                from:"\u{102d}\u{1036}",
                to :"\u{108e}",
            },
            RabbitRules {
                from:"\u{104e}\u{1004}\u{103a}\u{1038}",
                to :"\u{104e}",
            },
            RabbitRules {
                from:"[\u{1025}\u{1009}](?=\u{1039})",
                to :"\u{106a}",
            },
            RabbitRules {
                from:"\u{1009}(?=[\u{102f}\u{1030}])",
                to :"\u{1025}",
            },
            RabbitRules {
                from:"[\u{1025}\u{1009}](?=[\u{1037}]?[\u{103a}])",
                to :"\u{1025}",
            },
            RabbitRules {
                from:"\u{100a}(?=[\u{1039}\u{103d}])",
                to :"\u{106b}",
            },
            RabbitRules {
                from:"(\u{1039}[\u{1000}-\u{1021}])(\u{102D})RabbitRules{0,1}\u{102f}",
                to :"#1#2\u{1033}",
            },
            RabbitRules {
                from:"(\u{1039}[\u{1000}-\u{1021}])\u{1030}",
                to :"#1\u{1034}",
            },
            RabbitRules {
                from:"\u{1014}(?=[\u{102d}\u{102e}\u{102f}\u{103A}]?[\u{1030}\u{103d}\u{103e}\u{102f}\u{1039}])",
                to :"\u{108f}",
            },
            RabbitRules {
                from:"\u{1014}(?=\u{103A}\u{102F})",
                to :"\u{108f}",
            },
            RabbitRules {
                from: "\u{1014}\u{103c}",
                to: "\u{108f}\u{103c}",
            },
            RabbitRules {
                from:"\u{1039}\u{1000}",
                to :"\u{1060}",
            },
            RabbitRules {
                from:"\u{1039}\u{1001}",
                to :"\u{1061}",
            },
            RabbitRules {
                from:"\u{1039}\u{1002}",
                to :"\u{1062}",
            },
            RabbitRules {
                from:"\u{1039}\u{1003}",
                to :"\u{1063}",
            },
            RabbitRules {
                from:"\u{1039}\u{1005}",
                to :"\u{1065}",
            },
            RabbitRules {
                from:"\u{1039}\u{1006}",
                to :"\u{1066}",
            },
            RabbitRules {
                from:"\u{1039}\u{1007}",
                to :"\u{1068}",
            },
            RabbitRules {
                from:"\u{1039}\u{1008}",
                to :"\u{1069}",
            },
            RabbitRules {
                from:"\u{1039}\u{100b}",
                to :"\u{106c}",
            },
            RabbitRules {
                from:"\u{100b}\u{1039}\u{100c}",
                to :"\u{1092}",
            },
            RabbitRules {
                from:"\u{1039}\u{100c}",
                to :"\u{106d}",
            },
            RabbitRules {
                from:"\u{100d}\u{1039}\u{100d}",
                to :"\u{106e}",
            },
            RabbitRules {
                from:"\u{100d}\u{1039}\u{100e}",
                to :"\u{106f}",
            },
            RabbitRules {
                from:"\u{1039}\u{100f}",
                to :"\u{1070}",
            },
            RabbitRules {
                from:"\u{1039}\u{1010}",
                to :"\u{1071}",
            },
            RabbitRules {
                from:"\u{1039}\u{1011}",
                to :"\u{1073}",
            },
            RabbitRules {
                from:"\u{1039}\u{1012}",
                to :"\u{1075}",
            },
            RabbitRules {
                from:"\u{1039}\u{1013}",
                to :"\u{1076}",
            },
            RabbitRules {
                from:"\u{1039}[\u{1014}\u{108f}]",
                to :"\u{1077}",
            },
            RabbitRules {
                from:"\u{1039}\u{1015}",
                to :"\u{1078}",
            },
            RabbitRules {
                from:"\u{1039}\u{1016}",
                to :"\u{1079}",
            },
            RabbitRules {
                from:"\u{1039}\u{1017}",
                to :"\u{107a}",
            },
            RabbitRules {
                from:"\u{1039}\u{1018}",
                to :"\u{107b}",
            },
            RabbitRules {
                from:"\u{1039}\u{1019}",
                to :"\u{107c}",
            },
            RabbitRules {
                from:"\u{1039}\u{101c}",
                to :"\u{1085}",
            },
            RabbitRules {
                from:"\u{103f}",
                to :"\u{1086}",
            },
            RabbitRules {
                from:"\u{103d}\u{103e}",
                to :"\u{108a}",
            },
            RabbitRules {
                from:"(\u{1064})([\u{1000}-\u{1021}])([\u{103b}\u{103c}]?)\u{102d}",
                to :"#2#3\u{108b}",
            },
            RabbitRules {
                from:"(\u{1064})([\u{1000}-\u{1021}])([\u{103b}\u{103c}]?)\u{102e}",
                to :"#2#3\u{108c}",
            },
            RabbitRules {
                from:"(\u{1064})([\u{1000}-\u{1021}])([\u{103b}\u{103c}]?)\u{1036}",
                to :"#2#3\u{108d}",
            },
            RabbitRules {
                from:"(\u{1064})([\u{1000}-\u{1021}\u{1040}-\u{1049}])([\u{103b}\u{103c}]?)([\u{1031}]?)",
                to :"#2#3#4#1",
            },
            RabbitRules {
                from:"\u{101b}(?=([\u{102d}\u{102e}]?)[\u{102f}\u{1030}\u{103d}\u{108a}])",
                to :"\u{1090}",
            },
            RabbitRules {
                from:"\u{100f}\u{1039}\u{100d}",
                to :"\u{1091}",
            },
            RabbitRules {
                from:"\u{100b}\u{1039}\u{100b}",
                to :"\u{1097}",
            },
            RabbitRules {
                from:"([\u{1000}-\u{1021}\u{108f}\u{1029}\u{106a}\u{106e}\u{106f}\u{1086}\u{1090}\u{1091}\u{1092}\u{1097}\u{1096}])([\u{1060}-\u{1069}\u{106c}\u{106d}\u{1070}-\u{107c}\u{1085}\u{108a}])?([\u{103b}-\u{103e}]*)?\u{1031}",
                to :"\u{1031}#1#2#3",
            },
            RabbitRules {
                from:"\u{103c}\u{103e}",
                to :"\u{103c}\u{1087}",
            },
            RabbitRules {
                from:"([\u{1000}-\u{1021}\u{108f}\u{1029}])([\u{1060}-\u{1069}\u{106c}\u{106d}\u{1070}-\u{107c}\u{1085}])?(\u{103c})",
                to :"#3#1#2",
            },
            RabbitRules {
                from:"\u{103a}",
                to :"\u{1039}",
            },
            RabbitRules {
                from:"\u{103b}",
                to :"\u{103a}",
            },
            RabbitRules {
                from:"\u{103c}",
                to :"\u{103b}",
            },
            RabbitRules {
                from:"\u{103d}",
                to :"\u{103c}",
            },
            RabbitRules {
                from:"\u{103e}",
                to :"\u{103d}",
            },
            RabbitRules {
                from:"([^\u{103a}\u{100a}])\u{103d}([\u{102d}\u{102e}]?)\u{102f}",
                to :"#1\u{1088}#2",
            },
            RabbitRules {
                from:"([\u{101b}\u{103a}\u{103c}\u{108a}\u{1088}\u{1090}])([\u{1030}\u{103d}])?([\u{1032}\u{1036}\u{1039}\u{102d}\u{102e}\u{108b}\u{108c}\u{108d}\u{108e}]?)(\u{102f})?\u{1037}",
                to :"#1#2#3#4\u{1095}",
            },
            RabbitRules {
                from:"([\u{102f}\u{1014}\u{1030}\u{103d}])([\u{1032}\u{1036}\u{1039}\u{102d}\u{102e}\u{108b}\u{108c}\u{108d}\u{108e}]?)\u{1037}",
                to :"#1#2\u{1094}",
            },
            RabbitRules {
                from:"([\u{103b}])([\u{1000}-\u{1021}])([\u{1087}]?)([\u{1036}\u{102d}\u{102e}\u{108b}\u{108c}\u{108d}\u{108e}]?)\u{102f}",
                to :"#1#2#3#4\u{1033}",
            },
            RabbitRules {
                from:"([\u{103b}])([\u{1000}-\u{1021}])([\u{1087}]?)([\u{1036}\u{102d}\u{102e}\u{108b}\u{108c}\u{108d}\u{108e}]?)\u{1030}",
                to :"#1#2#3#4\u{1034}",
            },
            RabbitRules {
                from:"([\u{103a}\u{103c}\u{100a}\u{1008}\u{100b}\u{100c}\u{100d}\u{1020}\u{1025}])([\u{103d}]?)([\u{1036}\u{102d}\u{102e}\u{108b}\u{108c}\u{108d}\u{108e}]?)\u{102f}",
                to :"#1#2#3\u{1033}",
            },
            RabbitRules {
                from:"([\u{103a}\u{103c}\u{100a}\u{1008}\u{100b}\u{100c}\u{100d}\u{1020}\u{1025}])(\u{103d}?)([\u{1036}\u{102d}\u{102e}\u{108b}\u{108c}\u{108d}\u{108e}]?)\u{1030}",
                to :"#1#2#3\u{1034}",
            },
            RabbitRules {
                from:"([\u{100a}\u{1020}\u{1009}])\u{103d}",
                to :"#1\u{1087}",
            },
            RabbitRules {
                from:"\u{103d}\u{1030}",
                to :"\u{1089}",
            },
            RabbitRules {
                from:"\u{103b}([\u{1000}\u{1003}\u{1006}\u{100f}\u{1010}\u{1011}\u{1018}\u{101a}\u{101c}\u{101a}\u{101e}\u{101f}])",
                to :"\u{107e}#1",
            },
            RabbitRules {
                from:"\u{107e}([\u{1000}\u{1003}\u{1006}\u{100f}\u{1010}\u{1011}\u{1018}\u{101a}\u{101c}\u{101a}\u{101e}\u{101f}])([\u{103c}\u{108a}])([\u{1032}\u{1036}\u{102d}\u{102e}\u{108b}\u{108c}\u{108d}\u{108e}])",
                to :"\u{1084}#1#2#3",
            },
            RabbitRules {
                from:"\u{107e}([\u{1000}\u{1003}\u{1006}\u{100f}\u{1010}\u{1011}\u{1018}\u{101a}\u{101c}\u{101a}\u{101e}\u{101f}])([\u{103c}\u{108a}])",
                to :"\u{1082}#1#2",
            },
            RabbitRules {
                from:"\u{107e}([\u{1000}\u{1003}\u{1006}\u{100f}\u{1010}\u{1011}\u{1018}\u{101a}\u{101c}\u{101a}\u{101e}\u{101f}])([\u{1033}\u{1034}]?)([\u{1032}\u{1036}\u{102d}\u{102e}\u{108b}\u{108c}\u{108d}\u{108e}])",
                to :"\u{1080}#1#2#3",
            },
            RabbitRules {
                from:"\u{103b}([\u{1000}-\u{1021}])([\u{103c}\u{108a}])([\u{1032}\u{1036}\u{102d}\u{102e}\u{108b}\u{108c}\u{108d}\u{108e}])",
                to :"\u{1083}#1#2#3",
            },
            RabbitRules {
                from:"\u{103b}([\u{1000}-\u{1021}])([\u{103c}\u{108a}])",
                to :"\u{1081}#1#2",
            },
            RabbitRules {
                from:"\u{103b}([\u{1000}-\u{1021}])([\u{1033}\u{1034}]?)([\u{1032}\u{1036}\u{102d}\u{102e}\u{108b}\u{108c}\u{108d}\u{108e}])",
                to :"\u{107f}#1#2#3",
            },
            RabbitRules {
                from:"\u{103a}\u{103d}",
                to :"\u{103d}\u{103a}",
            },
            RabbitRules {
                from:"\u{103a}([\u{103c}\u{108a}])",
                to :"#1\u{107d}",
            },
            RabbitRules {
                from:"([\u{1033}\u{1034}])(\u{1036}?)\u{1094}",
                to :"#1#2\u{1095}",
            },
            RabbitRules {
                from:"\u{108F}\u{1071}",
                to: "\u{108F}\u{1072}",
            },
            RabbitRules {
                from:"\u{108F}\u{1073}",
                to: "\u{108F}\u{1074}",
            },
            RabbitRules {
                from:"([\u{1000}-\u{1021}])([\u{107B}\u{1066}])\u{102C}",
                to :"#1\u{102C}#2",
            },
            RabbitRules {
                from:"\u{102C}([\u{107B}\u{1066}])\u{1037}",
                to :"\u{102C}#1\u{1094}",
            },
            RabbitRules {
                from:"\u{1047}((?=[\u{1000}-\u{1021}]\u{1039})|(?=[\u{102c}-\u{1030}\u{1032}\u{1036}-\u{1038}\u{103c}\u{103d}]))",
                to :"\u{101b}",
            },
        ];

        Rabbit::replace_with_rule(&uni2zg_rules, input)
    }

    pub fn zg2uni(input: &str) -> String {
        let zg2uni_rules: Vec<RabbitRules> = vec![
            RabbitRules {
                from:"([\u{102D}\u{102E}\u{103D}\u{102F}\u{1037}\u{1095}])\\1+",
                to :"#1",
            },
            RabbitRules {
                from:"\u{200B}",
                to :"",
            },
            RabbitRules {
                from: "\u{103d}\u{103c}",
                to: "\u{108a}",
            },
            RabbitRules {
                from:"(\u{103d}|\u{1087})",
                to :"\u{103e}",
            },
            RabbitRules {
                from:"\u{103c}",
                to :"\u{103d}",
            },
            RabbitRules {
                from:"(\u{103b}|\u{107e}|\u{107f}|\u{1080}|\u{1081}|\u{1082}|\u{1083}|\u{1084})",
                to :"\u{103c}",
            },
            RabbitRules {
                from:"(\u{103a}|\u{107d})",
                to :"\u{103b}",
            },
            RabbitRules {
                from:"\u{1039}",
                to :"\u{103a}",
            },
            RabbitRules {
                from:"(\u{1066}|\u{1067})",
                to :"\u{1039}\u{1006}",
            },
            RabbitRules {
                from:"\u{106a}",
                to :"\u{1009}",
            },
            RabbitRules {
                from:"\u{106b}",
                to :"\u{100a}",
            },
            RabbitRules {
                from:"\u{106c}",
                to :"\u{1039}\u{100b}",
            },
            RabbitRules {
                from:"\u{106d}",
                to :"\u{1039}\u{100c}",
            },
            RabbitRules {
                from:"\u{106e}",
                to :"\u{100d}\u{1039}\u{100d}",
            },
            RabbitRules {
                from:"\u{106f}",
                to :"\u{100d}\u{1039}\u{100e}",
            },
            RabbitRules {
                from:"\u{1070}",
                to :"\u{1039}\u{100f}",
            },
            RabbitRules {
                from:"(\u{1071}|\u{1072})",
                to :"\u{1039}\u{1010}",
            },
            RabbitRules {
                from:"\u{1060}",
                to :"\u{1039}\u{1000}",
            },
            RabbitRules {
                from:"\u{1061}",
                to :"\u{1039}\u{1001}",
            },
            RabbitRules {
                from:"\u{1062}",
                to :"\u{1039}\u{1002}",
            },
            RabbitRules {
                from:"\u{1063}",
                to :"\u{1039}\u{1003}",
            },
            RabbitRules {
                from:"\u{1065}",
                to :"\u{1039}\u{1005}",
            },
            RabbitRules {
                from:"\u{1068}",
                to :"\u{1039}\u{1007}",
            },
            RabbitRules {
                from:"\u{1069}",
                to :"\u{1039}\u{1008}",
            },
            RabbitRules {
                from:"(\u{1073}|\u{1074})",
                to :"\u{1039}\u{1011}",
            },
            RabbitRules {
                from:"\u{1075}",
                to :"\u{1039}\u{1012}",
            },
            RabbitRules {
                from:"\u{1076}",
                to :"\u{1039}\u{1013}",
            },
            RabbitRules {
                from:"\u{1077}",
                to :"\u{1039}\u{1014}",
            },
            RabbitRules {
                from:"\u{1078}",
                to :"\u{1039}\u{1015}",
            },
            RabbitRules {
                from:"\u{1079}",
                to :"\u{1039}\u{1016}",
            },
            RabbitRules {
                from:"\u{107a}",
                to :"\u{1039}\u{1017}",
            },
            RabbitRules {
                from:"\u{107c}",
                to :"\u{1039}\u{1019}",
            },
            RabbitRules {
                from:"\u{1085}",
                to :"\u{1039}\u{101c}",
            },
            RabbitRules {
                from:"\u{1033}",
                to :"\u{102f}",
            },
            RabbitRules {
                from:"\u{1034}",
                to :"\u{1030}",
            },
            RabbitRules {
                from:"\u{103f}",
                to :"\u{1030}",
            },
            RabbitRules {
                from:"\u{1086}",
                to :"\u{103f}",
            },
            RabbitRules {
                from:"\u{1036}\u{1088}",
                to :"\u{1088}\u{1036}",
            },
            RabbitRules {
                from:"\u{1088}",
                to :"\u{103e}\u{102f}",
            },
            RabbitRules {
                from:"\u{1089}",
                to :"\u{103e}\u{1030}",
            },
            RabbitRules {
                from:"\u{108a}",
                to :"\u{103d}\u{103e}",
            },
            RabbitRules {
                from:"\u{103B}\u{1064}",
                to :"\u{1064}\u{103B}",
            },
            RabbitRules {
                from:"\u{103c}([\u{1000}-\u{1021}])([\u{1064}\u{108b}\u{108d}])",
                to :"#1\u{103c}#2",
            },
            RabbitRules {
                from:"(\u{1031})?([\u{1000}-\u{1021}\u{1040}-\u{1049}])(\u{103c})?\u{1064}",
                to :"\u{1004}\u{103a}\u{1039}#1#2#3",
            },
            RabbitRules {
                from:"(\u{1031})?([\u{1000}-\u{1021}])(\u{103b}|\u{103c})?\u{108b}",
                to :"\u{1004}\u{103a}\u{1039}#1#2#3\u{102d}",
            },
            RabbitRules {
                from:"(\u{1031})?([\u{1000}-\u{1021}])(\u{103b})?\u{108c}",
                to :"\u{1004}\u{103a}\u{1039}#1#2#3\u{102e}",
            },
            RabbitRules {
                from:"(\u{1031})?([\u{1000}-\u{1021}])([\u{103b}\u{103c}])?\u{108d}",
                to :"\u{1004}\u{103a}\u{1039}#1#2#3\u{1036}",
            },
            RabbitRules {
                from:"\u{108e}",
                to :"\u{102d}\u{1036}",
            },
            RabbitRules {
                from:"\u{108f}",
                to :"\u{1014}",
            },
            RabbitRules {
                from:"\u{1090}",
                to :"\u{101b}",
            },
            RabbitRules {
                from:"\u{1091}",
                to :"\u{100f}\u{1039}\u{100d}",
            },
            RabbitRules {
                from:"\u{1092}",
                to :"\u{100b}\u{1039}\u{100c}",
            },
            RabbitRules {
                from:"\u{1019}\u{102c}(\u{107b}|\u{1093})",
                to :"\u{1019}\u{1039}\u{1018}\u{102c}",
            },
            RabbitRules {
                from:"(\u{107b}|\u{1093})",
                to :"\u{1039}\u{1018}",
            },
            RabbitRules {
                from:"(\u{1094}|\u{1095})",
                to :"\u{1037}",
            },
            RabbitRules {
                from:"([\u{1000}-\u{1021}])\u{1037}\u{1032}",
                to :"#1\u{1032}\u{1037}",
            },
            RabbitRules {
                from:"\u{1096}",
                to :"\u{1039}\u{1010}\u{103d}",
            },
            RabbitRules {
                from:"\u{1097}",
                to :"\u{100b}\u{1039}\u{100b}",
            },
            RabbitRules {
                from:"\u{103c}([\u{1000}-\u{1021}])([\u{1000}-\u{1021}])?",
                to :"#1\u{103c}#2",
            },
            RabbitRules {
                from:"([\u{1000}-\u{1021}])\u{103c}\u{103a}",
                to :"\u{103c}#1\u{103a}",
            },
            RabbitRules {
                from:"\u{1047}(?=[\u{102c}-\u{1030}\u{1032}\u{1036}-\u{1038}\u{103d}\u{1038}])",
                to :"\u{101b}",
            },
            RabbitRules {
                from:"\u{1031}\u{1047}",
                to :"\u{1031}\u{101b}",
            },
            RabbitRules {
                from:"\u{1040}(\u{102e}|\u{102f}|\u{102d}\u{102f}|\u{1030}|\u{1036}|\u{103d}|\u{103e})",
                to :"\u{101d}#1",
            },
            RabbitRules {
                from:"([^\u{1040}\u{1041}\u{1042}\u{1043}\u{1044}\u{1045}\u{1046}\u{1047}\u{1048}\u{1049}])\u{1040}\u{102b}",
                to :"#1\u{101d}\u{102b}",
            },
            RabbitRules {
                from:"([\u{1040}\u{1041}\u{1042}\u{1043}\u{1044}\u{1045}\u{1046}\u{1047}\u{1048}\u{1049}])\u{1040}\u{102b}(?!\u{1038})",
                to :"#1\u{101d}\u{102b}",
            },
            RabbitRules {
                from:"^\u{1040}(?=\u{102b})",
                to :"\u{101d}",
            },
            RabbitRules {
                from:"\u{1040}\u{102d}(?!\u{0020}?/)",
                to :"\u{101d}\u{102d}",
            },
            RabbitRules {
                from:"([^\u{1040}-\u{1049}])\u{1040}([^\u{1040}-\u{1049}\u{0020}]|[\u{104a}\u{104b}])",
                to :"#1\u{101d}#2",
            },
            RabbitRules {
                from:"([^\u{1040}-\u{1049}])\u{1040}(?=[\\f\\n\\r])",
                to :"#1\u{101d}",
            },
            RabbitRules {
                from:"([^\u{1040}-\u{1049}])\u{1040}$",
                to :"#1\u{101d}",
            },
            RabbitRules {
                from:"\u{1031}([\u{1000}-\u{1021}\u{103f}])(\u{103e})?(\u{103b})?",
                to :"#1#2#3\u{1031}",
            },
            RabbitRules {
                from:"([\u{1000}-\u{1021}])\u{1031}([\u{103b}\u{103c}\u{103d}\u{103e}]+)",
                to :"#1#2\u{1031}",
            },
            RabbitRules {
                from:"\u{1032}\u{103d}",
                to :"\u{103d}\u{1032}",
            },
            RabbitRules {
                from:"([\u{102d}\u{102e}])\u{103b}",
                to :"\u{103b}#1",
            },
            RabbitRules {
                from:"\u{103d}\u{103b}",
                to :"\u{103b}\u{103d}",
            },
            RabbitRules {
                from:"\u{103a}\u{1037}",
                to :"\u{1037}\u{103a}",
            },
            RabbitRules {
                from:"\u{102f}(\u{102d}|\u{102e}|\u{1036}|\u{1037})\u{102f}",
                to :"\u{102f}#1",
            },
            RabbitRules {
                from:"(\u{102f}|\u{1030})(\u{102d}|\u{102e})",
                to :"#2#1",
            },
            RabbitRules {
                from:"(\u{103e})(\u{103b}|\u{103c})",
                to :"#2#1",
            },
            RabbitRules {
                from:"\u{1025}(?=[\u{1037}]?[\u{103a}\u{102c}])",
                to :"\u{1009}",
            },
            RabbitRules {
                from:"\u{1025}\u{102e}",
                to :"\u{1026}",
            },
            RabbitRules {
                from:"\u{1005}\u{103b}",
                to :"\u{1008}",
            },
            RabbitRules {
                from:"\u{1036}(\u{102f}|\u{1030})",
                to :"#1\u{1036}",
            },
            RabbitRules {
                from:"\u{1031}\u{1037}\u{103e}",
                to :"\u{103e}\u{1031}\u{1037}",
            },
            RabbitRules {
                from:"\u{1031}\u{103e}\u{102c}",
                to :"\u{103e}\u{1031}\u{102c}",
            },
            RabbitRules {
                from:"\u{105a}",
                to :"\u{102b}\u{103a}",
            },
            RabbitRules {
                from:"\u{1031}\u{103b}\u{103e}",
                to :"\u{103b}\u{103e}\u{1031}",
            },
            RabbitRules {
                from:"(\u{102d}|\u{102e})(\u{103d}|\u{103e})",
                to :"#2#1",
            },
            RabbitRules {
                from:"\u{102c}\u{1039}([\u{1000}-\u{1021}])",
                to :"\u{1039}#1\u{102c}",
            },
            RabbitRules {
                from:"\u{1039}\u{103c}\u{103a}\u{1039}([\u{1000}-\u{1021}])",
                to :"\u{103a}\u{1039}#1\u{103c}",
            },
            RabbitRules {
                from:"\u{103c}\u{1039}([\u{1000}-\u{1021}])",
                to :"\u{1039}#1\u{103c}",
            },
            RabbitRules {
                from:"\u{1036}\u{1039}([\u{1000}-\u{1021}])",
                to :"\u{1039}#1\u{1036}",
            },
            RabbitRules {
                from:"\u{104e}",
                to :"\u{104e}\u{1004}\u{103a}\u{1038}",
            },
            RabbitRules {
                from:"\u{1040}(\u{102b}|\u{102c}|\u{1036})",
                to :"\u{101d}#1",
            },
            RabbitRules {
                from:"\u{1025}\u{1039}",
                to :"\u{1009}\u{1039}",
            },
            RabbitRules {
                from:"([\u{1000}-\u{1021}])\u{103c}\u{1031}\u{103d}",
                to :"#1\u{103c}\u{103d}\u{1031}",
            },
            RabbitRules {
                from:"([\u{1000}-\u{1021}])\u{103b}\u{1031}\u{103d}(\u{103e})?",
                to :"#1\u{103b}\u{103d}#2\u{1031}",
            },
            RabbitRules {
                from:"([\u{1000}-\u{1021}])\u{103d}\u{1031}\u{103b}",
                to :"#1\u{103b}\u{103d}\u{1031}",
            },
            RabbitRules {
                from:"([\u{1000}-\u{1021}])\u{1031}(\u{1039}[\u{1000}-\u{1021}]\u{103d}?)",
                to :"#1#2\u{1031}",
            },
            RabbitRules {
                from:"\u{1038}\u{103a}",
                to :"\u{103a}\u{1038}",
            },
            RabbitRules {
                from:"\u{102d}\u{103a}|\u{103a}\u{102d}",
                to :"\u{102d}",
            },
            RabbitRules {
                from:"\u{102d}\u{102f}\u{103a}",
                to :"\u{102d}\u{102f}",
            },
            RabbitRules {
                from:"\u{0020}\u{1037}",
                to :"\u{1037}",
            },
            RabbitRules {
                from:"\u{1037}\u{1036}",
                to :"\u{1036}\u{1037}",
            },
            RabbitRules {
                from:"[\u{102d}]+",
                to :"\u{102d}",
            },
            RabbitRules {
                from:"[\u{103a}]+",
                to :"\u{103a}",
            },
            RabbitRules {
                from:"[\u{103d}]+",
                to :"\u{103d}",
            },
            RabbitRules {
                from:"[\u{1037}]+",
                to :"\u{1037}",
            },
            RabbitRules {
                from:"[\u{102e}]+",
                to :"\u{102e}",
            },
            RabbitRules {
                from:"\u{102d}\u{102e}|\u{102e}\u{102d}",
                to :"\u{102e}",
            },
            RabbitRules {
                from:"\u{102f}\u{102d}",
                to :"\u{102d}\u{102f}",
            },
            RabbitRules {
                from:"\u{1037}\u{1037}",
                to :"\u{1037}",
            },
            RabbitRules {
                from:"\u{1032}\u{1032}",
                to :"\u{1032}",
            },
            RabbitRules {
                from:"\u{1044}\u{1004}\u{103a}\u{1038}",
                to :"\u{104E}\u{1004}\u{103a}\u{1038}",
            },
            RabbitRules {
                from:"([\u{102d}\u{102e}])\u{1039}([\u{1000}-\u{1021}])",
                to :"\u{1039}#2#1",
            },
            RabbitRules {
                from:"(\u{103c}\u{1031})\u{1039}([\u{1000}-\u{1021}])",
                to :"\u{1039}#2#1",
            },
            RabbitRules {
                from:"\u{1036}\u{103d}",
                to :"\u{103d}\u{1036}",
            },
            RabbitRules {
                from:"\u{1047}((?=[\u{1000}-\u{1021}]\u{103a})|(?=[\u{102c}-\u{1030}\u{1032}\u{1036}-\u{1038}\u{103d}\u{103e}]))",
                to :"\u{101b}",
            },
        ];

        Rabbit::replace_with_rule(&zg2uni_rules, input)
    }

    fn replace_with_rule(rules: &[RabbitRules], input: &str) -> String {
        let mut result = Cow::Borrowed(input);
        let to_re = Regex::new(r"#(\d)").unwrap(); // Compile once outside the loop

        for rule in rules {
            let re = Regex::new(&rule.from).unwrap(); // Consider handling errors gracefully

            let new_result = re.replace_all(&result, |caps: &Captures| {
                to_re
                    .replace_all(&rule.to, |m: &Captures| {
                        m.get(1)
                            .and_then(|m| m.as_str().parse::<usize>().ok())
                            .and_then(|index| caps.get(index))
                            .map_or("", |group| group.as_str())
                    })
                    .into_owned()
            });

            // Ensure any borrowed reference from `result` is dropped before reassignment
            result = Cow::Owned(new_result.into_owned());
        }

        result.into_owned()
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let text = "ယေဓမ္မာ ဟေတုပ္ပဘဝါ တေသံ ဟေတုံ တထာဂတော အာဟ တေသဉ္စ ယောနိရောဓေါ ဧဝံ ဝါဒီ မဟာသမဏော။";
        let zawgyi_text = Rabbit::uni2zg(text);
        let unicode_text = Rabbit::zg2uni(&zawgyi_text);
        assert_eq!(
            zawgyi_text,
            "ေယဓမၼာ ေဟတုပၸဘဝါ ေတသံ ေဟတုံ တထာဂေတာ အာဟ ေတသၪၥ ေယာနိေရာေဓါ ဧဝံ ဝါဒီ မဟာသမေဏာ။",
        );
        assert_eq!(unicode_text, text);

        let text = "သီဟိုဠ်မှ ဉာဏ်ကြီးရှင်သည် အာယုဝဍ္ဎနဆေးညွှန်းစာကို ဇလွန်ဈေးဘေး ဗာဒံပင်ထက် အဓိဋ္ဌာန်လျက် ဂဃနဏဖတ်ခဲ့သည်။";
        let zawgyi_text = Rabbit::uni2zg(text);
        let unicode_text = Rabbit::zg2uni(&zawgyi_text);
        assert_eq!(
            zawgyi_text,
            "သီဟိုဠ္မွ ဉာဏ္ႀကီးရွင္သည္ အာယုဝၯနေဆးၫႊန္းစာကို ဇလြန္ေဈးေဘး ဗာဒံပင္ထက္ အဓိ႒ာန္လ်က္ ဂဃနဏဖတ္ခဲ့သည္။",
        );
        assert_eq!(unicode_text, text);
    }
}
