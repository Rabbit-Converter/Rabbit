//
//  Rabbit.m
//  rabbit
//
//  Created by Htain Lin Shwe on 28/1/15.
//  Copyright (c) 2015 comquas. All rights reserved.
//

#import "Rabbit.h"

@implementation Rabbit

+ (NSString *)uni2zg:(NSString *)zawgyi {
  
  NSArray *rule = {{UNI2ZG}};
  
  return [self replaceWithRule:rule AndText:zawgyi];
}

+ (NSString *)zg2uni:(NSString *)unicode {
  
  NSArray *rule = {{ZG2UNI}};
  
  return [self replaceWithRule:rule AndText:unicode];
}

+ (NSString *)replaceWithRule:(NSArray *)rule AndText:(NSString *)text {
  
  NSInteger maxLoop = rule.count;
  for(int i= 0 ; i < maxLoop ; i++) {
    NSDictionary *data = rule[i];
    NSString *from = data[@"from"];
    NSString *to = data[@"to"];
    text = [text stringByReplacingOccurrencesOfString:from withString:to options:NSRegularExpressionSearch range:NSMakeRange(0, text.length)];
  }
  
  return text;
  
  
}

@end
