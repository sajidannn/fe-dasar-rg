  let result = []
  for (const i of word) {
    if (i !== current) {
      result.unshift(i)
    }
    current = i
  }

  return result.join('')