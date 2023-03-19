const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

// Import your models here
const Actor = require('./models/actors');
const Country = require('./models/countries');
const Genre = require('./models/genres');
const Movie = require('./models/movies');

// Define your routes here
const actorRoutes = require('./routes/actor');
const countryRoutes = require('./routes/country');
const genreRoutes = require('./routes/genre');
const movieRoutes = require('./routes/movie');

app.use('/api/actors', actorRoutes);
app.use('/api/countries', countryRoutes);
app.use('/api/genres', genreRoutes);
app.use('/api/movies', movieRoutes);

// Connect to your MongoDB Atlas cluster
const dbURI = 'mongodb+srv://chamikarohan:KmfVKkju6ZRSGb3l@movieapi.29dnddu.mongodb.net/MovieDatabase?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to database'))
  .catch((error) => console.log(error));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
