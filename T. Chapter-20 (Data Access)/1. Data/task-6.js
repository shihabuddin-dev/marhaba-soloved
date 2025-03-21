/* 
৬. একটা প্রোগ্রাম লিখ, যেখানে const game = { name: 'football', players: [{ id: 1, name: 'Lionel Messi'}, { id: 2, name: 'Cristiano Ronaldo'}]} অবজেক্টে প্রথম player-এর name প্রিন্ট করবে।
 */
const game = {
    name: 'football',
    players: [
        { id: 1, name: 'Lionel Messi' },
        { id: 2, name: 'Cristiano Ronaldo' }
    ]
}
console.log(game.players[0].name);