import 'rabbit.dart';

main() {
  String text = 'ယေဓမ္မာ ဟေတုပ္ပဘဝါ တေသံ ဟေတုံ တထာဂတော အာဟ တေသဉ္စ ယောနိရောဓေါ ဧဝံ ဝါဒီ မဟာသမဏော။';
  String zawgyi_text = uni2zg(text);
  String unicode_text = zg2uni(zawgyi_text);

  print(zawgyi_text);
  print(unicode_text);
}