document.addEventListener('DOMContentLoaded', function() {
    // Sample data for assignments
    const assignments = [
        {
            id: 1,
            startDate: '1st of Feb. 2024',
            startTime: '12:30',
            deadline: '5th of Feb. 2024',
            deadlineTime: '17:00',
            title: 'ADS',
            attachments: 1,
            hasAttachment: true
        },
        {
            id: 2,
            startDate: '1st of Feb. 2024',
            startTime: '12:30',
            deadline: '5th of Feb. 2024',
            deadlineTime: '17:00',
            title: 'FDS',
            attachments: 2,
            hasAttachment: true
        },
        {
            id: 3,
            startDate: '1st of Feb. 2024',
            startTime: '12:30',
            deadline: '5th of Feb. 2024',
            deadlineTime: '17:00',
            title: 'SEM/CASE',
            attachments: 0,
            hasAttachment: true
        },
        {
            id: 4,
            startDate: '1st of Feb. 2024',
            startTime: '12:30',
            deadline: '5th of Feb. 2024',
            deadlineTime: '17:00',
            title: 'MAD',
            attachments: 6,
            hasAttachment: true
        },
        {
            id: 5,
            startDate: '1st of Feb. 2024',
            startTime: '12:30',
            deadline: '5th of Feb. 2024',
            deadlineTime: '17:00',
            title: 'SE',
            attachments: 0,
            hasAttachment: true
        }
    ];

    // Sample data for students
    const students = [
        {
            id: 101,
            name: 'Sophia',
            rollNum: 'EZ24AQG01',
            section: 'CSE-7',
            accountType: 'Member',
            contact: 'XXXXX XXXXX',
            rank: 1,
            marks: '289/300'
        },
        {
            id: 102,
            name: 'Sophia',
            rollNum: 'EZ24AQG01',
            section: 'CSE-7',
            accountType: 'Member',
            contact: 'XXXXX XXXXX',
            rank: 1,
            marks: '289/300'
        },
        {
            id: 103,
            name: 'Sophia',
            rollNum: 'EZ24AQG01',
            section: 'CSE-7',
            accountType: 'Member',
            contact: 'XXXXX XXXXX',
            rank: 1,
            marks: '289/300'
        }
    ];

    // Function to render assignments
    function renderAssignments() {
        const assignmentsList = document.getElementById('assignments-list');
        assignmentsList.innerHTML = '';

        assignments.forEach(assignment => {
            const row = document.createElement('div');
            row.className = 'table-row';
            
            row.innerHTML = `
                <div class="col">
                    <div class="checkbox" data-id="${assignment.id}"></div>
                </div>
                <div class="col">
                    <div class="edit-icon">
                        <i class="fas fa-pencil-alt"></i>
                    </div>
                </div>
                <div class="col">
                    <div class="date-col">
                        <div class="date">${assignment.startDate}</div>
                        <div class="time">${assignment.startTime}</div>
                    </div>
                </div>
                <div class="col">
                    <div class="date-col">
                        <div class="date">${assignment.deadline}</div>
                        <div class="time">${assignment.deadlineTime}</div>
                    </div>
                </div>
                <div class="col title-col">${assignment.title}</div>
                <div class="col attachment-col">
                    ${assignment.attachments > 0 ? assignment.attachments : '0'} 
                    <i class="fas fa-paperclip ${assignment.attachments > 0 ? 'has-attachment' : ''}"></i>
                </div>
                <div class="col">
                    <div class="message-btn">
                        <i class="fas fa-paper-plane"></i>
                    </div>
                    <div class="delete-btn">
                        <i class="fas fa-times"></i>
                    </div>
                </div>
            `;
            
            assignmentsList.appendChild(row);
        });

        // Add event listeners to checkboxes
        document.querySelectorAll('.checkbox').forEach(checkbox => {
            checkbox.addEventListener('click', function() {
                this.classList.toggle('checked');
                if (this.classList.contains('checked')) {
                    this.innerHTML = '<i class="fas fa-check"></i>';
                    this.style.backgroundColor = '#2196f3';
                    this.style.borderColor = '#2196f3';
                    this.style.color = 'white';
                } else {
                    this.innerHTML = '';
                    this.style.backgroundColor = 'transparent';
                    this.style.borderColor = '#ddd';
                }
            });
        });

        // Add event listeners to buttons
        document.querySelectorAll('.message-btn, .delete-btn, .edit-icon').forEach(btn => {
            btn.addEventListener('click', function() {
                // Simple animation for button click
                this.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 100);
            });
        });
    }

    // Function to render students
    function renderStudents() {
        const studentsList = document.getElementById('students-list');
        studentsList.innerHTML = '';

        students.forEach(student => {
            const row = document.createElement('div');
            row.className = 'student-row';
            
            row.innerHTML = `
                <div class="st-col small">${student.id}</div>
                <div class="st-col">
                    <div class="student-info">
                        <div class="student-img">
                            <img src="https://via.placeholder.com/35" alt="Student">
                        </div>
                        <div class="student-name">${student.name}</div>
                    </div>
                </div>
                <div class="st-col">${student.rollNum}</div>
                <div class="st-col">${student.section}</div>
                <div class="st-col">${student.accountType}</div>
                <div class="st-col">${student.contact}</div>
                <div class="st-col small">${student.rank}</div>
                <div class="st-col small">${student.marks}</div>
                <div class="st-col small">
                    <div class="action-icons">
                        <div class="action-icon">
                            <i class="fas fa-edit"></i>
                        </div>
                        <div class="action-icon">
                            <i class="fas fa-trash-alt"></i>
                        </div>
                    </div>
                </div>
            `;
            
            studentsList.appendChild(row);
        });

        // Add event listeners to action icons
        document.querySelectorAll('.action-icon').forEach(icon => {
            icon.addEventListener('click', function() {
                // Simple animation for icon click
                this.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 100);
            });
        });
    }

    // Initialize the page
    renderAssignments();
    renderStudents();

    // Add event listener to Add New button
    document.querySelector('.add-new-btn').addEventListener('click', function() {
        alert('Add new assignment feature will be implemented here.');
    });

    // Add event listeners to navigation items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelectorAll('.nav-item').forEach(i => {
                i.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    // Make filter dropdown work
    document.querySelector('.table-header .col.filter').addEventListener('click', function() {
        alert('Filter dropdown will be implemented here.');
    });

    // Make students filter dropdown work
    document.querySelector('.students-filter').addEventListener('click', function() {
        alert('Class filter dropdown will be implemented here.');
    });

    // Make main search functional
    document.querySelector('.search-container input').addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        // Filter assignments
        document.querySelectorAll('.table-row').forEach(row => {
            const title = row.querySelector('.title-col').textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                row.style.display = 'flex';
            } else {
                row.style.display = 'none';
            }
        });
    });

    // Make students search functional
    document.querySelector('.students-search input').addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        // Filter students
        document.querySelectorAll('.student-row').forEach(row => {
            const name = row.querySelector('.student-name').textContent.toLowerCase();
            const rollNum = row.querySelectorAll('.st-col')[2].textContent.toLowerCase();
            
            if (name.includes(searchTerm) || rollNum.includes(searchTerm)) {
                row.style.display = 'flex';
            } else {
                row.style.display = 'none';
            }
        });
    });
});