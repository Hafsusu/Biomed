/*document.getElementById('maintenanceForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect the input values
    const fullName = this[0].value;
    const email = this[1].value;
    const device = this[2].value;
    const serialNumber = document.getElementById('serialNumber').value;
    const maintenanceHistory = document.getElementById('maintenanceHistory').value;

    // Redirect to another page with query parameters
    window.location.href = `maintenance.html?name=${encodeURIComponent(fullName)}&email=${encodeURIComponent(email)}&model=${encodeURIComponent(device)}&serialNumber=${encodeURIComponent(serialNumber)}&maintenanceHistory=${encodeURIComponent(maintenanceHistory)}`;
});*/

document.getElementById('maintenanceForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect the input values
    const fullName = this[0].value;
    const email = this[1].value;
    const device = this[2].value;
    const serialNumber = document.getElementById('serialNumber').value;
    const maintenanceHistory = document.getElementById('maintenanceHistory').value;

    // Create an object to store the maintenance data
    const maintenanceData = {
        fullName,
        email,
        device,
        serialNumber,
        maintenanceHistory
    };

    // Save the maintenance data to local storage
    saveMaintenanceData(maintenanceData);

    // Redirect to the maintenance history page
    window.location.href = 'maintenance.html';
});

// Function to save maintenance data to local storage
function saveMaintenanceData(data) {
    // Retrieve existing data from local storage
    const existingData = JSON.parse(localStorage.getItem('maintenanceHistory')) || [];
    // Add new data to the existing array
    existingData.push(data);
    // Save back to local storage
    localStorage.setItem('maintenanceHistory', JSON.stringify(existingData));
}


