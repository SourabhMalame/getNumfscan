function onScanSuccess(decodedText, decodedResult) {
    // Handle the result here
    document.getElementById('result').innerText = decodedText;
    console.log(`Code scanned = ${decodedText}`, decodedResult);
}

function onScanFailure(error) {
    // Handle scan failure, usually better to ignore and keep scanning
    console.warn(`Code scan error = ${error}`);
}

// Create an instance of Html5QrcodeScanner with the ID of the div
const html5QrCode = new Html5Qrcode("reader");

// Start scanning the back camera
html5QrCode.start(
    { facingMode: "environment" }, // Specify the back camera
    {
        fps: 10,    // Optional, frame per seconds for scanning
        qrbox: { width: 250, height: 250 }  // Optional, specify scanning box dimensions
    },
    onScanSuccess,
    onScanFailure
).catch(err => {
    console.log(`Unable to start scanning, error: ${err}`);
});
