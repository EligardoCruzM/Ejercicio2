function palindrome(str){
    str = str.toLowerCase();
    str = str.replace(/ /g, "");
	for (var i = 0; i < str.length; i++){
		if(str[i] != str[str.length - i - 1]){
			return "no es palíndromo";
		}
	}
	return "es palíndromo";
}

function countWords(str){
	str = str.replace(/\r?\n/g," ");
	str = str.replace(/[ ]+/g," ");
	str = str.replace(/^ /,"");
	str = str.replace(/ $/,"");
	str = str.split(" ");
	return str.length;
}

function countLetters(str){
	str = str.replace(/\r?\n/g," ");
	c = str.split(" ");
	for(var i = 0; i < c.length; i++){
		str = str.replace(" ","");
	}
	return str.length;
}

function countVowels(str){
	str = str.toLowerCase();
	var vowel_list = 'aeiouáéíóú';
	var c = 0;
  	for(var x = 0; x < str.length ; x++){
    	if (vowel_list.indexOf(str[x]) !== -1){
      		c++;
    	}
  	}
  	return c;
}

function countConsonants(str){
	str = str.toLowerCase();
	var consonantlist = 'bcdfghjklmnñpqrstvwxyz';
	var c = 0;
  	for(var x = 0; x < str.length ; x++){
    	if (consonantlist.indexOf(str[x]) !== -1){
      		c++;
    	}
  	}
  	return c;
}

module.exports.pa = palindrome;
module.exports.cw = countWords;
module.exports.cl = countLetters;
module.exports.cv = countVowels;
module.exports.cc = countConsonants;