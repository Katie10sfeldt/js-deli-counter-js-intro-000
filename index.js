function takeANumber(currentLine, newCustomer) {
  currentLine.push(newCustomer);
  return `Welcome, ${newCustomer}. You are number ${currentLine.length} in line.`;
}

function nowServing(line) {
  if (line.length === 0) {
    return 'There is nobody waiting to be served!'
  }
  else{
    return `Currently serving ${line[0]}.`
  }
  line.shift();
}

function currentLine(line)
