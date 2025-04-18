document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const contentContainers = document.querySelectorAll('.content-container');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove active class from all links
            navLinks.forEach(item => item.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Hide all content containers
            contentContainers.forEach(container => container.classList.remove('active'));
            
            // Show the selected content container
            const tabId = this.getAttribute('data-tab');
            document.getElementById(`${tabId}-content`).classList.add('active');
        });
    });
});

function adjustGridColumns() {
    const gridContainer = document.getElementById('grid-container');
    const numberOfButtons = gridContainer.children.length;
    let columns;

    if (window.innerWidth <= 767) {
        columns = 2;
    } else {
        columns = Math.floor(window.innerWidth / 300);
    }

    gridContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    gridContainer.style.maxWidth = `${numberOfButtons * (window.innerWidth <= 767 ? 150 : 300)}px`;
}

function home() {
    window.location = "https://insert.url/"
}

window.addEventListener('resize', adjustGridColumns);

/*could add book description ie size and page count
  where desktop buy button is and move button down to bottom*/

const buttonsData = [
    ,{
        title: 'Scrappers and Villagers',
        specifications: 'Soft Cover\n132 pages\n5.25 x 7.625 inches',
        dateAdded: '01-01-2025',
        coverImage: '1x/magazine/cover3.png',
        images: ['1x/magazine/cover3.png'],
        description: "Contributions by Joseph Buckley, Claire Dougherty, Ben Roylance, Jasper Spicero, Lillian Paige Walton and Souchou Yao.",            
        price: "$15.00",
        buylink: "https://buy.stripe.com/14k5mQ8xrcAw4OQfZ0",
        new: "true",
        sale: "false",
        outofstock: "false",
        preorder: "false",
        game: "false"
    },
    {
        title: "Warlocks and Sexbots",
        specifications: 'Soft Cover\n82 pages\n5.25 x 7.625 inches',
        dateAdded: '??-??-????',
        coverImage: '1x/magazine/cover2.png',
        images: ['1x/magazine/cover2.png'],
        description: "Contributions by Joseph Buckley, Samuel R. Delany, Alex Luis Freundlich, Ed Halter, Anastasios Karnazes, Dorothea Lasky, Willa Smart, and Theodore Sturgeon.\n\nImages by Michael Bussell and Wretched Worm.",
        price: "$15.00",
        buylink: "inserturl",
        new: "false",
        sale: "false",
        outofstock: "true",
        preorder: "false",
        game: "false"
    },
    {
        title: 'The Landscape',
        specifications: 'Soft Cover\n64 pages\n5.25 x 7.625 inches',
        dateAdded: '07-04-2024',
        coverImage: '1x/magazine/cover1.png',
        images: ['1x/magazine/cover1.png'],
        description: "Contributions by Alyssa Moore, Brandon Shimoda, Er Linsker, Filip Marinovich, Imani Elizabeth Jackson, J. Gordon Faylor, Mark von Schlegell, Morgan Vo, Oli Hazzard, & Terrence Arjoon.\n\nImages by Farnoosh Fathi",
        price: "$15.00",
        buylink: "inserturl",
        new: "false",
        sale: "false",
        outofstock: "true",
        preorder: "false",
        game: "false"
    },
/*        Boilerplate for new book
    {
        title: '',
        specifications: '',
        dateAdded: '',
        coverImage: '',
        images: [''],
        description: "",
        price: "",
        buylink: "",
        new: "true",
        sale: "false",
        outofstock: "false",
        preorder: "false",
        game: "false"
    },
*/
    // Add more button data here
];

const gridContainer = document.getElementById('grid-container');


