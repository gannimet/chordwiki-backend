import app from './App';

const port = process.env.PORT || 3333;

app.listen(port, (err) => {
    if (err) {
        return console.log('error:', err);
    }

    return console.log(`server is listening on port ${port}`);
});
