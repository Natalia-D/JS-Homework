function isPalindrome (str){

    let result = "";

    str = str.split (' ').join('').toLowerCase();

for (let i=0;  i < str.length; i++){
   if (str[i] == str[str.length -1 - i])
     { result = "is";}
    else
     {result = "is not";}
 if (result == "is not"){ break;}
}
 
return result;
}

input = "А роза упала на лапу Азора";
result = isPalindrome (input)

console.log(input + " " + result + " a Palindrome");






