const url = "https://agile-woodland-51212.herokuapp.com/nature";
//const url = "http://localhost:8080/nature";

var slideIndex = 1;
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function cottontail() {
  document.getElementById("sightingsDatabaseView").innerHTML = ""
  removeElementsByClass("AnimalImg")
  document.getElementById('SpeciesName').innerHTML = "New England Cottontail"
  var img = document.createElement("img")
  img.src = "Images/cottontail_bunny.jpg"
  img.height = 250; 
  img.width = 400;
  var class_name = "AnimalImg";
  img.setAttribute("class", class_name);
  document.getElementById("animalPic").appendChild(img);
  document.getElementById("shortBio").innerHTML = "The New England cottontail lives in parts of New England and New York. Over the last 50 years the range of this once-common rabbit has shrunk and its population has dwindled so that today it needs our help to survive. A critical threat is the loss of habitat, places where rabbits can find food, raise their young, and escape predators. Development has taken much land once inhabited by cottontails and other wildlife. And thousands of acres that used to be young forest (ideal cottontail habitat) have grown up into older woods, where rabbits don't generally live. Today the New England cottontail is restricted to southern Maine, southern New Hampshire, and parts of Massachusetts, Connecticut, Rhode Island, and New York east of the Hudson River - less than a fifth of its historic range."
  document.getElementById("animalInfo").innerHTML = "Find out more " +  "<a href='https://www.fws.gov/northeast/pdf/necotton.fs.pdf'>here</a>"
//  document.getElementById("sightingButton").innerHTML = "<button class ='button databaseview' onclick = 'viewSighting()'>View Sightings for this animal</button>"
}

function bogTurtle() {
  document.getElementById("sightingsDatabaseView").innerHTML = ""
  removeElementsByClass("AnimalImg")
  document.getElementById('SpeciesName').innerHTML = "Bog Turtle"
  var img = document.createElement("img")
  img.src = "Images/bog_turtle.jpg"
  img.height = 250; 
  img.width = 400;
  var class_name = "AnimalImg";
  img.setAttribute("class", class_name);
  document.getElementById("animalPic").appendChild(img);
  document.getElementById("shortBio").innerHTML = "the bog turtle is a critically endangered species of semiaquatic turtle in the family Emydidae. The species is endemic to the eastern United States. It was first scientifically described in 1801 after an 18th-century survey of Pennsylvania. The smallest North American turtle, its carapace measures about 10 centimeters (4 in) long when fully grown. Although the bog turtle is similar in appearance to the painted or spotted turtles, its closest relative is actually the somewhat larger wood turtle. The bog turtle can be found from Vermont in the north, south to Georgia, and west to Ohio. Diurnal and secretive, it spends most of its time buried in mud and during the winter months in hibernation. The bog turtle is omnivorous, feeding mainly on small invertebrates. The bog turtle is the state reptile of New Jersey."
  document.getElementById("animalInfo").innerHTML = "Find out more " +  "<a href='https://www.mass.gov/doc/bog-turtle/download'>here</a>"
//  document.getElementById("sightingButton").innerHTML = "<button class ='button databaseview' onclick = 'viewSighting()'>View Sightings for this animal</button>"
}

function GSTurtle() {
  document.getElementById("sightingsDatabaseView").innerHTML = ""
  removeElementsByClass("AnimalImg")
  document.getElementById('SpeciesName').innerHTML = "Green Sea Turtle"
  var img = document.createElement("img")
  img.src = "Images/green_turtle.jpg"
  img.height = 250; 
  img.width = 400;
  var class_name = "AnimalImg";
  img.setAttribute("class", class_name);
  document.getElementById("animalPic").appendChild(img);
  document.getElementById("shortBio").innerHTML = "the green sea turtle is a species of large sea turtle of the family Cheloniidae. It is the only species in the genus Chelonia. Its range extends throughout tropical and subtropical seas around the world, with two distinct populations in the Atlantic and Pacific Oceans, but it is also found in the Indian Ocean. The common name refers to the usually green fat found beneath its carapace, not to the color of its carapace, which is olive to black."
  document.getElementById("animalInfo").innerHTML = "Find out more " +  "<a href='https://www.mass.gov/doc/green-sea-turtle/download'>here</a>"
//  document.getElementById("sightingButton").innerHTML = "<button class ='button databaseview' onclick = 'viewSighting()'>View Sightings for this animal</button>"
}

