

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

function setupContent()
{
    const content= document.createElement('div');
    //const description = document.createElement('div');
    //description.textContent = "Here at Rordon Gamsey's Couture, you will be treated with the the great dining experience  the world has to offer";
    //content.appendChild(description);
    return content;
}


function setupInitialLanding()
{
    const content = document.getElementById('content');
    content.classList.add('background-img');
    content.appendChild(setupNavBar());
    content.appendChild(setupContent());

    document.body.classList.add('test');
}

setupInitialLanding();