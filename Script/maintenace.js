// Function to save maintenance data to local storage
function saveMaintenanceData(data) {
    // Retrieve existing data from local storage
    const existingData = JSON.parse(localStorage.getItem('maintenanceHistory')) || [];
    // Add new data to the existing array
    existingData.push(data);
    // Save back to local storage
    localStorage.setItem('maintenanceHistory', JSON.stringify(existingData));
}

// Function to display maintenance history
function displayMaintenanceHistory() {
    const historyData = JSON.parse(localStorage.getItem('maintenanceHistory')) || [];
    const confirmationDetails = document.getElementById('confirmationDetails');

    // Clear existing rows
    confirmationDetails.innerHTML = '';

    // Populate the table with stored history
    historyData.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.fullName}</td>
            <td>${item.phone}</td>
            <td>${item.email}</td>
            <td>${item.model}</td>
            <td>${item.serialNumber}</td>
        `;
        confirmationDetails.appendChild(row);
    });
}

// Call displayMaintenanceHistory on page load
document.addEventListener('DOMContentLoaded', displayMaintenanceHistory);

/*function getQueryParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const queryArray = queryString.split('&');

    queryArray.forEach(param => {
        const [key, value] = param.split('=');
        params[decodeURIComponent(key)] = decodeURIComponent(value.replace(/\+/g, ' '));
    });

    return params;
}

// Display confirmation details
const params = getQueryParams();
document.getElementById('confirmationDetails').innerHTML = `
    <p><strong>Name:</strong> ${params.name}</p>
    <p><strong>phone:</strong> ${params.email}</p>
    <p><strong>device:</strong> ${params.model}</p>
    <p><strong>Serial Number:</strong> ${params.serialNumber}</p>
    <p><strong>Maintenance History:</strong> ${params.maintenanceHistory || 'No history provided.'}</p>
`;
*/



