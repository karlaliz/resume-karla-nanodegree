/*
Resume.
 */
var bio = {
    "name" : "Karla Parada Holguin",
    "role" : "Front-End Web Developer",
    "contacts" : { 
        "location": "New Hampshire",
        "email":"arq.kparada@gmail.com", 
        "mobile": "(603)000-00-00", 
        "github" : "karlaliz"
    },
    "biopic" : "images/me.jpg",
    "welcomeMessage" : "'Primo facit, quod necesse est; ergo quod est possibile; subito facis impossibile.'   F.A.",
    "skills" : ["HTML", "CSS", "Phython", "Self-directed study", "Google App Engine" , "Get & Post Request", "Database Setup", "Database Querying", "Javascrip", "Responsive Web Desing", "Bootstrap", "Git & GitHub" 
    ]
};

bio.display = function(){
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").append(formattedName);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").append(formattedRole);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);
    var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
    $("#topContacts").append(formattedLocation);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBioPic);
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedGithub);
    $("#footerContacts").append(formattedLocation);
    $("#header").append(formattedWelcomeMessage);
        if (bio.skills.length>0) {
            $("#header").append(HTMLskillsStart);
            var formattedSkill = HTMLskills.replace("%data%", bio.skills [0]);
            $("#skills").append(formattedSkill);
            var formattedSkill = HTMLskills.replace("%data%", bio.skills [1]);
            $("#skills").append(formattedSkill);
            var formattedSkill = HTMLskills.replace("%data%", bio.skills [2]);
            $("#skills").append(formattedSkill);
            var formattedSkill = HTMLskills.replace("%data%", bio.skills [3]);
            $ ("#skills").append(formattedSkill);
            var formattedSkill = HTMLskills.replace("%data%", bio.skills [4]);
            $("#skills").append(formattedSkill);
            var formattedSkill = HTMLskills.replace("%data%", bio.skills [5]);
            $("#skills").append(formattedSkill);
            var formattedSkill = HTMLskills.replace("%data%", bio.skills [6]);
            $("#skills").append(formattedSkill);
            var formattedSkill = HTMLskills.replace("%data%", bio.skills [7]);
            $("#skills").append(formattedSkill);
            var formattedSkill = HTMLskills.replace("%data%", bio.skills [8]);
            $("#skills").append(formattedSkill);
            var formattedSkill = HTMLskills.replace("%data%", bio.skills [9]);
            $ ("#skills").append(formattedSkill);
            var formattedSkill = HTMLskills.replace("%data%", bio.skills [10]);
            $("#skills").append(formattedSkill);
            var formattedSkill = HTMLskills.replace("%data%", bio.skills [11]);
            $("#skills").append(formattedSkill);
        }
};
bio.display();

var projects ={
    "projects" :[
        { 
        "title": "Portfolio",
        "date": "2016",
        "description": "This is the beginning of my portfolio, so far only contains spaces to put my projects, done with HTML, CSS and Bootstrap",
        "images":["images/port1.png", "images/port2.png", "images/port3.png"]
        },
    ]
};

projects.display = function(){
    for (var project in projects.projects){
        if (projects.projects.hasOwnProperty(project)){
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            $(".project-entry:last").append(formattedTitle);
            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].date);
            $(".project-entry:last").append(formattedDates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            $(".project-entry:last").append(formattedDescription);
            if (projects.projects[project].images.length > 0){
                for (var image in projects.projects[project].images){
                    if (projects.projects[project].images.hasOwnProperty(image)){
                        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                        $(".project-entry:last").append(formattedImage);
                    }
                }        
            }
        }
    }
};
projects.display();

var education ={
    "schools" :[
        { 
        "name":"ITECH II",
        "city": "Mexico",
        "degree": "Bachelor's degree",
        "majors": "Math",
        "date": "2003-2008",
        "url": "http://www.itchihuahuaii.edu.mx/",
        "location": "Chihuahua, Mexico"
        },
        {   
        "name": "CBTiS 158",
        "city": "Mexico",
        "degree":"High school",
        "majors": "Accounting",
        "date": "1998-2001",
        "location": "Chihuahua, Mexico"
        }
    ],
    "onlineCourses": [
        {
        "title": "Front-End Nanodegree",
        "school": "Udacity",
        "date": "2016",
        "url": "https://www.udacity.com/nanodegree"            
        },
        {
        "title": "Introduction to Programming Nanodegree",
        "school": "Udacity",
        "date": "2015",
        "url": "https://www.udacity.com/nanodegree"
        },
        {
        "title": "Introduction to Computer Sciense",
        "school": "Udacity",
        "date": "2014",
        "url": "https://www.udacity.com/nanodegree"            
        }
    ]
};

education.display = function() {
    for (var School in education.schools) {
        if (education.schools.hasOwnProperty(School)){
            $("#education").append(HTMLschoolStart);
            var schoolName = HTMLschoolName.replace("%data%", education.schools[School].name);
            var formattedSchName = schoolName.replace("#", education.schools[School].url);
            $(".education-entry:last").append(formattedSchName);
            var formattedSchLoc = HTMLschoolLocation.replace("%data%", education.schools[School].city);
            $(".education-entry:last").append(formattedSchLoc);
            var formattedSchDates = HTMLschoolDates.replace("%data%", education.schools[School].date);
            $(".education-entry:last").append(formattedSchDates);
            var formattedSchDeg = HTMLschoolDegree.replace("%data%", education.schools[School].degree);
            $(".education-entry:last").append(formattedSchDeg);
            var formattedSchMaj = HTMLschoolMajor.replace("%data%", education.schools[School].majors);
            $(".education-entry:last").append(formattedSchMaj);
        }
    }
        $(".education-entry:last").append(HTMLonlineClasses);
            for (var OnLine in education.onlineCourses) {
                if (education.onlineCourses.hasOwnProperty(OnLine)){
                    var OLTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[OnLine].title);
                    var formattedOLTitle = OLTitle.replace("#", education.onlineCourses[OnLine].url);
                    $(".education-entry:last").append(formattedOLTitle);
                    var formattedOLSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[OnLine].school);
                    $(".education-entry:last").append(formattedOLSchool);
                    var formattedOLDates = HTMLonlineDates.replace("%data%", education.onlineCourses[OnLine].date);
                    $(".education-entry:last").append(formattedOLDates);
                }
            }
};
education.display();
 
var work = {
    "jobs": [
        {
        "employer" : "Jaacro",
        "location" : "Chihuahua, Mexico",
        "title" : "Project manager",
        "date" : "2011-2012",
        "description": "Coordination of construction projects, coordinating sales, reviewing architectural plans, review and approval of budgets, recruiment."
        },
        {
        "employer" : "Remax",
        "location" : "Chihuahua, Mexico",
        "title" : "Real estate agent",
        "date" : "2009- 2010",
        "description": "Sales agent, make architectural plans, real estate market value"
        }       
    ]
};

work.display = function() {
    for (var job in work.jobs) {
        if (work.jobs.hasOwnProperty(job)){
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].date);
            $(".work-entry:last").append(formattedDates);
            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            $(".work-entry:last").append(formattedLocation);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            $(".work-entry:last").append(formattedDescription);
        }
    }
};
work.display();

function locationizer(work_obj) {
    var locationArray = [];
    for(var job in work_obj.jobs){
        if (work_obj.jobs.hasOwnProperty(job)){
            var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }
}
return locationArray;
}

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
});

$("#mapDiv").append(googleMap);


