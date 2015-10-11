"""

Iowa State Cyclones Men's Basketball Scraper
Created by Lee Robinson (leerob@iastate.edu)
10/9/15

MIT License


"""

from bs4 import BeautifulSoup
import requests,json,httplib

TEAM_URL = "http://espn.go.com/mens-college-basketball/team/stats/_/id/66/iowa-state-cyclones"
PARSE_APP_ID = "cipDgUTYARcdxNeT8sD5ZE76QxNWOURlKLzfruak"
PARSE_REST_API_KEY = "4W8V3S7MaXgo119Co2VwAlTNRgzCDpI6vHmHKn8v"

class Player:
    def __init__(self, stats):
        self.name = stats[0]
        self.gmp  = stats[1]
        self.min  = stats[2]
        self.ppg  = stats[3]
        self.rpg  = stats[4]
        self.apg  = stats[5]
        self.spg  = stats[6]
        self.bpg  = stats[7]
        self.tpg  = stats[8]
        self.fgp  = stats[9]
        self.ftp  = stats[10]
        self.tpp  = stats[11]


def retrievePlayers(soup):

    team = list()
    game_stats = soup.find("div", "mod-content")

    for players in game_stats.findAll("tr", class_=["oddrow", "evenrow"]):

        # Retrieve player's statistics from each td text
        stats = list()
        for player in players.findAll("td"):
            stats.append(player.text)

        # Add player to the team
        team.append(Player(stats))

    return team


def save(player):

    # This will create new objects
    # If I want to update, I'll need to use a PUT with an objectID
    # https://github.com/dgrtwo/ParsePy
    connection = httplib.HTTPSConnection('api.parse.com', 443)
    connection.connect()
    connection.request('POST', '/1/classes/Players', json.dumps({
           "name": player.name,
           "games": int(player.gmp),
           "minutes": float(player.min),
           "points": float(player.ppg),
           "rebounds": float(player.rpg),
           "assists": float(player.apg),
           "steals": float(player.spg),
           "blocks": float(player.bpg),
           "turnovers": float(player.tpg),
           "fieldgoal": float(player.fgp),
           "freethrow": float(player.ftp),
           "threepoint": float(player.tpp),
         }), {
           "X-Parse-Application-Id": PARSE_APP_ID,
           "X-Parse-REST-API-Key": PARSE_REST_API_KEY,
           "Content-Type": "application/json"
         })
    results = json.loads(connection.getresponse().read())
    print results


def main():

    html = requests.get(TEAM_URL)
    soup = BeautifulSoup(html.text, "lxml")

    # sorted(isu_mbb, key=lambda player: float(player.min), reverse=True)
    isu_mbb = retrievePlayers(soup)
    for player in isu_mbb:
        save(player)


if __name__ == '__main__':
    main()
