import express from 'express';
import { FakeDatabase } from './fake-database';

const app = express();

// app.get('/', (req, res) => {
//     res.send('Well done!');
// })
const data = FakeDatabase.PHRASAL_VERB_DATA;

app.listen(3000, () => {
    console.log('The application is listening on port 123!');
})