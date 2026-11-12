const searchInput = document.getElementById('ip');
        const searchButton = document.getElementById('sbtn');
        
        function searchOnGoogle() {
            const query = searchInput.value.trim();            
            if (query !== "") {
                window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
                searchInput.value = "";
            } else {
                alert("Please enter a query to search!");
            }
        }
        
        searchButton.addEventListener('click', searchOnGoogle);

        searchInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                searchOnGoogle();
            }
        });

        //add new feature - button