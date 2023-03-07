# Front-End Requests to API

// Front-End: user interface (my computer). Back-End: interconnecting bits, provides data (another computer)
// API: Application Programming Interface

// use Axios to make a request to an API to get real-world data from the internet into your app
// *Axios* is another package of code (like chart.js and React Bootstrap) to add to our codebase.
// Axios can be used to make Get requests
// Web Request-Response cycle. There is a *request object* and a *response object* getting passed each time this cycle occurs.

## REpresentational State Transfer (REST)

// Rest is a way to organize how computers send and received data
// how it works:

* Get
  * the .get() method is native to axios
  * we pass in the URL of the data we want to access
  * get can be very slow, and the computer will try to move on before it actually gets the data
  * *await and async go together* and they tell the computer to wait for that data
  * drill down to get the data using .data (ex: *console.log(starWasCharacter****.data****.results)*)
* Post
* Delete
* Put

## Anatomy of a URL

* Base URL (endpoint) <http://api-website.com/search>
* Query string (part of the request object):
  * <?> notes the beginning of query
  * <key=value>
  * <&> seperates the key-value pair..
  * <anotherKey=value>
* example <http://api-website.com/search?key=value&anotherKey=value>

// *My API key from locationIQ: pk.aa90d0c57b5cbdeb09f4e34bff282219*
// **Don't forget to update Authorized IP addresses on locationIQ**

## swAPI

// An example using Star Wars API

<!-- 
import React from 'react';
// import axios!
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starWarsData: [],
      cityName: '',
      cityData: {},
      error: false,
      errorMessage: ''
    }
  }

  eventHandler = async (e) => {
    e.preventDefault();
    try {
      // console.log('event fired');
      // get the data from the SW API
      // axios is the library of code that we will use to make our requests
      let starWarsCharacters = await axios.get('https://swapi.dev/api/peple/?page=1');
      // console.log(starWarsCharacters.data.results);
      //save it in state
      this.setState({
        starWarsData: starWarsCharacters.data.results
      });
    } catch (error) {
      console.log('error: ', error);
      console.log('error.message: ', error.message);
      this.setState({
        error: true,
        errorMessage: `An Error Occured: ${error.response.status}`
      })
    }
  }

  handleCityInput = (e) => {
    this.setState({
      cityName: e.target.value
    });
  }

  citySubmit = async (e) => {
    e.preventDefault();
    // what city are we searching for? — the one in state

    // get data from the Location IQ API
    let cityData = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.cityName}&format=json`);
    console.log(cityData.data[0]);
    // save that data in state
  }

  render() {

    let starWarsListItems = this.state.starWarsData.map((swData, idx) => {
      // console.log(idx);
      // console.log(swData);
      return <li key={idx}>{swData.name}</li>
    })

    let mapURL = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=47.6038321,-122.330062&zoom=12`

    console.log(this.state.cityName);
    return (
      <>
        <h1>Data from an API</h1>
        <form onSubmit={this.eventHandler}>
          <button type="submit">Display Star Wars data</button>
        </form>

        <form onSubmit={this.citySubmit}>
          <label>Pick a City
            <input type="text" onChange={this.handleCityInput} />
          </label>
          <button type="submit">Get City Data</button>
        </form>

        {this.state.error
          ?
          <p>{this.state.errorMessage}</p>
          :
          <ul>
            {starWarsListItems}
          </ul>
        }
      </>
    );
  }
}

export default App; 

-->

## Keep Your API Private

// ***Your API is connected to your credit card, don't put it out into the world***

//How do I keep my API key secret when I'm using it in my code?
// create a .env file on the *root level* of the application (not the src folder!)
// in .env file: REACT_APP_LOCATIONIQ_API_KEY=pk.aa90d0c57b5cbdeb09f4e34bff282219
// *REACT_APP is necessary, the rest is the name I chose, then my API key*
// **add .env to .gitignore so GitHub will not recognize my "untracked" files (marked with "U")**
// .env.sample file can be commited to GitHub so that others (ie the grader) can enter their own API key and see my code, but not my API key *(note: they will have to change .env.sample to just .env when they clone from GitHub)*
// in .env.sample file: REACT_APP_LOCATIONIQ_API_KEY=<your-api-key-here>
// ***restart the server after updating .env***

## Use API in Your Code

// to get data from locationIQ: <https://us1.locationiq.com/v1/search?key=YOUR_ACCESS_TOKEN&q=SEARCH_STRING&format=json>
// example: <https://us1.locationiq.com/v1/search?key=pk.aa90d0c57b5cbdeb09f4e34bff282219&q=Seattle&format=json>
// *JSON formatter chrome extension (makes the data readable)*
