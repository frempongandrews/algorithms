// Equi
//Find an index in an array such that its prefix sum equals its suffix sum.

//A zero-indexed array A consisting of N integers is given. An equilibrium index of this array is any integer P such that 0 ≤ P < N and the sum of elements of lower indices is equal to the sum of elements of higher indices, i.e.
//A[0] + A[1] + ... + A[P−1] = A[P+1] + ... + A[N−2] + A[N−1].

// For example, consider the following array A consisting of N = 8 elements:
//
//   A[0] = -1
//   A[1] =  3
//   A[2] = -4
//   A[3] =  5
//   A[4] =  1
//   A[5] = -6
//   A[6] =  2
//   A[7] =  1
// P = 1 is an equilibrium index of this array, because:
//
// A[0] = −1 = A[2] + A[3] + A[4] + A[5] + A[6] + A[7]
// P = 3 is an equilibrium index of this array, because:
//
// A[0] + A[1] + A[2] = −2 = A[4] + A[5] + A[6] + A[7]
// P = 7 is also an equilibrium index, because:
//
// A[0] + A[1] + A[2] + A[3] + A[4] + A[5] + A[6] = 0
// and there are no elements with indices greater than 7.
//
// P = 8 is not an equilibrium index, because it does not fulfill the condition 0 ≤ P < N.


function equi (array, numberOfIntergers) {

  //[-1, 3, -4, 5, 1, -6, 2, 1]

  var possibleEquiIndex = -1;
  var arrayAfterEquiIndex = [];
  var sumBeforeEquiIndex = 0;
  var sumAfterEquiIndex = 0;
  var equiIndexPointsArray = [];

  for ( var i = 1; i < numberOfIntergers; i++) {

    //if on last item
    if (i == numberOfIntergers - 1) {
      sumAfterEquiIndex = 0;
      var arrayBeforeLastIndex = array.slice(0, numberOfIntergers - 2);
      sumBeforeEquiIndex = arrayBeforeLastIndex.reduce(function(a, b) {
        return a + b;
      });

      if (sumAfterEquiIndex == sumBeforeEquiIndex) {
        equiIndexPointsArray.push(i);
        return;
      }



    }

    //From start
    //start from 1
    possibleEquiIndex = i;

    //resetting to 0

    sumBeforeEquiIndex = 0;
    sumAfterEquiIndex = 0;
    arrayAfterEquiIndex = [];

    if (i < numberOfIntergers - 1) {
      arrayAfterEquiIndex = array.slice(i + 1);
      sumAfterEquiIndex = arrayAfterEquiIndex.reduce(function (a, b) {
          return a + b;
        });
    }



      for (var j = 0; j < possibleEquiIndex; j++) {

        sumBeforeEquiIndex += array[j];
      }



      //console.log(possibleEquiIndex);
      //console.log(sumBeforeEquiIndex);
      //console.log("sum after equi point: " + sumAfterEquiIndex);


      //get equi point
      if (sumBeforeEquiIndex == sumAfterEquiIndex) {
        console.log("Equi point is " + possibleEquiIndex);

        equiIndexPointsArray.push(possibleEquiIndex);
        console.log(equiIndexPointsArray);
      }

    }



  }


equi([-1, 3, -4, 5, 1, -6, 2, 1], 8);
