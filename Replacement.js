function replacement (par1, number, par2){

    par1 = par1.split('');

    let j = 1;
for (let i=0;  i < par1.length; i++){
    if (par1[i] == " " || par1[i] == "," || par1[i] == "." || par1[i] == "?" || par1[i] == "!" || par1[i] == ";" || par1[i] == ":" || par1[i] == "-") {
        j = 1; 
        continue;}

    if (j == number){
        par1[i] = par2;}
   j++;
  
}

par1 = par1.join('');
return par1;

}
output = replacement ("Create a function that will take a String value as first parameter, Number value as second and String value as third. First parameter should be a sentence or set of sentences", 3, "YO")

console.log(output);