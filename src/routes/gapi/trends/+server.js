import { json } from "@sveltejs/kit"


export function GET() {
  const random = () => Math.floor(Math.random() * (1999 - 199 + 1)) + 100;
  let trends = [
    { id: 1, topic: "Europe", category: "Gas Prices", glides: random() },
    { id: 2, topic: "Crypto", category: "LET'S GO BTC", glides: random() },
    { id: 3, topic: "Games", category: "GTA 6", glides: random() },
    { id: 4, topic: "Movies", category: "The Matrix 4", glides: random() },
    { id: 5, topic: "Music", category: "Taylor Swift", glides: random() },
    { id: 6, topic: "Sports", category: "NBA", glides: random() },
  ];
  return json(trends);
}
