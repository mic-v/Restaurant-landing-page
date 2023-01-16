

function setupNavBar() 
{
    const navbar = document.createElement('div');
    navbar.id = "nav";

    //const logo = document.createElement('div');
    //logo.textContent = "Rordon Gamsey's Couture";
    //navbar.appendChild(logo);
    navbar.classList.add('flex');
    navbar.classList.add('flex-row');
    navbar.classList.add('justify-center');

    const nav = document.createElement('div');
    const home = document.createElement('div');
    const menu = document.createElement('div');
    const contact = document.createElement('div');

    home.textContent = 'Home';
    menu.textContent = 'Menu';
    contact.textContent = 'Contact';
    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);

    home.onclick = function () { setupInitialLanding(); };
    menu.onclick = function () { setupMenu();};
    contact.onclick = function() { setupContact(); };

    nav.classList.add('flex');
    nav.classList.add('flex-row');

    nav.classList.add('custom-red-font');
    nav.id = "navbar";
    navbar.appendChild(nav);
    return navbar;
}

function setupBody()
{
    const content= document.createElement('div');
    content.classList.add('page-body');
    content.classList.add('page-text');

    const header = document.createElement('header');
    content.appendChild(header);
    header.textContent = "Penny's Diner";


    var divHeader = document.createElement('h4');
    var divContent = document.createElement('p');
    var resDesc = document.createElement('div');
    resDesc.appendChild(divHeader);
    resDesc.classList.add('page-section');
    divContent.textContent = "Penny's has been around for 50 years serving all customers like its in the comfort of the home. Open all day and night during the weekday, we are open for daylight highwayman or midnight marauder."
    resDesc.appendChild(divContent);
    content.append(resDesc);

    divHeader = document.createElement('h4');
    var divHourSection = document.createElement('p');
    resDesc = document.createElement('div');
    resDesc.appendChild(divHeader);
    resDesc.classList.add('page-section');
    divHeader.textContent = "Hours";
    divHourSection.style.display = 'flex';
    divHourSection.style.flexDirection = 'column';
    const mon = document.createElement('div'); mon.textContent="Monday: 24 Hours";   divHourSection.appendChild(mon);
    const tues = document.createElement('div'); tues.textContent="Tuesday: 24 Hours";  divHourSection.appendChild(tues);
    const wed = document.createElement('div');  wed.textContent="Wednesday: 24 Hours";   divHourSection.appendChild(wed);
    const thurs= document.createElement('div'); thurs.textContent="Thursday: 24 Hours";  divHourSection.appendChild(thurs);
    const fri = document.createElement('div'); fri.textContent="Friday: 24 Hours";   divHourSection.appendChild(fri);
    const sat= document.createElement('div'); sat.textContent="Saturday: 24 Hours";    divHourSection.appendChild(sat);
    const sun = document.createElement('div'); sun.textContent="Sunday: 24 Hours";   divHourSection.appendChild(sun);


    resDesc.appendChild(divHourSection);
    content.append(resDesc);




    //const description = document.createElement('div');
    //description.textContent = "Here at Rordon Gamsey's Couture, you will be treated with the the great dining experience  the world has to offer";
    //content.appendChild(description);
    return content;
}


function setupInitialLanding()
{
    const content = document.getElementById('content');
    cleanContent(content);
    //content.classList.add('background-img');
    content.appendChild(setupNavBar());
    content.appendChild(setupBody());
}

