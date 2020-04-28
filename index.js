const store = localStorage;

const monthNames = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

const critterNames = ["Bitterling","Pale Chub","Crucian Carp","Dace","Carp","Koi","Goldfish","Pop-eyed Goldfish","Ranchu Goldfish","Killifish","Crawfish","Soft-shelled Turtle","Snapping Turtle",
"Tadpole","Frog","Freshwater Goby","Loach","Catfish","Giant Snakehead","Bluegill","Yellow Perch","Black Bass","Tilapia","Pike","Pond Smelt","Sweetfish","Cherry Salmon","Char",
"Golden Trout","Stringfish","Salmon","King Salmon","Mitten Crab","Guppy","Nibble Fish","Angelfish","Betta","Neon Tetra","Rainbowfish","Piranha","Arowana","Dorado","Gar",
"Arapaima","Saddled Bichir","Sturgeon","Sea Butterfly","Sea Horse","Clown Fish","Surgeonfish","Butterfly Fish","Napoleonfish","Zebra Turkeyfish","Blowfish","Puffer Fish","Anchovy",
"Horse Mackerel","Barred Knifejaw","Sea Bass","Red Snapper","Dab","Olive Flounder","Squid","Moray Eel","Ribbon Eel","Tuna","Blue Marlin ","Giant Trevally","Mahi-mahi","Ocean Sunfish",
"Ray","Saw Shark","Hammerhead Shark","Great White Shark","Whale Shark","Suckerfish","Football Fish","Oarfish","Barreleye","Coelacanth","Common Butterfly","Yellow Butterfly","Tiger Butterfly",
"Peacock Butterfly","Common Bluebottle","Paper Kite Butterfly","Great Purple Emperor","Monarch Butterfly","Emperor Butterfly ","Agrias Butterfly","Rajah Brooke's Birdwing","Queen Alexandra's Birdwing",
"Moth","Atlas Moth","Madagascan Sunset Moth","Long Locust","Migratory Locust","Rice Grasshopper","Grasshopper","Cricket","Bell Cricket","Mantis","Orchid Mantis","Honeybee","Wasp",
"Brown Cicada","Robust Cicada","Giant Cicada","Walker Cicada","Evening Cicada","Cicada Shell","Red Dragonfly","Darner Dragonfly","Banded Dragonfly","Damselfly","Firefly","Mole Cricket",
"Pondskater","Diving Beetle","Giant Water Bug","Stinkbug","Man-faced Stink Bug","Ladybug","Tiger Beetle","Jewel Bettle","Violin Beetle","Citrus Long-horned Beetle","Rosalia Batesi Beetle",
"Blue Weevil Beetle","Earth-boring Dung Beetle","Dung Beetle","Scarab Beetle","Drone Beetle","Goliath Beetle","Saw Stag","Miyama Stag ","Giant Stag","Rainbow Stag","Cyclommatus Stag",
"Golden Stag","Giraffe Stag","Horned Dynastid","Horned Atlas","Horned Elephant","Horned Hercules","Walking Stick","Walking Leaf","Bagworm","Ant","Hermit Crab","Wharf Roach","Fly",
"Mosquito","Flea","Snail","Pill Bug","Centipede","Spider","Tarantula","Scorpion"];

