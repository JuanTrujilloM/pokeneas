import os from 'os';
import pokeneas from '../data/pokeneas.js';

// Auxiliary function to get a random pokenea and the container ID to identify which instance is responding
const getRandom = () => pokeneas[Math.floor(Math.random() * pokeneas.length)];
const containerId = os.hostname();

export const getApiPokenea = (req, res) => {
  const pokenea = getRandom();

  res.json({
    id: pokenea.id,
    name: pokenea.name,
    height: pokenea.height,
    ability: pokenea.ability,
    containerId: containerId,
  });

};

export const getViewPokenea = (req, res) => {
  const pokenea = getRandom();
  
  res.render('pokenea', {
    image: pokenea.image,
    philosophicalPhrase: pokenea.philosophicalPhrase,
    containerId: containerId,
  });
};