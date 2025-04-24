// Enhanced carousel functionality with image descriptions

document.addEventListener('DOMContentLoaded', function() {
    const carouselImage = document.querySelector('.carousel-slide img');
    const farmshareTitle = document.getElementById('farmshare-title');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    let currentIndex = 0;
    
    // Array of image objects containing both the src and a description
    const slides = [
        {
            src: '1x/farm/veg1.jpg',
            description: 'Fresh Veg Calls, You Picking Up?'
        },
        {
            src: '1x/farm/veg2.jpeg',
            description: 'Sample Share Size'
        },
        {
            src: '1x/farm/veg3.jpg',
            description: 'Lights, Camera, Patty Pan!'
        },
        {
            src: '1x/farm/veg5.jpeg',
            description: 'Fields in Action'
        },
        {
            src: '1x/farm/veg6.JPG',
            description: 'Herbs Stay Indoors'
        },
    ];
    
    // Set initial image and description
    carouselImage.src = slides[currentIndex].src;
    farmshareTitle.textContent = slides[currentIndex].description;
    
    // Button handlers
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slides.length - 1;
        }
        updateCarousel();
    });
    
    nextBtn.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    });
    
    function updateCarousel() {
        // Update both the image and the description text
        carouselImage.src = slides[currentIndex].src;
        farmshareTitle.textContent = slides[currentIndex].description;
        
        // Optional: Add a fade transition effect
        farmshareTitle.style.opacity = 0;
        setTimeout(() => {
            farmshareTitle.style.opacity = 1;
        }, 150);
    }
    
    // Optional: Auto-rotate the carousel every 5 seconds
    // Uncomment the following code if you want this feature
    /*
    setInterval(() => {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    }, 5000);
    */
  });

  // Sticker Popup Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Sticker information
    const stickerInfo = {
      'sticker-1': {
        title: 'CLEAN FARMING',
        content: 'Wyrm farms using organic methods. We grow our vegetables at a hand-scale, without sprays, on permanent raised beds and use a combination of compost, cover crops, and crop rotations to protect and improve soil health.\n\n All of our produce is harvested within a day or two of delivery to ensure peak freshness and flavor.',
        color: 'linear-gradient(135deg, #ff3964, #e7325a)'
      },
      'sticker-2': {
        title: 'WEEKLY HARVEST',
        content: 'Each week of Wyrm’s CSA share includes a selection of leafy greens, fruiting vegetables, alliums, and root vegetables, enough produce to feed two or more people:\n\nExample Shares:\n\nJuly\nLettuce: Bibb\nGreens: Bok Choy\nHerbs: Dill\nFruits: Broccoli\nFruits: Green Beans\nAlliums: Scallions\nRoots: Turnip\nRoots: Beets\n\nAugust\nLettuce: Romaine\nGreens: Salad Greens\nHerbs: Dill\nFruits: Sweet Peppes\nFruits: Tomatoes\nFruits: Cucumbers\nAlliums: Fresh Onion\nRoots: Carrots\n\nSeptember\nLettuce: Bibb\nGreens:Kale\nHerbs: Parsley\nFruits: Eggplant\nFruits: Hot Peppers\nFruits: Zucchini\nAlliums: Cured Onions\nRoots: Winter Squash',
        color: 'linear-gradient(135deg, #ffed4d, #ebdb47)'
      },
      'sticker-3': {
        title: 'HUDSON VALLEY GROWN',
        content: 'Our one acre of farmland runs along the Claverack Creek in Hudson, New York. The site has been kept in organic rotation over the past decade; over the past three years, Wyrm has transitioned our farm to a no-till system.',        
        color: 'linear-gradient(135deg, #87ff4b, #81e94d)'
      },
      'sticker-4': {
        title: 'EAST VILLAGE PICKUP',
        content: 'We deliver our vegetable CSA to Swiss Institute in New York, New York every Sunday from June 29, 2025 - October 5, 2025 from 1:00pm to 3:00pm. /n/n Hungry for more Wyrm!? Our vegetables are also available every Saturday morning from May - October at the Kinderhook Farmers Market in Kinderhook, New York.',
        color: 'linear-gradient(135deg, #ffc851, #f3a13c)'
      },
      'sticker-5': {
        title: 'PRICING DETAILS',
        content:'Each Wyrm CSA share is $650, or $43/week, and feeds 2+ people. Members who sign up before May 31, 2025 pay a reduced price of $550, or $36/week. \n\n Wyrm CSA membership includes:\n-15 weeks of local produce, sufficient for 2+ people\n-A subscription to Wyrm Magazine\n-Assorted recipe cards and other printed materials\n\nWyrm places emphasis on our CSA—an acronym for Community Supported Agriculture—because it is the most ethical mode of distribution for our produce. As a CSA member, you receive your vegetables directly from our farm for below market price. In turn, our farm benefits from your season-long commitment.',
        color: 'linear-gradient(135deg, #f154ff, #d447e1)'
      }
    };
  
    const popupOverlay = document.querySelector('.sticker-popup-overlay');
    const popup = document.querySelector('.sticker-popup');
    const popupTitle = document.querySelector('.sticker-popup-title');
    const popupContent = document.querySelector('.sticker-popup-content');
    const popupClose = document.querySelector('.sticker-popup-close');
  
    // Add click event to all stickers
    document.querySelectorAll('.sticker').forEach(sticker => {
      sticker.addEventListener('click', function() {
        const stickerId = this.id;
        const info = stickerInfo[stickerId];
        
        if (info) {
          // Set popup content
          popupTitle.textContent = info.title;
          popupContent.innerHTML = info.content;
          
          // Set popup background color to match sticker
          popup.style.background = info.color;
          
          // Show popup
          popupOverlay.style.display = 'flex';
          
          // Add a small delay before adding the fade-in class
          setTimeout(() => {
            popupOverlay.style.opacity = '1';
          }, 10);
        }
      });
    });
  
    // Close popup when clicking the close button
    popupClose.addEventListener('click', closePopup);
    
    // Close popup when clicking outside the popup
    popupOverlay.addEventListener('click', function(e) {
      if (e.target === popupOverlay) {
        closePopup();
      }
    });
    
    // Close popup when pressing Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        closePopup();
      }
    });
    
    function closePopup() {
      popupOverlay.style.opacity = '0';
      setTimeout(() => {
        popupOverlay.style.display = 'none';
      }, 300);
    }
  });
