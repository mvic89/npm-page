import express from 'express'

const designerRouter = express.Router();

designerRouter.get('/', (req, res) => {
    // res.send('Hello from the Designer page')
    res.render('pages/designer.ejs', {
        
    })
})

designerRouter.get('/ernstkeller', (req, res) => {
    res.send('This is the Ernst Keller page!')
})

designerRouter.get('/arminhofmann', (req, res) => {
    res.send('This is the Armin Hofmann page!')
})

designerRouter.get('/jmb', (req, res) => {
    res.send('This is the Josef Müller-Brockmann page!')
})

export default designerRouter;