import axios from 'axios'


const getGames = async () => {
    const games = await axios.get('https://63a574d52a73744b008e74dc.mockapi.io/Games');
    return games.data;
}

const gamesService = {
    getGames
}

export default gamesService;