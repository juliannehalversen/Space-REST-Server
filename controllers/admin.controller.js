import { Galaxy } from '../models/galaxy'

// Create New Galaxy
export const postAddGalaxy = (req, res, next) => {
  // console.log('test' + req.body);
  const galaxy = new Galaxy({
    category: req.body.category,
    name: req.body.name,
    constellation: req.body.constellation,
    nameOrigin: req.body.nameOrigin,
    distance: req.body.distance
  })
  console.log(req.body);
  console.log(galaxy);
   galaxy
    .save()
    .then(result => {
      console.log('Created Galaxy')
      res.send('Created Galaxy! Check your DB')
      // res.redirect('/admin/products')
    })
    .catch(err => console.log(err))
}

// Get All Galaxies 
 export const getAllGalaxies = (req, res, next) => {
  Galaxy.find()
    .then(galaxy => {
      res.json(galaxy)
    })
    .catch(err => console.log(err))
}


// Get Single galaxy 
export const getGalaxyById = (req, res, next) => {
  const galaxyId = req.params;
  console.log('Galaxy ID ' + galaxyId.id)
  Galaxy.findById(galaxyId.id)
    .then(galaxy => {
      if (!galaxy) {
        return res.redirect('/')
      }
      res.json(galaxy)
    })
    .catch(err => console.log(err))
}

// Update galaxy
export const getEditGalaxy = (req, res, next) => {
  const galaxyId = req.body.galaxyId
  const updatedCategory = req.body.category
  const updatedName = req.body.name
  const updatedConstellation = req.body.constellation
  const updatedNameOrigin = req.body.nameOrigin 
  const updatedDistance = req.body.distance

  // console.log(prodId, updatedTitle, updatedPrice, updatedDesc, updatedImageUrl);
  
 Galaxy.findById(galaxyId)
  .then(galaxy => {
    galaxy.category = updatedCategory
    galaxy.name = updatedName
    galaxy.constellation = updatedConstellation
    galaxy.nameOrigin = updatedNameOrigin
    galaxy.distance = updatedDistance
    return galaxy.save()
  })
    .then(result => {
      console.log('Updated Galaxy')
      res.redirect('/admin/getAllGalaxies')
    })
    .catch(err => console.log(err))  
} 

// Delete Galaxy
export const postDeleteGalaxy = ( req, res, next) => {
    const galaxyId = req.body.galaxyId;
    console.log(req.body);
    Galaxy.findByIdAndRemove(galaxyId)
    .then(() => {
      console.log(galaxyId);
        console.log('Deleted the galaxy')
        res.send('Deleted Galaxy! Get all to see!')
        // res.redirect('/admin/getAllProducts')
    })
    .catch(err => console.log(err))
} 
