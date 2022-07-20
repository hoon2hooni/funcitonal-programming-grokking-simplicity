/// It's your turn

const evaluations = [
  { name: "Jane", position: "catcher", score: 25 },
  { name: "John", position: "pitcher", score: 10 },
  { name: "Harry", position: "pitcher", score: 3 },
];

var roster = { pitcher: "John", catcher: "Jane", "first base": "Ellen" };

/// Answer

const positions = reduce(evaluations, {}, (roster, eval) => {
  const position = eval.position;
  if (!roster[position]) {
    return { ...roster, [position]: eval.name };
  }
  return roster;
});
