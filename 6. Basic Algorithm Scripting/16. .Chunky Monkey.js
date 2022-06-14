function chunkArrayInGroups(arr, size) {
  const arrGede = [];
  let arrKecil = [];
  let index = 0;

  for (let i = 0; i < arr.length; i++) {
    arrKecil.push(arr[i]);
    index++;
    if (index == size) {
      arrGede.push(arrKecil);
      index = 0;
      arrKecil = [];
    }
  }

  if (arrKecil.length > 0) {
    arrGede.push(arrKecil);
  }

  return arrGede;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