const fishData = [
  {'name': "Bitterling", price: "900", location: "River", time: "All", month: "January, February, March, November, December", type:"Fish"},
  {'name': "Pale Chub", price: "200", location: "River", time: "9AM-4PM", month: "All", type:"Fish"},
  {'name': "Crucian Carp", price: "160", location: "River", time: "All", month: "All", type:"Fish"},
  {'name': "Dace", price: "240", location: "River", time: "4PM-9AM", month: "All", type:"Fish"},
  {'name': "Carp", price: "300", location: "Pond", time: "All", month: "All", type:"Fish"},
  {'name': "Koi", price: "4000", location: "Pond", time: "4PM-9AM", month: "All", type:"Fish"},
  {'name': "Goldfish", price: "1300", location: "Pond", time: "All", month: "All", type:"Fish"},
  {'name': "Pop-eyed Goldfish", price: "1300", location: "Pond", time: "9AM-4PM", month: "All", type:"Fish"},
  {'name': "Ranchu Goldfish", price: "4500", location: "Pond", time: "9AM-4PM", month: "All", type:"Fish"},
  {'name': "Killifish", price: "300", location: "Pond", time: "All", month: "April, May, June, July, August", type:"Fish"},
  {'name': "Crawfish", price: "200", location: "Pond", time: "All", month: "April, May, June, July, August, September", type:"Fish"},
  {'name': "Soft-shelled Turtle", price: "3750", location: "River", time: "4PM-9AM", month: "August, September", type:"Fish"},
  {'name': "Snapping Turtle", price: "5000", location: "River", time: "9PM-4AM", month: "April, May, June, July, August, September, October", type:"Fish"},
  {'name': "Tadpole", price: "100", location: "Pond", time: "All", month: "March, April, May, June, July", type:"Fish"},
  {'name': "Frog", price: "120", location: "Pond", time: "All", month: "May, June, July, August", type:"Fish"},
  {'name': "Freshwater Goby", price: "400", location: "River", time: "4PM-9AM", month: "All", type:"Fish"},
  {'name': "Loach", price: "400", location: "River", time: "All", month: "March, April, May", type:"Fish"},
  {'name': "Catfish", price: "800", location: "Pond", time: "4PM-9AM", month: "May, June, July, August, September, October", type:"Fish"},
  {'name': "Giant Snakehead", price: "5500", location: "Pond", time: "9AM-4PM", month: "June, July, August", type:"Fish"},
  {'name': "Bluegill", price: "180", location: "River", time: "9AM-4PM", month: "All", type:"Fish"},
  {'name': "Yellow Perch", price: "300", location: "River", time: "All", month: "January, February, March, October, November, December", type:"Fish"},
  {'name': "Black Bass", price: "400", location: "River", time: "All", month: "All", type:"Fish"},
  {'name': "Tilapia", price: "800", location: "River", time: "All", month: "June, July, August, September, October", type:"Fish"},
  {'name': "Pike", price: "1800", location: "River", time: "All", month: "September, October, November, December", type:"Fish"},
  {'name': "Pond Smelt", price: "500", location: "River", time: "All", month: "January, February, December", type:"Fish"},
  {'name': "Sweetfish", price: "900", location: "River", time: "All", month: "July, August, September", type:"Fish"},
  {'name': "Cherry Salmon", price: "1000", location: "River (clifftop)", time: "4PM-9AM", month: "March, April, May, June, September, October, November", type:"Fish"},
  {'name': "Char", price: "3800", location: "River (clifftop)", time: "4PM-9AM", month: "March, April, May, June, September, October, November", type:"Fish"},
  {'name': "Golden Trout", price: "15000", location: "River (clifftop)", time: "4PM-9AM", month: "March, April, May, September, October, November", type:"Fish"},
  {'name': "Stringfish", price: "15000", location: "River (clifftop)", time: "4PM-9AM", month: "January, February, March, December", type:"Fish"},
  {'name': "Salmon", price: "700", location: "River (mouth)", time: "All", month: "September", type:"Fish"},
  {'name': "King Salmon", price: "1800", location: "River (mouth)", time: "All", month: "September", type:"Fish"},
  {'name': "Mitten Crab", price: "2000", location: "River", time: "4PM-9AM", month: "September, October, November", type:"Fish"},
  {'name': "Guppy", price: "1300", location: "River", time: "9AM-4PM", month: "April, May, June, July, August, September, October, November", type:"Fish"},
  {'name': "Nibble Fish", price: "1500", location: "River", time: "9AM-4PM", month: "May, June, July, August, September", type:"Fish"},
  {'name': "Angelfish", price: "3000", location: "River", time: "4PM-9AM", month: "May, June, July, August, September, October", type:"Fish"},
  {'name': "Betta", price: "2500", location: "River", time: "9AM-4PM", month: "May, June, July, August, September, October", type:"Fish"},
  {'name': "Neon Tetra", price: "500", location: "River", time: "9AM-4PM", month: "April, May, June, July, August, September, October, November", type:"Fish"},
  {'name': "Rainbowfish", price: "800", location: "River", time: "9AM-4PM", month: "May, June, July, August, September, October", type:"Fish"},
  {'name': "Piranha", price: "2500", location: "River", time: "9AM-4PM, 9PM-4AM", month: "June, July, August, September", type:"Fish"},
  {'name': "Arowana", price: "10000", location: "River", time: "4PM-9AM", month: "June, July, August, September", type:"Fish"},
  {'name': "Dorado", price: "15000", location: "River", time: "4AM-9PM", month: "June, July, August, September", type:"Fish"},
  {'name': "Gar", price: "6000", location: "Pond", time: "4PM-9AM", month: "June, July, August, September", type:"Fish"},
  {'name': "Arapaima", price: "10000", location: "River", time: "4PM-9AM", month: "June, July, August, September", type:"Fish"},
  {'name': "Saddled Bichir", price: "4000", location: "River", time: "9PM-4AM", month: "June, July, August, September", type:"Fish"},
  {'name': "Sturgeon", price: "10000", location: "River (mouth)", time: "All", month: "January, February, March, September, October, November, December", type:"Fish"},
  {'name': "Sea Butterfly", price: "1000", location: "Sea", time: "All", month: "January, February, March, December", type:"Fish"},
  {'name': "Sea Horse", price: "1100", location: "Sea", time: "All", month: "April, May, June, July, August, September, October, November", type:"Fish"},
  {'name': "Clown Fish", price: "650", location: "Sea", time: "All", month: "April, May, June, July, August, September", type:"Fish"},
  {'name': "Surgeonfish", price: "1000", location: "Sea", time: "All", month: "April, May, June, July, August, September", type:"Fish"},
  {'name': "Butterfly Fish", price: "1000", location: "Sea ", time: "All", month: "April, May, June, July, August, September", type:"Fish"},
  {'name': "Napoleonfish", price: "10000", location: "Sea", time: "4AM-9PM", month: "July, August", type:"Fish"},
  {'name': "Zebra Turkeyfish", price: "500", location: "Sea", time: "All", month: "April, May, June, July, August, September, October, November", type:"Fish"},
  {'name': "Blowfish", price: "5000", location: "Sea", time: "9PM-4AM", month: "January, February, November, December", type:"Fish"},
  {'name': "Puffer Fish", price: "250", location: "Sea", time: "All", month: "July, August, September", type:"Fish"},
  {'name': "Anchovy", price: "200", location: "Sea", time: "4AM-9PM", month: "All", type:"Fish"},
  {'name': "Horse Mackerel", price: "150", location: "Sea", time: "All", month: "All", type:"Fish"},
  {'name': "Barred Knifejaw", price: "5000", location: "Sea", time: "All", month: "March, April, May, June, July, August, September, October, November", type:"Fish"},
  {'name': "Sea Bass", price: "400", location: "Sea", time: "All", month: "All", type:"Fish"},
  {'name': "Red Snapper", price: "3000", location: "Sea", time: "All", month: "All", type:"Fish"},
  {'name': "Dab", price: "300", location: "Sea", time: "All", month: "January, February, March, April, October, November, December", type:"Fish"},
  {'name': "Olive Flounder", price: "800", location: "Sea", time: "All", month: "All", type:"Fish"},
  {'name': "Squid", price: "500", location: "Sea", time: "All", month: "January, February, March, April, May, June, July, August, December", type:"Fish"},
  {'name': "Moray Eel", price: "2000", location: "Sea", time: "All", month: "August, September, October", type:"Fish"},
  {'name': "Ribbon Eel", price: "600", location: "Sea", time: "All", month: "June, July, August, September, October", type:"Fish"},
  {'name': "Tuna", price: "7000", location: "Pier", time: "All", month: "January, February, March, April, November, December", type:"Fish"},
  {'name': "Blue Marlin ", price: "10000", location: "Pier", time: "All", month: "January, February, March, April, July, August, September, November, December", type:"Fish"},
  {'name': "Giant Trevally", price: "4500", location: "Pier", time: "All", month: "May, June, July, August, September, October", type:"Fish"},
  {'name': "Mahi-mahi", price: "6000", location: "Pier", time: "All", month: "May, June, July, August, September, October", type:"Fish"},
  {'name': "Ocean Sunfish", price: "4000", location: "Sea", time: "4AM-9PM", month: "July, August, September", type:"Fish"},
  {'name': "Ray", price: "3000", location: "Sea", time: "4AM-9PM", month: "August, September, October, November", type:"Fish"},
  {'name': "Saw Shark", price: "12000", location: "Sea", time: "4PM-9AM", month: "June, July, August, September", type:"Fish"},
  {'name': "Hammerhead Shark", price: "8000", location: "Sea", time: "4PM-9AM", month: "June, July, August, September", type:"Fish"},
  {'name': "Great White Shark", price: "15000", location: "Sea", time: "4PM-9AM", month: "June, July, August, September", type:"Fish"},
  {'name': "Whale Shark", price: "13000", location: "Sea", time: "All", month: "June, July, August, September", type:"Fish"},
  {'name': "Suckerfish", price: "1500", location: "Sea", time: "All", month: "June, July, August, September", type:"Fish"},
  {'name': "Football Fish", price: "2500", location: "Sea", time: "4PM-9AM", month: "January, February, March, November, December", type:"Fish"},
  {'name': "Oarfish", price: "9000", location: "Sea", time: "All", month: "January, February, March, April, May, December", type:"Fish"},
  {'name': "Barreleye", price: "15000", location: "Sea", time: "9PM-4AM", month: "All", type:"Fish"},
  {'name': "Coelacanth", price: "15000", location: "Sea (rainy day)", time: "All", month: "All", type:"Fish"}
];

