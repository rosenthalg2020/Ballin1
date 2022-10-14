const bowlingBallUrl =`http://localhost:3000/bowling-balls`
const houseUrl = `http://localhost:3000/house` 



function getHouses(){
    fetch (houseUrl)
    .then (res => res.json())
    .then (houseLogo => renderHouses (houseLogo))
    
}
getHouses()

function renderHouses (houseLogo) {
    houseLogo.forEach (house => renderHouseLogo (house))
}


function renderHouseLogo (house) {
    const houseName = document.getElementById("house-bar")
    houseName.textContent = house.name

    const houseImg = document.getElementById("house-logo")
    houseImg.src = house.image


}