function hawksbill() {
  document.getElementById("sightingsDatabaseView").innerHTML = ""
  removeElementsByClass("AnimalImg")
  document.getElementById('SpeciesName').innerHTML = "Atlantic Hawksbill Sea Turtle"
  var img = document.createElement("img")
  img.src = "Images/hawksbill.jfif"
  img.height = 250; 
  img.width = 400;
  var class_name = "AnimalImg";
  img.setAttribute("class", class_name);
  document.getElementById("animalPic").appendChild(img);
  document.getElementById("shortBio").innerHTML = "Hawksbill turtles are found throughout the tropical waters of the Atlantic, Pacific, and Indian Oceans. Their diet consists mainly of sponges that live on coral reefs. Today, loss of coral reef habitat  around the world is the primary threat to hawksbill turtles. Hawksbill turtles are endangered because of their beautiful shell. They were hunted for hundreds of years in huge numbers for the 'tortoise shell' that was used in many types of jewelry and trinkets. Harvesting hawksbill turtles for their shell nearly drove the population to extinction. Today, the Convention on International Trade of Endangered Species (CITES) forbids the trade of any turtle products on the international market, including the 'tortoise shell' from hawksbill turtles."
  document.getElementById("animalInfo").innerHTML = "Find out more " +  "<a href='https://www.mass.gov/doc/atlantic-hawksbill-sea-turtle/download'>here</a>"
//  document.getElementById("sightingButton").innerHTML = "<button class ='button databaseview' onclick = 'viewSighting()'>View Sightings for this animal</button>"
}

function kemp() {
  document.getElementById("sightingsDatabaseView").innerHTML = ""
  removeElementsByClass("AnimalImg")
  document.getElementById('SpeciesName').innerHTML = "Kemps Ridley Sea Turtle "
  var img = document.createElement("img")
  img.src = "Images/kemp_turtle.jpg"
  img.height = 250; 
  img.width = 400;
  var class_name = "AnimalImg";
  img.setAttribute("class", class_name);
  document.getElementById("animalPic").appendChild(img);
  document.getElementById("shortBio").innerHTML = "the Kemps Ridley Sea Turtle also called the Atlantic ridley sea turtle, is the rarest species of sea turtle and is critically endangered. It is one of two living species in the genus Lepidochelys. This species of turtle is called Kemp's ridley because Richard Moore Kemp (1825-1908) of Key West was the first to send a specimen to Samuel Garman at Harvard. Kemp's ridley is the smallest of all sea turtle species, reaching maturity at 58 to 70 cm (23 to 28 in) carapace length and weighing only 36 to 45 kg (79 to 99 lb). "
  document.getElementById("animalInfo").innerHTML = "Find out more " +  "<a href='https://www.mass.gov/doc/kemps-ridley-sea-turtle/download'>here</a>"
//  document.getElementById("sightingButton").innerHTML = "<button class ='button databaseview' onclick = 'viewSighting()'>View Sightings for this animal</button>"
}

function leatherback() {
  document.getElementById("sightingsDatabaseView").innerHTML = ""
  removeElementsByClass("AnimalImg")
  document.getElementById('SpeciesName').innerHTML = "Leatherback Sea Turtle"
  var img = document.createElement("img")
  img.src = "Images/leatherback.jpg"
  img.height = 250; 
  img.width = 400;
  var class_name = "AnimalImg";
  img.setAttribute("class", class_name);
  document.getElementById("animalPic").appendChild(img);
  document.getElementById("shortBio").innerHTML = "Leatherback turtles are named for their shell, which is leather-like rather than hard, like other turtles. They are the largest sea turtle species and also one of the most migratory, crossing both the Atlantic and Pacific Oceans. Pacific leatherbacks migrate from nesting beaches in the Coral Triangle all the way to the California coast to feed on the abundant jellyfish every summer and fall. Although their distribution is wide, numbers of leatherback turtles have seriously declined during the last century as a result of intense egg collection and fisheries bycatch. Globally, leatherback status according to IUCN is listed as Vulnerable, but many subpopulations (such as in the Pacific and Southwest Atlantic) are Critically Endangered."
  document.getElementById("animalInfo").innerHTML = "Find out more " +  "<a href='https://www.mass.gov/doc/leatherback-sea-turtle/download'>here</a>"
//  document.getElementById("sightingButton").innerHTML = "<button class ='button databaseview' onclick = 'viewSighting()'>View Sightings for this animal</button>"
}

