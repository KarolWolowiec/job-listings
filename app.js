const jobListings = [
  {
    "id": 1,
    "company": "Photosnap",
    "logo": "./images/photosnap.svg",
    "new": true,
    "featured": true,
    "position": "Senior Frontend Developer",
    "role": "Frontend",
    "level": "Senior",
    "postedAt": "1d ago",
    "contract": "Full Time",
    "location": "USA Only",
    "languages": ["HTML", "CSS", "JavaScript"],
    "tools": []
  },
  {
    "id": 2,
    "company": "Manage",
    "logo": "./images/manage.svg",
    "new": true,
    "featured": true,
    "position": "Fullstack Developer",
    "role": "Fullstack",
    "level": "Midweight",
    "postedAt": "1d ago",
    "contract": "Part Time",
    "location": "Remote",
    "languages": ["Python"],
    "tools": ["React"]
  },
  {
    "id": 3,
    "company": "Account",
    "logo": "./images/account.svg",
    "new": true,
    "featured": false,
    "position": "Junior Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "2d ago",
    "contract": "Part Time",
    "location": "USA Only",
    "languages": ["JavaScript"],
    "tools": ["React", "Sass"]
  },
  {
    "id": 4,
    "company": "MyHome",
    "logo": "./images/myhome.svg",
    "new": false,
    "featured": false,
    "position": "Junior Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "5d ago",
    "contract": "Contract",
    "location": "USA Only",
    "languages": ["CSS", "JavaScript"],
    "tools": []
  },
  {
    "id": 5,
    "company": "Loop Studios",
    "logo": "./images/loop-studios.svg",
    "new": false,
    "featured": false,
    "position": "Software Engineer",
    "role": "Fullstack",
    "level": "Midweight",
    "postedAt": "1w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["JavaScript"],
    "tools": ["Ruby", "Sass"]
  },
  {
    "id": 6,
    "company": "FaceIt",
    "logo": "./images/faceit.svg",
    "new": false,
    "featured": false,
    "position": "Junior Backend Developer",
    "role": "Backend",
    "level": "Junior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "UK Only",
    "languages": ["Ruby"],
    "tools": ["RoR"]
  },
  {
    "id": 7,
    "company": "Shortly",
    "logo": "./images/shortly.svg",
    "new": false,
    "featured": false,
    "position": "Junior Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["HTML", "JavaScript"],
    "tools": ["Sass"]
  },
  {
    "id": 8,
    "company": "Insure",
    "logo": "./images/insure.svg",
    "new": false,
    "featured": false,
    "position": "Junior Frontend Developer",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "2w ago",
    "contract": "Full Time",
    "location": "USA Only",
    "languages": ["JavaScript"],
    "tools": ["Vue", "Sass"]
  },
  {
    "id": 9,
    "company": "Eyecam Co.",
    "logo": "./images/eyecam-co.svg",
    "new": false,
    "featured": false,
    "position": "Full Stack Engineer",
    "role": "Fullstack",
    "level": "Midweight",
    "postedAt": "3w ago",
    "contract": "Full Time",
    "location": "Worldwide",
    "languages": ["JavaScript", "Python"],
    "tools": ["Django"]
  },
  {
    "id": 10,
    "company": "The Air Filter Company",
    "logo": "./images/the-air-filter-company.svg",
    "new": false,
    "featured": false,
    "position": "Front-end Dev",
    "role": "Frontend",
    "level": "Junior",
    "postedAt": "1mo ago",
    "contract": "Part Time",
    "location": "Worldwide",
    "languages": ["JavaScript"],
    "tools": ["React", "Sass"]
  }
]

