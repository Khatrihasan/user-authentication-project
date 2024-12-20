//  IF ELSE CODING
// var grade=prompt("what is your percentage")
// if (grade>=90) {
//     alert("your grade is A+")
// }
// else if (grade>=70) {
//     alert("your grade is A")
// }
// else if (grade>=50) {
//     alert("your grade is B")
// }
// else if (grade>=30) {
//     alert("your garde is C")
// }
// else{
//     alert("you are fail")
// }

//   SWITCH CASE CODING 
// var day=prompt("Enter any day")
// switch (day) {
//     case "sunday":
//         alert("Sunday is the first day in the week")
//         break;
//     case "monday":
//         alert("Monday is the second day in the week")
//         break;
//     case "tuesday":
//         alert("Tuesday is the third day in the week")
//         break;
//     case "wednesday":
//         alert("Wednesday is the fourth day in the week")
//         break;
//     case "thursday":
//         alert("Thursday is the fifth day in the week")
//         break;
//     case "friday":
//         alert("Friday is the sixth day in the week")
//         break;
//     case "saturday":
//         alert("Saturday is the 5th day in the week")
//         break;
//     default:
//         break;
// }

//    FOR LOOP CODING
// for(i=1; i<=200; i++)
//      {
//     console.log(i);  
// }

//   WHILE LOOP CODING
// var tablenumber=parseInt(prompt("Enter the table you want"))
// var tablelength=parseInt(prompt("Enter the number where you want to end the table"))
// var a=1
// while (a<=tablelength) {
//     console.log(tablenumber + " " + "x" + " " + a + "=" + tablenumber*a0);
//     a++
// }

// WHILE LOOP CODING
// var a=5
// while (a<=10) {
//     console.log(a);
//     a++
// }

// FUNCTIONS
// function buttonclick() {
//     var name =prompt("Ab samajh ai hai tujhe")
//     alert( "Or " + name + " " + "bhai kia haal hain")
// }
  
// Local storage
// localStorage.setItem("name", "Bukhtawar")

// Session storage
// sessionStorage.setItem("name", "zohrawar")
// var data = sessionStorage.getItem("name")
// alert(data)

function signup() {
    var email = document.getElementById("signupemail").value;
    var password = document.getElementById("signuppassword").value;
    sessionStorage.setItem("useremail", email);
    sessionStorage.setItem("userpassword", password);
}

function login() {
    var lemail = document.getElementById("loginemail").value;
    var lpassword = document.getElementById("loginpassword").value;
    var getemail = sessionStorage.getItem("useremail");
    var getpass = sessionStorage.getItem("userpassword"); // Corrected key here

    if (lemail === getemail && lpassword === getpass) {
        window.location.href = "home.html";
    } else {
        alert("Sahi se likh gadhe");
    }
}


document.getElementById("logout").addEventListener("click", function() {
    sessionStorage.clear();
    window.location.href = "index.html";
});