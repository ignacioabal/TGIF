const glance = new Vue({
    el: '#glance-rows',
    data: {
        senate: {
            reps: {
                democrats: 0,
                republicans: 0,
                independent: 0
            },
            partyVotesPct: {
                democrats: 0,
                republicans: 0,
                independent: 0
            }
        },
        house: {
            reps: {
                democrats: 0,
                republicans: 0,
                independent: 0
            },
            partyVotesPct: {
                democrats: 0,
                republicans: 0,
                independent: 0
            }
        }
    }
});

//House data
fetchApi(urlHouse, init).then(data => {
    let demV, repV, indV = 0;
    data.results[0].members.map(member => {
        if (member.party == "D") {
            glance._data.house.reps.democrats += 1;
            glance._data.house.partyVotesPct.democrats += member.votes_with_party_pct;
        } else if (member.party == "R") {
            glance._data.house.reps.republicans += 1;
            glance._data.house.partyVotesPct.republicans += member.votes_with_party_pct;
        } else if (member.party == "I") {
            glance._data.house.reps.independent += 1;
            glance._data.house.partyVotesPct.independent += member.votes_with_party_pct;
        }



    })
    glance._data.house.partyVotesPct.republicans = (glance._data.house.partyVotesPct.republicans / glance._data.house.reps.republicans).toFixed(2);
    glance._data.house.partyVotesPct.democrats = (glance._data.house.partyVotesPct.democrats / glance._data.house.reps.democrats).toFixed(2);
    glance._data.house.partyVotesPct.independent = (glance._data.house.partyVotesPct.independent / glance._data.house.reps.independent).toFixed();
});

//Senate Data
fetchApi(urlSenate, init).then(data => {
    let demV, repV, indV = 0;
    data.results[0].members.map(member => {
        if (member.party == "D") {
            glance._data.senate.reps.democrats += 1;
            glance._data.senate.partyVotesPct.democrats += member.votes_with_party_pct;
        } else if (member.party == "R") {
            glance._data.senate.reps.republicans += 1;
            glance._data.senate.partyVotesPct.republicans += member.votes_with_party_pct;
        } else if (member.party == "I") {
            glance._data.senate.reps.independent += 1;
            glance._data.senate.partyVotesPct.independent += member.votes_with_party_pct;
        }



    })
    glance._data.senate.partyVotesPct.republicans = (glance._data.senate.partyVotesPct.republicans / glance._data.senate.reps.republicans).toFixed(2);
    glance._data.senate.partyVotesPct.democrats = (glance._data.senate.partyVotesPct.democrats / glance._data.senate.reps.democrats).toFixed(2);
    glance._data.senate.partyVotesPct.independent = (glance._data.senate.partyVotesPct.independent / glance._data.senate.reps.independent).toFixed(2);
})
