function reverseString() {
    //Get the user's word
    let userWord = document.getElementById("tacoCat").value;
    let cleanedWord = userWord.toLowerCase().replace(/ /g, "");
    //Do something here with it
    let start = cleanedWord.length - 1;
    let reverseWord = "";
    //For loop
    for (let i = start; i >= 0; i--) {
        reverseWord = reverseWord + cleanedWord[i];
        //Same thing
        //reverseWord += userWord[i];
    }
    let output = document.getElementById("tacoOutput");
    output.innerText = reverseWord;

    let finalOutput = document.getElementById("final");
    if (userWord == "") {
        Swal.fire('Please input at least two characters to determine if it is a palindrome!')
    } else if (cleanedWord == reverseWord) {
        Swal.fire('This is a Palindrome!')
    } else if (cleanedWord != reverseWord) {
        Swal.fire('This is NOT a Palindrome!')
    } else {
        finalOutput.innerHTML = "This is not a Palindrome.";
    }
}


















//   if (userWord == "") {
//       document.getElementById("noInput").innerHTML = 'Please input at least two characters to determine if the output is a palindrome.'
//   } else if (cleanedWord === reverseWord) {
//       document.getElementById("correct").innerHTM = 'This is a Palindrome!'
//   } else(cleanedWord != reverseWord) {
//       document.getElementById("notCorrect").innerHTML = 'This is not a Palindrome'
//   }










//Before Loop - reverseWord = "" []
//Loop 1 - i = 4: userWord[4] = k reverseWord[] + k = [k]
//Loop 2 - i = 3: userWord[3] = n reversWord[k] + n = [k, n]
//Loop 3 - i = 2: userWord[2] = a
//Loop 4 - i = 1: userWord[1] = r
//Loop 5 - i = 0: userWord[0] = f