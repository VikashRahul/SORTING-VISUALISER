export function bubbleAnimations(arr) {
    const anim = [];
    if (arr.length <= 1) return arr;
    const temparray = [...arr];
    bubbleSort(arr, temparray, anim);
    return anim;
  }
  function bubbleSort(arr, temp, anim) {
    for (var i = 0; i < arr.length - 1; i++) {
      // Last i elements are already in place
      for (var j = 0; j < arr.length - i - 1; j++) {
        anim.push([j, j + 1, 0]);
        let flag = 0;
        if (temp[j] > temp[j + 1]) {
          flag = 1;
          let t = temp[j];
          temp[j] = temp[j + 1];
          temp[j + 1] = t;
        }
        if (flag === 1) anim.push([j, j + 1, 3]);
        anim.push([j, temp[j], 4]);
        anim.push([j + 1, temp[j + 1], 4]);
        anim.push([j, j + 1, 1]);
      }
      //arr[arr.length - 1 - i] = temp[arr.length - 1 - i];
      anim.push([arr.length - 1 - i, temp[arr.length - 1 - i], 2]);
    }
    anim.push([0, temp[0], 2]);
  }