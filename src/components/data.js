import bitbbl from '../utils/bitcoin-bubbler.png'
import calendarImg from '../utils/calendar.png'
import fitnessTracker from '../utils/fitness-tracker.png'
import noteTaker from '../utils/note-taker.png'
import sportsScheduler from '../utils/sports-scheduler.png'
import weatherImg from '../utils/weather-app.png'


export const data = [
    {
    id: '1',
    title: 'Sports Scheduler',
    desc: 'The sports scheduler app allows users to follow local sporting teams around them using a social media like approach. Instead of trying to find which league a team plays in, to be able to find where they are playing next or how they have been playing, with the sport scheduler app you can simply follow a team that interests you, and on your dashboard that team will appear.',
    img: sportsScheduler,
    site: "https://ricjm008-sports-schedule-app.herokuapp.com/",
    icon: "https://github.com/ricjm008/sports_schedule_app",
},
{
    id: '2',
    title: 'Bitcoin Bubbler',
    desc: 'The Bitcoin Bubbler is a crypto-currency app, which dynamically generates prices for primarily bitcoin, but with future implementation, all sorts of other cryptos. The app takes current prices and trends and displays them for users, aswell as allow users to log their current currencies and amounts to show what the value is of their crypto-wallet. The app also takes the value of bitcoin and the value of the users wallet and displays it in a currency of the users choice.',
    img: bitbbl,
    site: "https://brucksta.github.io/Bitcoin-Bubbler/",
    icon: "https://github.com/Brucksta/Bitcoin-Bubbler",
},
{
    id: '3',
    title: 'Weather App',
    desc: 'This is user friendly weather app, which displayed the current days weather information and then a future 4 day forecast to show users the upcoming weather. This used a third party api from OpenWeather, and required us to search through fetch queries to find the relevant information that we wanted to show.',
    img: weatherImg,
    site: "https://brucksta.github.io/HW-WeatherApplication/",
    icon: "https://github.com/Brucksta/HW-WeatherApplication",
},
{
    id: '4',
    title: 'Fitness Tracker',
    desc: 'The fitness Tracker allows users to track all their workouts, be it a long cardio run or swim, or an in the gym resistance workout with weights. users can change choose from many different standard activities that are prebuilt into the app, or they can make their own exercises as they do them in their workout.',
    img: fitnessTracker,
    site: "https://pb-fitness-tracker.herokuapp.com/?id=60ec371836f90344d8ad894a",
    icon: "https://github.com/Brucksta/Workout-Tracking",
},
{
    id: '5',
    title: 'Express Note-Taker',
    desc: 'Any notes or ideas on your mind can be quickly jotted down in this easy to use note taker and displayed in a neat and easy to read UI.',
    img: noteTaker,
    site: "https://pb-express-notes.herokuapp.com/",
    icon: "https://github.com/Brucksta/Express-notes", 
},
{
    id: '6',
    title: 'Workday Scheduler',
    desc: 'Got a busy day? The workday scheduler will allow you to plan your day quickly and easily so you can fit everything that you want into your day, whether it be work or play.',
    img: calendarImg,
    site: "https://brucksta.github.io/Assignment-5-Calendar/",
    icon: "https://github.com/Brucksta/Assignment-5-Calendar",
},
];