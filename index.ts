import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import 'dotenv/config';
import authenticate from './middleware/authenticate';
import userRoutes from './user/userRoutes';

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(helmet());
app.use(cors());

app.use('/v1/users', authenticate, userRoutes);

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
