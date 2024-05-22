/*

Extract the domain name from a URL


Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"



*/

function domainName(url) {
	//your code here
}

//= SOLUTION:

function _domainName(url) {
	var customUrl = "";
	var domain = "";
	(function checkUrl() {
		if (url.includes("https://")) {
			customUrl = url.replace("https://", "");
		} else {
			customUrl = url.replace("http://", "");
		}
		return (function checkWWW() {
			if (url.includes("www.")) {
				domain = customUrl.replace("www.", "").split(".");
			} else {
				domain = customUrl.split(".");
			}
		})();
	})();

	return domain[0];
}

console.log(_domainName("http://github.com/carbonfive/raygun"));

// output: github
