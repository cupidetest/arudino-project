console.log("hello");
// API endpoint URL
var f='';
    const apiUrl = 'https://api.quotable.io/random';

    // Fetch data from the API
    function fetchData(){
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
              f = "\"" + data.content + "\"";
              f = f + "<br/> -- " + data.author;
                // Handle the data
                const outputElement = document.getElementById('output').innerHTML=f;
            })
          }

            const fetchButton = document.getElementById('fetchButton');
            fetchButton.addEventListener('click', fetchData);
