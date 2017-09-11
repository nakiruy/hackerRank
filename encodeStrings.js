function encode_string(s) {
  let noVowels = s.split('').filter(char => char !== 'a' && char !== 'e' && char !== 'i' && char !== 'o' && char !== 'u');
  let noDuplicates = {};
  for(var i = 0; i < noVowels.length; i++) {
    if (noDuplicates[noVowels[i]]) {
      noDuplicates[noVowels[i]] += 1;
    } else {
      noDuplicates[noVowels[i]] = 1;
    }
  }
  let transformed = Object.keys(noDuplicates).join('');
  //for each character, 
  //add the following character's numerical value
  //given the new numerical value
  //transform that character to the new encoded value
  //do so for every character of the string
  //return the transformed string
  
}

// console.log(encode_string('bcd'));
// console.log(encode_string('yxyxyxyxyxyxyxioioio'));

