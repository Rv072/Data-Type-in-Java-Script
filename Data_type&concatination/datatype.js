var a = 1+3;
console.log(a);
console.log(typeof (a));

var b = "1"+3;
console.log(b);
console.log(typeof (b));

var c = "strong" + "Engineer"
console.log(c);
console.log(typeof (c));

var d = "Strong" + true;
console.log(d);
console.log(typeof (d));

var d = "false" + false;
console.log(d);
console.log(typeof (d));

var e = "1" + true - true;
console.log(e);
console.log(typeof (e));

var f = "10" - false - false - true + 2;
console.log(f);
console.log(typeof (f));

var e = "Arun" + 10.1 + 20 -98 + true;
console.log(e);
console.log(typeof (e));

var f = "-" + 1;
console.log(f);
console.log(typeof (f));

var g = Number("32") + 2;
console.log(g);
console.log(typeof (g));

var h = 2 + parseInt("ankit");
console.log(h);
console.log(typeof (h));

var i = "ankit" + 2 + parseInt(2) + parseFloat(33.98);
console.log(i);
console.log(typeof (i));

var j = "10" - 2;
console.log(j);
console.log(typeof (j));

var k = "100" + -20;
console.log(k);
console.log(typeof (k));

var l = "100" + 10 + "20" - "20" + true + true + false + -true;
console.log(l);
console.log(typeof (l));

// print 1 to 10
for(var i=1;i<=10;i++){
console.log("Number is " +i);
}

// print 4 to 30
var i=4;
while( i<=30){
    
    console.log("Number is " +i);
    i++;
}

// Print 5 to 1
for(var i=5;i>=1;i--){
    console.log("Number is " +i);
    }

// Print even number from 1 to 100

for(var i =1;i<=100;i++)
if(i%2==0)
{
console.log("Number is even " +i);
}

// Print odd number from 1 to 100

for(var i =1;i<=100;i++)
if(i%2!=0)
{
console.log("Number is odd " +i);
}

// Write factorial of 10
var i,fact=1;
for(i=1;i<=10;i++)
{
    fact=fact*i;
    console.log("fact of  " +i,"= " +fact);
}

