console.log("task#2");
var name = "Hikmat"
console.log(" Hello " + name + " Let's Start Javascript ");
   //Task#3
 console.log("Task#3");
   var upper = name.toUpperCase();
   var lower = name.toLowerCase();
   console.log( upper);
    console.log( lower ) ;
    function titleCase(Name){
        
        return Name.split(' ').map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ');
        
    }
   console.log(titleCase(name));

    //Task#4
   console.log("Task#4");
    let name1 = "Albert Einstein"
    console.log(name1 + "once said, “A person who never made a mistake never tried anything new.” <br><br>")
    
    //Task#5
    console.log("Task#5");
    let famous_Pname = "Dalai Lama";
    let message = "The Purpose of our lives is to be Happy.";
    console.log(famous_Pname + " Once said ,“ " + message + " ” ")

    //Task#6
    let name2 = "   \t  Hikmat \n    "
    console.log(name2);
    name2 = name2.trim();
    console.log(name2);

    //Task#7 & 8
    
    console.log(8 , 5+3);
    console.log(8 , 5-3);
    console.log(8 , 5*3);
    console.log(8 , 5/3);
//Task#9 & 10 
//In this program we will store a number to a variable and than we will use that variable into a message and than we will print out that message.
let fvrt_number = 2;
message = "There are  "+fvrt_number+" classes in a week .";
console.log(message);

//Task#11
const array = ["Rafi" , "Rehman" , "Sajjad"]
for(var i =0 ; i<3 ; i++)
{
    console.log(array[i] + "\t");
}

//Task#12
const friends = ["Rafi" , "Rehman" , "Sajjad"]
for(var i =0 ; i<3 ; i++)
{
    console.log("Good Luck! " + friends[i] + "\t");
}

//Task#13
const own_list = ["Audi Car","YBR R1 Motorcycle","V8 crousier"];
for(var j = 0 ; j<3 ; j++)
{
    console.log("I will own " + own_list[j] + " InshaALLAH .");
}

//Task#14
const guests = ["Rafi" , "rehman" , "Sajjad" , "Wali Ullah" , "Fahad" , "salman"]
for(var i=0 ; i<6 ; i++)
{
    console.log(guests[i] + " Today you are inviteed for dinner at my Home.")
}

//Task#15
console.log(guests[4] + " Is not availabe for dinner.")
guests[4] = "Jasim";
for(var k =0 ; k<6 ; k++)
{
    console.log(guests[k] + " Today you are Invited for dinner at my home.");
}

//Task#16
console.log("Ohh! I find a big table for dinner so I will be inviting more friends.")
guests.splice(0,0 ,"Haseeb");
guests.splice(3,0,"Mahad");
guests.splice(8,0,"Haseeb");
for(var k =0 ; k<9 ; k++)
{
    console.log(guests[k] + " Today you are Invited for dinner at my home.");
}

//Task#17
console.log("sorry! you can invite only two people for dinner.");
for(var i=8 ; i>=0 ; i--)
{
    if(i>1)
    {
        console.log(guests[i] +" sorry! you can't be invited to dinner.");
        guests.pop();
        
    }
    
    else if(i<=1)
    {
        console.log(guests[i] + " Still you are invited.");
    }
    
}
for(var k = 0; k<2 ;k++)
{
    guests.pop();
}
console.log(guests);

//Task#18
const visit_places = ["Uk" , "US" , "Turkey" , "China" , "germany"]
console.log(visit_places);
console.log(visit_places.sort());
console.log(visit_places);
console.log(visit_places.reverse());
console.log(visit_places);
console.log(visit_places.reverse());

//Task#19
const Dinner_guests = ["Mahad","Jasim","Haseeb" , " Rafi" , "rehman" , "Sajjad" , "Wali Ullah" , "Fahad" , "salman"]
console.log(Dinner_guests.length + " People you are inviting.");

//Task#20
const languages = ["Urdu","Punjabi","Pashto","Saraiki","Balochi","Kashmiri"]
for(i in languages)
{
    console.log(i + "." + languages[i]);
}

//Task#21
let details = {firstname:"Hikmat", lastname:"Ullah", fathername:"Sibghat Ullah", age:"20" , department:"CSE"  };
console.log(details);

