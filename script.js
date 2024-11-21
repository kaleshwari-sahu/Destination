const searchBtn = document.getElementById("searchBtn");
const countryInput = document.getElementById("countryInput");
const resultsContainer = document.getElementById("resultsContainer");

// Sample data for travel destinations
const travelData = {
    "india": [
        {
            destination: "New Delhi",
            bestTourismPlace: "India Gate",
            distanceFromIndia: "0 km", // India is the reference point
            duration: "5 days",
            travelOptions: {
                bus: { duration: "Variable", cost: "500 INR" },
                train: { duration: "Variable", cost: "1,000 INR" },
                flight: { duration: "N/A", cost: "N/A" },
            },
            activities: ["Visit India Gate", "Qutub Minar", "Red Fort"],
            image: "https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg"
        }
    ],
    "france": [
        {
            destination: "Paris",
            bestTourismPlace: "Eiffel Tower",
            distanceFromIndia: "6,700 km",
            duration: "7 days",
            travelOptions: {
                bus: { duration: "N/A", cost: "N/A" },
                train: { duration: "N/A", cost: "N/A" },
                flight: { duration: "8 hours", cost: "60,000 INR" },
            },
            activities: ["Visit Eiffel Tower", "Explore Louvre Museum", "Seine River Cruise"],
            image: "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" 
        }
    ],
    "italy": [
        {
            destination: "Rome",
            bestTourismPlace: "Colosseum",
            distanceFromIndia: "6,700 km",
            duration: "7 days",
            travelOptions: {
                bus: { duration: "N/A", cost: "N/A" },
                train: { duration: "N/A", cost: "N/A" },
                flight: { duration: "8 hours", cost: "60,000 INR" },
            },
            activities: ["Visit Colosseum", "Vatican City Tour", "Trevi Fountain"],
            image: "https://media.istockphoto.com/id/539115110/photo/colosseum-in-rome-and-morning-sun-italy.jpg?s=612x612&w=0&k=20&c=9NtFxHI3P2IBWRY9t0NrfPZPR4iusHmVLbXg2Cjv9Fs=" 
        }
    ],
    "usa": [
        {
            destination: "New York City",
            bestTourismPlace: "Statue of Liberty",
            distanceFromIndia: "12,000 km",
            duration: "10 days",
            travelOptions: {
                bus: { duration: "N/A", cost: "N/A" },
                train: { duration: "N/A", cost: "N/A" },
                flight: { duration: "15 hours", cost: "80,000 INR" },
            },
            activities: ["Visit Statue of Liberty", "Central Park", "Broadway Show"],
            image: "https://static5.depositphotos.com/1030296/395/i/450/depositphotos_3958211-stock-photo-new-york-cityscape-tourism-concept.jpg"
        }
    ],
    "japan": [
        {
            destination: "Tokyo",
            bestTourismPlace: "Tokyo Tower",
            distanceFromIndia: "5,900 km",
            duration: "6 days",
            travelOptions: {
                bus: { duration: "N/A", cost: "N/A" },
                train: { duration: "N/A", cost: "N/A" },
                flight: { duration: "7 hours", cost: "55,000 INR" },
            },
            activities: ["Visit Tokyo Tower", "Explore Shibuya", "Senso-ji Temple"],
            image: "https://assets.vogue.com/photos/5e387ae1be72df00088bf8c8/master/w_2560%2Cc_limit/EEX74X.jpg"
        }
    ],
    "spain": [
        {
            destination: "Barcelona",
            bestTourismPlace: "Sagrada Familia",
            distanceFromIndia: "7,300 km",
            duration: "7 days",
            travelOptions: {
                bus: { duration: "N/A", cost: "N/A" },
                train: { duration: "N/A", cost: "N/A" },
                flight: { duration: "8.5 hours", cost: "65,000 INR" },
            },
            activities: ["Visit Sagrada Familia", "Park Güell", "Gothic Quarter"],
            image: "https://cdn.kimkim.com/files/a/content_articles/featured_photos/9fc6e563b8ba3e78eae604da7e58d983a5294d27/big-c18195b2dfe79a520e4ec9c43832057a.jpg"
        }
    ],
    "australia": [
        {
            destination: "Sydney",
            bestTourismPlace: "Sydney Opera House",
            distanceFromIndia: "10,000 km",
            duration: "8 days",
            travelOptions: {
                bus: { duration: "N/A", cost: "N/A" },
                train: { duration: "N/A", cost: "N/A" },
                flight: { duration: "14 hours", cost: "70,000 INR" },
            },
            activities: ["Visit Sydney Opera House", "Bondi Beach", "Harbour Bridge"],
            image: "https://media.cnn.com/api/v1/images/stellar/prod/191011110307-02-australia-beautiful-places.jpg?q=w_1110,c_fill"
        }
    ],
    "brazil": [
        {
            destination: "Rio de Janeiro",
            bestTourismPlace: "Christ the Redeemer",
            distanceFromIndia: "14,000 km",
            duration: "10 days",
            travelOptions: {
                bus: { duration: "N/A", cost: "N/A" },
                train: { duration: "N/A", cost: "N/A" },
                flight: { duration: "20 hours", cost: "90,000 INR" },
            },
            activities: ["Visit Christ the Redeemer", "Copacabana Beach", "Sugarloaf Mountain"],
            image: "https://i.ytimg.com/vi/sW1SWAN6zlQ/sddefault.jpg"
        }
    ],
    "united kingdom": [
        {
            destination: "London",
            bestTourismPlace: "Buckingham Palace",
            distanceFromIndia: "7,200 km",
            duration: "7 days",
            travelOptions: {
                bus: { duration: "N/A", cost: "N/A" },
                train: { duration: "N/A", cost: "N/A" },
                flight: { duration: "9 hours", cost: "65,000 INR" },
            },
            activities: ["Visit Buckingham Palace", "London Eye", "Tower of London"],
            image: "https://www.webhopers.com/wp-content/uploads/2023/05/IT-Companies-in-UK.jpg"
        }
    ],
    "thailand": [
        {
            destination: "Bangkok",
            bestTourismPlace: "Grand Palace",
            distanceFromIndia: "3,000 km",
            duration: "5 days",
            travelOptions: {
                bus: { duration: "N/A", cost: "N/A" },
                train: { duration: "N/A", cost: "N/A" },
                flight: { duration: "4 hours", cost: "15,000 INR" },
            },
            activities: ["Visit Grand Palace", "Explore Chatuchak Market", "Wat Arun"],
            image: "https://www.wanderlustmagazine.com/wp-content/uploads/2023/11/grand-palace-wat-phaew-thailand-scaled.jpg"
        }
    ],
    "china": [
        {
            destination: "Beijing",
            bestTourismPlace: "Great Wall",
            distanceFromIndia: "3,800 km",
            duration: "6 days",
            travelOptions: {
                bus: { duration: "N/A", cost: "N/A" },
                train: { duration: "N/A", cost: "N/A" },
                flight: { duration: "5 hours", cost: "25,000 INR" },
            },
            activities: ["Visit Great Wall", "Forbidden City", "Temple of Heaven"],
            image: "https://www.planetware.com/wpimages/2020/01/china-in-pictures-beautiful-places-to-photograph-the-great-wall.jpg"
        }
    ],
    "germany": [
        {
            destination: "Berlin",
            bestTourismPlace: "Brandenburg Gate",
            distanceFromIndia: "6,200 km",
            duration: "7 days",
            travelOptions: {
                bus: { duration: "N/A", cost: "N/A" },
                train: { duration: "N/A", cost: "N/A" },
                flight: { duration: "9 hours", cost: "60,000 INR" },
            },
            activities: ["Visit Brandenburg Gate", "Berlin Wall", "Museum Island"],
            image: "https://media.radissonhotels.net/image/marketing-campaigns-cese/promotional/16256-147379-f74701594_3xl.jpg?impolicy=HomeHero"
        }
    ],
    "mexico": [
        {
            destination: "Mexico City",
            bestTourismPlace: "Teotihuacan",
            distanceFromIndia: "14,500 km",
            duration: "10 days",
            travelOptions: {
                bus: { duration: "N/A", cost: "N/A" },
                train: { duration: "N/A", cost: "N/A" },
                flight: { duration: "20 hours", cost: "85,000 INR" },
            },
            activities: ["Visit Teotihuacan", "Chapultepec Park", "Frida Kahlo Museum"],
            image: "https://www.fodors.com/wp-content/uploads/2021/05/UltimateMexicoCity__HERO_shutterstock_1058054480.jpg"
        }
    ],
    "canada": [
        {
            destination: "Toronto",
            bestTourismPlace: "CN Tower",
            distanceFromIndia: "12,000 km",
            duration: "10 days",
            travelOptions: {
                bus: { duration: "N/A", cost: "N/A" },
                train: { duration: "N/A", cost: "N/A" },
                flight: { duration: "16 hours", cost: "80,000 INR" },
            },
            activities: ["Visit CN Tower", "Royal Ontario Museum", "Niagara Falls"],
            image: "https://media.cnn.com/api/v1/images/stellar/prod/140630124917-12-canada-most-beautiful-places.jpg?q=w_2000,h_1363,x_0,y_0,c_fill"
        }
    ],
    "greece": [
        {
            destination: "Athens",
            bestTourismPlace: "Acropolis",
            distanceFromIndia: "5,500 km",
            duration: "6 days",
            travelOptions: {
                bus: { duration: "N/A", cost: "N/A" },
                train: { duration: "N/A", cost: "N/A" },
                flight: { duration: "8 hours", cost: "55,000 INR" },
            },
            activities: ["Visit Acropolis", "Plaka District", "Parthenon"],
            image: "https://t4.ftcdn.net/jpg/02/64/77/37/360_F_264773707_kR9T9uvhoo4YxrpXIVXwLHrFKT1PAaRk.jpg"
        }
    ],
    "egypt": [
        {
            destination: "Cairo",
            bestTourismPlace: "Pyramids of Giza",
            distanceFromIndia: "5,700 km",
            duration: "6 days",
            travelOptions: {
                bus: { duration: "N/A", cost: "N/A" },
                train: { duration: "N/A", cost: "N/A" },
                flight: { duration: "7 hours", cost: "50,000 INR" },
            },
            activities: ["Visit Pyramids of Giza", "Egyptian Museum", "Nile River Cruise"],
            image: "https://t3.ftcdn.net/jpg/05/59/00/84/360_F_559008444_6gt4EbJy24u75gCrxHYFQQsxMATczj3P.jpg"
        }
    ],
    "turkey": [
        {
            destination: "Istanbul",
            bestTourismPlace: "Hagia Sophia",
            distanceFromIndia: "5,200 km",
            duration: "6 days",
            travelOptions: {
                bus: { duration: "N/A", cost: "N/A" },
                train: { duration: "N/A", cost: "N/A" },
                flight: { duration: "7 hours", cost: "45,000 INR" },
            },
            activities: ["Visit Hagia Sophia", "Topkapi Palace", "Grand Bazaar"],
            image: "https://thumbs.dreamstime.com/b/blue-mosque-sultan-ahmet-istanbul-evening-view-turkey-315491131.jpg"
        }
    ],
    "south africa": [
        {
            destination: "Cape Town",
            bestTourismPlace: "Table Mountain",
            distanceFromIndia: "7,000 km",
            duration: "7 days",
            travelOptions: {
                bus: { duration: "N/A", cost: "N/A" },
                train: { duration: "N/A", cost: "N/A" },
                flight: { duration: "10 hours", cost: "70,000 INR" },
            },
            activities: ["Visit Table Mountain", "Cape of Good Hope", "Robben Island"],
            image: "https://www.thetimes.com/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F4b50e023-2a4b-4f99-8cb4-6d383858a385.jpg?crop=1564%2C880%2C318%2C0&resize=1200"
        }
    ],
    "argentina": [
        {
            destination: "Buenos Aires",
            bestTourismPlace: "La Boca",
            distanceFromIndia: "14,000 km",
            duration: "10 days",
            travelOptions: {
                bus: { duration: "N/A", cost: "N/A" },
                train: { duration: "N/A", cost: "N/A" },
                flight: { duration: "22 hours", cost: "95,000 INR" },
            },
            activities: ["Visit La Boca", "Tango Show", "Recoleta Cemetery"],
            image: "https://media.istockphoto.com/id/1159474019/photo/part-of-the-iguazu-falls-seen-from-the-argentinian-national-park.jpg?s=612x612&w=0&k=20&c=rDUTt2nk74mB6G8-QmQbw_pC15KeckQQVYKjCkPwKJ8="
        }
    ],
    "russia": [
        {
            destination: "Moscow",
            bestTourismPlace: "Red Square",
            distanceFromIndia: "3,800 km",
            duration: "7 days",
            travelOptions: {
                bus: { duration: "N/A", cost: "N/A" },
                train: { duration: "N/A", cost: "N/A" },
                flight: { duration: "6 hours", cost: "50,000 INR" },
            },
            activities: ["Visit Red Square", "Kremlin", "Bolshoi Theatre"],
            image: "https://i.natgeofe.com/k/415419c5-3768-4c8f-8697-f90de7a6075b/russia-st-basils_16x9.jpg?w=1200"
        }
    ],
    "switzerland": [
        {
            destination: "Zurich",
            bestTourismPlace: "Lake Zurich",
            distanceFromIndia: "7,600 km",
            duration: "7 days",
            travelOptions: {
                bus: { duration: "N/A", cost: "N/A" },
                train: { duration: "N/A", cost: "N/A" },
                flight: { duration: "9 hours", cost: "65,000 INR" },
            },
            activities: ["Visit Lake Zurich", "Bahnhofstrasse", "Old Town"],
            image: "https://www.planetware.com/wpimages/2019/10/switzerland-in-pictures-most-beautiful-places-matterhorn.jpg"
        }
    ],
    "portugal": [
        {
            destination: "Lisbon",
            bestTourismPlace: "Belem Tower",
            distanceFromIndia: "7,300 km",
            duration: "7 days",
            travelOptions: {
                bus: { duration: "N/A", cost: "N/A" },
                train: { duration: "N/A", cost: "N/A" },
                flight: { duration: "8 hours", cost: "55,000 INR" },
            },
            activities: ["Visit Belem Tower", "Explore Alfama", "Jerónimos Monastery"],
            image: "https://www.rjtravelagency.com/wp-content/uploads/2023/10/Portugal.jpg"
        }
    ],
    "new zealand": [
        {
            destination: "Auckland",
            bestTourismPlace: "Sky Tower",
            distanceFromIndia: "10,000 km",
            duration: "10 days",
            travelOptions: {
                bus: { duration: "N/A", cost: "N/A" },
                train: { duration: "N/A", cost: "N/A" },
                flight: { duration: "14 hours", cost: "75,000 INR" },
            },
            activities: ["Visit Sky Tower", "Waitomo Caves", "Bay of Islands"],
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/1_Milford_Sound.jpg/640px-1_Milford_Sound.jpg"
        }
    ],
    "south korea": [
        {
            destination: "Seoul",
            bestTourismPlace: "Gyeongbokgung Palace",
            distanceFromIndia: "5,400 km",
            duration: "6 days",
            travelOptions: {
                bus: { duration: "N/A", cost: "N/A" },
                train: { duration: "N/A", cost: "N/A" },
                flight: { duration: "7 hours", cost: "55,000 INR" },
            },
            activities: ["Visit Gyeongbokgung Palace", "N Seoul Tower", "Myeongdong"],
            image: "https://media.istockphoto.com/id/1137568153/photo/cherry-blossoms-in-spring-seoul-in-korea.jpg?s=612x612&w=0&k=20&c=SP8py_0WQrn4mMFdrd0bvk7-MfRWxJl6C3AsHxJq8ck="
        }
    ],
    "netherlands": [
        {
            destination: "Amsterdam",
            bestTourismPlace: "Anne Frank House",
            distanceFromIndia: "7,000 km",
            duration: "6 days",
            travelOptions: {
                bus: { duration: "N/A", cost: "N/A" },
                train: { duration: "N/A", cost: "N/A" },
                flight: { duration: "8 hours", cost: "60,000 INR" },
            },
            activities: ["Visit Anne Frank House", "Canal Tour", "Van Gogh Museum"],
            image: "https://cdn.britannica.com/30/180130-138-4FC01CDD/Overview-Amsterdam.jpg?w=800&h=450&c=crop"
        }
    ],
    "indonesia": [
        {
            destination: "Bali",
            bestTourismPlace: "Uluwatu Temple",
            distanceFromIndia: "5,500 km",
            duration: "6 days",
            travelOptions: {
                bus: { duration: "N/A", cost: "N/A" },
                train: { duration: "N/A", cost: "N/A" },
                flight: { duration: "8 hours", cost: "40,000 INR" },
            },
            activities: ["Visit Uluwatu Temple", "Beach Relaxation", "Rice Terraces"],
            image: "https://cdn.kimkim.com/files/a/images/0b0d435f5312aaa4ac2deabb36ed3c23b3c363ba/original-90ebc1384d9012d5623e91bb03dc37aa.jpg"
        }
    ],
    "austria": [
        {
            destination: "Vienna",
            bestTourismPlace: "Schönbrunn Palace",
            distanceFromIndia: "6,800 km",
            duration: "7 days",
            travelOptions: {
                bus: { duration: "N/A", cost: "N/A" },
                train: { duration: "N/A", cost: "N/A" },
                flight: { duration: "9 hours", cost: "65,000 INR" },
            },
            activities: ["Visit Schönbrunn Palace", "St. Stephen's Cathedral", "Vienna State Opera"],
            image: "https://www.reliancegeneral.co.in/SiteAssets/RgiclAssets/images/blogs-images/best-time-to-visit-austria2.webp"
        }
    ],
    "iceland": [
        {
            destination: "Reykjavik",
            bestTourismPlace: "Blue Lagoon",
            distanceFromIndia: "8,000 km",
            duration: "8 days",
            travelOptions: {
                bus: { duration: "N/A", cost: "N/A" },
                train: { duration: "N/A", cost: "N/A" },
                flight: { duration: "10 hours", cost: "70,000 INR" },
            },
            activities: ["Visit Blue Lagoon", "Golden Circle", "Northern Lights"],
            image: "https://plus.unsplash.com/premium_photo-1674086970773-726e445f5802?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aWNlbGFuZHxlbnwwfHwwfHx8MA%3D%3D"
        }
    ],
    "malaysia": [
        {
            destination: "Kuala Lumpur",
            bestTourismPlace: "Petronas Towers",
            distanceFromIndia: "3,800 km",
            duration: "5 days",
            travelOptions: {
                bus: { duration: "N/A", cost: "N/A" },
                train: { duration: "N/A", cost: "N/A" },
                flight: { duration: "5 hours", cost: "25,000 INR" },
            },
            activities: ["Visit Petronas Towers", "Batu Caves", "Bukit Bintang"],
            image: "https://media.istockphoto.com/id/955628078/photo/malaysia-kuala-lumpur-skyline.jpg?s=612x612&w=0&k=20&c=-5QQlJ2zJQ7m4h1hxPjCL-yV5LXQ52uGx9OgaKYaBrs="
        }
    ],
    "sri lanka": [
        {
            destination: "Colombo",
            bestTourismPlace: "Galle Face Green",
            distanceFromIndia: "1,500 km",
            duration: "5 days",
            travelOptions: {
                bus: { duration: "N/A", cost: "N/A" },
                train: { duration: "N/A", cost: "N/A" },
                flight: { duration: "2 hours", cost: "15,000 INR" },
            },
            activities: ["Visit Galle Face Green", "Colombo National Museum", "Buddha Tooth Relic Temple"],
            image: "https://static01.nyt.com/images/2019/02/03/travel/03frugal-srilanka01/merlin_148552275_74c0d250-949c-46e0-b8a1-e6d499e992cf-superJumbo.jpg"
        }
    ],
    "pakistan": [
        {
            destination: "Islamabad",
            bestTourismPlace: "Faisal Mosque",
            distanceFromIndia: "500 km",
            duration: "5 days",
            travelOptions: {
                bus: { duration: "N/A", cost: "N/A" },
                train: { duration: "N/A", cost: "N/A" },
                flight: { duration: "1 hour", cost: "8,000 INR" },
            },
            activities: ["Visit Faisal Mosque", "Daman-e-Koh", "Lok Virsa Museum"],
            image: "https://t3.ftcdn.net/jpg/02/74/50/28/360_F_274502877_n3BQGoAGPRqsjgKIU4lB6wns0mBuPTL3.jpg"
        }
    ],
    "nepal": [
        {
            destination: "Kathmandu",
            bestTourismPlace: "Swayambhunath",
            distanceFromIndia: "800 km",
            duration: "5 days",
            travelOptions: {
                bus: { duration: "N/A", cost: "N/A" },
                train: { duration: "N/A", cost: "N/A" },
                flight: { duration: "1.5 hours", cost: "12,000 INR" },
            },
            activities: ["Visit Swayambhunath", "Pashupatinath Temple", "Bhaktapur Durbar Square"],
            image: "https://media.istockphoto.com/id/637696304/photo/patan.jpg?s=612x612&w=0&k=20&c=-53aSTGBGoOOqX5aoC3Hs1jhZ527v3Id_xOawHHVPpg="
        }
    ],
};

