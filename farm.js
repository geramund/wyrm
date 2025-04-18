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
            src: '1x/farm/veg4.jpeg',
            description: 'Fields In Action'
        },
        {
            src: '1x/farm/veg5.jpeg',
            description: 'Grow Babies Grow!'
        },
        {
            src: '1x/farm/veg6.jpg',
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
        content: 'On insensible possession oh particular attachment at excellence in. The books arose but miles happy she. It building contempt or interest children mistress of unlocked no. Offending she contained mrs led listening resembled. Delicate marianne absolute men dashwood landlord and offended. Suppose cottage between and way. Minuter him own clothes but observe country. Agreement far boy otherwise rapturous incommode favourite.',
        color: 'linear-gradient(135deg, #ff3964, #e7325a)'
      },
      'sticker-2': {
        title: 'WEEKLY HARVEST',
        content: 'Prevailed sincerity behaviour to so do principle mr. As departure at no propriety zealously my. On dear rent if girl view. First on smart there he sense. Earnestly enjoyment her you resources. Brother chamber ten old against. Mr be cottage so related minuter is. Delicate say and blessing ladyship exertion few margaret. Delight herself welcome against smiling its for. Suspected discovery by he affection household of principle perfectly he.',
        color: 'linear-gradient(135deg, #ffed4d, #ebdb47)'
      },
      'sticker-3': {
        title: 'HUDSON VALLEY GROWN',
        content: 'Examine she brother prudent add day ham. Far stairs now coming bed oppose hunted become his. You zealously departure had procuring suspicion. Books whose front would purse if be do decay. Quitting you way formerly disposed perceive ladyship are. Common turned boy direct and yet.',        
        color: 'linear-gradient(135deg, #87ff4b, #81e94d)'
      },
      'sticker-4': {
        title: 'EAST VILLAGE PICKUP',
        content: 'Are sentiments apartments decisively the especially alteration. Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. Incommode so intention defective at convinced. Led income months itself and houses you. After nor you leave might share court balls.',
        color: 'linear-gradient(135deg, #ffc851, #f3a13c)'
      },
      'sticker-5': {
        title: 'PRICING DETAILS',
        content:'Living valley had silent eat merits esteem bed. In last an or went wise as left. Visited civilly am demesne so colonel he calling. So unreserved do interested increasing sentiments. Vanity day giving points within six not law. Few impression difficulty his use has comparison decisively.',
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