import express from 'express'

const typefaceRouter = express.Router();

typefaceRouter.get('/', (req, res) => {
    res.send('Hello from the Typefaces page')
})

typefaceRouter.get('/akzidenzgrotesk', (req, res) => {
    res.send('This is the Akzidens-Grotesk page!')
})

typefaceRouter.get('/univers', (req, res) => {
    res.send('This is the Univers page!')
})

typefaceRouter.get('/helvetica', (req, res) => {
    res.send('This is the Helvetica page!')
})

export default typefaceRouter;