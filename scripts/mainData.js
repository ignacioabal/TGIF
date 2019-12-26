

const app = new Vue({
    el: '#table-rows',
    data: {
        senate: [],
        house: []
    }

})


// let glanceStats = {
//     house: {
//         reps: {
//             democrats: 0,
//             republicans: 0,
//             independent: 0
//         },
//         partyVotesPct: {
//             democrats: 0,
//             republicans: 0,
//             independent: 0
//         }
//     },
//     senate: {
//         reps: {
//             democrats: 0,
//             republicans: 0,
//             independent: 0
//         },
//         partyVotesPct: {
//             democrats: 0,
//             republicans: 0,
//             independent: 0
//         }
//     }
// }



fetchApi(urlHouse, init).then(data => app._data.house = data.results[0].members);


fetchApi(urlSenate, init).then(data => app._data.senate = data.results[0].members);









