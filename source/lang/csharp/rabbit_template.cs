using System.Text.RegularExpressions;
using System.Web.Script.Serialization;

namespace Rabbit
{
	public static class Rabbit
	{

		public static string uni2zg(string input) {

			string rule = "{{UNI2ZG}}";
			return replace_with_rule(rule,input);
		}

		public static string zg2uni(string input) {

			string rule = "{{ZG2UNI}}";
			return replace_with_rule(rule,input);
		}

		public static string replace_with_rule(string json,string output) {
			RabbitRule[] rules = new JavaScriptSerializer().Deserialize<RabbitRule[]>(json);
			int max_loop = rules.Length;
			for (int i = 0; i < max_loop; i++) {
				RabbitRule rule = rules[i];
				output = Regex.Replace(output, rule.from, rule.to);
			}
			return output;
		}
	}

	class RabbitRule
	{
		public string from {get;set;}
		public string to {get;set;}
	}
}

