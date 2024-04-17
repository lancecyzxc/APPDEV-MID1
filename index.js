// alert('Hello');
// 1st step - Movement animation to happen
const card = $('.card')[0];
const container = $('.container'); 

// 5th step - all items
const photo = $('.photo img');
const title = $('.title');
const social= $('.social');
const info= $('.info h4');
const profile= $('.profile');

// 2nd step - Moving animation event
container.on('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20; //rotating the element into x axis
    let yAxis = (window.innerWidth / 2 - e.pageY) / 20; //rotating the element into y axis
    card.style.transform  = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// 4th step - Adding animation in
container.on('mouseenter', e => {
    card.style.transform = 'none';
    // Popout animation for all items
    photo.style.transform = 'translateZ(50px)';
    title.style.transform = 'translateZ(50px)';
    social.style.transform = 'translateZ(50px)';
    info.style.transform = 'translateZ(50px)';
    profile.style.transform = 'translateZ(50px)';
});

// 3rd step - Removing animation in
container.on('mouseleave', e => {
    card.style.transform = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});


/*
Movement Animation: The code initializes variables for the card and container elements and defines mouse movement event listeners to rotate the card based on the mouse position.
Moving Animation Event: The mousemove event listener calculates the rotation angles (xAxis and yAxis) based on the mouse position, creating a 3D effect by transforming the card element.
Adding Animation: The mouseenter event triggers a pop-out animation by translating various elements (photo, title, social, info, profile) along the Z-axis when the mouse enters the container.
Removing Animation: The mouseleave event resets the card's rotation and removes the pop-out effect by resetting the transformations applied during the mouseenter event.
*/
