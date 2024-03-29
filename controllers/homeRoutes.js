const router = require('express').Router();
const { Order, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all orders and JOIN with user data
    // const orderData = await Order.findAll({
    //   include: [
    //     {
    //       model: User,
    //       attributes: ['name'],
    //     },
    //   ],
    // });

    // // Serialize data so the template can read it
    // const orders = orderData.map((order) => order.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', (req, res) => {
  const context = {
    imageURL: '/images/pexels-photo-1566837.jpg', // Replace with the actual image URL
  };
  res.render('template', context);
});

router.get('/apply', async (req, res) => {
  try {
    // Pass serialized data and session flag into template
    res.render('apply', {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/order', async (req, res) => {
  console.log('I AM THE USER_ID', req.session.user_id);
  try {
    // Pass serialized data and session flag into template
    res.render('order', {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/locations', async (req, res) => {
  try {
    // Pass serialized data and session flag into template
    const locations = ['uptown', 'downtown', 'middletown'];
    res.render('locations', {
      locations,
      title: 'locations',
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/checkout', async (req, res) => {
  try {
    // Pass serialized data and session flag into template
    res.render('checkout', {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/deliverymethod', async (req, res) => {
  try {
    // Pass serialized data and session flag into template
    res.render('deliverymethod', {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/deliverymethod', (req, res) => {
//   //If the user is already logged in, redirect the request to another route
//   if (req.session.logged_in) {
//     res.redirect('/order');
//     return;
//   }

// res.render('deliverymethod');
// });

// router.get('/project/:id', async (req, res) => {
//   try {
//     const orderData = await Order.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     const order = orderData.get({ plain: true });

//     res.render('order', {
//       ...order,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// Use withAuth middleware to prevent access to route
// router.get('/order', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Order }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('profile', {
//       ...user,
//       logged_in: true,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
