package main

import (
	"encoding/json"
	"fmt"
	s "strings"
)

type JsonData struct {
	From string `json:"from"`
	To   string `json:"to"`
}

func zg2uni(input string) string {

	rule := []byte("{{UNI2ZG}}")

	return replace_with_rule(rule, input)
}

func uni2zg(input string) string {
	rule := []byte("{{ZG2UNI}}")

	return replace_with_rule(rule, input)

}

func replace_with_rule(rule []byte, output string) string {

	var jsonAry []JsonData
	err := json.Unmarshal(rule, &jsonAry)
	if err != nil {
		panic(err)
	}

	for i := 0; i < len(jsonAry); i++ {

		output = s.Replace(output, jsonAry[i].From, jsonAry[i].To, -1)
	}

	return output

}