function loggerhead() {
  document.getElementById("sightingsDatabaseView").innerHTML = ""
  removeElementsByClass("AnimalImg")
  document.getElementById('SpeciesName').innerHTML = "Loggerhead Sea Turtle"
  var img = document.createElement("img")
  img.src = "Images/loggerhead.jpg"
  img.height = 250; 
  img.width = 400;
  var class_name = "AnimalImg";
  img.setAttribute("class", class_name);
  document.getElementById("animalPic").appendChild(img);
  document.getElementById("shortBio").innerHTML = "Loggerhead turtles is a species of oceanic turtle distributed throughout the world. It is a marine reptile, belonging to the family Cheloniidae. The average loggerhead measures around 90 cm (35 in) in carapace length when fully grown. The adult loggerhead sea turtle weighs approximately 135 kg (298 lb), with the largest specimens weighing in at more than 450 kg (1,000 lb). The skin ranges from yellow to brown in color, and the shell is typically reddish brown. No external differences in sex are seen until the turtle becomes an adult, the most obvious difference being the adult males have thicker tails and shorter plastrons (lower shells) than the females. The loggerhead sea turtle is found in the Atlantic, Pacific, and Indian Oceans, as well as the Mediterranean Sea. It spends most of its life in saltwater and estuarine habitats, with females briefly coming ashore to lay eggs. The loggerhead sea turtle has a low reproductive rate; females lay an average of four egg clutches and then become quiescent, producing no eggs for two to three years. The loggerhead reaches sexual maturity within 17 to 33 years and has a lifespan of 47 to 67 years."
  document.getElementById("animalInfo").innerHTML = "Find out more " +  "<a href='https://www.mass.gov/doc/loggerhead-sea-turtle/download'>here</a>"
//  document.getElementById("sightingButton").innerHTML = "<button class ='button databaseview' onclick = 'viewSighting()'>View Sightings for this animal</button>"
}

function redbelly() {
  document.getElementById("sightingsDatabaseView").innerHTML = ""
  removeElementsByClass("AnimalImg")
  document.getElementById('SpeciesName').innerHTML = "Red Bellied Cooter"
  var img = document.createElement("img")
  img.src = "Images/redbelly.jpg"
  img.height = 250; 
  img.width = 400;
  var class_name = "AnimalImg";
  img.setAttribute("class", class_name);
  document.getElementById("animalPic").appendChild(img);
  document.getElementById("shortBio").innerHTML = "The Red Bellied Cooter or American red-bellied turtle is a species of turtle in the Pseudemys (cooter) genus of the family Emydidae. A fairly large river turtle, it averages about 29 to 30 cm (11 to 12 in) in length and weighs on average around 3 kg (6.6 lb), although large females can measure up to 40 cm (16 in) in length. It is endemic to the United States. The current range of the red-bellied turtle includes a population in Massachusetts which was previously considered a distinct subspecies (Pseudemys rubriventris bangsi) as well as the coastal areas of New Jersey, Pennsylvania, Delaware, Maryland, Virginia and North Carolina."
  document.getElementById("animalInfo").innerHTML = "Find out more " +  "<a href='https://www.mass.gov/doc/northern-red-bellied-cooter-factsheet/download'>here</a>"
//  document.getElementById("sightingButton").innerHTML = "<button class ='button databaseview' onclick = 'viewSighting()'>View Sightings for this animal</button>"
}

function plover() {
  document.getElementById("sightingsDatabaseView").innerHTML = ""
  removeElementsByClass("AnimalImg")
  document.getElementById('SpeciesName').innerHTML = "Piping Plover"
  var img = document.createElement("img")
  img.src = "Images/pipingplover.jpg"
  img.height = 250; 
  img.width = 400;
  var class_name = "AnimalImg";
  img.setAttribute("class", class_name);
  document.getElementById("animalPic").appendChild(img);
  document.getElementById("shortBio").innerHTML = "Piping Plovers are round and stocky little plovers that frequently stand in a horizontal position. They also have round heads and large dark eyes that give them a big-eyed look. The bill is short and stubby. Piping Plovers breed along ocean shores in the Northeast and along lakeshores and alkali wetlands in the northern Great Plains and Great Lakes. They nest above the high water mark in soft sandy areas with sparse vegetation. In the winter they use coastal beaches, sandflats, and mudflats."
  document.getElementById("animalInfo").innerHTML = "Find out more " +  "<a href='https://www.mass.gov/doc/piping-plover/download'>here</a>"
//  document.getElementById("sightingButton").innerHTML = "<button class ='button databaseview' onclick = 'viewSighting()'>View Sightings for this animal</button>"
}

