exports.validateCommentData = (req, res, next) => {
    const { username, comment } = req.body;
    if (!username || !comment) {
      return res.status(400).json({ meta: { code: 400, message: 'Username and comment are required' }, data: null });
    }
    next()
}