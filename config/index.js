const dev = {
    port: 5050,
}

const prod = {
    port: 5050
}

module.exports = process.env.NODE_ENV === 'production' ? prod : dev;