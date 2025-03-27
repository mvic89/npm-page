import express from 'express';
import Typefaces from '../data/typefaces.js';

const typefaceRouter = express.Router();

typefaceRouter.get('/', (req, res) => {
    // res.send('Hello from the Typefaces page')
    res.render('pages/typefaces.ejs', {
        sidebarlinks1: '/typefaces/akzidenzgrotesk',
        sidebarlinks2: '/typefaces/univers',
        sidebarlinks3: '/typefaces/helvetica',
        sidebaritems1: 'Akzidenz-Grotesk',
        sidebaritems2: 'Univers',
        sidebaritems3: 'Helvetica',
        pageType: 'typefaces',
        containerClass: 'designcontainer'
    })
})

typefaceRouter.get('/akzidenzgrotesk', (req, res) => {
    // res.send('This is the Akzidens-Grotesk page!')
    let akzidenz = Typefaces[0]
    res.render('pages/typefaces.ejs', {
        sidebarlinks1: '/typefaces/akzidenzgrotesk',
        sidebarlinks2: '/typefaces/univers',
        sidebarlinks3: '/typefaces/helvetica',
        sidebaritems1: 'Akzidenz-Grotesk',
        sidebaritems2: 'Univers',
        sidebaritems3: 'Helvetica',
        containerClass: 'designcontainer',
        typeface: akzidenz
    })
})

typefaceRouter.get('/univers', (req, res) => {
    // res.send('This is the Univers page!')
    let univers = Typefaces[1]
    res.render('pages/typefaces.ejs', {
        sidebarlinks1: '/typefaces/akzidenzgrotesk',
        sidebarlinks2: '/typefaces/univers',
        sidebarlinks3: '/typefaces/helvetica',
        sidebaritems1: 'Akzidenz-Grotesk',
        sidebaritems2: 'Univers',
        sidebaritems3: 'Helvetica',
        containerClass: 'designcontainer',
        typeface: univers
    })
})

typefaceRouter.get('/helvetica', (req, res) => {
    // res.send('This is the Helvetica page!')
    let helvetica = Typefaces[2]
    res.render('pages/typefaces.ejs', {
        sidebarlinks1: '/typefaces/akzidenzgrotesk',
        sidebarlinks2: '/typefaces/univers',
        sidebarlinks3: '/typefaces/helvetica',
        sidebaritems1: 'Akzidenz-Grotesk',
        sidebaritems2: 'Univers',
        sidebaritems3: 'Helvetica',
        containerClass: 'designcontainer',
        typeface: helvetica
    })
})

export default typefaceRouter;