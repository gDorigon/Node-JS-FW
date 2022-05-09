const user = 'dorigon'
const pw = 'bovo'

const auth =(req, res, next) => {
    if((req.header('usermane') === user) && (req.header('password') === password)) {
        next();
    } else {
        return res.status(403).send()
    }
}

module.exports = auth;