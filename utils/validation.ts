function checkBracketPair(s: string) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      count++;
    } else if (s[i] === ')') {
      count--;
      if (count < 0) {
        return false;
      }
    }
  }
  if (count === 0) {
    return true;
  }
  return false;
}

function checkLastLetter(s: string) {
  const lastLetter = s[s.length - 1];
  if ((lastLetter <= '9' && lastLetter >= '0') || lastLetter === ')') {
    return true;
  }
  return false;
}

function checkRepeatedDot(s: string) {
  for (let i = s.length - 2; i > 0; i--) {
    if (['%', '÷', '×', '-', '+', '('].includes(s[i])) {
      return false;
    }
    if (s[i] === '.') {
      return true;
    }
  }
}

export function validateBeforeCalculate(s: string) {
  if (s.length > 0 && checkLastLetter(s) && checkBracketPair(s)) {
    return true;
  }
  return false;
}

export function validateNewLetter(inputValue: string, newLetter: string) {
  const lastLetter = inputValue[inputValue.length - 1];
  if (inputValue.length === 0 || lastLetter === '(') {
    return !['%', '÷', '×', '-', '+', '.', '0'].includes(newLetter);
  }
  if (lastLetter === ')') {
    return ['%', '÷', '×', '-', '+'].includes(newLetter);
  }
  if (['%', '÷', '×', '-', '+', '.'].includes(lastLetter)) {
    if (newLetter >= '0' && newLetter <= '9') {
      return true;
    }
    return false;
  }
  if (newLetter === '.') {
    return !checkRepeatedDot(inputValue);
  }
  return true;
}
