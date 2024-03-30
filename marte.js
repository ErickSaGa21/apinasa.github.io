   
        const apiKey = 'FDCec62SwXlBlclaCVBP7k4QyifEJzwrgaY0c7fO'; 
    
        // Función para hacer la solicitud a la API
        function getRoverPhotos(fecha, cameou, reberou) {
            const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${reberou}/photos?api_key=${apiKey}&earth_date=${fecha}&camera=${cameou}`
            fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                displayPhotos(data.photos);
            })
            .catch(error => {
                console.log('Error fetching data:', error);
            });
        }
    
        // Función para mostrar las fotos en la página
        function displayPhotos(photos) {
            const photosDiv = document.getElementById('photos');
            photosDiv.innerHTML = '';
    
            photos.forEach(photo => {
                const img = document.createElement('img');
                img.src = photo.img_src;
                img.alt = photo.camera.full_name;
    
                const photoDiv = document.createElement('div');
                photoDiv.classList.add('photo');
                photoDiv.appendChild(img);
    
                photosDiv.appendChild(photoDiv);
            });
        }
    
        // Función para obtener fotos cuando se hace clic en el botón
        window.getPhotos = function() {
            let solInput = document.getElementById('solInput');
            let camerain =  document.getElementById('camera');
            let roberin =  document.getElementById('robert');
            let fecha = solInput.value.trim();
            let cameou =camerain.value.trim();
            let reberou = roberin.value.trim();
    
            if (fecha && cameou && reberou === '') {
                alert('Please enter a Martian Sol.');
                return;
            }
    
            getRoverPhotos(fecha, cameou, reberou);
        };
    