document.addEventListener('DOMContentLoaded', function() {
        // Function to preload images
        function preloadImage(src) {
        const img = new Image();
        img.src = src;
    }
        // Preload all cover images
        buttonsData.forEach(button => {
        preloadImage(button.coverImage);
    });


buttonsData.forEach(button => {
    const gridItem = document.createElement('div');
    gridItem.className = 'grid-item';

    const title = document.createElement('h3');
    title.textContent = button.title;

    const coverImage = document.createElement('img');
    coverImage.className = 'cover-image';
    coverImage.src = button.coverImage;

    if (button.new === "true" || button.sale === "true" || button.outofstock === "true" || button.preorder === "true") {
        const ribbon = document.createElement('div');
        ribbon.className = 'ribbon';
        if (button.new === "true") {
            ribbon.textContent = 'NEW';
            ribbon.classList.add('new-ribbon');
        } else if (button.sale === "true") {
            ribbon.textContent = 'SALE';
            ribbon.classList.add('sale-ribbon');
        } else if (button.outofstock === "true") {
            ribbon.textContent = 'SOLD OUT';
            ribbon.classList.add('outofstock-ribbon');
        } else if (button.preorder === "true") {
            ribbon.textContent = 'PREORDER';
            ribbon.classList.add('preorder-ribbon');
        }
        gridItem.appendChild(ribbon);
    }

    gridContainer.appendChild(gridItem);
    gridItem.appendChild(coverImage);
    gridItem.appendChild(title);

    gridItem.addEventListener('click', function() {
        openPopup(button.images, button);
    });
});
    // Adjust the number of columns based on the number of buttons
    adjustGridColumns();

    // Popup functionality
    const popupOverlay = document.getElementById('popup-overlay');
    const popupTitle = document.getElementById('popup-title');
    const popupSpecifications = document.getElementById('popup-specifications')
    const popupImage = document.getElementById('popup-image');
    const popupDescription = document.getElementById('popup-description');
    const popupPrice = document.getElementById('popup-price');
    const popupBuy = document.getElementById('popup-buy');
    const popupClose = document.getElementById('popup-close');
    const popupNavLeft = document.getElementById('popup-nav-left');
    const popupNavRight = document.getElementById('popup-nav-right');

    let currentImages = [];
    let currentIndex = 0;

    function openPopup(images, button) {
        currentImages = images;
        currentIndex = 0;
        popupTitle.textContent = button.title;
        popupSpecifications.textContent = button.specifications;
        popupDescription.textContent = button.description;
        popupPrice.textContent = button.price;
    
        // Check if the item is out of stock
        if (button.outofstock === "true") {
            popupBuy.textContent = "Sold Out";
            popupBuy.style.left = "180px";
            popupBuy.removeAttribute("href");  // Make it unclickable
            popupBuy.style.pointerEvents = "none"; // Additional safeguard
        } 
        else if (button.game === "true"){
            popupBuy.textContent = "Play"
            popupBuy.style.left = "180px";
            popupBuy.href = button.buylink;
            popupBuy.style.pointerEvents = "auto"; // Ensure clickable for in-stock items
        }
        else {
            popupBuy.textContent = "BUY";
            popupBuy.style.left = "180px";
            popupBuy.href = button.buylink;
            popupBuy.style.pointerEvents = "auto"; // Ensure clickable for in-stock items
        }

        // ribbon handling
        const popupRibbon = document.getElementById('popup-ribbon');
        if (button.new === "true") {
            popupRibbon.textContent = 'NEW';
            popupRibbon.classList.add('new-ribbon');
            popupRibbon.classList.remove('sale-ribbon');
            popupRibbon.classList.remove('preorder-ribbon');
            popupRibbon.style.display = 'block';
        } else if (button.sale === "true") {
            popupRibbon.textContent = 'SALE';
            popupRibbon.classList.add('sale-ribbon');
            popupRibbon.classList.remove('new-ribbon');
            popupRibbon.classList.remove('preorder-ribbon');
            popupRibbon.style.display = 'block';
        } else if (button.preorder === "true") {
            popupRibbon.textContent = 'PREORDER';
            popupRibbon.classList.add('preorder-ribbon');
            popupRibbon.classList.remove('new-ribbon');
            popupRibbon.classList.remove('sale-ribbon');
            popupRibbon.style.display = 'block';
        } else {
            popupRibbon.style.display = 'none';
        }
        
        // Load the first image immediately
        loadImage(currentImages[currentIndex], (imgSrc) => {
            popupImage.src = imgSrc;
            popupOverlay.style.display = 'flex';
            
            // Preload the next and previous images
            prefetchNearbyImages(currentIndex);
        });
    }
    function loadImage(src, callback) {
        const img = new Image();
        img.src = src;
        img.onload = () => callback(src);
    }

    function closePopup() {
        popupOverlay.style.display = 'none';
    }

    function showImage(index) {
        if (index >= 0 && index < currentImages.length) {
            currentIndex = index;
            popupImage.src = currentImages[currentIndex];
        }
    }

    popupClose.addEventListener('click', closePopup);

    function prefetchNearbyImages(index) {
        // Preload the next image
        if (index + 1 < currentImages.length) {
            loadImage(currentImages[index + 1], () => {});
        }
        
        // Preload the previous image
        if (index - 1 >= 0) {
            loadImage(currentImages[index - 1], () => {});
        }
    }
    
    popupNavLeft.addEventListener('click', function() {
        if (currentIndex > 0) {
            showImage(currentIndex - 1);
            prefetchNearbyImages(currentIndex - 1);
        }
    });
    
    popupNavRight.addEventListener('click', function() {
        if (currentIndex < currentImages.length - 1) {
            showImage(currentIndex + 1);
            prefetchNearbyImages(currentIndex + 1);
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') { {
            if (currentIndex > 0) {
                showImage(currentIndex - 1);
                prefetchNearbyImages(currentIndex - 1);
            }
        }
    }
        if (event.key === 'ArrowRight') {
            if (currentIndex < currentImages.length - 1) {
                showImage(currentIndex + 1);
                prefetchNearbyImages(currentIndex + 1);
            }
        }
    });


    popupOverlay.addEventListener('click', function(e) {
        if (e.target === popupOverlay) {
            closePopup();
        }
    });
});





