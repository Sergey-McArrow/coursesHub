const fs = require("fs").promises;
const { mergeSort } = require("./mergeSort");

const readSortedFile = async (filePath) => {
  const content = await fs.readFile(filePath, "utf8");
  return content.split("\n").filter(Boolean).map(Number);
};

function merge(arr1, arr2) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  return result.concat(arr1.slice(i)).concat(arr2.slice(j));
}

async function mergeFiles(filePaths, outputFile) {
  let mergedList = [];

  for (const filePath of filePaths) {
    const list = await readSortedFile(filePath);
    mergedList = merge(mergedList, list);
  }

  mergedList = mergeSort(mergedList);
  await fs.writeFile(outputFile, mergedList.join("\n"));
}

const filePaths = ["./list1.txt", "./list2.txt"];
const outputFile = "./mergedSortedList.txt";

mergeFiles(filePaths, outputFile)
  .then(() => console.log("Files have been merged and sorted successfully."))
  .catch((err) => console.error("Error merging files:", err));
