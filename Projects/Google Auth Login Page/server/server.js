import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import User from './models/userdata.js';
import './db/conn.js';
import session from 'express-session';
import passport from 'passport';
import { Strategy as OAuth2Strategy } from 'passport-google-oauth2';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
  })
);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.use(session({
  secret:'asecrettexttoencrypt',
  resave:false,
  saveUninitialized:true
}))

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new OAuth2Strategy({
    clientID : process.env.CLIENTID,
    clientSecret : process.env.CLIENTSECRET,
    callbackURL : '/auth/google/callback',
    scope : ['profile','email']
  },
  async(accessToken, refreshToken, profile, done)=>{
    try{
      let user = await User.findOne({googleId:profile.id});
      if(!user){
        user = new User({
          googleId : profile.id,
          name : profile.displayName,
          email: profile.emails[0].value,
          image: profile.photos[0].value
        })

        await user.save();
      }
      return done(null, user)
    }
    catch(err){
      return done(err, null);
    }
  }
  )
)

passport.serializeUser( (user,done) =>{
  done(null,user);
})

passport.deserializeUser( (user,done) =>{
  done(null,user);
})

app.get('/auth/google/',passport.authenticate("google",{
  scope:['profile','email']
}))

app.get('/auth/google/callback',passport.authenticate("google",{
  successRedirect:"http://localhost:3000/home",
  failureRedirect:"http://localhost:3000/"
}))

app.get('/google/userdata',(req,res)=>{
  if(req.user){
    res.status(200).json({message:'Login success',users:req.user})
  }
  else{
    res.status(400).json({message:'Authentication Fail'})
  }
})

// ---------------------------------------------------------------------------------------------------------------------------------

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/getdata', async (req, res) => {
  try {
    const data = await User.find();
    res.send(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/postuser', async (req, res) => {
  try {
    const userData = req.body;
    const newUser = new User(userData);
    await newUser.save();
    console.log('Data saved to DB');
    res.status(201).json(newUser); // Respond with the saved user data
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.delete('/deleteall', async (req,res) => {
  try{
    const result = await User.deleteMany({});
    console.log(`${result.deletedCount} documents deleted`);
    res.json({ message: `${result.deletedCount} documents deleted` });
  }
  catch(err){
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
