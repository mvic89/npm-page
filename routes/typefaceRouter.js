import express from 'express'

const typefaceRouter = express.Router();

typefaceRouter.get('/', (req, res) => {
    // res.send('Hello from the Typefaces page')
    res.render('pages/typefaces.ejs', {
        sidebaritems1: 'Akzidenz-Grotesk',
        sidebaritems2: 'Univers',
        sidebaritems3: 'Helvetica'
    })
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