function redknot() {
  document.getElementById("sightingsDatabaseView").innerHTML = ""
  removeElementsByClass("AnimalImg")
  document.getElementById('SpeciesName').innerHTML = "Red Knot"
  var img = document.createElement("img")
  img.src = "Images/red_knot.jpg"
  img.height = 250; 
  img.width = 400;
  var class_name = "AnimalImg";
  img.setAttribute("class", class_name);
  document.getElementById("animalPic").appendChild(img);
  document.getElementById("shortBio").innerHTML = "Red Knots are plump, neatly proportioned sandpipers that in summer sport brilliant terracotta-orange underparts and intricate gold, buff, rufous, and black upperparts. This cosmopolitan species occurs on all continents except Antarctica and migrates exceptionally long distances, from High Arctic nesting areas to wintering spots in southern South America, Africa, and Australia. Red Knots from eastern North America have declined sharply in recent decades owing in part to unsustainable harvest of horseshoe crab eggs, and they have become a flagship species for shorebird conservation in the twenty-first century."
  document.getElementById("animalInfo").innerHTML = "Find out more " +  "<a href='https://www.mass.gov/doc/red-knot/download'>here</a>"
//  document.getElementById("sightingButton").innerHTML = "<button class ='button databaseview' onclick = 'viewSighting()'>View Sightings for this animal</button>"
}

function tern() {
  document.getElementById("sightingsDatabaseView").innerHTML = ""
  removeElementsByClass("AnimalImg")
  document.getElementById('SpeciesName').innerHTML = "Roseate Tern"
  var img = document.createElement("img")
  img.src = "Images/tern.jpg"
  img.height = 250; 
  img.width = 400;
  var class_name = "AnimalImg";
  img.setAttribute("class", class_name);
  document.getElementById("animalPic").appendChild(img);
  document.getElementById("shortBio").innerHTML = "The Roseate Tern is a bird of elegant proportions and dazzling white breeding plumage, accented with a black cap, dark bill, and pale rosy breast. It often forages out in the ocean and nests on hard-to-visit islands. It swoops and dives for small, schooling fish, its extra-long tail fluttering behind it. Hard hit by the plume trade at the turn of the 20th century, Roseate Terns are still federally Endangered or Threatened in the U.S. and are on the Partners in Flight Yellow Watch List. In North America, breeding Roseate Terns are split between New England and the Caribbean. A good way to find them is to take a chartered boat trip out to nesting islands (May through July) or visit Cape Cod or Long Island beaches, where small numbers gather from July through early September. On several of the Florida Keys, Roseate Terns nest on rooftops, where you can see them coming and going from late April through July. Roseate Terns often flock with Common Terns, but are paler, slightly smaller, slimmer, and longer tailed."
  document.getElementById("animalInfo").innerHTML = "Find out more " +  "<a href='https://www.mass.gov/doc/roseate-tern/download'>here</a>"
//  document.getElementById("sightingButton").innerHTML = "<button class ='button databaseview' onclick = 'viewSighting()'>View Sightings for this animal</button>"
}

function sturgeon() {
  document.getElementById("sightingsDatabaseView").innerHTML = ""
  removeElementsByClass("AnimalImg")
  document.getElementById('SpeciesName').innerHTML = "Shortnose Sturgeon"
  var img = document.createElement("img")
  img.src = "Images/sturgeon.png"
  img.height = 250; 
  img.width = 400;
  var class_name = "AnimalImg";
  img.setAttribute("class", class_name);
  document.getElementById("animalPic").appendChild(img);
  document.getElementById("shortBio").innerHTML = "The Shortnose Sturgeon is a small and endangered species of North American sturgeon. The earliest remains of the species are from the Late Cretaceous Period, over 70 million years ago. Shortnose sturgeons are long-lived and slow to sexually mature. Most sturgeons are anadromous bottom-feeders, which means they migrate upstream to spawn but spend most of their lives feeding in rivers, deltas and estuaries. The shortnose sturgeon is often mistaken as a juvenile Atlantic sturgeon, because of their small size. Prior to 1973, U.S. commercial fishing records did not differentiate between the two species, both were reported as 'common sturgeon', although it is believed based on sizes that the bulk of the catch was Atlantic sturgeon. The shortnose is distinguishable from the Atlantic sturgeon due to its shorter and rounder head."
  document.getElementById("animalInfo").innerHTML = "Find out more " +  "<a href='https://www.mass.gov/doc/shortnose-sturgeon/download'>here</a>"
//  document.getElementById("sightingButton").innerHTML = "<button class ='button databaseview' onclick = 'viewSighting()'>View Sightings for this animal</button>"
}

