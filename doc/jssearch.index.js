jssearch.index = {"p":[{"f":1,"w":1.9}],"\u6587\u6863\u8bf4\u660e":[{"f":1,"w":1.9}],"&para":[{"f":1,"w":4.104}],"\u529f\u80fd\u4ecb\u7ecd":[{"f":1,"w":2.16}],"definitive":[{"f":1,"w":4}],"guide":[{"f":1,"w":4.8}],"2":[{"f":1,"w":4}],"0":[{"f":1,"w":4}],"\u7248\u6743\u6240\u6709\u3002":[{"f":1,"w":1.2}],"2016":[{"f":1,"w":1.2}],"c":[{"f":1,"w":1.2}],"fecshop":[{"f":1,"w":79.496847203391}],"software":[{"f":1,"w":1.2}],"llc\u3002":[{"f":1,"w":1.2}],"?":[{"f":1,"w":2.48832}],"?\u4e8e\u4e0e\u5b89?":[{"f":1,"w":1.2}],"?\u4e8e-\u67b6\u6784\u7279\u70b9":[{"f":1,"w":1.2}],"?\u4e8e-\u529f\u80fd\u4ecb\u7ecd":[{"f":1,"w":1.2}],"?\u4e8e-\u7cfb\u7edf\u7ed3\u6784":[{"f":1,"w":1.2}],"\u5b89?":[{"f":1,"w":1.44}],"-composer":[{"f":1,"w":1.2}],"-\u521d\u59cb?":[{"f":1,"w":1.2}],"?\u7f6e\u529f\u80fd\u4ecb\u7ecd":[{"f":1,"w":1.2}],"\u529f\u80fd\u6982\u53d9":[{"f":1,"w":1.2}],"url\u81ea\u5b9a\u4e49":[{"f":1,"w":1.2}],"\u591a\u8bed\u8a00":[{"f":1,"w":1.2}],"\u591astore":[{"f":1,"w":1.2}],"\u591a\u8d27\u5e01":[{"f":1,"w":1.2}],"\u591a\u6a21\u677f":[{"f":1,"w":1.2}],"\u591a?":[{"f":1,"w":1.2}],"?\u53e3":[{"f":1,"w":1.2}],"?\u7f6e\u5c42":[{"f":1,"w":1.2}],"\u6a21\u5757\u5c42":[{"f":1,"w":1.2}],"block\u5c42":[{"f":1,"w":1.2}],"\u670d\u52a1\u5c42":[{"f":1,"w":1.2}],"\u72ec\u7acb\u529f\u80fd\u5757":[{"f":1,"w":1.2}],"\u6743\u9650\u7ba1\u7406":[{"f":1,"w":1.2}],"\u7f13\u5b58\u7ba1\u7406":[{"f":1,"w":1.2}],"\u811a\u672c\u7ba1\u7406":[{"f":1,"w":1.2}],"\u540e\u53f0\u65e5\u5fd7":[{"f":1,"w":1.2}],"\u91cd\u5199\u529f\u80fd":[{"f":1,"w":1.2}],"\u5347\u7ea7":[{"f":1,"w":1.2}],"results":[{"f":1,"w":1.2}],"'":[{"f":1,"w":1.44}],"+":[{"f":1,"w":2.48832}],"result":[{"f":1,"w":1.44}],"key":[{"f":1,"w":1.44}],"file":[{"f":1,"w":1.44}],"t":[{"f":1,"w":1.2}],"''":[{"f":1,"w":1.44}],"d":[{"f":1,"w":1.2}]};
jssearch.files = ;
jssearch.tokenizeString = function(string) {
		var stopWords = ["a","an","and","are","as","at","be","but","by","for","if","in","into","is","it","no","not","of","on","or","such","that","the","their","then","there","these","they","this","to","was","will","with","yii"];
		return string.split(/[\s\.,;\:\\\/\[\]\(\)\{\}]+/).map(function(val) {
			return val.toLowerCase();
		}).filter(function(val) {
			for (w in stopWords) {
				if (stopWords[w] == val) return false;
			}
			return true;
		}).map(function(word) {
			return {t: word, w: 1};
		});
};