window.onload = (event) => {
    initMultiselect();
  };
  
  function initMultiselect() {
  
    document.addEventListener("click", function(evt) {
      var flyoutElement = document.getElementById('myMultiselect'),
        targetElement = evt.target; // clicked element
  
      do {
        if (targetElement == flyoutElement) {
          // This is a click inside. Do nothing, just return.
          //console.log('click inside');
          return;
        }
  
        // Go up the DOM
        targetElement = targetElement.parentNode;
      } while (targetElement);
  
      // This is a click outside.
      toggleCheckboxArea(true);
      //console.log('click outside');
    });
  }
  
  function toggleCheckboxArea(onlyHide = false) {
    var checkboxes = document.getElementById("mySelectOptions");
    var displayValue = checkboxes.style.display;
  
    if (displayValue != "block") {
      if (onlyHide == false) {
        checkboxes.style.display = "block";
      }
    } else {
      checkboxes.style.display = "none";
    }
  }

//initiate arrays for checkboxes
var arrayCheckboxesValues = []
var arrayCheckboxesChecked = []

//get checkboxes from html
var getAllCheckboxes = document.querySelectorAll('input[type="checkbox"]')

//fill arrays with filter values and isChecked booleans
for (let i = 0; i < getAllCheckboxes.length; i++) {
  arrayCheckboxesValues.push(getAllCheckboxes[i].value)
  arrayCheckboxesChecked.push(getAllCheckboxes[i].checked)
}

//get all filters from search
const filterItemClass = document.getElementsByClassName('display-filter');

//set the display to "none" by default
for(let i = 0; i < filterItemClass.length; i++){
  filterItemClass[i].style.display = "none";
}

//get all filter-remove classes
const filterRemoveClass = document.getElementsByClassName('filter-remove');

//remove filter from checkbox list when 'x' is pressed
for(let i = 0; i < filterRemoveClass.length; i++){
  filterRemoveClass[i].addEventListener('click', () =>{
    filterItemClass[i].style.display = "none"; //stop displaying the filter-item class
    arrayCheckboxesChecked[i] = false; //set the value to false in an array 
    arrayCheckboxesValues[i] = null;
    getAllCheckboxes[i].checked = false; //"uncheck" checkbox in a list
    filterJobListing();
  })
}

//get 'clear' button
const clearFiltersBtn = document.getElementById('clear-button');
//remove filter from checkbox list when 'clear' button is pressed
clearFiltersBtn.addEventListener('click', () => {
  for(let i = 0; i < filterRemoveClass.length; i++){
      filterItemClass[i].style.display = "none"; //stop displaying the filter-item class
      arrayCheckboxesChecked[i] = false; //set the value to false in an array 
      arrayCheckboxesValues[i] = null;
      getAllCheckboxes[i].checked = false; //"uncheck" checkbox in a list
      filterJobListing();
    }
})
function isCheckboxChecked(){
  //change the value of arrayCheckboxesChecked depending on state of checkbox
  for(let i = 0; i < arrayCheckboxesChecked.length; i++){
    if(getAllCheckboxes[i].checked == true){
      arrayCheckboxesChecked[i] = true;
      filterItemClass[i].style.display = "flex";
    } else{
      arrayCheckboxesChecked[i] = false;
      filterItemClass[i].style.display = "none";
    }
  }
  //fill the arrayCheckboxesValues with selected filters
  for (let i = 0; i < getAllCheckboxes.length; i++) {
    if(arrayCheckboxesChecked[i] == true){
      arrayCheckboxesValues[i] = getAllCheckboxes[i].value;
    } else{
      arrayCheckboxesValues[i] = null;
    }
  }
}

//call isCheckboxChecked function when a button is pressed
const cssCheckBox = document.getElementById('css').addEventListener('click',() => {
  isCheckboxChecked();
  filterJobListing();
});
const djangoCheckBox = document.getElementById('django').addEventListener('click',() => {
  isCheckboxChecked();
  filterJobListing();
});
const htmlCheckBox = document.getElementById('html').addEventListener('click',() => {
  isCheckboxChecked();
  filterJobListing();
});
const javaScriptCheckBox = document.getElementById('js').addEventListener('click',() => {
  isCheckboxChecked();
  filterJobListing();
});
const pythonCheckBox = document.getElementById('python').addEventListener('click',() => {
  isCheckboxChecked();
  filterJobListing();
});
const reactCheckBox = document.getElementById('react').addEventListener('click',() => {
  isCheckboxChecked();
  filterJobListing();
});
const rorCheckBox = document.getElementById('ror').addEventListener('click',() => {
  isCheckboxChecked();
  filterJobListing();
});
const sassCheckBox = document.getElementById('sass').addEventListener('click',() => {
  isCheckboxChecked();
  filterJobListing();
});
const vueCheckBox = document.getElementById('vue').addEventListener('click',() => {
  isCheckboxChecked();
  filterJobListing();
});

