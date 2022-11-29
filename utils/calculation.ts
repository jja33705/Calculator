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
}

function minus(arr: string[]) {
  if (arr[0] === '-') {
    const result = -Number(arr[1]);
    arr.splice(0, 2, String(result));
  }
  let i = 1;
  while (i < arr.length) {
    if (arr[i] === '-') {
      const result = Number(arr[i - 1]) - Number(arr[i + 1]);
      arr.splice(i - 1, 3, String(result));
    } else {
      i++;
    }
  }
}

function searchPairBracket(s: string, index: number) {
  let bracketCount = 1;
  let result = 0;
  for (let i = index + 1; i < s.length; i++) {
    if (s[i] === '(') {
      bracketCount++;
    } else if (s[i] === ')') {
      bracketCount--;
      if (bracketCount === 0) {
        result = i;
        break;
      }
    }
  }
  return result;
}

export function calculate(s: string) {
  const arr: string[] = [];
  let i = 0;
  let lastPushedIndex = -1;
  while (i < s.length) {
    if (s[i] === '(') {
      let rightBracketIndex = searchPairBracket(s, i);
      arr.push(calculate(s.slice(i + 1, rightBracketIndex)));
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
  percent(arr);
  divide(arr);
  multiply(arr);
  minus(arr);
  plus(arr);

  return arr[0];
}
