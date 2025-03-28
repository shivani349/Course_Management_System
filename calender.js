document.addEventListener("DOMContentLoaded", () => {
    const calendarGrid = document.getElementById("calendar-grid");
    const monthPicker = document.getElementById("calendar-month");
    const eventDetails = document.getElementById("event-details");
    const taskProgress = document.getElementById("task-progress");
    const attendanceProgress = document.getElementById("attendance-progress");

    // Sample Events
    const events = {
        "2025-03-15": "📚 Math Exam",
        "2025-03-20": "📌 Science Assignment Due",
        "2025-04-01": "🎉 Holiday - Spring Break",
        "2025-04-10": "📝 English Project Submission",
        "2025-04-15": "🎓 Seminar on Career Guidance"
    };

    // Generate Calendar
    function generateCalendar(year, month) {
        calendarGrid.innerHTML = "";
        let daysInMonth = new Date(year, month + 1, 0).getDate();

        for (let day = 1; day <= daysInMonth; day++) {
            let dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
            let dayElement = document.createElement("div");
            dayElement.className = "calendar-day";
            dayElement.textContent = day;

            if (events[dateStr]) {
                dayElement.classList.add("event-day");
            }

            dayElement.addEventListener("click", () => {
                eventDetails.innerHTML = events[dateStr] ? `<p>${events[dateStr]}</p>` : `<p>No events on this day.</p>`;
            });

            calendarGrid.appendChild(dayElement);
        }
    }

    // Update Calendar on Month Change
    monthPicker.addEventListener("change", () => {
        let [year, month] = monthPicker.value.split("-");
        generateCalendar(parseInt(year), parseInt(month) - 1);
    });

    // Set Default Month
    let today = new Date();
    monthPicker.value = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}`;
    generateCalendar(today.getFullYear(), today.getMonth());

    // Set Progress Bars
    setTimeout(() => {
        taskProgress.style.width = "50%";
        attendanceProgress.style.width = "85%";
    }, 500);
});
