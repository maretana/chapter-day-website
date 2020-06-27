const streams = require('../../data/streams').default

export default (req, res) => {
  const now = Date.now()
  streams.forEach(stream => {
    stream.remainingTime = stream.startTime - now
  })
  res.setHeader('Cache-Control', 's-maxage=200')
  res.statusCode = 200
  res.json(streams)
}
