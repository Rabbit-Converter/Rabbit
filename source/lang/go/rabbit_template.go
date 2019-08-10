package rabbit

import (
	"encoding/json"
	"github.com/dlclark/regexp2"
)

type RuleStruct struct {
    From	string
    To	string
}

func Uni2zg(str string) string  {
	unizgRule :=`{{UNI2ZG}}`

	return replaceRule(unizgRule,str)
}

func Zg2uni(str string) string  {
	zguniRule :=`{{ZG2UNI}}`

	return replaceRule(zguniRule,str)
}

func replaceRule(ruleJson string,output string) string {
	
	var rules []RuleStruct
	json.Unmarshal([]byte(ruleJson), &rules)
	var re = regexp2.MustCompile("",0)
	text := output
	for i := range rules {
		re = regexp2.MustCompile(rules[i].From,1)
		res, err := re.Replace(text, rules[i].To,0,-1)
		text = res
		if err != nil {
			//nothing to do
		} 
	}
	
	return text

}
