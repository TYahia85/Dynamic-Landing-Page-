  //grap sections
  let sections = document.getElementsByTagName('section');
  //grap the ul
  const navList = document.querySelector('#navbar__list')
  //create a variable (out of loop) to remove previous section active state
  let previous='';

  //loop through sections to create li's for each section
  for(section of sections){
    //grap section id to read the active section
    let sectionId = section.getAttribute('id');
    //grap section heading to populate the active section heading
    let sectionHeading = section.firstElementChild.firstElementChild.textContent;
    //Create li & anchor tags for each section in nav bar
    let navItem = document.createElement('li');
    //set 'li' class name for styling
    navItem.className = 'nav-item active';
    let navLink = document.createElement('a');
    //set 'a' tag class name for styling
    navLink.className = 'nav-link btn btn-light';
    //activate the link & append
    navLink.innerHTML = sectionHeading;
    navLink.href = '#'+sectionId;
    navItem.appendChild(navLink);
    navList.appendChild(navItem);

    //listen for click event to activate section active state
    window.addEventListener('scroll', function(){
    //check if the variable has value
    if(previous.length > 1){
      //if true: set class name to empty string to remove active state from viewport
      document.getElementById(previous).className='';
    }
    //grap active section 'href' and remove the '#' by string method to get section ID
    let activeSectionId = navLink.getAttribute('href').substring(1);
    //grap the active element ID and set class name attribute to activate it on view port
    let activeSection = document.getElementById(activeSectionId);

    //using Intersection Observer API to read active section
    activeScroll();

    function activeScroll(){
      //initiate section options constructor
      const options = {
        threshold: 0,
        rootMargin: "-160px"
      };
      //create observer function
      const observer = new IntersectionObserver(function(entries, observer){
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            navLink.className = 'btn btn-warning';
            activeSection.className='activeSection';
            home.className = 'btn btn-primary';
          } else {
            //remove active state class name from previous section & nav link
            navLink.className = 'nav-link btn btn-light';
            previous = activeSectionId;
          }
          //test the scroll entry to see results
          // console.log(entry);
        });
      }, options);
      observer.observe(activeSection);
    }
    });
  }