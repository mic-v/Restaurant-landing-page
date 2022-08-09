

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
    divContent = document.createElement('p');
    resDesc = document.createElement('div');
    resDesc.appendChild(divHeader);
    resDesc.classList.add('page-section');
    divHeader.textContent = "Hours";
    divContent.textContent = "Penny's has been around for 50 years serving all customers like its in the comfort of the home. Open all day and night during the weekday, we are open for daylight highwayman or midnight marauder."
    resDesc.appendChild(divContent);
    content.append(resDesc);




    //const description = document.createElement('div');
    //description.textContent = "Here at Rordon Gamsey's Couture, you will be treated with the the great dining experience  the world has to offer";
    //content.appendChild(description);
    return content;
}


function setupInitialLanding()
{
    const content = document.getElementById('content');
    //content.classList.add('background-img');
    content.appendChild(setupNavBar());
    content.appendChild(setupBody());

    document.body.classList.add('test');
}

setupInitialLanding();