function beetle() {
  document.getElementById("sightingsDatabaseView").innerHTML = ""
  removeElementsByClass("AnimalImg")
  document.getElementById('SpeciesName').innerHTML = "American Burying Beetle"
  var img = document.createElement("img")
  img.src = "Images/beetle.jpg"
  img.height = 250; 
  img.width = 400;
  var class_name = "AnimalImg";
  img.setAttribute("class", class_name);
  document.getElementById("animalPic").appendChild(img);
  document.getElementById("shortBio").innerHTML = "Nicrophorus americanus, also known as the American burying beetle or giant carrion beetle, is a critically endangered species of beetle endemic to North America. It belongs to the order Coleoptera and the family Silphidae. The carrion beetle in North America is carnivorous, feeds on carrion and requires carrion to breed. It is also one of the few species of beetle to exhibit parental care. The decline of the American burying beetle has been attributed to habitat loss, alteration, and degradation, and they now occur over less than 10% of their historic range."
  document.getElementById("animalInfo").innerHTML = "Find out more " +  "<a href='https://www.mass.gov/doc/american-burying-beetle/download'>here</a>"
//  document.getElementById("sightingButton").innerHTML = "<button class ='button databaseview' onclick = 'viewSighting()'>View Sightings for this animal</button>"
}

function muscle() {
  document.getElementById("sightingsDatabaseView").innerHTML = ""
  removeElementsByClass("AnimalImg")
  document.getElementById('SpeciesName').innerHTML = "Dwarf Wedgemuscle"
  var img = document.createElement("img")
  img.src = "Images/muscle.jpg"
  img.height = 250; 
  img.width = 400;
  var class_name = "AnimalImg";
  img.setAttribute("class", class_name);
  document.getElementById("animalPic").appendChild(img);
  document.getElementById("shortBio").innerHTML = "The dwarf wedgemussel is a small bivalve, rarely exceeding 45 mm in length. Clean young shells are usually greenish-brown with green rays. As the animal ages, the shell color becomes obscured by diatoms or mineral deposits and appears black or brown. The shell is thin but does thicken somewhat with age, especially toward the anterior end. The anterior end is rounded while the posterior end is angular forming a point near the posterio-ventral margin. The ventral margin is only slightly curved. The nacre is bluish-white, appearing whiter in the thicker anterior end. The most distinctive shell character of the dwarf wedgemussel is the arrangement of the lateral teeth. There are two lateral teeth in the right valve and one in the left valve. The typical arrangement for most freshwater mussel species consists of two lateral teeth in the left valve and one in the right valve. The incurrent and excurrent apertures and their associated papillae are usually white. The foot and other organs are also white. Maximum age for the dwarf wedgemussel is around twelve years. The species is a bradytictic breeder, meaning that females become gravid in the early fall and glochidia are released by mid-spring. The tessellated darter (Etheostoma olmstedi), johnny darter (Etheostoma nigrum), and mottled sulpin (Cottus bairdi) have been identified as hosts for the dwarf wedgemussel. An anadromous fish may also serve as a host species but this has not been documented for the dwarf wedgemussel in the southern portion of its range."
  document.getElementById("animalInfo").innerHTML = "Find out more " +  "<a href='https://www.mass.gov/doc/dwarf-wedgemussel/download'>here</a>"
 // document.getElementById("sightingButton").innerHTML = "<button class ='button databaseview' onclick = 'viewSighting()'>View Sightings for this animal</button>"
}

function tigerBeetle() {
  document.getElementById("sightingsDatabaseView").innerHTML = ""
  removeElementsByClass("AnimalImg")
  document.getElementById('SpeciesName').innerHTML = "Northeastern Beach Tiger Beetle"
  var img = document.createElement("img")
  img.src = "Images/tiger.jpg"
  img.height = 250; 
  img.width = 400;
  var class_name = "AnimalImg";
  img.setAttribute("class", class_name);
  document.getElementById("animalPic").appendChild(img);
  document.getElementById("shortBio").innerHTML = "The northeastern beach tiger beetle has a mostly sand-colored body, with a shiny, bronze or greenish head and chest. It has white or light tan wing covers, often marked with fine, dark lines. It grows to less than 1 inch in length. Northeastern beach tiger beetles feed near the waters edge. They aggressively prey upon flies, fleas and amphipods, and will also eat dead crabs and fish that wash up on the beach. Beetles mate in late June through August. Females lay their eggs in the sand just above the high tide mark. Eggs hatch in late July through August. Larvae live in vertical burrows in the sand. They keep their head at a right angle at the burrow entrance to camouflage it and watch for prey. Larvae have two hooks on their abdomen. They dig the hooks into the sides of their burrow so they will not be pulled out of the burrow when they latch on to prey. Larvae molt and burrow deeper as they develop into adults. They usually leave the burrow approximately two years after they hatched."
  document.getElementById("animalInfo").innerHTML = "Find out more " +  "<a href='https://www.mass.gov/doc/northeastern-beach-tiger-beetle/download'>here</a>"
//  document.getElementById("sightingButton").innerHTML = "<button class ='button databaseview' onclick = 'viewSighting()'>View Sightings for this animal</button>"
}