const bugData = [
  {'name': "Common Butterfly", price: "160", month: "January, February, March, April, May, June, September, October, November, December", time: "4AM-7PM", location: "Flying around", type:"Bug"},
  {'name': "Yellow Butterfly", price: "160", month: "March, April, May, June, September, October", time: "4AM-7PM", location: "Flying around", type:"Bug"},
  {'name': "Tiger Butterfly", price: "240", month: "March, April, May, June, July, August, September", time: "4AM-7PM", location: "Flying around", type:"Bug"},
  {'name': "Peacock Butterfly", price: "2500", month: "March, April, May, June", time: "4AM-7PM", location: "Flying around \"rare flowers\"", type:"Bug"},
  {'name': "Common Bluebottle", price: "300", month: "April, May, June, July, Aug", time: "4AM-7PM", location: "Flying around", type:"Bug"},
  {'name': "Paper Kite Butterfly", price: "1000", month: "All", time: "8AM-7PM", location: "Flying around ", type:"Bug"},
  {'name': "Great Purple Emperor", price: "3000", month: "May, June, July, Aug", time: "4AM-7PM", location: "Flying around", type:"Bug"},
  {'name': "Monarch Butterfly", price: "140", month: "September, October, November", time: "N/A", location: "Flying around", type:"Bug"},
  {'name': "Emperor Butterfly ", price: "4000", month: "January, February, March, June, July, August, September, December", time: "5PM-8AM", location: "Flying around ", type:"Bug"},
  {'name': "Agrias Butterfly", price: "3000", month: "April, May, June, July, August, September", time: "8AM-5PM", location: "Flying around ", type:"Bug"},
  {'name': "Rajah Brooke's Birdwing", price: "2500", month: "January, February, April, May, June, July, August, September, December", time: "8AM-5PM", location: "Flying around ", type:"Bug"},
  {'name': "Queen Alexandra's Birdwing", price: "4000", month: "May, June, July, August, September", time: "8AM-4PM", location: "Flying around ", type:"Bug"},
  {'name': "Moth", price: "130", month: "All", time: "7PM-4AM", location: "Buzzing around lamps and lights outside (there's usually one next to Residential Services)", type:"Bug"},
  {'name': "Atlas Moth", price: "3000", month: "April, May, June, July, August, September", time: "7PM-4AM", location: "On the side of trees", type:"Bug"},
  {'name': "Madagascan Sunset Moth", price: "2500", month: "April, May, June, July, August, September", time: "8AM-4PM", location: "Flying around", type:"Bug"},
  {'name': "Long Locust", price: "200", month: "April, May, June, July, August, September, October, November", time: "8AM-7PM", location: "Hopping on the floor", type:"Bug"},
  {'name': "Migratory Locust", price: "600", month: "August, September, October, November", time: "8AM-7PM", location: "Hopping on the floor", type:"Bug"},
  {'name': "Rice Grasshopper", price: "160", month: "August, September, October, November", time: "8AM-7PM", location: "Hopping on the floor", type:"Bug"},
  {'name': "Grasshopper", price: "160", month: "July, August, September", time: "8AM-5PM", location: "Hopping on the floor", type:"Bug"},
  {'name': "Cricket", price: "130", month: "September, October, November", time: "5PM-8AM", location: "Hopping on the floor", type:"Bug"},
  {'name': "Bell Cricket", price: "430", month: "September, October", time: "5PM-8AM", location: "Hopping on the floor", type:"Bug"},
  {'name': "Mantis", price: "430", month: "March, April, May, June, July, August, September, October, November", time: "8AM-5PM", location: "Praying on flowers ", type:"Bug"},
  {'name': "Orchid Mantis", price: "2400", month: "March, April, May, June, July, August, September, October, November", time: "8AM-5PM", location: "Praying on white flowers", type:"Bug"},
  {'name': "Honeybee", price: "200", month: "March, April, May, June, July", time: "8AM-5PM", location: "Flying around", type:"Bug"},
  {'name': "Wasp", price: "2500", month: "All ", time: "All", location: "Catch in net when they attack you after shaking or chopping a tree", type:"Bug"},
  {'name': "Brown Cicada", price: "", month: "July, August", time: "8AM-5PM", location: "On the side of trees", type:"Bug"},
  {'name': "Robust Cicada", price: "", month: "July, August", time: "8AM-5PM", location: "On the side of trees", type:"Bug"},
  {'name': "Giant Cicada", price: "", month: "July, August", time: "8AM-5PM", location: "On the side of trees", type:"Bug"},
  {'name': "Walker Cicada", price: "400", month: "August, September", time: "8AM-5PM", location: "On the side of trees", type:"Bug"},
  {'name': "Evening Cicada", price: "", month: "July, August", time: "4AM-8AM, 4PM-7PM", location: "On the side of trees", type:"Bug"},
  {'name': "Cicada Shell", price: "", month: "July, August", time: "All", location: "On the side of trees", type:"Bug"},
  {'name': "Red Dragonfly", price: "180", month: "September, October", time: "8AM-7PM", location: "Flying around", type:"Bug"},
  {'name': "Darner Dragonfly", price: "230", month: "April, May, June, July, August, September, October", time: "8AM-5PM", location: "Flying around", type:"Bug"},
  {'name': "Banded Dragonfly", price: "4500", month: "May, June, July, August, September, October", time: "8AM-5PM", location: "Flying around", type:"Bug"},
  {'name': "Damselfly", price: "", month: "January, February, November, December", time: "All", location: "Flying around", type:"Bug"},
  {'name': "Firefly", price: "", month: "June", time: "7PM-4AM", location: "Flying around", type:"Bug"},
  {'name': "Mole Cricket", price: "500", month: "January, February, March, April, May, November, December", time: "All", location: "Dig underground", type:"Bug"},
  {'name': "Pondskater", price: "130", month: "May, June, July, August, September", time: "8AM-7PM", location: "Scooting on the top of rivers and ponds", type:"Bug"},
  {'name': "Diving Beetle", price: "800", month: "May, June, July, August, September", time: "8AM-7PM", location: "Scooting on the top of rivers and ponds", type:"Bug"},
  {'name': "Giant Water Bug", price: "2000", month: "April, May, June, July, August, September", time: "7PM-8AM", location: "Scooting on the top of rivers and ponds", type:"Bug"},
  {'name': "Stinkbug", price: "120", month: "March, April, May, June, July, August, September, October", time: "All", location: "In bunches of flowers", type:"Bug"},
  {'name': "Man-faced Stink Bug", price: "1000", month: "March, April, May, June, July, August, September, October", time: "7PM-8AM", location: "In bunches of flowers", type:"Bug"},
  {'name': "Ladybug", price: "200", month: "March, April, May, June, October", time: "8AM-5PM", location: "In bunches of flowers", type:"Bug"},
  {'name': "Tiger Beetle", price: "1500", month: "February, March, April, May, June, July, August, September, October", time: "All", location: "Crawling on the floor", type:"Bug"},
  {'name': "Jewel Bettle", price: "2400", month: "April, May, June, July, August", time: "All", location: "Spawns on chopped tree stumps (use axe, not stone axe, to chop down)", type:"Bug"},
  {'name': "Violin Beetle", price: "450", month: "May, June, September, October, November", time: "All", location: "Spawns on chopped tree stumps (use axe, not stone axe, to chop down)", type:"Bug"},
  {'name': "Citrus Long-horned Beetle", price: "350", month: "All", time: "All", location: "Spawns on chopped tree stumps (use axe, not stone axe, to chop down)", type:"Bug"},
  {'name': "Rosalia Batesi Beetle", price: "3000", month: "May, June, July, August, September", time: "All", location: "Spawns on chopped tree stumps (use axe, not stone axe, to chop down)", type:"Bug"},
  {'name': "Blue Weevil Beetle", price: "", month: "July, August", time: "All", location: "", type:"Bug"},
  {'name': "Earth-boring Dung Beetle", price: "300", month: "July, August, September", time: "All", location: "Rolling balls of dung around", type:"Bug"},
  {'name': "Dung Beetle", price: "", month: "January, February, December", time: "All", location: "Rolling balls of dung around", type:"Bug"},
  {'name': "Scarab Beetle", price: "", month: "July, August", time: "11PM-8AM", location: "On the side of trees", type:"Bug"},
  {'name': "Drone Beetle", price: "", month: "June, July, August", time: "All", location: "On the side of trees", type:"Bug"},
  {'name': "Goliath Beetle", price: "8000", month: "June, July, August, September", time: "5PM-8AM", location: "On the side of palm trees", type:"Bug"},
  {'name': "Saw Stag", price: "", month: "July, August", time: "All", location: "On the side of trees", type:"Bug"},
  {'name': "Miyama Stag ", price: "", month: "July, August", time: "All", location: "On the side of trees", type:"Bug"},
  {'name': "Giant Stag", price: "10000", month: "July, August", time: "11PM-8AM", location: "On the side of trees", type:"Bug"},
  {'name': "Rainbow Stag", price: "6000", month: "June, July, August, September", time: "7PM-8AM", location: "On the side of trees", type:"Bug"},
  {'name': "Cyclommatus Stag", price: "", month: "July, August", time: "5PM-8AM", location: "On the side of trees", type:"Bug"},
  {'name': "Golden Stag", price: "", month: "July, August", time: "5PM-8AM", location: "On the side of trees", type:"Bug"},
  {'name': "Giraffe Stag", price: "", month: "July, August", time: "5PM-8AM", location: "On the side of trees", type:"Bug"},
  {'name': "Horned Dynastid", price: "", month: "July, August", time: "5PM-8AM", location: "On the side of trees", type:"Bug"},
  {'name': "Horned Atlas", price: "", month: "July, August", time: "5PM-8AM", location: "On the side of trees", type:"Bug"},
  {'name': "Horned Elephant", price: "", month: "July, August", time: "5PM-8AM", location: "On the side of trees", type:"Bug"},
  {'name': "Horned Hercules", price: "", month: "July, August", time: "5PM-8AM", location: "On the side of trees", type:"Bug"},
  {'name': "Walking Stick", price: "", month: "July, August, September, October, November", time: "4AM-8AM, 5PM-7PM", location: "Falls out of shaken trees", type:"Bug"},
  {'name': "Walking Leaf", price: "600", month: "July, August, September", time: "All", location: "Underneath trees", type:"Bug"},
  {'name': "Bagworm", price: "600", month: "All", time: "All", location: "Falls out of shaken trees", type:"Bug"},
  {'name': "Ant", price: "", month: "All ", time: "All", location: "On rotten food on the floor", type:"Bug"},
  {'name': "Hermit Crab", price: "1000", month: "All ", time: "7PM-8AM", location: "Looks like a shell but runs away when you get close", type:"Bug"},
  {'name': "Wharf Roach", price: "200", month: "All", time: "All", location: "On rocks on the beach", type:"Bug"},
  {'name': "Fly", price: "60", month: "All ", time: "All", location: "Buzzing around rubbish", type:"Bug"},
  {'name': "Mosquito", price: "130", month: "June, July, August, September", time: "5PM-4AM", location: "Flying around", type:"Bug"},
  {'name': "Flea", price: "", month: "April, May, June, July, August, September, October, November", time: "All", location: "Bouncing on certain villager's heads", type:"Bug"},
  {'name': "Snail", price: "250", month: "All", time: "All", location: "On rocks when it's raining", type:"Bug"},
  {'name': "Pill Bug", price: "250", month: "January, February, March, April, May, June, September, October, November, December", time: "11PM-4PM", location: "Crawls from under rocks when you hit them", type:"Bug"},
  {'name': "Centipede", price: "300", month: "January, February, March, April, May, June, September, October, November, December", time: "4PM-11PM", location: "Crawls from under rocks when you hit them", type:"Bug"},
  {'name': "Spider", price: "480", month: "All", time: "7PM-8AM", location: "Shake trees at night", type:"Bug"},
  {'name': "Tarantula", price: "8000", month: "January, February, March, April, November, December", time: "7PM-4AM", location: "Scurrying around the floor at night - attacks you", type:"Bug"},
  {'name': "Scorpion", price: "8000", month: "May, June, July, August, September, October, ", time: "7PM-4AM", location: "Scurrying around the floor at night - attacks you", type:"Bug"},
];

