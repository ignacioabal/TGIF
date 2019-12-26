var mostEngagedApp = new Vue({
    el: '#mostEngagedTable',
    data: {
        house: [],
        senate: []
    }
})

var leastEngagedApp = new Vue({
    el: '#leastEngagedTable',
    data: {
        house: [],
        senate: []
    }
})


//House data
fetchApi(urlHouse, init).then(data => {
    let dataRoot = data.results[0].members;

    let leastEngagedData = dataRoot.sort((a, b) => b.missed_votes_pct - a.missed_votes_pct);
    let mostEngagedData = dataRoot.sort((a, b) => a.missed_votes_pct - b.missed_votes_pct);

    function total(data) { return (10 * data.length) / 100 };

    leastEngagedData = leastEngagedData.slice((leastEngagedData.length - total(leastEngagedData)), leastEngagedData.length);

    mostEngagedData = mostEngagedData.slice(0, total(mostEngagedData));

    leastEngagedData.sort((a, b) => b.missed_votes_pct - a.missed_votes_pct)

    leastEngagedApp._data.house = leastEngagedData;
    mostEngagedApp._data.house = mostEngagedData;

});

//Senate Data
fetchApi(urlSenate, init).then(data => {
    let dataRoot = data.results[0].members;

    let leastEngagedData = dataRoot.sort((a, b) => b.missed_votes_pct - a.missed_votes_pct);
    let mostEngagedData = dataRoot.sort((a, b) => a.missed_votes_pct - b.missed_votes_pct);

    function total(data) { return (10 * data.length) / 100 };


    leastEngagedData = leastEngagedData.slice((leastEngagedData.length - total(leastEngagedData)), leastEngagedData.length);
    mostEngagedData = mostEngagedData.slice(0, total(mostEngagedData));


    leastEngagedData.sort((a, b) => b.missed_votes_pct - a.missed_votes_pct)

    leastEngagedApp._data.senate = leastEngagedData;
    mostEngagedApp._data.senate = mostEngagedData;

});



//-------TODO
// function getEngaged(){
//     let dataRoot = data.results[0].members;
//     let leastEngaged = dataRoot.sort((a, b) => b.missed_votes_pct - a.missed_votes_pct);
//     let mostEngaged = dataRoot.sort((a, b) => a.missed_votes_pct - b.missed_votes_pct);

//     function total(data) { return (10 * data.length) / 100 };

//     leastEngaged = leastEngaged.slice(0, total(leastEngaged));

//     mostEngaged = mostEngaged.slice(0, total(mostEngaged));

//     console.log(leastEngaged);
//     console.log(mostEngaged);
// }
