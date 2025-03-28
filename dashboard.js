// Wait for the DOM to be fully loaded before executing code
document.addEventListener('DOMContentLoaded', function() {
    // =========================================
    // Sidebar Navigation Functionality
    // =========================================
    
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        // Add hamburger menu for mobile devices
        const hamburger = document.createElement('div');
        hamburger.className = 'hamburger-menu';
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        document.body.appendChild(hamburger);
        
        // Toggle sidebar visibility on mobile
        hamburger.addEventListener('click', function() {
            sidebar.classList.toggle('active');
        });
    }
    
    // Handle navigation item clicks
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            navItems.forEach(navItem => navItem.classList.remove('active'));
            this.classList.add('active');
            if (window.innerWidth <= 768 && sidebar) {
                sidebar.classList.remove('active');
            }
            e.preventDefault();
            updateContentArea(this.textContent.trim());
        });
    });
    
    // =========================================
    // Search Functionality
    // =========================================
    
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                const searchTerm = this.value.trim().toLowerCase();
                if (searchTerm) {
                    console.log(`Searching for: ${searchTerm}`);
                    filterMessagesBySearch(searchTerm);
                }
            }
        });
    }
    
    function filterMessagesBySearch(term) {
        const messageItems = document.querySelectorAll('.message-item');
        messageItems.forEach(item => {
            const messageText = item.querySelector('.message-text')?.textContent.toLowerCase() || '';
            const messageName = item.querySelector('.message-name')?.textContent.toLowerCase() || '';
            item.style.display = (messageText.includes(term) || messageName.includes(term)) ? 'flex' : 'none';
        });
    }
    
    // =========================================
    // Calendar Functionality
    // =========================================
    
    const currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();
    
    function updateCalendar() {
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const monthYearElem = document.querySelector('.month-year');
        if (monthYearElem) {
            monthYearElem.textContent = `${monthNames[currentMonth]} ${currentYear}`;
        }
    }
    
    updateCalendar();
    
    document.querySelector('.prev-month')?.addEventListener('click', function() {
        currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
        currentYear = (currentMonth === 11) ? currentYear - 1 : currentYear;
        updateCalendar();
    });
    
    document.querySelector('.next-month')?.addEventListener('click', function() {
        currentMonth = (currentMonth === 11) ? 0 : currentMonth + 1;
        currentYear = (currentMonth === 0) ? currentYear + 1 : currentYear;
        updateCalendar();
    });
    
    // =========================================
    // Notification & Message Functionality
    // =========================================
    
    document.querySelector('.notification-bell')?.addEventListener('click', function() {
        alert('You have new notifications');
    });
    
    document.querySelector('.message-icon')?.addEventListener('click', function() {
        document.querySelector('.message-list')?.scrollIntoView({ behavior: 'smooth' });
    });
    
    // =========================================
    // Settings and Logout Functionality
    // =========================================
    
    document.querySelector('.settings-gear')?.addEventListener('click', function() {
        alert('Settings panel would open here');
    });
    
    document.querySelector('.logout')?.addEventListener('click', function(e) {
        e.preventDefault();
        if (confirm('Are you sure you want to logout?')) {
            alert('You have been logged out.');
        }
    });
    
    // =========================================
    // Window Resize Handler
    // =========================================
    
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && sidebar?.classList.contains('active')) {
            sidebar.classList.remove('active');
        }
    });
});
