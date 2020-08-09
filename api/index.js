import mongoose from 'mongoose';
import todoRouter from './routes/todo';

mongoose.connect(
    'mongodb+srv://alp:5NCkoRh60snNv01Y@cluster0.mexia.mongodb.net/alp?retryWrites=true&w=majority',
    { useNewUrlParser: true }
);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    // eslint-disable-next-line no-console
    console.log('Success DB Connection');
});

export default todoRouter;
