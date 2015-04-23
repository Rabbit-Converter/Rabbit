//
//  Rabbit.swift
//  Rabbit
//
//  Created by Saturngod on 27/1/15.
//  Copyright (c) 2015 comquas. All rights reserved.
//

import UIKit

public struct Rabbit {
  
  public static func uni2zg(unicode:String) ->String {
    
    var json = "{{UNI2ZG}}"
    var data = json.dataUsingEncoding(NSUTF8StringEncoding, allowLossyConversion: true)
    
    var rule:NSArray = NSJSONSerialization.JSONObjectWithData(data!, options: nil, error: nil) as! NSArray
    
    return replaceRule(rule, original: unicode)
    
  }
  
  public static func zg2uni(zawgyi:String) ->String {
    
    var json = "{{ZG2UNI}}"
    var data = json.dataUsingEncoding(NSUTF8StringEncoding, allowLossyConversion: true)
    
    var rule:NSArray = NSJSONSerialization.JSONObjectWithData(data!, options: nil, error: nil) as! NSArray
    
    return replaceRule(rule, original: zawgyi)
    
  }
  
  static func replaceRule(rule:NSArray,original:String) -> String {
    
    var output = original
    var maxLoop = rule.count
    var i = 0
    for(i ; i < maxLoop ; i++) {
      var data:NSDictionary = rule[i] as! NSDictionary
      var from:String = data["from"] as! String
      var to:String = data["to"] as! String
      var range: Range<String.Index> = Range<String.Index>(start: output.startIndex,end: output.endIndex)
      output = output.stringByReplacingOccurrencesOfString(from, withString: to, options: .RegularExpressionSearch, range: range)
    }
    
    return output
    
  }
  
}
