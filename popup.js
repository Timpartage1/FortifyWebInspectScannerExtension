document.addEventListener('DOMContentLoaded', function() {
    const scanButton = document.getElementById('scanButton');
    const urlInput = document.getElementById('urlInput');
  
    scanButton.addEventListener('click', function() {
      const url = urlInput.value.trim();
      if (url !== '') {
        // Implement scan logic here
        console.log('Scanning URL:', url);
        // Add code to interact with Fortify WebInspect API using fetch or XMLHttpRequest
        // Remember to handle the API request and response
      } else {
        console.log('Please enter a valid URL');
      }
    });
  });


  // Listen for clicks on the extension icon
chrome.action.onClicked.addListener((tab) => {
    // Retrieve the active tab URL
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const url = tabs[0]?.url;
      if (url) {
        initiateScan(url);
      } else {
        console.error('Unable to get active tab URL');
      }
    });
  });
  
  function initiateScan(url) {
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
    const apiUrl = 'https://api.example.com/webinspect/scans'; // Replace with the actual API endpoint
  
    const body = {
      url: url,
      // Add other required parameters for the scan
    };
  
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
        // Add other necessary headers
      },
      body: JSON.stringify(body)
    })
    .then(response => {
      if (response.ok) {
        console.log('Scan initiated successfully');
        // Handle success - maybe display a success message to the user
      } else {
        console.error('Failed to initiate scan');
        // Handle error - display an error message to the user
      }
    })
    .catch(error => {
      console.error('Error initiating scan:', error);
      // Handle any other errors that occur during the request
    });
  }
  
  