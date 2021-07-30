let starWarsPeopleList = document.querySelector('ul');

fetch('https://swapi.dev/api/people')
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        let people = json.results;

        for(p of people){
            let listItem = document.createElement('li');
            listItem.innerHTML = '<p>' + p.name + '</p>';
            starWarsPeopleList.appendChild(listItem);
        }

    });


// Another Example Below!

let starWarsVehicleList = document.getElementById('starWarsVehicles');

fetch('https://swapi.dev/api/vehicles')
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        let vehicles = json.results;

        for(v of vehicles){
            let listItem2 = document.createElement('li')
            listItem2.innerHTML = '<p>' + v.name + '</p>';
            starWarsVehicleList.appendChild(listItem2);
        }
    })