function percent(arr: string[]) {
  let i = 1;
  while (i < arr.length) {
    if (arr[i] === '%') {
      const result = (Number(arr[i - 1]) / 100) * Number(arr[i + 1]);
      arr.splice(i - 1, 3, String(result));
    } else {
      i++;
    }
  }
  console.log(arr);
}

function divide(arr: string[]) {
  let i = 1;
  while (i < arr.length) {
    if (arr[i] === '÷') {
      const result = Number(arr[i - 1]) / Number(arr[i + 1]);
      arr.splice(i - 1, 3, String(result));
    } else {
      i++;
    }
  }
  console.log(arr);
}

function multiply(arr: string[]) {
  let i = 1;
  while (i < arr.length) {
    if (arr[i] === '×') {
      const result = Number(arr[i - 1]) * Number(arr[i + 1]);
      arr.splice(i - 1, 3, String(result));
    } else {
      i++;
    }
  }
  console.log(arr);
}

function plus(arr: string[]) {
  let i = 1;
  while (i < arr.length) {
    if (arr[i] === '+') {
      const result = Number(arr[i - 1]) + Number(arr[i + 1]);
      arr.splice(i - 1, 3, String(result));
    } else {
      i++;
    }
  }
  console.log(arr);
}

function minus(arr: string[]) {
  let i = 1;
  while (i < arr.length) {
    if (arr[i] === '-') {
      const result = Number(arr[i - 1]) - Number(arr[i + 1]);
      arr.splice(i - 1, 3, String(result));
    } else {
      i++;
    }
  }
  console.log(arr);
}

export function calculate(s: string) {
  const arr: string[] = [];
  let i = 0;
  let lastPushedIndex = -1;
  while (i < s.length) {
    if (s[i] === '(') {
      const rightBracketIndex = s.lastIndexOf(')');
      arr.push(calculate(s.slice(i + 1, rightBracketIndex - 1)));
      lastPushedIndex = rightBracketIndex;
      i = rightBracketIndex + 1;
    } else if ((s[i] > '9' || s[i] < '0') && s[i] !== '.') {
      if (lastPushedIndex + 1 < i) {
        arr.push(s.slice(lastPushedIndex + 1, i));
      }
      arr.push(s[i]);
      lastPushedIndex = i;
      i++;
    } else {
      i++;
      if (i === s.length) {
        arr.push(s.slice(lastPushedIndex + 1, i));
      }
    }
  }
  console.log(arr);
  percent(arr);
  divide(arr);
  multiply(arr);
  minus(arr);
  plus(arr);

  return arr[0];
}
