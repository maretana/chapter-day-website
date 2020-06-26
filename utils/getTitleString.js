/**
 * @param {string} title
 */
export default function getTitleString (title) {
  title = title.toLowerCase()
  let last = title.substr(-1).toUpperCase().charCodeAt(0)
  const diff = last - 'A'.charCodeAt(0)
  last = String.fromCharCode(188 + diff)
  title = replaceCharAt(title, title.length - 1, last)
  title = replaceCharAt(title, 0, title[0].toUpperCase())
  return title
}

function replaceCharAt (string, index, newChar) {
  return string.substr(0, index) + newChar + string.substr(index + 1)
}