const fossilData = [];

const filterConfigKey = "acnh-filterConfigData";
const collectionDataKey = "acnh-collectionData";

function App(selection, display){

  this.selection = selection;
  this.display = display;

  const defaultFilterConfigData = {
    fishChecked: true, bugChecked: true, nowChecked: false, caughtChecked: false, leavingChecked: false
  };

  this.saveFilterConfigToLocalStore = function(){
    store.setItem(filterConfigKey, JSON.stringify(this.filterConfigData));
  }

  this.loadDataFromLocalStore = function(){
    // Get saved data from storage and convert to array
    this.saveData = store.getItem(collectionDataKey);
    if(this.saveData) this.saveData = this.saveData.split(',')
    else this.saveData = [];

    this.filterConfigData = JSON.parse(store.getItem(filterConfigKey));
    if(!this.filterConfigData) {
      this.filterConfigData = defaultFilterConfigData;
      this.saveFilterConfigToLocalStore();
    }
  }

  this.handleFilterCheckboxClicked = function(key){
    this.filterConfigData[key] = !this.filterConfigData[key];
    this.setupDisplay(); 
    this.saveFilterConfigToLocalStore();
  }

  this.setupSelection = function(){
    // Bind all filter checkboxes to redraw table on click
    $(this.selection).find("#fishCheckbox").click(() => { 
      this.handleFilterCheckboxClicked('fishChecked');
    });
    $(this.selection).find("#bugCheckbox").click(() => { 
      this.handleFilterCheckboxClicked('bugChecked');
    });
    $(this.selection).find("#nowCheckbox").click(() => { 
      this.handleFilterCheckboxClicked('nowChecked');
    });
    $(this.selection).find("#caughtCheckbox").click(() => { 
      this.handleFilterCheckboxClicked('caughtChecked');
    });
    $(this.selection).find("#leavingCheckbox").click(() => { 
      this.handleFilterCheckboxClicked('leavingChecked');
    });
  }

  this.setupDisplay = function(){
    const fishChecked = this.filterConfigData.fishChecked;
    const bugChecked = this.filterConfigData.bugChecked;
    const nowChecked = this.filterConfigData.nowChecked;
    const caughtChecked = this.filterConfigData.caughtChecked;
    const leavingChecked = this.filterConfigData.leavingChecked;

    // Set filter checkbox values according to config saved in local storage
    document.getElementById("fishCheckbox").checked = fishChecked;
    document.getElementById("bugCheckbox").checked = bugChecked;
    document.getElementById("nowCheckbox").checked = nowChecked;
    document.getElementById("caughtCheckbox").checked = caughtChecked;
    document.getElementById("leavingCheckbox").checked = leavingChecked;  

    //Filter table based on which checkboxes have been checked
    this.filter(fishChecked, bugChecked, nowChecked, caughtChecked, leavingChecked);
  }

  this.getMonth = function(){
    const now = new Date();
    return monthNames[now.getMonth()];
  }

  this.getNextMonth = function(){
    const now = new Date();
    return monthNames[(now.getMonth() + 1) % 12];
  }

  this.filter = function(fish, bug, now, caught, leaving){
    let show = [];
    const month = this.getMonth();

    if(fish) show.push(...fishData);
    if(bug) show.push(...bugData);

    if(now){
      show = show.filter(e => (e.month.toLowerCase().includes("all") || e.month.toLowerCase().includes(month)))
    }

    if(caught){
      show = show.filter(e => {
        const critterIndex = critterNames.indexOf(e.name).toString();
        return this.saveData.indexOf(critterIndex) == -1;
      });
    }

    if(leaving){
      const nextMonth = this.getNextMonth();
      show = show.filter(e => (e.month.toLowerCase().includes(month) && !e.month.toLowerCase().includes(nextMonth)))
    }

    this.clearTable();
    this.drawTable(show);
  }

  this.clearTable = function(){
    $(this.display).find("#displayTable > tbody").empty();
  }

  this.tryCatchSomething = function(name){
    if(critterNames.indexOf(name) > -1){
      this.updateData(critterNames.indexOf(name));
    }
  }

  this.drawTable = function(show){
    show.forEach(e => {
      let checked = "";
      const critterIndex = critterNames.indexOf(e.name).toString();
      if(this.saveData.indexOf(critterIndex) > -1) checked = "checked=true";

      let check = `<div class="form-check form-check-inline"><input class="form-check-input" ${checked} type="checkbox" id="${e.name}" value="${e.name}"><label class="form-check-label" for="${e.name}"></label></div>`;
      let row = `<tr><td>${check}</td><td>${e.name}</td><td>${e.type}</td><td>${e.price}</td><td>${e.location}</td><td>${e.time}</td><td>${e.month}</td></tr>`;

      $(this.display).find("#displayTable > tbody").append(row);

      document.getElementById(e.name).addEventListener("click", () => {
          this.tryCatchSomething(e.name)
      }, false);
    });

  }

  this.updateData = function(newData){
    const critter = critterNames[newData];
    const newDataString = newData.toString();
    const isChecked = $(this.display).find(`[id='${this.escapeAllSingleQuotes(critter)}']`).is(":checked");
    const index = this.saveData.indexOf(newDataString);

    if(isChecked && index < 0) this.saveData.push(newDataString);
    if(!isChecked && index > -1) this.saveData.splice(index, 1);

    //save to local storage
    store.setItem(collectionDataKey, this.saveData.toString());
  }

  this.escapeAllSingleQuotes = function(value){
    return value.replace(/'/g, "\\'");
  }
}
