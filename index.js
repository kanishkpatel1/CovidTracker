function updateMap() {
    console.log("Updating map with realtime data")
    fetch("/data.json")
        .then(response => response.json())
        .then(rsp => {
            // console.log(rsp.data)
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;

                cases = element.infected;

                if (cases>255){
                    color='#780d05';
                }

                else if(cases>100){
                    color = "#c72014";
                }
                else if(cases>50){
                    color = "#ed3628";
                }
                else if(cases>10){
                    color = '#de645b'; 
                }

                else{
                    color='#eb756c';
                }

                // Mark on the map
                new mapboxgl.Marker({
                    draggable: false,
                    color: color
                }).setLngLat([longitude, latitude])
                .addTo(map); 
            });
        })
}

let interval = 20000;
setInterval( updateMap, interval); 