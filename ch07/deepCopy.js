export default function deepCopy(before) {
  //전에 object의 키를 돈다
  //key가 없으면 return 한다.
  if (Array.isArray(before)) {
    const copy = [];
    for (const el of before) {
      copy.push(deepCopy(el));
    }
    return copy;
  }

  if (before === null) {
    return before;
  }

  if (typeof before === "object") {
    const copy = {};
    for (let key in before) {
      copy[key] = deepCopy(before[key]);
    }

    return copy;
  }
  return before;
}
