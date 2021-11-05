function serialization(req, res) {
  return res.status(res.rawStatus).json(res.rawResponse);
}

module.exports = serialization;