//get the container that holds all job listings
const contentItem = document.getElementsByClassName('container');

//iniate array in which every iteration stores html content for a single listing
var contentItemInnerHtml = new Array (jobListings.length).fill('');

//function for displaying job listings
function displayListingOnPage(){
  //fill array elements with html content
  for(let i = 0; i < jobListings.length; i++){
  contentItemInnerHtml[i] += `
  <div class="content-item">
    <div class="content-img">
      <img src="${jobListings[i].logo}" alt="avatar" class="content-img-sizing">
    </div>
    <div class="job-content">
      <div class="job-companyName">${jobListings[i].company}</div>
      <div class="job-name">${jobListings[i].position}</div>
      <div class="job-details">
        <div class="job-timeAgo">${jobListings[i].postedAt}</div>
        <div class="job-divider"><i class="fa-solid fa-circle-dot fa-2xs"></i></div>
        <div class="job-contractType">${jobListings[i].contract}</div>
        <div class="job-divider"><i class="fa-solid fa-circle-dot fa-2xs"></i></div>
        <div class="job-location">${jobListings[i].location}</div>
      </div>
    </div>
    <hr>
    <div class="job-filters">`
    //concat languages and tools into one array
    const jobListingsLanguagesTools = jobListings[i].languages.concat(jobListings[i].tools);

    //loop to go thorough all languages and tools
    for(let j = 0; j < jobListingsLanguagesTools.length; j++){
      contentItemInnerHtml[i] += `
    
      <div class="filter-item filter-item-active">
        <div class="filter-text filter-languages">${jobListingsLanguagesTools[j]}</div> 
      </div>`
    }
    //close the div of a job listing
    contentItemInnerHtml[i] += `</div></div>`
  }
  //clear innerHTML content by default and add listings from array
  contentItem[0].innerHTML = '';
  for(let i = 0; i < contentItemInnerHtml.length; i++){
    contentItem[0].innerHTML += contentItemInnerHtml[i];
  }
}
displayListingOnPage();

function filterJobListing(){
  //create a copy of an array that will store filtered html content
  contentItemInnerHtmlCopy = [...contentItemInnerHtml];

  for(let i = 0; i < jobListings.length; i++){
    //concat languages and tools into one array
    const jobListingsLanguagesTools = jobListings[i].languages.concat(jobListings[i].tools);

    //check if checked filters are in a job listing
    const isFilterIncluded = jobListingsLanguagesTools.some(r=> arrayCheckboxesValues.indexOf(r) >= 0)

    //if filter is unchecked set an array item to: ''
    if(isFilterIncluded == false){
      contentItemInnerHtmlCopy[i] = '';
    }
  }

  //fill DOM object with filtered elements
  contentItem[0].innerHTML = '';
  for(let i = 0; i < contentItemInnerHtmlCopy.length; i++){
    contentItem[0].innerHTML += contentItemInnerHtmlCopy[i];
  }

  //check if there are any filters 
  const result = arrayCheckboxesValues.every(element => {
    if (element === arrayCheckboxesValues[0]) {
      return true;
    }
  });
  
  //if there are no filters - display all available filters
  if(result == true){
    contentItem[0].innerHTML = '';
    for(let i = 0; i < contentItemInnerHtml.length; i++){
      contentItem[0].innerHTML += contentItemInnerHtml[i];
    }
  }
}