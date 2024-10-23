document.getElementById('getStatsBtn').addEventListener('click', function() {
    const steamId = document.getElementById('steamIdInput').value;
    if (steamId) {
        fetchMatchStats(steamId);
    } 
    else {
        alert('Please enter a Steam ID.');
    }
});

async function displayMatch(match) {
    const resultDiv = document.getElementById('result');
    const heroInfo = await fetchHeroInfo(match.hero_id);
    
    if (match.player_slot <= 127 && match.radiant_win) {
        isWin = true;
    }
    else if (match.player_slot > 217 && !match.radiant_win) {
        isWin = true;
    }
    else {
        isWin = false;
    }

    resultDiv.innerHTML = `
        <p><strong>Match ID:</strong> ${match.match_id}</p>
        <p><strong>Hero:</strong> <img src="https://cdn.akamai.steamstatic.com/${heroInfo.icon}" width="50" height="50"></p>
        <p><strong>Win:</strong> ${isWin}</p>
        <p><strong>Kills:</strong> ${match.kills}</p>
        <p><strong>Deaths:</strong> ${match.deaths}</p>
        <p><strong>Assists:</strong> ${match.assists}</p>
        <p><strong>GPM:</strong> ${match.gold_per_min}</p>
        <p><strong>XPM:</strong> ${match.xp_per_min}</p>

    `;
}

async function fetchMatchStats(accountId) {
    try {
        const response = await fetch(`https://api.opendota.com/api/players/${accountId}/recentMatches`);

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        matches = await response.json();
        console.log(matches);

        if (matches.length > 0) {
            currentIndex = 0;
            displayMatch(matches[currentIndex]);
        } else {
            document.getElementById('result').innerHTML = 'No recent matches found.';
        }
    } catch (error) {
        document.getElementById('result').innerHTML = 'Error fetching data.';
        console.error('Error:', error);
    }
}
async function fetchHeroInfo(heroId) {
    const response = await fetch(`https://api.opendota.com/api/heroStats`)
    const heroes = await response.json();

    const hero = heroes.find(h=> h.id == heroId)
    return hero;
}

document.getElementById('nextBtn').addEventListener('click', function() {
    if (matches.length > 0) {
        currentIndex = (currentIndex + 1) % matches.length;
        displayMatch(matches[currentIndex]);
    }
});
document.getElementById('prevBtn').addEventListener('click', function() {
    if (matches.length > 0) {
        currentIndex = (matches.length + currentIndex - 1) % matches.length;
        displayMatch(matches[currentIndex]);
    }
});