const express = require('express');
const request = require('request-promise');

const app = express();
const PORT = process.env.PORT || 5000

const apiKey = '5d3a5b7dadd1b3a6cc98de1972cca4e6'
const baseUrl = `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Welcome to WebScratch API.')
})

//GET Product Details
app.get('/products/:productId', async (req, res) => {
    const { productId} = req.params;
    try {
        const response = await request(`${baseUrl}&url=https://www.amazon.com/dp/${productId}`)

        res.json(JSON.parse(response))
    } catch (error) {
        res.json(error)
    }
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))