function setupMenu() {
    const contentID = document.getElementById('content');
    cleanContent(contentID);

    const content = document.createElement('div');
    contentID.appendChild(setupNavBar());
    content.classList.add('page-body');
    content.classList.add('page-text');

    const header = document.createElement('header');
    content.appendChild(header);
    header.textContent = "Penny's Diner";

    var divHeader = document.createElement('h4');
    var divContent = document.createElement('div');
    var resDesc = document.createElement('div');
    resDesc.appendChild(divHeader);
    resDesc.classList.add('page-section');
    divHeader.textContent = 'Menu';

    divContent.style.cssText = "display: flex; flex-direction: column";

    var entreeContent = document.createElement('div');
    
    var entreeHeader = document.createElement('h5');
    entreeHeader.textContent = 'Entree';
    divContent.appendChild(entreeHeader);
    var calamari = document.createElement('div');
    calamari.textContent =  "calamari";
    entreeContent.style.cssText = "display: grid; grid-template-columns: repeat(2, 1fr); margin: 2em 0em;";
    entreeContent.appendChild(calamari);
    calamari = document.createElement('div'); calamari.textContent =  "$10.99";
    entreeContent.appendChild(calamari);

    var wings = document.createElement('div'); wings.textContent = "chicken wings";
    entreeContent.appendChild(wings);
    wings = document.createElement('div'); wings.textContent = "$11.99";
    entreeContent.appendChild(wings);

    
    divContent.appendChild(entreeContent);

    var mainContent = document.createElement('div');
    var mainHeader = document.createElement('h5');
    mainHeader.textContent = 'Main';
    divContent.appendChild(mainHeader);
    mainContent.style.cssText= "display: grid; grid-template-columns: repeat(2, 1fr); margin: 2em 0em;";
    var spaghetti = document.createElement('div'); spaghetti.textContent = 'spaghetti';
    mainContent.appendChild(spaghetti);
    spaghetti = document.createElement('div'); spaghetti.textContent = '$18.99';
    mainContent.appendChild(spaghetti);

    var chickenRice = document.createElement('div'); chickenRice.textContent = 'chicken rice';
    mainContent.appendChild(chickenRice);
    chickenRice = document.createElement('div'); chickenRice.textContent = '$19.95';
    mainContent.appendChild(chickenRice);

    divContent.appendChild(mainContent);

    var dessertContent = document.createElement('div');
    var dessertHeader = document.createElement('h5');
    dessertHeader.textContent = 'Main';
    divContent.appendChild(dessertHeader);
    dessertContent.style.cssText= "display: grid; grid-template-columns: repeat(2, 1fr); margin: 2em 0em;";
    var cake = document.createElement('div'); cake.textContent = 'cake';
    dessertContent.appendChild(cake);
    cake = document.createElement('div'); cake.textContent = '$14.99';
    dessertContent.appendChild(cake);

    var icecream = document.createElement('div'); icecream.textContent = 'ice cream';
    dessertContent.appendChild(icecream);
    icecream = document.createElement('div'); icecream.textContent = '$9.99';
    dessertContent.appendChild(icecream);

    divContent.appendChild(dessertContent);


    

    resDesc.appendChild(divHeader);
    resDesc.appendChild(divContent);



    content.append(resDesc);

    contentID.append(content);
}

function setupContact() {
    const contentID = document.getElementById('content');
    cleanContent(contentID);

    const content = document.createElement('div');
    contentID.appendChild(setupNavBar());
    content.classList.add('page-body');
    content.classList.add('page-text');

    const header = document.createElement('header');
    content.appendChild(header);
    header.textContent = "Penny's Diner";

    var divHeader = document.createElement('h4');
    var divContent = document.createElement('div');
    var resDesc = document.createElement('div');
    resDesc.appendChild(divHeader);
    resDesc.classList.add('page-section');
    divHeader.textContent = 'Contact Us!';

    divContent.style.cssText = "display: grid; grid-template-columns: repeat(2, 1fr); padding: 1em 0em;";

    var emailHeader = document.createElement('h5');
    emailHeader.textContent = "Email:";
    var emailContent = document.createElement('div');
    emailContent.textContent = "pennys@diner.com";

    var phoneHeader = document.createElement('h5');
    phoneHeader.textContent = "Phone:";

    var phoneContent = document.createElement('div');
    phoneContent.textContent = "1-234-567-8900";

    divContent.appendChild(emailHeader);
    divContent.appendChild(emailContent);
    divContent.appendChild(phoneHeader);
    divContent.appendChild(phoneContent);








    resDesc.appendChild(divHeader);
    resDesc.appendChild(divContent);



    content.append(resDesc);

    contentID.append(content);
}

function cleanContent(element) {
    while(element.firstElementChild) {
        element.firstElementChild.remove();
    }
}

setupInitialLanding();