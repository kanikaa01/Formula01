import * as fs from 'fs';

export default function handler(req, res) {
  fs.readFile(`pages/data/${req.query.slug}.json`, 'utf-8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Error reading file' });
      return;
    } try {
      const jsonData = JSON.parse(data);
      res.status(200).json(jsonData);
    } catch (parseError) {
      res.status(500).json({ error: 'Error parsing JSON' });
    }
  });
}
