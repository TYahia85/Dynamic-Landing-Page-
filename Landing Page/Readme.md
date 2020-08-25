                                             

                                        	***   Landing Page Project   ***


<!------Notes------->
---------------------
// Using project starter code from Git.


<!--- HTML --->
---------------------
<!- Added Bootstrap CDN.
<!- Updated HTML (nav,div,ul) classes using Bootstrap nav classes for styling the nav menu.
<!- Styled nav menu become responsive with (Hamburger collapsle menu on smaller view ports (992px * 749px)).
<!- Added data-toggle="tooltip", data-placement="bottom", title="Back to Top" to ''Home' link.
<!- Added '#top' to the Home link <a> tag 'href' in HTML for a quick back to top.


<!--- CSS --->
---------------------
/* Added html scroll-behaviour: smooth for smooth scrolling on the document.
/* Added (left&right) margin to style nav links.
/* My Active section class name = 'activeSection'


<!--- Javascript --->
---------------------
/// Created createDynamicSections() function with the following logic:


// Creating dynamic sections:
------------------------------
/ Identified <section> tags in relative HTML document and stored it in a avariable.
/ Identified <ul> tag and stored it in a avariable to append he future created <li> tags.
/ looped through all <section> tags using for-of loop.
/ Identified each section found on the document using its (id) and stored it in a avariable.
/ Identified each section heading on the document using (firstElementChild.textContent) and stored it in a avariable.
/ Created <li> & <a> tags for each section found on the document and added Bootstrap class names for styling.
/ Used the (sectionHeading) var value to read the nav link.
/ Concated the '#' to the (sectionId) var to activate the href link of the nav item.
/ Appended the created <a> to the created <li> then to the <ul>.


// Creating section active state:
---------------------------------
/ Created an event listener (scroll) function to the nav links.
/ Created a variable (previous) with empty string value to hold & remove current active state section.
/ Validated (previous) var value using if statement to remove the active state by setting the class name to empty string (if true).
/ Identified the current nav link, removed the '#' to store it in (activeSectionId) var.
/ Used (activeSectionId) to set the class name to 'activeSection' to activate the state on viewport.
/ Set (previous) var to (activeSectionId) to be reset to '' on next click event.
/ Added Bootstrap class name 'active' to the nav link to have visited state.
/ Created Intersection Observer API function to read active section (activeScroll()).
/ Looped through the entries to validate active sections in viewport to apply & remove active states.





