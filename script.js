console.log("HELLO");
// Basit Branch Chap-6-9
console.log("------------------------------------------------------------------------")
// QUESTION NUMBER 01 : ARITHMETIC OPR
console.log("QUESTION NO.01:", "ARITHMETIC OPERATOR")
var a = 1
var b = 2;

--a;
console.log("--a is:" , --a);
--a - --b;
console.log("--a - --b:",--a - --b);
--a - --b + ++b;
console.log("--a - --b + ++b:", --a - --b + ++b);
--a - --b + ++b + b--;
console.log("--a - --b + ++b + b--:", --a - --b + ++b + b--);
var result=  --a - --b + ++b + b--;
console.log("RESULT:", a ,b , result);


console.log("--------------------------------------------------------------------")
// QUESTION NUMBER 02 : LOGICAL OPR
console.log("QUESTION NO.02;", )
var a = 10;
console.log("THE VALUE IS:", a);
console.log("The value of 10 is now:", ++a);
console.log("THE VALUE OF 11 IS NOW: ", ++a);
console.log("THE VALUE OF 12 IS NOW:", --a);                                          
console.log("THE VALUE OF 11 IS NOW:", --a);


console.log("")
// QUESTION NUMBER 03 : PROMPT
console.log("QUESTION NO.03:", "PROMPT")
var name = prompt(" PLEASE ENTER YOUR NAME ");
console.log("Hey",name,"How it going?", "WELCOME TO OUR WEBSITE" );


console.log("---------------------------------------------------------------------")
// QUESTION NUMBER 04 : MULTIPLICATION TABLE 
console.log("QUESTION NO.04:")
console.log("THIS IS A MULTIPLICATION TABLE:");
var num1 = prompt("ENTER FIRST NUMBER");
var opr = prompt("ENTER MULTIPLICATION OPREATOR ( * )");
var num2 = prompt("ENTER SECOND NUMBER ");
var result = 0;
if(opr == "*"){
    console.log("YOUR ANSWER IS:", num1 * num2);
}else{
    console.log("YOU HAVE ENTERED WRONG OPERATOR THE FIRST NUM IS MULTIPLIED BY 5 AUTOMATICALLY:",num1*5);
}
var result;


console.log("---------------------------------------------------------------------------------")
// QUESTION NUMBER 05 : TOTAL SUBS %
console.log("QUESTION NO.05:")
console.log("CALCULATING YOUR MARKS & PERCENTAGE");
alert("Now, Do You Want to calculate your marks & percentage?")
var english = Number(prompt("How much Number You Got in English?"));
var urdu = Number(prompt("How much Number You Got in Urdu?"));
var math = Number(prompt("How much Number You Got in Math?"));
var total_mark_each_sub= 100;
var total_marks = 300;
console.log(
    "English = " + english + " / " + total_mark_each_sub + "\n" +
    "Urdu = " + urdu + " / " + total_mark_each_sub + "\n" +
    "Math = " + math + " / " + total_mark_each_sub + "\n" +
    "Your Total Marks are : " + (english + urdu + math) + "/" + total_marks + "\n" +
    "Your percentage is : " + ((english + urdu + math) * 100 / total_marks).toFixed(2) + "%");

    console.log("CHAPTER NO.06 TO 09 COMPLETED ");