//Task#22
const Languages = ["Urdu","Punjabi","Pashto","Saraiki","Balochi","Kashmiri"]
for(var i=0 ; i<8 ; i++) //index 6 and 7 not exist here
{
    console.log(i + "." + languages[i]);
}

//Task#23
let bike= "YBR R1"
console.log("is bike == YBR R1? I predict True");
console.log(bike == 'YBR R1');
console.log("is bike == Honda? I predict False");
console.log(bike == 'Honda');

//Task#24

//string case
console.log("yes i am " == "YES I AM ");
console.log("yes i am " == "yes i am ");
//lowercase function case
let check = "Yes I AM"
console.log(check == check.toLowerCase);
//Numerical tests
console.log(5==5);
console.log(5>5);
console.log(4<5);
console.log(5<=5);
console.log(6>=5);
//and or case
console.log(5>3 && 5==4);
console.log(5>3 || 4==4);
//in array case
console.log(Dinner_guests.includes("Mahad"));
console.log(Dinner_guests.includes("Danish"));



//Task#25
let alighn_color = "green";
if(alighn_color == "green")
{
    console.log(" player just earned 5 points.");
}
let alighn_colorr = "red";
if(alighn_colorr == "green")
{
    console.log(" player just earned 5 points.");
}


//Task#26
if(alighn_color == "green")
{
    console.log(" player just earned 5 points for shooting the align.");
}
else 
{
    console.log(" player just earned 10 points.");
}

if(alighn_colorr == "green")
{
    console.log(" player just earned 5 points for shooting the align.");
}
else 
{
    console.log(" player just earned 10 points.");
}

//Task#27
let align_colors = "yellow";
//green
if(alighn_color == "green")
{
    console.log(" player just earned 5 points.");
}
else if(alighn_color == "ryellow")
{
    console.log(" player just earned 10 points.");
}
else if(alighn_color == "red")
{
    console.log(" player just earned 15 points.");
}
//yellow
if(align_colors == "green")
{
    console.log(" player just earned 5 points.");
}
else if(align_colors == "ryellow")
{
    console.log(" player just earned 10 points.");
}
else if(align_colors == "red")
{
    console.log(" player just earned 15 points.");
}
//red
if(alighn_colorr == "green")
{
    console.log(" player just earned 5 points.");
}
else if(alighn_colorr == "ryellow")
{
    console.log(" player just earned 10 points.");
}
else if(alighn_colorr == "red")
{
    console.log(" player just earned 15 points.");
}

//Task#28
let age = 20;
if(age<2)
console.log("the person is a baby")
else if(age>=2 && age<4)
console.log("the person is toddler")
else if(age>=4 && age<13)
console.log("the person is a kid")
else if(age>=13 && age<20)
console.log("the person is a teenager")
else if(age>=20 && age<65)
console.log("the person is an adult")
else if(age>=65)
console.log("the person is an elder")

//Task#29
let fvrt_fruits = ["banan","Orange" , "Apple" ]
if(fvrt_fruits.includes("Orange"))
console.log("You really like Orange!");
if(fvrt_fruits.includes("Orange"))
console.log("You really like Orange!");
if(fvrt_fruits.includes("Orange"))
console.log("You really like Orange!");
if(fvrt_fruits.includes("Orange"))
console.log("You really like Orange!");
if(fvrt_fruits.includes("Orange"))
console.log("You really like Orange!");

//Task#30
let username = ["Admin","Hikmat","Rafi","Danish","Ali"]
for(var i =0 ; i<5 ; i++)
{
    if(username[i]=="Admin")
    {
        console.log("Hello admin, would you like to see a status report?")
    }
    else
    {
        console.log("Hello! " + username[i]+" , thank you for logging in again.")
    }
}

//Task#31
for(var i=0 ; i<username.length ; i++)
{
        if(username != "Null")
    {
        console.log(username[i]);
    }
        else
        console.log("We need to find some users!");
}
for(var i=4 ; i>=0 ; i--)
{
    delete username[i];
}


for(var i=0 ; i<username.length ; i++)
{
        if(username != "NULL")
    {
        console.log(username[i]);
    }
    else
        console.log("We need to find some users!");
}

