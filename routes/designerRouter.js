import express from 'express';
import Designers from '../data/designers.js';

const designerRouter = express.Router();

designerRouter.get('/', (req, res) => {
    res.render('pages/designer.ejs', {
        title: 'Designers Page',
        sidebarlinks1: '/designers/ernstkeller',
        sidebarlinks2: '/designers/arminhofmann',
        sidebarlinks3: '/designers/jmb',
        sidebaritems1: 'Ernst Keller',
        sidebaritems2: 'Armin Hofmann',
        sidebaritems3: 'Josef Müller-Brockmann',
        pageType: 'designers',
        containerClass: 'designcontainer',
        currentPage1: 'no-current-page',
        currentPage2: 'current-page',
        currentPage3: 'no-current-page',
        sidebarCurrent1: 'no-current-page',
        sidebarCurrent2: 'no-current-page',
        sidebarCurrent3: 'no-current-page',

        
    })
})

designerRouter.get('/ernstkeller', (req, res) => {
    let keller = Designers[0]
    res.render('pages/designer.ejs', {
        title: 'Kellers Page',
        sidebarlinks1: '/designers/ernstkeller',
        sidebarlinks2: '/designers/arminhofmann',
        sidebarlinks3: '/designers/jmb',
        sidebaritems1: 'Ernst Keller',
        sidebaritems2: 'Armin Hofmann',
        sidebaritems3: 'Josef Müller-Brockmann',
        currentPage1: 'no-current-page',
        currentPage2: 'current-page',
        currentPage3: 'no-current-page',
        sidebarCurrent1: 'current-page',
        sidebarCurrent2: 'no-current-page',
        sidebarCurrent3: 'no-current-page',
        containerClass: 'designcontainer',
        designer: keller
    })
})

designerRouter.get('/arminhofmann', (req, res) => {
    let armin = Designers[1]
    res.render('pages/designer.ejs', {
        title: 'Hofmanns Page',
        sidebarlinks1: '/designers/ernstkeller',
        sidebarlinks2: '/designers/arminhofmann',
        sidebarlinks3: '/designers/jmb',
        sidebaritems1: 'Ernst Keller',
        sidebaritems2: 'Armin Hofmann',
        sidebaritems3: 'Josef Müller-Brockmann',
        currentPage1: 'no-current-page',
        currentPage2: 'current-page',
        currentPage3: 'no-current-page',
        sidebarCurrent1: 'no-current-page',
        sidebarCurrent2: 'current-page',
        sidebarCurrent3: 'no-current-page',
        containerClass: 'designcontainer',
        designer: armin
    })
})

designerRouter.get('/jmb', (req, res) => {
    let jmb = Designers[2]
    res.render('pages/designer.ejs', {
        title: 'JMBs Page',
        sidebarlinks1: '/designers/ernstkeller',
        sidebarlinks2: '/designers/arminhofmann',
        sidebarlinks3: '/designers/jmb',
        sidebaritems1: 'Ernst Keller',
        sidebaritems2: 'Armin Hofmann',
        sidebaritems3: 'Josef Müller-Brockmann',
        currentPage1: 'no-current-page',
        currentPage2: 'current-page',
        currentPage3: 'no-current-page',
        sidebarCurrent1: 'no-current-page',
        sidebarCurrent2: 'no-current-page',
        sidebarCurrent3: 'current-page',
        containerClass: 'designcontainer',
        designer: jmb
    })
})

export default designerRouter;