/*
This is empty on purpose! Your code to build the resume will go here.
 */

//var name = "Karla Parada Holguin"
//var formattedName = HTMLheaderName.replace("%data%",name);
//$("#header").append(formattedName);
//var role = "Web Developer";
//var formattedRole = HTMLheaderRole.replace("%data%", role);
//

var bio = {
    "name" : "Karla Parada Holguin",
    "role" : "Web Developer",
    "contacts" : { 
        "location": "New Hampshire",
        "email":"arq.kparada@gmail.com", 
        "mobile": "(603)966-66-66", 
        "github" : "karlaliz"
    },
    "pictureURL" : "images/me.jpg",
    "welcome" : "Welcome to my resume feel free to contact me with additional questions",
    "skills" : ["Honest", "Hard-Working", "Tenacious", "Analytical", "Problem-Solver" , "Creative"
    ]
};
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedName);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedRole);
var mobile = bio.contacts.mobile;
var formattedMobile = HTMLmobile.replace("%data%", mobile);
$("#topContacts").append(formattedMobile);
var email = bio.contacts.email;
var formattedEmail = HTMLemail.replace("%data%", email);
$("#topContacts").append(formattedEmail);
var github = bio.contacts.github;
var formattedGithub = HTMLgithub.replace("%data%", github);
$("#topContacts").append(formattedGithub);
var llocation = bio.contacts.location;
var formattedLocation = HTMLlocation.replace("%data%", llocation);
$("#topContacts").append(formattedLocation);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.pictureURL);
$("#header").append(formattedBioPic);
var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcome);
$("#header").append(formattedWelcomeMessage);
if (bio.skills.length>0) {
  $("#header").append(HTMLskillsStart);
  var formattedSkill = HTMLskills.replace("%data%", bio.skills [0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills [1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills [2]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills [3]);
  $ ("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills [4]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills [5]);
  $("#skills").append(formattedSkill);

};

//$("#main").append(bio.name);
//$("#main").append(bio.role);
//$("#main").append(bio.contactInfo);
//$("#main").append(bio.pictureURL);
//$("#main").append(bio.welcome);
//$("#main").append(bio.skills);

//var work= {}
//work.position = "Architec";
//work.employer = "Jaacro";
//work.years = "2 years"

//var education ={}
//education["name"] = "ITCH II"
//education["years"] = "2003-2008"
//education["city"] = "Chihuahua, Mexico"

//$("#main").append(work["position"])
//$("#main").append(education.name)

var education ={
    "schools" :[
        { 
        "name":"ITECH II",
        "city": "Mexico",
        "degree": "Bachelor s degree",
        "majors" : "Math",
        "dates" : "2003-2008",
        "url" : "http://www.itchihuahuaii.edu.mx/",
        "location" : "Chihuahua, Mexico"
        },
        {   
        "name": "CBTiS 158",
        "city": "Mexico",
        "degree" :"High school",
        "majors" : "accounting",
        "dates" : "1998-2001",
        "location" : "Chihuahua, Mexico"
        }
    ],
    "onLineCourses": [
        {
        "title" : "Introduction to Programming Nanodegree",
        "school" : "Udacity",
        "dates" : "2015",
        "url" : "https://www.udacity.com/nanodegree"
        },
        {
        "title" : "Introduction to Computer Sciense",
        "school" : "Udacity",
        "dates" : "2014",
        "url" : "https://www.udacity.com/nanodegree"            
        }
    ]
}; 
education.display = function() {
 for (school in education.schools) {
  $("#education").append(HTMLschoolStart);
  var SchName = HTMLschoolName.replace("%data%", education.schools[school].name);
  var formattedSchName = SchName.replace("#", education.schools[school].url);
  $(".education-entry:last").append(formattedSchName);
  var formattedSchLoc = HTMLschoolLocation.replace("%data%", education.schools[school].city);
  $(".education-entry:last").append(formattedSchLoc);
  var formattedSchDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
  $(".education-entry:last").append(formattedSchDates);
  var formattedSchDeg = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
  $(".education-entry:last").append(formattedSchDeg);
  var formattedSchMaj = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
  $(".education-entry:last").append(formattedSchMaj);
 };
 $(".education-entry:last").append(HTMLonlineClasses);
 for (OnLine in education.onLineCourses) {
  var OLTitle = HTMLonlineTitle.replace("%data%", education.onLineCourses[OnLine].title);
  var formattedOLTitle = OLTitle.replace("#", education.onLineCourses[OnLine].url);
  $(".education-entry:last").append(formattedOLTitle);
  var formattedOLSchool = HTMLonlineSchool.replace("%data%", education.onLineCourses[OnLine].school);
  $(".education-entry:last").append(formattedOLSchool);
  var formattedOLDates = HTMLonlineDates.replace("%data%", education.onLineCourses[OnLine].dates);
  $(".education-entry:last").append(formattedOLDates);
 }
}
education.display();
 
var work = {
    "jobs": [
        {
        "employer" : "Jaacro",
        "location" : "Chihuahua, Mexico",
        "title" : "Project manager",
        "dates" : "2011-2012",
        "description": "project coordination, paperwork government agencies, personnel recruitment, review plans, project modifications, coordination of sales, personnel contatacion."

        },
        {
        "employer" : "Remax",
        "location" : "Chihuahua, Mexico",
        "title" : "Real estate agent",
        "dates" : "2009- 2010",
        "description": "cadastral plans, procedures in notaries, sales and  market studies"
        }       
    ]
}  
function displayWork(){
for (job in work.jobs) {
$("#workExperience").append(HTMLworkStart);
var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
var formattedEmployerTitle = formattedEmployer + formattedTitle;
$(".work-entry:last").append(formattedEmployerTitle);
var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
$(".work-entry:last").append(formattedDates);
var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
$(".work-entry:last").append(formattedLocation);
var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
$(".work-entry:last").append(formattedDescription);
}
}
displayWork();

function locationizer(work_obj) {
    var locationArray = [];
    for(job in work_obj.jobs){
        var newLocation = work_obj.jobs[job].location;
    locationArray.push(newLocation);
}
return locationArray;
}

$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedGithub);
$("#footerContacts").append(formattedLocation);

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
});

$("#mapDiv").append(googleMap);