function shuffleArray(array) {
    let currentIndex = array.length, randomIndex, temporaryValue;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // Swap it with the current element
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// Array of background images to cycle through
const sortImages = [
    'url("date.png")',
    'url("title.png")',
    'url("name.png")',
    'url("price.png")',
    'url("random.png")',
];
let sortImageIndex = 0;
let sortIndex = 1; // Track the sorting option

function sort() {
    // Cycle the background image of the sort div
    const sortButton = document.querySelector("#sort button");
    sortImageIndex = (sortImageIndex + 1) % sortImages.length;
    sortButton.style.backgroundImage = sortImages[sortImageIndex];

    // Define sorting criteria based on sortIndex
    const gridContainer = document.getElementById('grid-container');
    const gridItems = Array.from(gridContainer.children);
    let sortedItems;

    // If it's the default sort (0), reset to the date order
        if (sortIndex === 0) {
            sortedItems = gridItems.sort((a, b) => {
                // Find the matching button data by title
                const dateA = buttonsData.find(button => button.title === a.querySelector('h3').textContent).dateAdded;
                const dateB = buttonsData.find(button => button.title === b.querySelector('h3').textContent).dateAdded;

                // Convert dd-mm-yyyy to a Date object
                const [dayA, monthA, yearA] = dateA.split('-').map(Number);
                const [dayB, monthB, yearB] = dateB.split('-').map(Number);

                const parsedDateA = new Date(yearA, monthA - 1, dayA); // Month is zero-indexed in JS
                const parsedDateB = new Date(yearB, monthB - 1, dayB);

                return parsedDateB - parsedDateA; // Newest to oldest
            });
        } else {
        switch (sortIndex) {
            case 1:
                sortedItems = gridItems.sort((a, b) => 
                    a.querySelector('h3').textContent.localeCompare(b.querySelector('h3').textContent)
                );
                break;
            case 2:
                sortedItems = gridItems.sort((a, b) => {
                    const lastNameA = a.querySelector('h3:nth-of-type(2)').textContent.split(' ').pop();
                    const lastNameB = b.querySelector('h3:nth-of-type(2)').textContent.split(' ').pop();
                    return lastNameA.localeCompare(lastNameB);
                });
                break;
            case 3:
                sortedItems = gridItems.sort((a, b) => {
                    const priceA = parseFloat(a.getAttribute('price').replace('$', ''));
                    const priceB = parseFloat(b.getAttribute('price').replace('$', ''));
                    return priceB - priceA;
                });
                break;
             case 4:
                // Randomize the order using Fisher-Yates shuffle
                sortedItems = shuffleArray(gridItems);
                break;
            default:
                break;
        }
        console.log(sortIndex)
    }
    // Update the DOM with sorted items
    gridContainer.innerHTML = '';
    sortedItems.forEach(item => gridContainer.appendChild(item));

    // Increment sortIndex to change sorting type on next click
    sortIndex = (sortIndex + 1) % 5;
}

// Make sure each grid item has a data-date attribute to use for date sorting
document.addEventListener('DOMContentLoaded', function() {
    buttonsData.forEach((button, index) => {
        const gridItem = gridContainer.children[index];
        gridItem.setAttribute('data-date', button.dateAdded);
    });
});

// Make sure each grid item has a price attribute to use for price sorting
document.addEventListener('DOMContentLoaded', function() {
    buttonsData.forEach((button, index) => {
        const gridItem = gridContainer.children[index];
        gridItem.setAttribute('price', button.price);
    });
});
