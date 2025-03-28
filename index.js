import express from 'express';
import typefaceRouter from './routes/typefaceRouter.js';
import designerRouter from './routes/designerRouter.js';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('pages/home.ejs', {
        title: 'Home Page',
        herotitle: 'Elevate your knowledge about Swiss Design',
        herosubtitle: 'We explain the fundamentals and makes it visually pleasing',
        cta: 'Join us!',
        col1headline: 'Swiss Design',
        col1paragraph: `A style of design that originated in Switzerland in the 1940s and 50s was the basis of much of the development of graphic design during the mid 20th century.
            Led by designers Josef Müller-Brockmann at the Zurich School of Arts and Krafts and Armin Hofmann at the Basel School of Design.
            Of the many contributions to develop from the two schools were the use of:`,
        col1listitem1: 'Sans-serif Typography',
        col1listitem2: 'Grids',
        col1listitem3: 'Assymetrical Layouts',
        col1listitem4: 'Typography & Photography',
        col2headline: 'Swiss style and its prototypes',
        col2paragraph: `The development of the Swiss style is associated with the formation of new principles in graphic design and is correlated with a number of prototypes, in particular, such as De Stijl, Russian constructivism, the Bauhaus school, International Typographic Style, etc. 
            Ernst Keller had a fundamental influence on the development of the Swiss school. Having started teaching at the School of Applied Sciences in Zürich in 1918, he outlined the basic principles of the future Swiss School, and also contributed to the formation of a whole generation of graphic designers. 
            The masters trained by Keller formed the basis of the Swiss school of graphic design. One of Keller's students was Josef Müller-Brockmann, who perfected the modular grid system and made it the basis of both the Swiss style and modern graphic design.`,
        containerClass: 'container',
        currentPage1: 'current-page',
        currentPage2: 'no-current-page',
        currentPage3: 'no-current-page'
    })
})

app.use('/typefaces', typefaceRouter);
app.use('/designers', designerRouter);



app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));