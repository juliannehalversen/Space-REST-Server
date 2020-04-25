import { Router } from 'express'

export const adminRouter = Router()

import { postAddGalaxy, getAllGalaxies, getGalaxyById, getEditGalaxy, postDeleteGalaxy } from '../controllers/admin.controller'

adminRouter.get('/getAllGalaxies', getAllGalaxies)

adminRouter.get('/single-galaxy/:id', getGalaxyById)

adminRouter.post('/edit-galaxy', getEditGalaxy)

adminRouter.post('/add-galaxy', postAddGalaxy)

adminRouter.post('/delete-galaxy', postDeleteGalaxy)