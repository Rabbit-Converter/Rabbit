# -*- coding: utf-8 -*-
import json,re


def uni2zg(unicode):
	rule = [
				  {"from": ur'\u1004\u103A\u1039' , 'to': ur'\u1064'},
				  {"from": ur'\u1039\u1010\u103D' , 'to': ur'\u1096'},
				  {"from": ur'\u1014(?=[\u1030\u103D\u103E\u102F\u1039])' , 'to': ur'\u108F'},
				  {"from": ur'\u102B\u103A' , 'to': ur'\u105A'},
				  {"from": ur'\u100B\u1039\u100C' , 'to': ur'\u1092'},
				  {"from": ur'\u102D\u1036' , 'to': ur'\u108E'},
				  {"from": ur'\u104E\u1004\u103A\u1038' , 'to': ur'\u104E'},
				  {"from": ur'[\u1025\u1009](?=[\u1039\u102F\u1030])' , 'to': ur'\u106A'},
				  {"from": ur'[\u1025\u1009](?=[\u103A])' , 'to': ur'\u1025'},
				  {"from": ur'\u100A(?=[\u1039\u102F\u1030\u103D])' , 'to': ur'\u106B'},
				  {"from": ur'(\u1039[\u1000-\u1021])\u102F' , 'to': ur'\1\u1033'},
				  {"from": ur'(\u1039[\u1000-\u1021])\u1030' , 'to': ur'\1\u1034'},
				  {"from": ur'\u1039\u1000' , 'to': ur'\u1060'},
				  {"from": ur'\u1039\u1001' , 'to': ur'\u1061'},
				  {"from": ur'\u1039\u1002' , 'to': ur'\u1062'},
				  {"from": ur'\u1039\u1003' , 'to': ur'\u1063'},
				  {"from": ur'\u1039\u1005' , 'to': ur'\u1065'},
				  {"from": ur'\u1039\u1007' , 'to': ur'\u1068'},
				  {"from": ur'\u1039\u1008' , 'to': ur'\u1069'},
				  {"from": ur'\u100A(?=[\u1039\u102F\u1030])' , 'to': ur'\u106B'},
				  {"from": ur'\u1039\u100B' , 'to': ur'\u106C'},
				  {"from": ur'\u1039\u100C' , 'to': ur'\u106D'},
				  {"from": ur'\u100D\u1039\u100D' , 'to': ur'\u106E'},
				  {"from": ur'\u100E\u1039\u100D' , 'to': ur'\u106F'},
				  {"from": ur'\u1039\u100F' , 'to': ur'\u1070'},
				  {"from": ur'\u1039\u1010' , 'to': ur'\u1071'},
				  {"from": ur'\u1039\u1011' , 'to': ur'\u1073'},
				  {"from": ur'\u1039\u1012' , 'to': ur'\u1075'},
				  {"from": ur'\u1039\u1013' , 'to': ur'\u1076'},
				  {"from": ur'\u1039\u1013' , 'to': ur'\u1076'},
				  {"from": ur'\u1039\u1014' , 'to': ur'\u1077'},
				  {"from": ur'\u1039\u1015' , 'to': ur'\u1078'},
				  {"from": ur'\u1039\u1016' , 'to': ur'\u1079'},
				  {"from": ur'\u1039\u1017' , 'to': ur'\u107A'},
				  {"from": ur'\u1039\u1018' , 'to': ur'\u107B'},
				  {"from": ur'\u1039\u1019' , 'to': ur'\u107C'},
				  {"from": ur'\u1039\u101C' , 'to': ur'\u1085'},
				  {"from": ur'\u103F' , 'to': ur'\u1086'},
				  {"from": ur'(\u103C)\u103E' , 'to': ur'\1\u1087'},
				  {"from": ur'\u103D\u103E' , 'to': ur'\u108A'},
				  {"from": ur'(\u1064)([\u1031]?)([\u103C]?)([\u1000-\u1021])\u102D' , 'to': ur'\2\3\4\u108B'},
				  {"from": ur'(\u1064)([\u1031]?)([\u103C]?)([\u1000-\u1021])\u102E' , 'to': ur'\2\3\4\u108C'},
				  {"from": ur'(\u1064)([\u1031]?)([\u103C]?)([\u1000-\u1021])\u1036' , 'to': ur'\2\3\4\u108D'},
				  {"from": ur'\u101B(?=[\u102F\u1030\u103D\u108A])' , 'to': ur'\u1090'},
				  {"from": ur'\u100F\u1039\u100D' , 'to': ur'\u1091'},
				  {"from": ur'\u100B\u1039\u100B' , 'to': ur'\u1097'},
				  {"from": ur'([\u1000-\u1021\u1029\u1090])([\u1060-\u1069\u106C\u106D\u1070-\u107C\u1085\u108A])?([\u103B-\u103E]*)?\u1031' , 'to': ur'\u1031\1\2\3'},
				  {"from": ur'([\u1000-\u1021\u1029])([\u1060-\u1069\u106C\u106D\u1070-\u107C\u1085])?(\u103C)' , 'to': ur'\3\1\2'},
				  {"from": ur'\u103A' , 'to': ur'\u1039'},
				  {"from": ur'\u103B' , 'to': ur'\u103A'},
				  {"from": ur'\u103C' , 'to': ur'\u103B'},
				  {"from": ur'\u103D' , 'to': ur'\u103C'},
				  {"from": ur'\u103E' , 'to': ur'\u103D'},
				  {"from": ur'\u103D\u102F' , 'to': ur'\u1088'},
				  {"from": ur'([\u102F\u1030\u1014\u101B\u103C\u108A\u103D\u1088])([\u1032\u1036]{0,1})\u1037' , 'to': ur'\1\2\u1095'},
				  {"from": ur'\u102F\u1095' , 'to': ur'\u102F\u1094'},
				  {"from": ur'([\u1014\u101B])([\u1032\u1036\u102D\u102E\u108B\u108C\u108D\u108E])\u1037' , 'to': ur'\1\2\u1095'},
				  {"from": ur'\u1095\u1039' , 'to': ur'\u1094\u1039'},
				  {"from": ur'([\u103A\u103B])([\u1000-\u1021])\u102F' , 'to': ur'\1\2\u1033'},
				  {"from": ur'\u103A\u102F' , 'to': ur'\u103A\u1033'},
				  {"from": ur'\u103A([\u1036\u102D\u102E\u108B\u108C\u108D\u108E])\u102F' , 'to': ur'\u103A\1\u1033'},
				  {"from": ur'([\u103A\u103B])([\u1000-\u1021])\u1030' , 'to': ur'\1\2\u1034'},
				  {"from": ur'\u103A\u1030' , 'to': ur'\u103A\u1034'},
				  {"from": ur'\u103A([\u1036\u102D\u102E\u108B\u108C\u108D\u108E])\u1030' , 'to': ur'\u103A\1\u1034'},
				  {"from": ur'\u103D\u1030' , 'to': ur'\u1089'},
				  {"from": ur'\u103B([\u1000\u1003\u1006\u100F\u1010\u1011\u1018\u101A\u101C\u101A\u101E\u101F])' , 'to': ur'\u107E\1'},
				  {"from": ur'\u107E([\u1000\u1003\u1006\u100F\u1010\u1011\u1018\u101A\u101C\u101A\u101E\u101F])([\u103C\u108A])([\u1032\u1036\u102D\u102E\u108B\u108C\u108D\u108E])' , 'to': ur'\u1084\1\2\3'},
				  {"from": ur'\u107E([\u1000\u1003\u1006\u100F\u1010\u1011\u1018\u101A\u101C\u101A\u101E\u101F])([\u103C\u108A])' , 'to': ur'\u1082\1\2'},
				  {"from": ur'\u107E([\u1000\u1003\u1006\u100F\u1010\u1011\u1018\u101A\u101C\u101A\u101E\u101F])([\u1032\u1036\u102D\u102E\u108B\u108C\u108D\u108E])' , 'to': ur'\u1080\1\2'},
				  {"from": ur'\u103B([\u1000-\u1021])([\u103C\u108A])([\u1032\u1036\u102D\u102E\u108B\u108C\u108D\u108E])' , 'to': ur'\u1083\1\2\3'},
				  {"from": ur'\u103B([\u1000-\u1021])([\u103C\u108A])' , 'to': ur'\u1081\1\2'},
				  {"from": ur'\u103B([\u1000-\u1021])([\u1032\u1036\u102D\u102E\u108B\u108C\u108D\u108E])' , 'to': ur'\u107F\1\2'},
				  {"from": ur'\u103A\u103D' , 'to': ur'\u103D\u103A'},
				  {"from": ur'\u103A([\u103C\u108A])' , 'to': ur'\1\u107D'}
	]

	return replace_with_rule(rule,unicode)

