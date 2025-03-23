import express from 'express';
import typefaceRouter from './routes/typefaceRouter.js';
import designerRouter from './routes/designerRouter.js';
const app = express();
const PORT = 3001;

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req, res) => {
    // res.send('Hello from Homes Page!')
    res.render('pages/home.ejs', {
        logotype: 'The Swiss Design School'
    })
})

app.use('/typefaces', typefaceRouter);
app.use('/designers', designerRouter);



app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));