module.exports = {
    robots: robots
}

function robots(req, res) {
    // this sends back a JSON response which is a single string
    res.json([
        {
            name: 'Robot 1',
            id: '12345'
        }
    ]);
}