def zg2uni(zawgyi):
	rule = [
            {"from": ur'(\u103D|\u1087)' , 'to': ur'\u103E'},
            {"from": ur'\u103C' , 'to': ur'\u103D'},
            {"from": ur'(\u103B|\u107E|\u107F|\u1080|\u1081|\u1082|\u1083|\u1084)' , 'to': ur'\u103C'},
            {"from": ur'(\u103A|\u107D)' , 'to': ur'\u103B'},
            {"from": ur'\u1039' , 'to': ur'\u103A'},
            {"from": ur'\u106A' , 'to': ur'\u1009'},
            {"from": ur'\u106B' , 'to': ur'\u100A'},
            {"from": ur'\u106C' , 'to': ur'\u1039\u100B'},
            {"from": ur'\u106D' , 'to': ur'\u1039\u100C'},
            {"from": ur'\u106E' , 'to': ur'\u100D\u1039\u100D'},
            {"from": ur'\u106F' , 'to': ur'\u100D\u1039\u100E'},
            {"from": ur'\u1070' , 'to': ur'\u1039\u100F'},
            {"from": ur'(\u1071|\u1072)' , 'to': ur'\u1039\u1010'},
            {"from": ur'\u1060' , 'to': ur'\u1039\u1000'},
            {"from": ur'\u1061' , 'to': ur'\u1039\u1001'},
            {"from": ur'\u1062' , 'to': ur'\u1039\u1002'},
            {"from": ur'\u1063' , 'to': ur'\u1039\u1003'},
            {"from": ur'\u1065' , 'to': ur'\u1039\u1005'},
            {"from": ur'\u1068' , 'to': ur'\u1039\u1007'},
            {"from": ur'\u1069' , 'to': ur'\u1039\u1008'},
            {"from": ur'/(\u1073|\u1074)/g' , 'to': ur'\u1039\u1011'},
            {"from": ur'\u1075' , 'to': ur'\u1039\u1012'},
            {"from": ur'\u1076' , 'to': ur'\u1039\u1013'},
            {"from": ur'\u1077' , 'to': ur'\u1039\u1014'},
            {"from": ur'\u1078' , 'to': ur'\u1039\u1015'},
            {"from": ur'\u1079' , 'to': ur'\u1039\u1016'},
            {"from": ur'\u107A' , 'to': ur'\u1039\u1017'},
            {"from": ur'\u107C' , 'to': ur'\u1039\u1019'},
            {"from": ur'\u1085' , 'to': ur'\u1039\u101C'},
            {"from": ur'\u1033' , 'to': ur'\u102F'},
            {"from": ur'\u1034' , 'to': ur'\u1030'},
            {"from": ur'\u103F' , 'to': ur'\u1030'},
            {"from": ur'\u1086' , 'to': ur'\u103F'},
            {"from": ur'\u1088' , 'to': ur'\u103E\u102F'},
            {"from": ur'\u1089' , 'to': ur'\u103E\u1030'},
            {"from": ur'\u108A' , 'to': ur'\u103D\u103E'},
            {"from": ur'([\u1000-\u1021])\u1064' , 'to': ur'\u1004\u103A\u1039\1'},
            {"from": ur'([\u1000-\u1021])\u108B' , 'to': ur'\u1004\u103A\u1039\1\u102D'},
            {"from": ur'([\u1000-\u1021])\u108C' , 'to': ur'\u1004\u103A\u1039\1\u102E'},
            {"from": ur'([\u1000-\u1021])\u108D' , 'to': ur'\u1004\u103A\u1039\1\u1036'},
            {"from": ur'\u108E' , 'to': ur'\u102D\u1036'},
            {"from": ur'\u108F' , 'to': ur'\u1014'},
            {"from": ur'\u1090' , 'to': ur'\u101B'},
            {"from": ur'\u1091' , 'to': ur'\u100F\u1039\u1091'},
            {"from": ur'\u1019\u102C(\u107B|\u1093)' , 'to': ur'\u1019\u1039\u1018\u102C'},
            {"from": ur'(\u107B|\u1093)' , 'to': ur'\u103A\u1018'},
            {"from": ur'(\u1094|\u1095)' , 'to': ur'\u1037'},
            {"from": ur'\u1096' , 'to': ur'\u1039\u1010\u103D'},
            {"from": ur'\u1097' , 'to': ur'\u100B\u1039\u100B'},
            {"from": ur'\u103C([\u1000-\u1021])([\u1000-\u1021])?' , 'to': ur'\1\u103C\2'},
            {"from": ur'([\u1000-\u1021])\u103C\u103A' , 'to': ur'\u103C\1\u103A'},
            {"from": ur'\u1031([\u1000-\u1021])(\u103E)?(\u103B)?' , 'to': ur'\1\2\3\u1031'},
            {"from": ur'([\u1000-\u1021])\u1031(\u103B|\u103C|\u103D)' , 'to': ur'\1\2\u1031'},
            {"from": ur'\u1032\u103D' , 'to': ur'\u103D\u1032'},
            {"from": ur'\u103D\u103B' , 'to': ur'\u103B\u103D'},
            {"from": ur'\u103A\u1037' , 'to': ur'\u1037\u103A'},
            {"from": ur'\u102F(\u102D|\u102E|\u1036|\u1037)\u102F' , 'to': ur'\u102F\1'},
            {"from": ur'\u102F\u102F' , 'to': ur'\u102F'},
            {"from": ur'(\u102F|\u1030)(\u102D|\u102E)' , 'to': ur'\2\1'},
            {"from": ur'(\u103E)(\u103B|\u1037)' , 'to': ur'\2\1'},
            {"from": ur'\u1025(\u103A|\u102C)' , 'to': ur'\u1009\1'},
            {"from": ur'\u1025\u102E' , 'to': ur'\u1026'},
            {"from": ur'\u1005\u103B' , 'to': ur'\u1008'},
            {"from": ur'\u1036(\u102F|\u1030)' , 'to': ur'\1\u1036'},
            {"from": ur'\u1031\u1037\u103E' , 'to': ur'\u103E\u1031\u1037'},
            {"from": ur'\u1031\u103E\u102C' , 'to': ur'\u103E\u1031\u102C'},
            {"from": ur'\u105A' , 'to': ur'\u102B\u103A'},
            {"from": ur'\u1031\u103B\u103E' , 'to': ur'\u103B\u103E\u1031'},
            {"from": ur'(\u102D|\u102E)(\u103D|\u103E)' , 'to': ur'\2\1'},
            {"from": ur'\u102C\u1039([\u1000-\u1021])' , 'to': ur'\u1039\1\u102C'},
            {"from": ur'\u103C\u1004\u103A\u1039([\u1000-\u1021])' , 'to': ur'\u1004\u103A\u1039\1\u103C'},
            {"from": ur'\u1039\u103C\u103A\u1039([\u1000-\u1021])' , 'to': ur'\u103A\u1039\1\u103C'},
            {"from": ur'\u103C\u1039([\u1000-\u1021])' , 'to': ur'\u1039\1\u103C'},
            {"from": ur'\u1036\u1039([\u1000-\u1021])' , 'to': ur'\u1039\1\u1036'},
            {"from": ur'\u1092' , 'to': ur'\u100B\u1039\u100C'},
            {"from": ur'\u104E' , 'to': ur'\u104E\u1004\u103A\u1038'},
            {"from": ur'\u1040(\u102B|\u102C|\u1036)' , 'to': ur'\u101D\1'},
            {"from": ur'\u1025\u1039' , 'to': ur'\u1009\u1039'}
          ]
	return replace_with_rule(rule,zawgyi)

def replace_with_rule(rule,output):
	for data in rule:
		output = re_sub(data["from"],data["to"],output)
	return output

def re_sub(pattern, replacement, string):
	def _r(m):
		# Now this is ugly.
		# Python has a "feature" where unmatched groups return None
		# then re.sub chokes on this.
		# see http://bugs.python.org/issue1519638

		# this works around and hooks into the internal of the re module...

		# the match object is replaced with a wrapper that
		# returns "" instead of None for unmatched groups

		class _m():
			def __init__(self, m):
				self.m=m
				self.string=m.string
			def group(self, n):
				return m.group(n) or ""

		return re._expand(pattern, _m(m), replacement)

	return re.sub(pattern, _r, string)