function tigerBeetle2() {
  document.getElementById("sightingsDatabaseView").innerHTML = ""
  removeElementsByClass("AnimalImg")
  document.getElementById('SpeciesName').innerHTML = "Puritan Tiger Beetle"
  var img = document.createElement("img")
  img.src = "Images/beetle2.jpg"
  img.height = 250; 
  img.width = 400;
  var class_name = "AnimalImg";
  img.setAttribute("class", class_name);
  document.getElementById("animalPic").appendChild(img);
  document.getElementById("shortBio").innerHTML = "The Puritan tiger beetle is a medium-sized terrestrial beetle. It has long legs and dark bronze-brown to green wing covers with cream-colored markings on the upper surface. This beetle often occurs with the more common Cicindela repanda, which is stouter, has white markings on the wing covers that do not connect along the edges, and is metallic blue-green under the body. In contrast, the Puritan tiger beetle appears longer and thinner, has whitish markings that connect along the outer margins of the wing covers, and has white hairs on the underbody. The Puritan tiger beetle appears whitish and shining in bright sunlight, while C. repanda is more of a chocolate brown and shows a blue flash from underneath when it flies. The Puritan tiger beetle is found only in two small areas which are separated by over 600 miles, one along the Connecticut River, in New England, and the other along the Chesapeake Bay, in Maryland. In the Connecticut River Valley, the species distribution follows the sand and clay deposits formed by glacial lakes during the last ice age."
  document.getElementById("animalInfo").innerHTML = "Find out more " +  "<a href='https://www.mass.gov/doc/puritan-tiger-beetle/download'>here</a>"
 // document.getElementById("sightingButton").innerHTML = "<button class ='button databaseview' onclick = 'viewSighting()'>View Sightings for this animal</button>"
}

function removeElementsByClass(className){
  var elements = document.getElementsByClassName(className);
  while(elements.length > 0){
      elements[0].parentNode.removeChild(elements[0]);
  }
}



// NEW: helper method for posting data
async function postData(url, data) {
  const resp = await fetch(url,
      {
          method: 'POST',
          mode: 'cors',
          cache: 'no-cache',
          credentials: 'same-origin',
          headers: {
              'Content-Type': 'application/json'
          },
          redirect: 'follow',
          body: JSON.stringify(data)
      });
  return resp;
}

   function sightingCreate() {
    (async () => {
      let userName = document.getElementById("username").value;
      let sightingName = document.getElementById("uniqueName").value;
      let sightingSpecies = document.getElementById("speciesSelector").value;
      let sightingDate = document.getElementById("date").value;
      let sightingTime = document.getElementById("time").value;
      let sightingLoc = document.getElementById("loc").value;
      let sightingLat = document.getElementById("GPSLat").value;
      let sightingLong = document.getElementById("GPSLong").value;
      let sightingGender = document.getElementById("gender").value;
      let sightingSize = document.getElementById("size").value;
      let sightingAmt = document.getElementById("amount").value;
      const input = {'name' : sightingName, 'species' : sightingSpecies, 'date' : sightingDate, 'time' : sightingTime, 'location' : sightingLoc, 'latitude' : sightingLat, 'longitude' : sightingLong, 'gender' : sightingGender, 'size' : sightingSize, 'amount' : sightingAmt};
      console.log(input);
      const newURL = url + "/users/" + userName + "/create";
      const resp = await postData(newURL, input);
      const j = await resp.json();
      if (j['result'] !== 'error') {
        document.getElementById("output").innerHTML = "101: Sighting for <b>" + sightingSpecies + " with identifier " + sightingName + " created.</b>"
      } else {
        document.getElementById("output").innerHTML = "100: " + sightingSpecies + " not found.</b>";
      }
    })();
  }
  
  function viewSighting() {
    (async () => {
    let userName = document.getElementById("Uname").value;
    let sightingName = document.getElementById("Sname").value;
    const input = {'name' : sightingName};
    const newURL = url + "/users/" + userName + "/view";
    console.log("SightingView: fetching " + newURL);
    const resp = await postData(newURL, input);
    const j = await resp.json();
    if (j['result'] !== 'error') {
      document.getElementById("speciesInfo").innerHTML = "<strong>Species Name : </strong>" + j['species'];
      document.getElementById("dateInfo").innerHTML = "<strong>Date of sighting : </strong>" + j['date'];
      document.getElementById("timeInfo").innerHTML = "<strong>Time of sighting : </strong>" + j['time'];
      document.getElementById("locInfo").innerHTML = "<strong>Location of sighting : </strong>" + j['location'];
      document.getElementById("latInfo").innerHTML = "<strong>Latitude coordinates : </strong>" + j['latitude'];
      document.getElementById("longInfo").innerHTML = "<strong>Longitude coordinates : </strong>" + j['longitude'];
      document.getElementById("genderInfo").innerHTML = "<strong>Species Gender : </strong>" + j['gender'];
      document.getElementById("sizeInfo").innerHTML = "<strong>Approximate Size (Oz) : </strong>" + j['size'];
      document.getElementById("amountInfo").innerHTML = "<strong>Amount Seen in vicinity  : </strong>" + j['amount'];
	  } else {
	    document.getElementById("speciesInfo").innerHTML = "200: not found.</b>";
	  }	    
    })();
  }

