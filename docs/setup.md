<b>Team Omicron Project Setup</b>
<br> Project Title: Nature Watch

While our web application can be viewed on Heroku at the link
<br>https://agile-woodland-51212.herokuapp.com/nature
<br> will use this document as an instruction manual to get the app up and running on your local machine

<b>Part 1</b>

First you will need to clone team omicron's repository which can be done by opening the winows/MAC OS command prompt to a working directory of your choice and inputing the following commands...
<br>

Command 1: "git clone https://github.com/jcdaniels20/cs326-final-omicron.git"

Command 2 : connect to the newly cloned folder - "cd cs326-final-omicron" <br>
Command 3: "npm install typescript" <br>
Command 4: "npm install mongodb" <br>
command 5: "npm install express"

<b>Part 2</b>

Next, in order to get the code running on your local machine you will have comment out two lines of code and uncomment two lines of code. Specifically in the file nature.js line 1 needs to be commented out while line 2 needs to be uncommented. in Server.ts, line 10 needs to be commented out while line 9 needs to be un commented. When you are done, the two files should appear as seen below...


nature.js <br>
//const url = "https://agile-woodland-51212.herokuapp.com/nature"; <br>
const url = "http://localhost:8080/nature";

Server.ts <br>
theServer.listen(8080); <br>
// theServer.listen(process.env.PORT);

<b>Part 3</b>

Once this is completed the next step of the process is to connect with our database. The best way to do this is to go and create an account at... https://account.mongodb.com/account/login <br>
Once you have an account, you will need to create a cluster that will be hooked up to our website (this is so you will be able to see your own entries, edits, & deletions). This can be done by following the steps at the link... 
"https://docs.atlas.mongodb.com/getting-started/ <br>
Once you have succesfully created a cluster follow the steps below to finish linking it to our website...

* step 1: In the connect tab of your mongo atlus cluster, you should see a string that looks similar to this... "mongodb+srv://user:@cluster1-y0tyl.mongodb.net" Copy this address

* step 2: In the your directory, create a new file called secrets.json (be sure to make sure this is in the outermost layer of the folder and not withim html or docs)

* step 3: Once the file is created, paste the following chunk text... <br> {"password": "Copied address form step 1"}

* step 4: Save your file and make sure that you have white listed your local address on the mongo atlas.


<b>Part 4</b>
Once you have completed parts 1-3 and have saved your code. open the terminal and connect to the folder/directory that houses the project code and input the following command... <br>
ts-node --prefer-ts-exts Server.ts

Once this is run you should be able to connect to the website using your local hose by clicking...

http://localhost:8080/

If you are having difficutlies running the app on your local host, you can also run the app via heroku by not changing any of the code (or only doing part 3) and visiting...


https://agile-woodland-51212.herokuapp.com/

__________________________________________________________________

Division of labor for setup document
(Like the final md our group worked on this in a google doc and we are having one member submit the markdown file. The distribution of the work for this md is below)

Jonathan Wu - Intro/Part 1
Michael Lai - Part 2
Jarrod Daniels - Part 3/4
