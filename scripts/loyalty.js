var mostLoyalApp = new Vue({
    el: '#mostLoyalTable',
    data: {
        house: [],
        senate: []
    }
})

var leastLoyalApp = new Vue({
    el: '#leastLoyalTable',
    data: {
        house: [],
        senate: []
    }
})

//House data
fetchApi(urlHouse, init).then(data => {
    let dataRoot = data.results[0].members;

    let leastLoyalData = dataRoot.sort((a, b) => a.votes_with_party_pct - b.votes_with_party_pct);
    let mostLoyalData = dataRoot.sort((a, b) => b.votes_with_party_pct - a.votes_with_party_pct);

    function total(data) { return (10 * data.length) / 100 };

    leastLoyalData = leastLoyalData.slice(leastLoyalData.length - total(leastLoyalData), leastLoyalData.length);
    mostLoyalData = mostLoyalData.slice(0, total(mostLoyalData))

    leastLoyalData.sort((a, b) => a.votes_with_party_pct - b.votes_with_party_pct);

    leastLoyalApp._data.house = leastLoyalData;
    mostLoyalApp._data.house = mostLoyalData;

});

//Senate Data
fetchApi(urlSenate, init).then(data => {
    let dataRoot = data.results[0].members;

    let leastLoyalData = dataRoot.sort((a, b) => a.votes_with_party_pct - b.votes_with_party_pct);
    let mostLoyalData = dataRoot.sort((a, b) => b.votes_with_party_pct - a.votes_with_party_pct);

    function total(data) { return (10 * data.length) / 100 };

    leastLoyalData = leastLoyalData.slice(leastLoyalData.length - total(leastLoyalData), leastLoyalData.length);
    mostLoyalData = mostLoyalData.slice(0, total(mostLoyalData))

    leastLoyalData.sort((a, b) => a.votes_with_party_pct - b.votes_with_party_pct);

    leastLoyalApp._data.senate = leastLoyalData;
    mostLoyalApp._data.senate = mostLoyalData;

});