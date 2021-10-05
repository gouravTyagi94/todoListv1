const express = require("express");
const app = express();
const bodyParser = require("body-parser");
//using our own date.js module
const date = require(__dirname+"/date.js");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


//Even though, we need to add contents to this array but we can still
//declare these arrays as "const" instead of "let".
//An array of "const" type can not be referenced to any other array later on.
//and should be declared and initialised in the first place but we can still push items
//into it and it can work like a normal array.
//I am declaring just one of these two arrays as "const" though we can make both of 
//these as "const".
const items = ["Buy food","Cook food","Eat food"];
let workItems = [];
app.get("/", function (req, res) {
    // let currDay = today.getDay();
    let day = "";

    //if (currDay == 0 || currDay == 6) {
        // res.send("<h1>Yay!!! It's weekend..</h1>");
        // res.sendFile(__dirname+"/weekend.html");

    //  day = "weekend";
    //}
    //else {
        //res.send() will send only one instruction, It works like return statement
        //If we write multiple res.send(), only first one will be executed.

        //To send multiple statements we can use res.write()

        //we can either write single res.send(), or write multiple res.write() followed by writing res.send().
        //final statement must be res.send()

        /* res.write() and res.send() part */
        // res.write("<p>It's not weekend<p>");
        // res.write("<h1> Boo, I have to work...</h1>");
        // res.send();

        // Best way to send multiple statements is to send an html file instead, using res.sendFile()
        // res.sendFile(__dirname+"/weekday.html");


    //    day = "weekday";
    //}
    // if(currDay===0){
    //     day = "Sunday";
    // }
    // else if(currDay===1){
    //     day = "Monday";
    // }
    // else if(currDay===2){
    //     day = "Tuesday";
    // }
    // else if(currDay===3){
    //     day = "Wednesday";
    // }
    // else if(currDay===4){
    //     day = "Thursday";
    // }
    // else if(currDay===5){
    //     day = "Friday";
    // }
    // else if(currDay===6){
    //     day = "Saturday";
    // }

    //Directly converting "today" into date
    
    day = date.getDate();
    res.render("list", { listTitle: day, newListItems: items});
});

app.get("/work", function(req, res){
    res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req, res){
    res.render("about");
});

app.post("/", function(req, res){
    let item = req.body.newItem;
    //we are differentiating b/w work list and normal list on the basis of value
    //we are getting from the form but remember that if our value in the form is
    //like "Work List" then the value we get in the req.body will be 1st word only
    //which is "Work".
    //That's why we wrote "Work" in the below 'if' statement and not "Work List".
    if(req.body.list==="Work"){
        workItems.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
        res.redirect("/");
    }}
    );


app.listen(3000, function () {
    console.log("Server started at port 3000...");
});

/*These are the notes for list.ejs file, as I can't place comments there */

// https://ejs.co/
// It's an Embedded JavaScript Template file
// It is used as a template which helps us to serve multiple similar files without
// having to create each file individually -->

//     <!-- "<%=EJS%>"
// This is called an ejs marker, This marker tells the file that this is the place 
// where you need to place a variable.
// The variable inside marker can be replaced by actual value at the time of rendering the page

//Scriptlet Tag
// <% %> is a scriptlet tag, It is used to write control-flow(if else, while etc) statements in our ejs file
// which is basically working as an html file.
// Each line of the control flow statement must be enclosed in scriptlet tags, just leave html content
// without scriptlet tags.
// We must ensure to write last curly brackets of if statement in the same line with else
// otherwise it will not work, atleast in vscode.

// Scriptlet tag only works with control flow as in most of the cases,
// we want to keep our main logic on server and only want to do some very imp things in ejs file.
// We should always try to do most of the logic part on server only.

//This is a demonstration regarding usage of scriptlet tags.
// <% if(kindOfDay==="Saturday" || kindOfDay==="Sunday"){%>
//     <h1 style="color:blue"><%=kindOfDay%> To-do list</h1>
// <%}else{%>
//     <h1 style="color:purple">It's <%=kindOfDay%> To-do list</h1>
// <%}%>

//We can use "Layouts" of EJS to maintain consistency across our site.
//Even if the pages are dramatically different from one another we can
// still use same components like header and footer across all pages
//Just keep header and footer in different files and "include" them whereever u want.
//Eg. is shown in list.ejs file