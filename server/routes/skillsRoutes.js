const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
  const skills = [
    {category:'Languages', items:['Java','Python','JavaScript','HTML','CSS']},
    {category:'Frameworks', items:['React.js','Node.js','Express.js']},
    {category:'Databases', items:['PostgreSQL','MySQL']},
    {category:'Tools', items:['Git','GitHub','Docker']},
    {category:'Machine Learning', items:['scikit-learn','TensorFlow','PyTorch']}
  ];

  res.json(skills);
});

module.exports = router;
