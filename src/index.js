import 'dotenv/config';
import server from './server';

const port = process.env.PORT || 3000;

server.listen(port, () => console.log(`\n Clothing Morgue listening on port ${process.env.PORT}! \n`));