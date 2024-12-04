const factContainer = document.getElementById('fact-container');
const loadingMessage = document.getElementById('loading-message');
const fact = document.getElementById('fact')
const getFactBtn = document.getElementById('get-fact-btn');  

getFactBtn.addEventListener('click', fetchCatFact);

function fetchCatFact() {
    loadingMessage.innerText = 'Loading...';
    fact.innerText = '';

    const xhr = new XMLHttpRequest();

    
    const url = "https://catfact.ninja/fact";

    xhr.open("GET", url, true);

  
    xhr.onload = function () {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            loadingMessage.innerText = ''; 
            fact.innerText = data.fact; 
        } else {
            loadingMessage.innerText = 'Error!'; 
            console.error('Error:', xhr.statusText);
        }
    };

    
    xhr.onerror = function () {
        loadingMessage.innerText = 'Error!';
        console.error('Network Error');
    };

   
    xhr.send();
}
