const leaderboardData = [
    { rank: 1, team: "Team Alpha", score: 95 },
    { rank: 2, team: "Team Beta", score: 92 },
    { rank: 3, team: "Team Gamma", score: 88 },
    { rank: 4, team: "Team Delta", score: 85 },
    { rank: 5, team: "Team Epsilon", score: 82 },
];

function renderLeaderboard() {
    const leaderboardBody = document.getElementById("leaderboard-body");
    if (!leaderboardBody) return;

    leaderboardData.forEach((entry) => {
        const row = document.createElement("tr");

        const rankCell = document.createElement("td");
        rankCell.textContent = String(entry.rank);
        row.appendChild(rankCell);

        const teamCell = document.createElement("td");
        teamCell.textContent = entry.team;
        row.appendChild(teamCell);

        const scoreCell = document.createElement("td");
        scoreCell.textContent = String(entry.score);
        row.appendChild(scoreCell);

        leaderboardBody.appendChild(row);
    });
}

document.addEventListener("DOMContentLoaded", renderLeaderboard);