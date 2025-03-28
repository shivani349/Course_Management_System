document.addEventListener('DOMContentLoaded', function() {
    // Menu Item Selection
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all menu items
            menuItems.forEach(item => item.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
        });
    });
    
    // Calendar Date Selection
    const dates = document.querySelectorAll('.date:not(.disabled)');
    
    dates.forEach(date => {
        date.addEventListener('click', function() {
            // Remove active class from all dates
            dates.forEach(date => date.classList.remove('active'));
            
            // Add active class to clicked date
            this.classList.add('active');
        });
    });
    
    // Card hover effects
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // Responsive adjustments for HP Pavilion 14
    function adjustForScreenSize() {
        const width = window.innerWidth;
        
        // HP Pavilion 14 typically has a width around 1366px
        if (width <= 1366) {
            // Adjust font sizes
            document.documentElement.style.setProperty('--font-size-base', '13px');
            
            // Adjust spacing
            document.documentElement.style.setProperty('--spacing-base', '15px');
        } else {
            // Reset to default for larger screens
            document.documentElement.style.setProperty('--font-size-base', '14px');
            document.documentElement.style.setProperty('--spacing-base', '20px');
        }
    }
    
    // Call on load and on resize
    adjustForScreenSize();
    window.addEventListener('resize', adjustForScreenSize);
    
    // Simulate loading of content
    setTimeout(() => {
        document.querySelector('.dashboard').style.opacity = '1';
    }, 300);
    
    // Handout list interactions
    const handoutItems = document.querySelectorAll('.handout-item');
    
    handoutItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f9f9f9';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'white';
        });
        
        const editIcon = item.querySelector('.fa-edit');
        if (editIcon) {
            editIcon.addEventListener('click', function(e) {
                e.stopPropagation();
                alert('Edit functionality would go here');
            });
        }
    });
    
    // Add new button functionality
    const addNewBtns = document.querySelectorAll('.add-new');
    
    addNewBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            alert('Add new functionality would go here');
        });
    });
    
    // Search functionality
    const searchInput = document.querySelector('.search-bar input');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            
            // Example of searching through course cards
            const courseCards = document.querySelectorAll('.card h3');
            
            courseCards.forEach(card => {
                const cardTitle = card.textContent.toLowerCase();
                const cardContainer = card.closest('.card');
                
                if (cardTitle.includes(searchTerm) || searchTerm === '') {
                    cardContainer.style.display = 'block';
                } else {
                    cardContainer.style.display = 'none';
                }
            });
            
            // Example of searching through events
            const eventItems = document.querySelectorAll('.event-item h3');
            
            eventItems.forEach(event => {
                const eventTitle = event.textContent.toLowerCase();
                const eventContainer = event.closest('.event-item');
                
                if (eventTitle.includes(searchTerm) || searchTerm === '') {
                    eventContainer.style.display = 'flex';
                } else {
                    eventContainer.style.display = 'none';
                }
            });
        });
    }
    
    // Back button functionality
    const backButton = document.querySelector('.back-button');
    
    if (backButton) {
        backButton.addEventListener('click', function() {
            // Could implement actual navigation or history back
            alert('Back button clicked - would navigate back in a real application');
        });
    }
    
    // Header icons interactions
    const headerIcons = document.querySelectorAll('.header-icons i');
    
    headerIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            if (this.classList.contains('fa-bell')) {
                alert('Notifications panel would open here');
            } else if (this.classList.contains('fa-comment')) {
                alert('Messages panel would open here');
            } else if (this.classList.contains('fa-cog')) {
                alert('Settings panel would open here');
            }
        });
    });
    
    // Resource items interactions
    const resourceItems = document.querySelectorAll('.resource-item');
    
    resourceItems.forEach(item => {
        item.addEventListener('click', function() {
            const resourceType = this.querySelector('h3').textContent;
            alert(${resourceType} section would open here);
        });
        
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Calendar navigation
    const calendarNavButtons = document.querySelectorAll('.calendar-nav i');
    
    calendarNavButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.classList.contains('fa-chevron-left')) {
                alert('Would navigate to previous month');
            } else if (this.classList.contains('fa-chevron-right')) {
                alert('Would navigate to next month');
            }
        });
    });
    
    // Event item interactions
    const eventItems = document.querySelectorAll('.event-item');
    
    eventItems.forEach(item => {
        item.addEventListener('click', function() {
            const eventTitle = this.querySelector('h3').textContent;
            alert(Details for "${eventTitle}" would display here);
        });
    });
    
    // Logout button functionality
    const logoutBtn = document.querySelector('.logout-btn');
    
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (confirm('Are you sure you want to logout?')) {
                alert('Logout functionality would be triggered here');
            }
        });
    }
    
    // Initialize any interactive features
    function initializeFeatures() {
        // Example: Auto-hiding header on scroll down, showing on scroll up
        let lastScrollTop = 0;
        const header = document.querySelector('.header');
        
        window.addEventListener('scroll', function() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop) {
                // Scroll down
                header.style.transform = 'translateY(-100%)';
            } else {
                // Scroll up
                header.style.transform = 'translateY(0)';
            }
            
            lastScrollTop = scrollTop;
        });
    }
    
    // Call initialization
    initializeFeatures();
    
    // Function to handle device-specific optimizations for HP Pavilion 14
    function optimizeForDevice() {
        // Detect if we're on a laptop with approximate HP Pavilion 14 dimensions
        const isLaptopSize = window.innerWidth >= 1200 && window.innerWidth <= 1400;
        
        if (isLaptopSize) {
            // Optimize layout for laptop display
            document.querySelectorAll('.card').forEach(card => {
                card.style.padding = '20px 15px';
            });
            
            document.querySelectorAll('.section').forEach(section => {
                section.style.padding = '15px';
            });
            
            // Adjust font sizes for better readability on laptop display
            document.body.style.fontSize = '13px';
        }
    }
    
    // Run optimization on load and resize
    optimizeForDevice();
    window.addEventListener('resize', optimizeForDevice);
});