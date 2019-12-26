var init = {
    method: 'GET',
    headers: new Headers({
        'X-API-Key': 'oIQswKUt5G7YubHtwzKHjb9BsikbDlrnzbhxoorg'
    })
}

const urlHouse = "https://api.propublica.org/congress/v1/113/house/members.json";

const urlSenate = "https://api.propublica.org/congress/v1/113/senate/members.json";

async function fetchApi(url, init) {
    try {
        const response = await fetch(url, init);
        const data = await response.json();
        return data;
    }
    catch (error) {
        return error;
    }
}

