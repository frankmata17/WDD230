document.addEventListener('DOMContentLoaded', function () {
    const calendarDaysContainer = document.querySelector('.calendar-days');
    const calendarBody = document.getElementById('calendar-body');
    const calendarHeader = document.querySelector('.calendar-header');

    // Function to get the number of days in a month
    const getDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    // Function to get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const getDayOfWeek = (year, month, day) => {
        return new Date(year, month, day).getDay();
    };

    // Function to generate calendar days
    const generateCalendarDays = () => {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth();

        // Set the calendar header to the current month and year
        calendarHeader.textContent = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(currentDate);

        const daysInMonth = getDaysInMonth(currentYear, currentMonth);

        // Clear previous content
        calendarDaysContainer.innerHTML = '';
        calendarBody.innerHTML = '';

        // Generate days of the week
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        // Generate the header row with days of the week
        const weekHeaderRow = document.createElement('tr');
        daysOfWeek.forEach(day => {
            const dayHeaderCell = document.createElement('th');
            dayHeaderCell.textContent = day;
            weekHeaderRow.appendChild(dayHeaderCell);
        });
        calendarBody.appendChild(weekHeaderRow);

        // Generate calendar days
        let dayOfWeek = getDayOfWeek(currentYear, currentMonth, 1);

        // Create the first row
        const firstRow = document.createElement('tr');
        calendarBody.appendChild(firstRow);

        // Add empty cells for the days before the first day of the month
        for (let i = 0; i < dayOfWeek; i++) {
            const emptyCell = document.createElement('td');
            emptyCell.classList.add('empty-cell');
            firstRow.appendChild(emptyCell);
        }

        // Generate calendar days
        for (let day = 1; day <= daysInMonth; day++) {
            const calendarDayCell = document.createElement('td');
            calendarDayCell.textContent = day;
            calendarDayCell.classList.add('calendar-day-cell');
            calendarDayCell.setAttribute('data-day-of-week', dayOfWeek);
            calendarBody.lastElementChild.appendChild(calendarDayCell);

            // If it's the last day of the week, create a new row
            if (dayOfWeek === 6) {
                dayOfWeek = 0; // Reset day of the week counter
                const newRow = document.createElement('tr');
                calendarBody.appendChild(newRow);
            } else {
                dayOfWeek++;
            }
        }
    };

    // Generate calendar days when the page loads
    generateCalendarDays();
});
