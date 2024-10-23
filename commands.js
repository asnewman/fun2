export function command(command, store) {
}

export function moveRight(columnIdx, lineLength) {
  return { columnIdx: Math.min(lineLength + 1, columnIdx + 1) };
}

export function moveLeft(columnIdx) {
  return { columnIdx: Math.max(0, columnIdx - 1) };
}

export function moveUp(currLineIdx, currColumnIdx, prevLineLength) {
  return { lineIdx: Math.max(currLineIdx - 1, 0), columnIdx: Math.min(currColumnIdx, prevLineLength) } 
}

export function moveDown(currLineIdx, currColumnIdx, nextLineLength, lastLineIdx) {
  return { lineIdx: Math.min(currLineIdx + 1, lastLineIdx), columnIdx: Math.min(currColumnIdx, nextLineLength) } 
}

export function moveForwardByWord(lines, lineIdx, columnIdx) {
  const subLines = lines.slice(lineIdx)
  
  const currentLine = subLines[lineIdx]
  const prevChar = currentLine[columnIdx - 1]
  const currChar = currentLine[columnIdx]
  const nextChar = currentLine[columnIdx + 1]
  
  if (prevChar === " " && currChar !== " ") {
    return {columnIdx, lineIdx}
  }
  
  if (nextChar) {
    return moveForwardByWord(lines, lineIdx, columnIdx + 1)
  }

  // point is on whitespace and there is no more characters in the line
  if (currChar === " " && !nextChar && lines[lineIdx + 1]) {
    return moveForwardByWord(lines, lineIdx + 1, 0)
  }

  return {columnIdx, lineIdx}
}
