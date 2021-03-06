import passport from 'passport';
import User from '../models/User';

const createAccount = (req, res) => {
  User.findOne({ email: req.body.email }).then(exists => {
    if (exists) {
      return res
        .status(400)
        .type('json')
        .json({ message: 'User with same email already exists' });
    }

    var isTeacher = false;
    if (req.body.isTeacher === 'true') {
      if (req.body.teacherCode === 'xyz456') {
        isTeacher = true;
      } else {
        isTeacher = 'error';
      }
    }

    if (typeof isTeacher === 'boolean') {

      return User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        isTeacher: isTeacher
      }).then(user => {
        const created = user.toObject();
        delete created.password;
        res.status(201).json(created);
      })
      .catch(error => {
        res
          .status(500)
          .type('json')
          .json({ error });
      });
    } else {
      res.status(500).send('incorrect teacher code');
    }
  });
};

const attemptSignIn = (req, res, user) => {
  req.login(user, err => {
    if (err) {
      res.status(401).send(err);
    } else {
      res.json(user);
    }
  });
};

const signIn = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err || !user) {
      res.status(401).send(info);
    } else {
      attemptSignIn(req, res, user);
    }
  })(req, res, next);
};

const verify = (req, res) => {
  if (req.user) {
    res.status(200).json(req.user);
  } else {
    res.status(401).json({ message: 'not logged in' });
  }
};

const checkAuthorized = (req, res) => {
  if (req.user) {
    res.status(200).json({ loggedIn: true });
  } else {
    res.status(401).json({ loggedIn: false });
  }
};

const checkAuthServer = (req, res, next) => {
  if (req.user) {   
    next();
  } else {
    res.status(401).json({ message: 'not logged in' });
  }
};

const signOut = (req, res) => {
  req.logout();
  res.redirect('/');
};

export default { createAccount, signIn, verify, checkAuthorized, checkAuthServer, signOut };
