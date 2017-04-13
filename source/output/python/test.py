# -*- coding: utf-8 -*-
import Rabbit

text =  u'ယေဓမ္မာ ဟေတုပ္ပဘဝါ တေသံ ဟေတုံ တထာဂတော အာဟ တေသဉ္စ ယောနိရောဓေါ ဧဝံ ဝါဒီ မဟာသမဏော။'
unicode_text = Rabbit.uni2zg(text)
zawgyi_text = Rabbit.zg2uni(unicode_text)
print(unicode_text)
print(zawgyi_text)