//edit sightings
function sightingEdit() {
  (async () => {
  let userName = document.getElementById("username").value;
  let sightingName = document.getElementById("uniqueName").value;
  let sightingSpecies = document.getElementById("speciesSelector").value;
  let sightingDate = document.getElementById("date").value;
  let sightingTime = document.getElementById("time").value;
  let sightingLoc = document.getElementById("loc").value;
  let sightingLat = document.getElementById("GPSLat").value;
  let sightingLong = document.getElementById("GPSLong").value;
  let sightingGender = document.getElementById("gender").value;
  let sightingSize = document.getElementById("size").value;
  let sightingAmt = document.getElementById("amount").value;
  const data = {'name' : SightingName, 'species' : sightingSpecies, 'date' : sightingDate, 'time': sightingTime, 'location': sightingLoc, 'latitude': sightingLat, 'longitude': sightingLong, 'gender': sightingGender, 'size': sightingSize, 'amount': sightingAmt};
  const newURL = url + "/users/" + userName + "/edit";
  const resp = await postData(newURL, data);
  const j = await resp.json();
      if (j['result'] !== 'error') {
        document.getElementById("output").innerHTML = "301: Sighting updated with values, <b>" + sightingSpecies + ", " + sightingDate + ", " + sightingTime+ ", " + sightingLoc + ", " + sightingLat + ", " + sightingLong + ", " + sightingGender + ", " + sightingSize + ", " + sightingAmt + "created. </b>";
      } else {
        document.getElementById("output").innerHTML = "300: " + sightingName +"not found. Check to see fi you have made an entry. </b>";
      }
    })();
  }





  function viewGallery() {
    (async () => {
      var e = document.getElementById("speciesDropDownSelector");
      var strUser = e.options[e.selectedIndex].value;
    document.getElementById("outputTextTemp").innerHTML = "Displaying Images for " + strUser
    })();
  }

  function loginHandler() {
    (async () => {
      let userName = document.getElementById("existUser").value;
      let password = document.getElementById("existPass").value;
      //document.getElementById("outputLogin").innerHTML= "Username: <b>" + userName + "<br>Password:" + password + "</b>";
      document.getElementById("outputLogin").innerHTML= "Username: "+ userName + ", Password: " + password;
    })();
  }

  function newUserHandler() {
    (async () => {
      let username = document.getElementById("existUser").value;
      let password = document.getElementById("existPass").value;
      let email = document.getElementById("newEmail").value;
      const data = {'username' : username, 'password' : password, 'email' : email};
      const newURL = url + "/users/" + userName + "/createLogin";
      const resp = await postData(newURL, data);
      const j = await resp.json();
      if (j['result'] !== 'error') {
        document.getElementById("outputLogin").innerHTML = "101: Creating Log-in for <b>" + email + " created.</b>";
      } else {
        document.getElementById("outputLogin").innerHTML = "100 not found.</b>";
      }
    })();
  }

  // Wrote first as a test to above
  function lostPass() {
    (async () => {
      let email = document.getElementById("email").value;
      document.getElementById("output").innerHTML = "Received email: " + email;
    })();
  }
 //photoSub
 /*
 let sightingTime = document.getElementById("postTitle").value;
 let sightingSpecies = document.getElementById("speciesSelector").value;
  let sightingDate = document.getElementById("myFile").value;
       const input = {'name' : sightingName, 'species' : sightingSpecies, 'date' : sightingDate, 'time' : sightingTime, 'location' : sightingLoc, 'latitude' : sightingLat, 'longitude' : sightingLong, 'gender' : sightingGender, 'size' : sightingSize, 'amount' : sightingAmt};
      
*/

