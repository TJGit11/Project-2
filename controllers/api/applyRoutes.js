const { application } = require("express");

router.post('/apply', withAuth, async (req, res) => {
    try {
        const newApplication = await application.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newApplication);
    } catch (err) {
        res.status(400).json(err);
    }
});


// router.delete('/apply', withAuth, async (req, res) => {
//     try {
//       const projectData = await application.destroy({
//         where: {
//           id: req.params.id,
//           user_id: req.session.user_id,
//         },
//       });
  
//       if (!applicationData) {
//         res.status(404).json({ message: 'No application found with this id!' });
//         return;
//       }
  
//       res.status(200).json(projectData);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });