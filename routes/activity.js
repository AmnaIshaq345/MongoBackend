const router = require('express').Router();
const activityController = require('../controller/activityController');
router.get("/", activityController.all_activities);
router.get("/:activityId", activityController.find_activities)
router.post("/", activityController.add_activities);
router.put("/activityId", activityController.delete_activities);
router.delete("/activityId", activityController.update_activities);
module.exports= router;
