//make all first word uppercase
function capitalizeFirstLetterOfEachWord(str) {
    let words = str.split(' ');
    let capitalizedWords = []; 
  
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      if (word.length > 0) {
    
        let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        capitalizedWords.push(capitalizedWord);
      } else {
        capitalizedWords.push(word); 
      }
    }
  
    return capitalizedWords.join(' '); 
  }
  
  const inputString = "hello world from openai";
  const capitalizedString = capitalizeFirstLetterOfEachWord(inputString);
  console.log(capitalizedString);