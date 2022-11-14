import app from './app.js';
import apiGateway from './api-gateway/apiGateway.js';
import { PORT } from './config/index.config.js';

app.listen(PORT, async () => {
    console.log(`Server is listening on port ${PORT}`);
    try {
        const response = await apiGateway();
        console.log('API Gateway response:', response.data);
    } catch(err) {
        // if error is 409, it means that the service is already registered, so it's not a problem
        if (err.response.status === 409) {
            return console.log('Service already registered, no need to register again');
        }
        console.log('Cannot connect to API Gateway');
    }
});
