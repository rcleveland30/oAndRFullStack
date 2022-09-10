const cookieParser = require('cookie-parser')
const express = require('express') //gives access to packages for server
const session = require('express-session')
const checkAuth = require('./middleware')
const { User } = require('./models') //this is how we talk to the database

const server = express() //executes the export into server, gives access to methods and properties

//third party middleware
server.use(cookieParser())
server.use(express.json()) // middleware executes request before server
server.use(
    session({
      cookie: {
        secure: false,  // allow requests over http; if true, allow only over https
        maxAge: 86400  // set cookie expiration for 86,400 seconds (i.e. 24 hours)
      },
      resave: false,  // update the session even when there are no changes
      saveUninitialized: true,  // always create a session
      secret: 'H!4e_#uTr2'  // a unique value that signs the cookie
    })
  );
  
server.use('/css', express.static(__dirname + "/css"))
server.use('/js', express.static(__dirname + "/js"))
server.set('view engine', 'ejs') //set ejs engine

server.post('/login', async (req,res) => {
    const {username,password} = req.body //sending up username and password
    console.log(username,password)
    const user = await User.findOne({ //talks to database, await needs value so rest of code runs
        where: {                        //cache into user
            email: username,            //object is setting parameters
            password                    
        }
    })
    console.log(user)
    if (user) {                         //conditional
        req.session.user = user         
        res.redirect(`/users/${user.id}`)
    } else {
        res.json({
            message: 'There is a problem with the username or password'
        })
    }
})

const navs = ['Home','About','Contact','SignUp'] // navigation pages


server.get('/login', (req, res) => {
    res.json({
      message: 'Please login'
    });
  });

// this endpoint is now protected with `checkAuth` middleware
server.get('/users/:id', checkAuth, async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByPk(id);
        res.json({
          message: `User with id ${id} has been successfully authenticated.`
        });
    } catch (e) {
        console.log(e);
        res.status(404).json({ message: 'User not found' });
    }
  });

server.get('/', (req,res) => {
    res.render('pages', { template: 'landing',navs })
})

server.get('/Home', (req,res) => {
    res.render('pages', { template: 'landing',navs })
})

server.get('/About', (req,res) => {
    res.render('pages', { template: 'about',navs })
})

server.get('/Contact', (req,res) => {
    res.render('pages', { template: 'contact',navs })
})

server.get('/SignUp', (req,res) => {
    res.render('pages', { template: 'signup',navs })
})

server.listen(8080, () => {
    console.log('The server is running at port 8080')
})