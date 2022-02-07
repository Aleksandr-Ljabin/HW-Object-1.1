export default function orderByProps(arr, arrKey) {
  let resultSort = [];
  const result = [];
  const sortedArr = [];
  for (const key in arr) {
    if (arrKey.includes(key)) {
      result.push({ key, value: arr[key] });
    } else {
      sortedArr.push({ key, value: arr[key] });
    }

    sortedArr.sort((a, b) => {
      if (a.key > b.key) {
        return 1;
      }
      if (a.key < b.key) {
        return -1;
      }
      return 0;
    });
  }
  resultSort = [...result, ...sortedArr];
  return resultSort;
}
