//
//  Rabbit.swift
//  Rabbit
//
//  Created by Saturngod on 27/1/15.
//  Copyright (c) 2015 comquas. All rights reserved.
//

import UIKit

public struct Rabbit {
    
    public static func uni2zg(_ unicode:String) ->String {
        
        let json = """
        {{UNI2ZG}}
        """
        let data = json.data(using: String.Encoding.utf8, allowLossyConversion: true)
        
        let rule:NSArray = (try! JSONSerialization.jsonObject(with: data!, options: [])) as! NSArray
        
        return replaceRule(rule, original: unicode)
        
    }
    
    public static func zg2uni(_ zawgyi:String) ->String {
        
        let json = """
        {{ZG2UNI}}
        """
        let data = json.data(using: String.Encoding.utf8, allowLossyConversion: true)
        
        let rule:NSArray = (try! JSONSerialization.jsonObject(with: data!, options: [])) as! NSArray
        
        return replaceRule(rule, original: zawgyi)
        
    }
    
    static func replaceRule(_ rule:NSArray,original:String) -> String {
        
        var output = original
        let maxLoop = rule.count
        
        //for(i = 0 ; i < maxLoop ; i += 1) {
        for i in 0..<maxLoop {
            let data:NSDictionary = rule[i] as! NSDictionary
            let from:String = data["from"] as! String
            let to:String = data["to"] as! String
            

            let range = output.startIndex ..< output.endIndex
            output = output.replacingOccurrences(of: from, with: to, options: .regularExpression, range: range)

            
        }
        
        return output
        
    }
    
}
