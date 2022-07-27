function justOnce(action) {
  let alreadyCalled = false;
  return function () {
    if (alreadyCalled) return;
    alreadyCalled = true;
    return action();
  };
}

const done = justOnce(function () {
  console.log("3 timelines are finished");
});

done();
done();
done();
