const Activity = require('../model/Activity');
//All Activities
const all_activities = async(req, res) => {
    try {
        const activities = await Activity.find();
        res.json(activities);
      } catch (error) {
        res.json({ message: error });
      }
};
//find activity
const find_activities = async(req, res) => {
        try {
            const activity = await Activity.findById(req.params.activityId);
            res.json(activity);
          } catch (error) {
            res.json({ message: error });
          }
    };
// Add new activity
const add_activities = async(req, res) => {
        const activity = new Activity({
            Name: req.body.name,
            date: req.body.date,
            duration: req.body.duration,
            phone: req.body.phone,
            description: req.body.description,
            activity_type: req.body.activity_type
          });
        
          try {
            const savedActivity = await activity.save();
            res.send(savedActivity);
          } catch (error) {
            res.status(400).send(error);
          }
    };
//Delete Activity 
const delete_activities = async(req, res) => {
        try {
            const removeActivity = await Activity.findByIdAndDelete(req.params.activityId);
            res.json(removeActivity);
          } catch (error) {
            res.json({ message: error });
          }
    };
//update_product
const update_activities= async(req, res) => {
        try {
            const activity = {
                Name: req.body.name,
                date: req.body.date,
                duration: req.body.duration,
                phone: req.body.phone,
                description: req.body.description,
                activity_type: req.body.activity_type
            };
        
            const updatedActivity = await Product.findByIdAndUpdate(
              { _id: req.params.activityId },
              activity
            );
            res.json(updatedActivity);
          } catch (error) {
            res.json({ message: error });
          }
    };



module.exports = {
    all_activities,
    find_activities,
    add_activities,
    delete_activities,
    update_activities
};