console.log(travelData);

// Display destinations based on country
// Function to display destinations and store in local storage
function displayDestinations(country) {
    const destinations = travelData[country];
    resultsContainer.innerHTML = '';

    if (destinations) {
        // Save the destinations data to local storage
        localStorage.setItem(country, JSON.stringify(destinations));

        destinations.forEach(({ destination, bestTourismPlace, distanceFromIndia, duration, travelOptions, activities, image }) => {
            const destinationCard = document.createElement("div");
            destinationCard.classList.add("destination-card");
            destinationCard.innerHTML = `
                <h2>${destination}</h2>
                <img src="${image}" alt="${destination}" style="width:100%; height:auto;"> <!-- Image display -->
                <p>Best Tourism Place: ${bestTourismPlace}</p>
                <p>Distance from India: ${distanceFromIndia}</p>
                <p>Duration of stay: ${duration}</p>
                <h3>Travel Options:</h3>
                <ul>
                    <li>Bus: Duration - ${travelOptions.bus.duration}, Cost - ${travelOptions.bus.cost}</li>
                    <li>Train: Duration - ${travelOptions.train.duration}, Cost - ${travelOptions.train.cost}</li>
                    <li>Flight: Duration - ${travelOptions.flight.duration}, Cost - ${travelOptions.flight.cost}</li>
                </ul>
                <h3>Activities:</h3>
                <ul>
                    ${activities.map(activity => `<li>${activity}</li>`).join('')}
                </ul>
            `;
            resultsContainer.appendChild(destinationCard);
        });
    } else {
        resultsContainer.innerHTML = '<p>Country not found. Please try again.</p>';
    }
}


// Event listener for the search button
searchBtn.addEventListener("click", () => {
    const country = countryInput.value.trim().toLowerCase();
    if (country) {
        displayDestinations(country); // Display and store destination details
    }
});
