function showPage(pageId) {
    document.querySelectorAll('.content').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

function viewAttendance(section) {
    showPage('viewAttendance');
}

function saveAttendance() {
    const date = document.getElementById("date").value;
    const checkboxes = document.querySelectorAll('#viewAttendance input[type="checkbox"]');
    const rows = document.querySelectorAll('#viewAttendance table tr');

    let records = [];
    for (let i = 1; i < rows.length; i++) { // skip header
        const studentName = rows[i].children[0].textContent;
        const status = checkboxes[i - 1].checked;
        records.push({ studentName, date, status });
    }

    // Save to localStorage
    let existing = JSON.parse(localStorage.getItem("attendanceRecords")) || [];
    existing.push(...records);
    localStorage.setItem("attendanceRecords", JSON.stringify(existing));

    alert("Attendance saved to local storage!");
}

function showLocalStorage() {
    const data = JSON.parse(localStorage.getItem("attendanceRecords")) || [];
    document.getElementById("localStorageData").textContent = JSON.stringify(data, null, 2);
}

function clearLocalStorage() {
    localStorage.removeItem("attendanceRecords");
    document.getElementById("localStorageData").textContent = "";
    alert("Local storage cleared!");
}
