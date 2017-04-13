# -*- coding: utf-8 -*-
import json,re,sys

def uni2zg(unicode):
  json_data = '{{UNI2ZG}}'
  rule = json.loads(json_data)
  return replace_with_rule(rule,unicode)

def zg2uni(zawgyi):
  json_data = '{{ZG2UNI}}'
  rule = json.loads(json_data)
  return replace_with_rule(rule,zawgyi)

def replace_with_rule(rule,output):
  for data in rule:
    if sys.version_info >= (3,5):
      # no more return None for unmatched after 3.5
      output = re.sub(data["from"],data["to"].replace("\\\\","\\"),output)
    else:
      output = re_sub(data["from"],data["to"].replace("\\\\","\\"),output)
  return output

def re_sub(pattern, replacement, string):
  def _r(m):
    # Now this class is ugly.
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
