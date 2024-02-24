use rabbit_rust::Rabbit;

fn main() {
    let text: &str = "ယေဓမ္မာ ဟေတုပ္ပဘဝါ တေသံ ဟေတုံ တထာဂတော အာဟ တေသဉ္စ ယောနိရောဓေါ ဧဝံ ဝါဒီ မဟာသမဏော။";
    let zawgyi_text = Rabbit::uni2zg(text);
    let unicode_text = Rabbit::zg2uni(&zawgyi_text);

    println!("zawgyi : {}", zawgyi_text);
    println!("unicode : {}", unicode_text);

    let text = "သီဟိုဠ်မှ ဉာဏ်ကြီးရှင်သည် အာယုဝဍ္ဎနဆေးညွှန်းစာကို ဇလွန်ဈေးဘေး ဗာဒံပင်ထက် အဓိဋ္ဌာန်လျက် ဂဃနဏဖတ်ခဲ့သည်။";
    let zawgyi_text = Rabbit::uni2zg(text);
    let unicode_text = Rabbit::zg2uni(&zawgyi_text);

    println!("zawgyi : {}", zawgyi_text);
    println!("unicode : {}", unicode_text);
}
