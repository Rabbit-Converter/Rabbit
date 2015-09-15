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
    
    let json = "{{UNI2ZG}}"
    let data = json.dataUsingEncoding(NSUTF8StringEncoding, allowLossyConversion: true)
    
    let rule:NSArray = (try! NSJSONSerialization.JSONObjectWithData(data!, options: [])) as! NSArray
    
    return replaceRule(rule, original: unicode)
    
  }
  
  public static func zg2uni(zawgyi:String) ->String {
    
    let json = "{{ZG2UNI}}"
    let data = json.dataUsingEncoding(NSUTF8StringEncoding, allowLossyConversion: true)
    
    let rule:NSArray = (try! NSJSONSerialization.JSONObjectWithData(data!, options: [])) as! NSArray
    
    return replaceRule(rule, original: zawgyi)
    
  }
  
  static func replaceRule(rule:NSArray,original:String) -> String {
    
    var output = original
    let maxLoop = rule.count
    var i = 0
    for(i ; i < maxLoop ; i++) {
      let data:NSDictionary = rule[i] as! NSDictionary
      let from:String = data["from"] as! String
      let to:String = data["to"] as! String
      let range: Range<String.Index> = Range<String.Index>(start: output.startIndex,end: output.endIndex)
      output = output.stringByReplacingOccurrencesOfString(from, withString: to, options: .RegularExpressionSearch, range: range)
    }
    
    return output
    
  }
  
}
