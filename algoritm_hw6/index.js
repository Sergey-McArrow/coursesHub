const partition = (arr, low, high) => {
  let pivot = arr[high]
  let i = low - 1

  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
  }
  ;[arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]
  return i + 1
}

const quickSortIterative = (arr) => {
  if (!arr.length) return []

  let stack = []

  stack.push(0)
  stack.push(arr.length - 1)

  while (stack.length > 0) {
    let end = stack.pop()
    let start = stack.pop()

    let pivotIndex = partition(arr, start, end)

    if (pivotIndex - 1 > start) {
      stack.push(start)
      stack.push(pivotIndex - 1)
    }

    if (pivotIndex + 1 < end) {
      stack.push(pivotIndex + 1)
      stack.push(end)
    }
  }
  return arr
}

const arr = [38, 27, 43, 3, 9, 82, 10, 9, 7, 5, 3, 1]
const sortedArr = quickSortIterative(arr)
console.log("Sorted array is:", sortedArr)
