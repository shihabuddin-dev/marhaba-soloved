/* 
১. টিম নামে একটা অবজেক্ট বানা, যার মধ্যে name এবং players থাকবে। players-এর মধ্যে খেলোয়াড়ের সংখ্যা থাকবে। এ ছাড়া টিমের মধ্যে একটা মেথড থাকবে play নামে, যেখানে this.name এবং this.players দিয়ে একটা স্ট্রিং বানিয়ে কনসোল লগ করবি। প্রথমে team থেকে play মেথডকে কল করে আউটপুট দেখ। তারপর আরেকটা অবজেক্ট বানা tournament নামে। সেটার মধ্যেও name এবং players থাকবে। টুর্নামেন্টে কতজন খেলোয়াড় খেলতেছে, সেই সংখ্যা থাকবে। এখন .bind() ইউজ করে team অবজেক্টের play মেথড ইউজ করবি, তবে সেটার this হিসেবে টুর্নামেন্টকে ইউজ করবি।
 */

const team = {
    name: "Bangladesh Cricket Team",
    players: 11,
    play: function () {
        console.log(`${this.name} is playing with ${this.players} players.`);
    }
};
team.play();
const tournament = {
    name: "World Cup 2024",
    players: 15
};
const tournamentPlay = team.play.bind(tournament);
tournamentPlay();