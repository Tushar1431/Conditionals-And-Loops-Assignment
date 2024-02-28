let Grade=47; // we can use prompt method alsp but VS code does not support it .... prompt("Enter the Marks:");

if(Grade>=90){
    console.log("You Got A Grade !!");
}
else if(Grade>=70 && Grade<=90)
{
    console.log("You Got B Grade.");
}
else if( Grade>=50 && Grade<=70)
{
    console.log(" You Got C Grade");
}
else{
    console.log("You Got F Grade :(");
}