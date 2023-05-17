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