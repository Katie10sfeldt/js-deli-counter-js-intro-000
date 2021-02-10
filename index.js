function takeANumber(currentLine, newCustomer) {
  currentLine.push(newCustomer);
  return `Welcome, ${newCustomer}. You are number ${currentLine.length} in line.`;
}

function nowServing(currentLine) {
  if (currentLine.length === 0) {
    return 'There is nobody waiting to be served!'
  }
  else {
    return `Currently serving ${currentLine[0]}.`
  }
  // delete currentLine[0];
  return currentLine;
}