//Task#32
let current_users = ["Hikmat","Rafi","Rehman","Ali","Mahad"];
let new_users = ["John","RAFI","Aleem","Ali","Fahad"];
for(var i = 0 ; i<5 ; i++)
{
      if(new_users[i]== "Hikmat" || new_users[i]== "HIKMAt" || new_users[i]== "Rafi" || new_users[i]== "RAFI" || new_users[i]== "Rehman" || new_users[i]== "REHMAN" || new_users[i]== "Ali" || new_users[i]== "ALI" || new_users[i]== "Mahad" || new_users[i]== "MAHAd")
    {
        console.log("Please! enter a new user name.");
    }
    else
    console.log("This user name is availabe.");
}

//Task#33
let ordinals = [1,2,3,4,5,6,7,8,9]
for(var i=0 ; i<ordinals.length ; i++)
{
    if(ordinals[i]==1)
    {
        console.log(ordinals[i] + "st\n");
    }
    else if(ordinals[i]==2)
    {
        console.log(ordinals[i] + "nd\n");
    }
    else if(ordinals[i]==3)
    {
        console.log(ordinals[i] + "rd\n");
    }
    else 
    {
        console.log(ordinals[i]+"th\n")
    }
}

//Task#34
let pizzas = ["Periperi" , "Chicken_Fajita" , "Loaded_Chicken"]
for(var j = 0 ; j<3 ; j++)
{
    console.log("I Like " + pizzas[j] + " Pizza!")
}
    console.log("All above are my favourite pizzas! \n All these are delicious! \n I always like to taste these pizza tastes! \n I really Like Love Pizza!");

//Task#35
let pets = ["Dog" , "Cat" , "Wolve"]
for(var l = 0 ; l<3 ; l++)
{
    console.log(pets[l] + " Is a good looking animal!");
}
console.log("People love to all above three animals! \n People more like petting " + pets[1] + "!");

//Task#36 & 37
function make_shirt( size = 'Large' , message = "I love JavaScript" )
{
    
    console.log("Your shirt size: " + size + " and your shirt Message: " + message);
    
}
make_shirt( );
make_shirt( 'Medium');
make_shirt( 'X_Large' , "I Love Python");

//Task#38
function describe_city(city , country = "Pakistan")
{
    console.log(city + " Is in " + country);
}
describe_city("Peshawar");
describe_city("Islamabad");
describe_city("Karachi");
describe_city("Kabal" , "Afghanistan");

//Task#39
function city_country(city , country)
{
    console.log("\"" + city + " , " + country +" \"");
}

city_country("Islamabad" , "Pakistan");
city_country("Kabal" , "Afghanistan");
city_country("Istanbul" , "Turkey");

//Task#40
function make_album(name , album , tracks = 0)
{
    let show_Album = {"Artist Name: " : name , "Album Name: " : album , "Tracks: " : tracks};
    return show_Album;
}
make_album("Nusrat Fateh Ali Khan" , "Shaheen_Shah");
make_album("Ali Zafar" , "Masti");
make_album("Atif Aslam" , "Tere sang yara " , 20);

//Task#41
function show_magicians(arr)
{
    for(var i =0 ; i<arr.length ; i++)
    {
        console.log(arr[i]);
    }
}
let magicians = ["Apollo","Blaine","Copperfield","Devant","Derren"];

//show_magicians(magicians); //called in below task

//Task#42 & 43
function make_great(new_arr)
{
    let new_mag = [new_arr];
    for(var i = 0 ; i<new_mag.length ; i++)
    {
       // magicians[i] = "The great " + magicians[i]; //only for task42
       new_mag[i] = "The great " + new_mag[i];

    }
    console.log("The great Array: ");
    show_magicians(new_mag);
}
//make_great() //for task42
make_great(magicians)
console.log("Origina Array: ")
show_magicians(magicians);

//Task#44
function sandwich(...order)
{
    console.log("Your Summary: ")
    for(var i=0 ; i<order.length ; i++)
    {
        console.log(order[i]);
    }
}
sandwich("chicken" , "Egg");
sandwich("Nutella" , "Grill" , "Roast beef");
sandwich("sea food" , "Ham" , "Prawn" , "Olive");



//Task#45
function car_details(manufucturer  , model , ...opetional)
{
    let info = {"Car Manufucturer " : manufucturer , "Car Model ": model , ...opetional};
    console.log(info);
}
car_details("AB" , "2002" , color = "Black" , Passanger_capacity = "5");


