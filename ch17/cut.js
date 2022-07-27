function justOnce(num, callback) {
  let num_finished = 0;
  return function () {
    num_finished += 1;
    if (num_finished === num) callback();
  };
}

const done = justOnce(3, function () {
  console.log("3 timelines are finished");
});

done();
done();
done();
