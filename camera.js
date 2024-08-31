async function startCamera() {
    try {
        // Check if the browser supports getUserMedia
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            // Request video access with the back camera
            const stream = await navigator.mediaDevices.getUserMedia({
                video: {
                    facingMode: { exact: "environment" } // Access the back camera
                }
            });

            // Get the video element
            const videoElement = document.getElementById('video');

            // Set the source of the video element to the stream
            videoElement.srcObject = stream;

            console.log('Back camera access granted');
        } else {
            console.error('getUserMedia not supported on this browser');
        }
    } catch (error) {
        console.error('Error accessing camera: ', error);
    }
}

// Start the camera when the page loads
window.addEventListener('load', startCamera);
