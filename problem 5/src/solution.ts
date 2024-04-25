import express from 'express';
import mongoose from 'mongoose';
import "dotenv/config";
import itemRoutes from './routes/item.routes';
import bodyParser from 'body-parser';



const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://fisave-admin:kRdp07zIoB4DbQqP@fisave-cluster.4wvppvv.mongodb.net/Server_Tổng', {
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB', err));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Define routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api', itemRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});