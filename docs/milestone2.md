CS 326 – Team Omicron
Part 0: Project API Planning
All Endpoints
_________________________________________________________________________
New Sighting API
Overview
The new sighting endpoint for our website provides a way for the clients to create a new sighting log for a critically endangered species in Massachusetts that will be input into our database

Endpoint URI and Parameters
Assuming you are deploying the server on … the URI for the new sighting endpoint is:
 
For this endpoint, there are eight required parameters and zero optional parameters (however for some of the questions the user has the option of answering ‘NA’)

Parameters
Date: The date of the sighting in mm/dd/yyyy format
Time of day: The approximate time of the sighting in military time
Location: The town in Massachusetts that the sighting was seen in
Lat: The GPS latitude of the sighting
Long: The GPS longitude of the sighting
Approximate size: approximate size of the sighted animal in ounces
Amount seen:  how many of the species were seen in the sighting

Responses
The API returns all of the response data as JSON objects and inputs them into the database (for the purpose of this milestone we will be returned as JSON object like the in class assignments)

Result – string – operation status “successful” or “error”
UniqueID – string – some form of unique identifier for the entry
JSON Object – containing all of the above parameters entered
_________________________________________________________________________
Edit Sighting API
Overview
The edit sighting endpoint for our website provides a way for the clients to edit any sightings that they may have uploaded on the website (in case they made a mistake inputting information!)

Endpoint URI and Parameters
Assuming you are deploying the server on … the URI for the edit sighting endpoint is:
 
For this endpoint, the parameters will be the same as the previous API endpoint (create sightings) with one difference. In order to select the entry we the user will the unique identifier.

Parameters:
Unique Identification: the identifier for the database entry
Date: The date of the sighting in mm/dd/yyyy format
Time of day: The approximate time of the sighting in military time
Location: The town in Massachusetts that the sighting was seen in
Lat: The GPS latitude of the sighting
Long: The GPS longitude of the sighting
Approximate size: approximate size of the sighted animal in ounces
Amount seen:  how many of the species were seen in the sighting

Responses
The API returns all of the response data as JSON objects and updates them in the database (for the purpose of this milestone we simply return the updated json object much like the update function from the inclass exercise

Result – string – operation status “successful update” or “error”
JSON Object – containing all of the above parameters entered
_________________________________________________________________________
Delete Sighting API
Overview
The delete sighting endpoint for our website provides a way for the clients to delete any sightings that they may have uploaded on the website. The user will put in the unique identifier for the sighting they wish to delete, and that entry shall be deleted from the database

Endpoint URI and Parameters
Assuming you are deploying the server on … the URI for the delete sighting endpoint is:
 
For this endpoint, there will be one required parameter

Parameter:
Unique Identification: the identifier for the database entry

Responses
Result – string – operation status “successful deletion” or “error”
_________________________________________________________________________
Upload Image API
Overview
The upload image endpoint for our website provides a way for users to upload new images into our database that will eventually be displayed in the gallery tab

Endpoint URI and Parameters
Assuming you are deploying the server on … the URI for the upload image endpoint is:
 
For this endpoint, there will be one required parameter.
Parameters: 
Image file – the actual image of the species taken
Responses
Result – string – operation status “successful deletion” or “error”
Image – img file
_________________________________________________________________________

Create Login API
Overview
This API allows users to create new accounts on the website so that they may create new database entries and upload images

Endpoint URI and Parameters
Assuming you are deploying the server on … the URI for the create login endpoint is:

 
For this endpoint, there will be three required parameters.
Parameters 
Email – email address
username – account name 
password – account password
Responses (for this milestone)

Result – string – operation status “successful account creation” or “error”
JSON Object with email, name of account and the password, both strings
Login API

_________________________________________________________________________

Overview
This API allows users to login into their pre-existing accounts, If they do not have one they will have to use to above login to create one

Endpoint URI and Parameters
Assuming you are deploying the server on … the URI for the login endpoint is:

 
For this endpoint, there will be two required parameters.
Parameters 
Username – account username 
Password – account password
Responses (for this milestone)

Result – string – operation status “successful login” or “error”
JSON Object with name of account and the password, both strings

_________________________________________________________________________

