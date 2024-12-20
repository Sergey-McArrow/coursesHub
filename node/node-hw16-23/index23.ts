const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Promise 1 resolved');
  }, 1000);
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Promise 2 resolved');
  }, 2000);
});

const promise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Promise 3 resolved');
  }, 3000);
});

const asyncFunction = async () => {
  try {
    const result1 = await promise1;
    console.log(result1);
    const result2 = await promise2;
    console.log(result2);
    const result3 = await promise3;
    console.log(result3);
    Promise.all([promise1, promise2, promise3]).then((results) => {
      console.log('with Promise.all', results);
    });
    Promise.allSettled([promise1, promise2, promise3]).then((results) => {
      console.log('with Promise.allSettled', results);
    });
    Promise.race([promise1, promise2, promise3]).then((result) => {
      console.log('with Promise.race', result);
    });
  } catch (error) {
    console.error(error);
  }
};
asyncFunction();
const asyncToUpperCase = async (arr: string[]) => {
  const results = await Promise.all(
    arr.map(
      (str) =>
        new Promise((resolve) =>
          setTimeout(() => resolve(str.toUpperCase()), 1000)
        )
    )
  );
  console.log(results);
};
asyncToUpperCase(['a', 'b', 'c']);

const asyncFunctionWithError = async () => {
  try {
    await Promise.all([
      new Promise((resolve) => setTimeout(resolve, 1000)),
      new Promise((resolve) => setTimeout(resolve, 2000)),
      new Promise((resolve, reject) =>
        setTimeout(() => reject(new Error('Error')), 3000)
      ),
    ]);
  } catch (error: unknown) {
    console.error('Error:', error);
  }
};
asyncFunctionWithError();

const asyncFunctionWait = async (arr: number[]) => {
  const promises = arr.map(
    (num) =>
      new Promise((resolve) =>
        setTimeout(() => resolve(`Resolved after ${num}ms`), num)
      )
  );
  const results = await Promise.all(promises);
  console.log('Results:', results);
};
asyncFunctionWait([1000, 2000, 3000]);
