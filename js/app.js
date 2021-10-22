/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navBarSections = document.getElementsByClassName("landing__container");
const navBarList = document.getElementById("navbar__list");
const docFrag = document.createDocumentFragment();
const allSections = document.getElementsByTagName("section");
const allLi = document.getElementsByTagName('li');
/**
 * End Global Variables
 * 
*/



/** 
 * Begin Main Functions
 * 
*/

function addNavSections() {
// make a loop to create li elements equal to the number of sections in the page
    for (const item of navBarSections) {
        let parentOfSection = item.parentElement;
        const navsec = document.createElement("li");
// saved the id of each section of the page to use it in a later function
        navsec.classList.add(parentOfSection.id);
// creating an anchor element inside each li to attach the event listener to it
        const navanc = document.createElement("a");
/** 
 * naming each anchor element after the section it refers to so that each nav button is named after the section it links to
 * appending the anchors to the li elements then appending them to the document fragmen and adding it to the page after the loop ends
*/ 
        navanc.textContent = parentOfSection.dataset.nav;
        navsec.appendChild(navanc);
// adding an event to each anchor to scroll to the linked section onclick
        navanc.addEventListener('click', () => {
            parentOfSection.scrollIntoView({behavior: "smooth", block: "start"})
        })
        docFrag.appendChild(navsec);
        
    }
    navBarList.appendChild(docFrag);
}

// now to make the viewed section highlighted in the nav bar

function highlightViewed(){
// added an even listener to the whole window when scrolled

    window.addEventListener('scroll', ()=>{
// added an empty variable to assign the viewed section to it 
/**  
 * created a for loop to get the position of each section 
 * then assigned it to a variable
 * and checked which variable is closer to the viewport and assigned its id to the onView variable
 * that's when the id that was saved before comes into play
*/
        let onView = '';
        for(let section of allSections){
            let position = section.getBoundingClientRect();
            if (position.top <= window.innerHeight/2 && position.bottom >= window.innerHeight/2){
                onView = section.id;
            }
        }
/**
 * created a class in css called active that holds the properties of the active nav button
 * after the loop ends it's needed to remove the active class from any li that had it before 
 * then the other loop seaches for the li that has the class named after the onView id
 * and adds the class active to its classlist and it becomes highlighted
*/
        for(let li of allLi){
            li.classList.remove('active');
            if (li.classList.contains(onView)){
                li.classList.add('active');
            
            }
        }
    })
}
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
// Scroll to section on link click

addNavSections();

// Set sections as active
highlightViewed();


