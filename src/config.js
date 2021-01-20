module.exports = {
    port:  process.env.PORT || '3900',
    db: process.env.MONGODB || 'mongodb://localhost/api_blog',
    SECRET_TOKEN: 'miclavedetokens'
}