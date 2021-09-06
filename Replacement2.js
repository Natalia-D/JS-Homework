function replacement (par1, number, par2){

    par1 = par1.split('');
   

for (let i=0;  i < par1.length; i++){
   
    if (i == (number-1)){
        par1[i] = par2;}
   
}

par1 = par1.join('');
return par1;

}
output = replacement ("Create a function that will take a String value as first parameter, Number value as second and String value as third. First parameter should be a sentence or set of sentences", 1, "YO")

console.log(output);