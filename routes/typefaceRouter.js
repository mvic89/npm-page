import express from 'express';
import Typefaces from '../data/typefaces.js';

const typefaceRouter = express.Router();

typefaceRouter.get('/', (req, res) => {
    res.render('pages/typefaces.ejs', {
        title: 'Typefaces Page',
        sidebarlinks1: '/typefaces/akzidenzgrotesk',
        sidebarlinks2: '/typefaces/univers',
        sidebarlinks3: '/typefaces/helvetica',
        sidebaritems1: 'Akzidenz-Grotesk',
        sidebaritems2: 'Univers',
        sidebaritems3: 'Helvetica',
        pageType: 'typefaces',
        containerClass: 'designcontainer',
        currentPage1: 'no-current-page',
        currentPage2: 'no-current-page',
        currentPage3: 'current-page',
        sidebarCurrent1: 'no-current-page',
        sidebarCurrent2: 'no-current-page',
        sidebarCurrent3: 'no-current-page'
    })
})

typefaceRouter.get('/akzidenzgrotesk', (req, res) => {
    let akzidenz = Typefaces[0]
    res.render('pages/typefaces.ejs', {
        title: 'Akzidenz-Grotesk Page',
        sidebarlinks1: '/typefaces/akzidenzgrotesk',
        sidebarlinks2: '/typefaces/univers',
        sidebarlinks3: '/typefaces/helvetica',
        sidebaritems1: 'Akzidenz-Grotesk',
        sidebaritems2: 'Univers',
        sidebaritems3: 'Helvetica',
        currentPage1: 'no-current-page',
        currentPage2: 'no-current-page',
        currentPage3: 'current-page',
        sidebarCurrent1: 'current-page',
        sidebarCurrent2: 'no-current-page',
        sidebarCurrent3: 'no-current-page',
        containerClass: 'designcontainer',
        typeface: akzidenz
    })
})

typefaceRouter.get('/univers', (req, res) => {
    let univers = Typefaces[1]
    res.render('pages/typefaces.ejs', {
        title: 'Univers Page',
        sidebarlinks1: '/typefaces/akzidenzgrotesk',
        sidebarlinks2: '/typefaces/univers',
        sidebarlinks3: '/typefaces/helvetica',
        sidebaritems1: 'Akzidenz-Grotesk',
        sidebaritems2: 'Univers',
        sidebaritems3: 'Helvetica',
        currentPage1: 'no-current-page',
        currentPage2: 'no-current-page',
        currentPage3: 'current-page',
        sidebarCurrent1: 'no-current-page',
        sidebarCurrent2: 'current-page',
        sidebarCurrent3: 'no-current-page',
        containerClass: 'designcontainer',
        typeface: univers
    })
})

typefaceRouter.get('/helvetica', (req, res) => {
    let helvetica = Typefaces[2]
    res.render('pages/typefaces.ejs', {
        title: 'Helvetica Page',
        sidebarlinks1: '/typefaces/akzidenzgrotesk',
        sidebarlinks2: '/typefaces/univers',
        sidebarlinks3: '/typefaces/helvetica',
        sidebaritems1: 'Akzidenz-Grotesk',
        sidebaritems2: 'Univers',
        sidebaritems3: 'Helvetica',
        currentPage1: 'no-current-page',
        currentPage2: 'no-current-page',
        currentPage3: 'current-page',
        sidebarCurrent1: 'no-current-page',
        sidebarCurrent2: 'no-current-page',
        sidebarCurrent3: 'current-page',
        containerClass: 'designcontainer',
        typeface: helvetica
    })
})

export default typefaceRouter;