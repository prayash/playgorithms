/**
 * 3 - Highest Product of 3 - time / space
 * @param {Array} A - array of integers
 * @return {Int} - highest product of the integers
 */
function highestProductOf3(A) {
  if (A.length < 3) throw Error('Invalid input. Length of input must be >= 3');

  var highest = Math.max(A[0] * A[1]);
  var lowest = Math.min(A[0] * A[1]);

  var highestProductOf2 = A[0] * A[1];
  var lowestProductOf2 = A[0] * A[1];
  var highestProductOf3 = A[0] * A[1] * A[2];

  for (var i = 2; i < A.length; i++) {
    var current = A[i];

    highestProductOf3 = Math.max(
      highestProductOf3,
      current * highestProductOf2,
      current * lowestProductOf2
    );

    highestProductOf2 = Math.max(
      highestProductOf2,
      current * lowest,
      current * highest
    );

    lowestProductOf2 = Math.min(
      lowestProductOf2,
      current * lowest,
      current * highest
    );

    highest = Math.max(highest, current)
    lowest = Math.min(lowest, current)
  }

  console.log('\t -> highestProductOf3:', highestProductOf3);
  return highestProductOf3;
}

var A = [1, 10, -5, 1, -100];
highestProductOf3(A);
