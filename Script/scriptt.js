$(document).ready(function(){
    $(' .fa-bars') .click(function(){
        $(this).toggleclass('fa-times');
        $('.nav').toggleclass('nav-bars');
    });
    $(window).on('load scroll',function(){
        $(' .bar').removeclass('fa-times');
        $('.nav').removeclass('nav-toggle');
    })
    $(window)
});












const serialNumber = document.getElementById('serialNumber').value;
    const maintenanceHistory = document.getElementById('maintenanceHistory').value;





nm//mente//


document.getElementById('maintenanceForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect the input values
    const fullName = this[0].value; // Full name
    const phone = this[1].value; // Phone number
    const email = this[2].value; // Email
    const model = this[3].value; // Model
    const serial = this[4].value; // Serial number
    const maintenanceHistory = document.getElementById('maintenanceHistory').value;

    // Redirect to another page with query parameters
    window.location.href = `maintenance.html?fullName=${encodeURIComponent(fullName)}&phone=${encodeURIComponent(phone)}&email=${encodeURIComponent(email)}&model=${encodeURIComponent(model)}&serial=${encodeURIComponent(serial)}&maintenanceHistory=${encodeURIComponent(maintenanceHistory)}`;


    //menetenance////

    function getQueryParams() {
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
                <p><strong>Full Name:</strong> ${params.fullName}</p>
                <p><strong>Phone:</strong> ${params.phone}</p>
                <p><strong>Email:</strong> ${params.email}</p>
                <p><strong>Model:</strong> ${params.model}</p>
                <p><strong>Serial Number:</strong> ${params.serial}</p>
        <p><strong>Maintenance History:</strong> ${params.maintenanceHistory || 'No history provided.'}</p>










        const params = getQueryParams();
document.getElementById('confirmationDetails').innerHTML = `
    <p><strong>Name:</strong> ${params.name}</p>
    <p><strong>phone:</strong> ${params.email}</p>
    <p><strong>device:</strong> ${params.model}</p>
    <p><strong>Serial Number:</strong> ${params.serialNumber}</p>
    <p><strong>Maintenance History:</strong> ${params.maintenanceHistory || 'No history provided.'}</p>
`;

