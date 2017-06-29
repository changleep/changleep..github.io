jssearch.index = {"\u5927\u8bdd\u8bbe\u8ba1\u6a21\u5f0f":[{"f":1,"w":1.9},{"f":2,"w":1.9}],"&para":[{"f":1,"w":11.0808},{"f":2,"w":11.0808}],"singel":[{"f":1,"w":2.16},{"f":2,"w":2.16}],"factory":[{"f":1,"w":2.16},{"f":2,"w":2.16},{"f":3,"w":4}],"observer":[{"f":1,"w":2.16},{"f":2,"w":2.16},{"f":4,"w":4}],"leepy":[{"f":1,"w":4},{"f":2,"w":4},{"f":3,"w":4},{"f":4,"w":4}],"site":[{"f":1,"w":4},{"f":2,"w":4},{"f":3,"w":4},{"f":4,"w":4}],"home":[{"f":1,"w":4},{"f":2,"w":4},{"f":3,"w":4},{"f":4,"w":4}],"guide":[{"f":1,"w":1.2},{"f":2,"w":1.2},{"f":3,"w":1.2},{"f":4,"w":1.2}],"singel-pattern":[{"f":1,"w":1.2},{"f":2,"w":1.2}],"factory-\u5de5\u5382\u6a21\u5f0f":[{"f":1,"w":1.44},{"f":2,"w":1.44},{"f":3,"w":4}],"observe-\u89c2\u5bdf?":[{"f":1,"w":1.2},{"f":2,"w":1.2}],"results":[{"f":1,"w":1.2},{"f":2,"w":1.2},{"f":3,"w":1.2},{"f":4,"w":1.2}],"'":[{"f":1,"w":1.44},{"f":2,"w":1.44},{"f":3,"w":1.44},{"f":4,"w":1.44}],"+":[{"f":1,"w":2.48832},{"f":2,"w":2.48832},{"f":3,"w":2.48832},{"f":4,"w":2.48832}],"result":[{"f":1,"w":1.44},{"f":2,"w":1.44},{"f":3,"w":1.44},{"f":4,"w":1.44}],"key":[{"f":1,"w":1.44},{"f":2,"w":1.44},{"f":3,"w":1.44},{"f":4,"w":1.44}],"file":[{"f":1,"w":1.44},{"f":2,"w":1.44},{"f":3,"w":1.44},{"f":4,"w":1.44}],"t":[{"f":1,"w":1.2},{"f":2,"w":1.2},{"f":3,"w":1.2},{"f":4,"w":1.2}],"''":[{"f":1,"w":1.44},{"f":2,"w":1.44},{"f":3,"w":1.44},{"f":4,"w":1.44}],"d":[{"f":1,"w":1.2},{"f":2,"w":1.2},{"f":3,"w":1.2},{"f":4,"w":1.2}],"-":[{"f":3,"w":16},{"f":4,"w":16}],"observe-\u89c2\u5bdf\ufffd":[{"f":4,"w":4}]};
jssearch.files = {"1":{"u":".\/\/guide-index.html","t":"\u5927\u8bdd\u8bbe\u8ba1\u6a21\u5f0f ","d":""},"2":{"u":".\/\/guide-README.html","t":"\u5927\u8bdd\u8bbe\u8ba1\u6a21\u5f0f ","d":""},"3":{"u":".\/\/guide-factory.html","t":"Factory-\u5de5\u5382\u6a21\u5f0f - Factory - leepy site home","d":""},"4":{"u":".\/\/guide-observer.html","t":"Observe-\u89c2\u5bdf\ufffd\n - Observer - leepy site home","d":""}};
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