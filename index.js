const express = require('express')
const app = express()
const port = 3000

const allCategories = require('./fullCategories.json')

app.get('/all-categories', (req, res) => {
  res.json(allCategories);
});
app.use(express.static(process.cwd()+"/my-app/dist/angular-nodejs-example/"));

app.get('/visible-categories', (req, res) => {
  let fakeVisibleCategories = allCategories
    .filter(category => category.id % 3 === 0)
    .map(({id}) => ({id}))

  res.json(fakeVisibleCategories);
});

app.get('*', (req, res) => {
  res.sendStatus(404);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
});