function photoSub() {
  (async () => {
    let sightingTime = document.getElementById("title").value;
    let sightingSpecies = document.getElementById("speciesSelector").value;
    let sightingDate = document.getElementById("myFile").value;
    const input = {'title' : title, 'species' : sightingSpecies, 'file' : myFile};
    console.log(input);
    const newURL = url + "/users/" + userName + "/create" + myFile;
    const resp = await postData(newURL, input); //not sure if this is right
    const j = await resp.json();
    if (j['result'] !== 'error') {
      document.getElementById("output").innerHTML = "101: File for <b>" + sightingSpecies + " with identifier " + sightingName + " created.</b>"
    } else {
      document.getElementById("output").innerHTML = "100: " + sightingSpecies + " not found.</b>";
    }
  })();
}

  // function sightingEdit() {
  //   (async () => {
  //     let sightingSpecies = document.getElementById("speciesSelector").value;
  //     let sightingDate = document.getElementById("date").value;
  //     let sightingTime = document.getElementById("time").value;
  //     let sightingLoc = document.getElementById("loc").value;
  //     let sightingLat = document.getElementById("GPSLat").value;
  //     let sightingLong = document.getElementById("GPSLong").value;
  //     let sightingGender = document.getElementById("gender").value;
  //     let sightingSize = document.getElementById("size").value;
  //     let sightingAmt = document.getElementById("amount").value;
  //     const newURL = url + "/edit?species=" + sightingSpecies + "&date=" + sightingDate + "&time=" + sightingTime + "&loc=" + sightingLoc + "&lat=" + sightingLat + "&long=" + sightingLong + "&gender=" + sightingGender + "&size=" + sightingSize + "&amount=" + sightingAmt;
  //     const resp = await fetch(newURL);
  //     const j = await resp.json();
  //     if (j['result'] !== 'error') {
  //       document.getElementById("output").innerHTML = "301: Sighting updated with values, <b>" + sightingSpecies + ", " + sightingDate + ", " + sightingTime + ", " + sightingLoc + ", " + sightingLat + ", " + sightingLong + ", " + sightingGender + ", " + sightingSize + ", " + sightingAmt + " created.</b>";
  //     } else {
  //       document.getElementById("output").innerHTML = "300: " + sightingSpecies + " not found, check to see if you have made an entry.</b>";
  //     }
  //   })();
  // }

  function sightingDelete() {
    (async () => {
      let userName = document.getElementById("username").value;
      let sightingName = document.getElementById("uniqueName").value;
      const newURL = url + "/users/" + userName + "/delete";
      const data = { 'name' : sightingName};
      console.log("counterDelete: fetching " + newURL);
      const resp = await postData(newURL, data);
      const j = await resp.json();
      if (j['result'] !== 'error') {
          document.getElementById("output").innerHTML = "401: <b>" + sightingName + " deleted.</b>";
      } else {
          document.getElementById("output").innerHTML = "400: " + sightingName + " not found.</b>";
      }

    })();
  }

  //  document.getElementById("sightingsDatabaseView").innerHTML = "Sightings for " + speciesName + " Go right here!"
 
  /*
  function sightingCreate() {
    (async () => {
      let sightingSpecies = document.getElementById("speciesSelector").value;
      let sightingDate = document.getElementById("date").value;
      let sightingTime = document.getElementById("time").value;
      const newURL = url + "/create?species=" + sightingSpecies + "&date=" + sightingDate + "&time=" + sightingTime;
      console.log("sightingCreate: fetching " + newURL);
      const resp = await fetch(newURL);
      const j = await resp.json();
      if (j['result'] !== 'error') {
        document.getElementById("output").innerHTML = "101: Sighting with values, <b>" + sightingSpecies + ", " + sightingDate + ", " + sightingTime + " created.</b>";
      } else {
        document.getElementById("output").innerHTML = "100: " + sightingSpecies + " not found.</b>";
      }
    })();
  }
*/


