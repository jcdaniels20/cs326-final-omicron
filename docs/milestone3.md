CS 326 – Team Omicron
Milestone 3
_______________________________________________________________________________________

-Database Documentation-

Sighting Documentation
{
    id: ObjectId,
    Sighting name:  String, // the unique name given to a sighting
    Species  name: String, // name of species sighting is of
    Date : Date-time, // the date of the sighting (12/31/1998)
    Time : Date-time, // the time of the sighting (14:00)
    Location : String, // the town the sighting was in
    Latitude : Number, //  the latitude coordinates of the sighting
    Longitude : Number, // the longitude coordinates of the sighting
    Size : Number, // Approximate size of species in Oz
    Amount Seen : Number, Amount of same species seen in proximity
}

Login Documentation
{
    id: ObjectID,
    username: String    // account username
    password: String    // account password
    email: String       // account email
}


________________________________________________________________________

-Division of Labor-

Jarrod Daniels: Database and back end setup/configuration, Create Sighting, View Sighting on sightings home page.
Michael Lai:    Delete sightings and new user login
