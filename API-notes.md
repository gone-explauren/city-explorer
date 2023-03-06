// My API key from locationIQ: pk.aa90d0c57b5cbdeb09f4e34bff282219
// **Don't forget to update Authorized IP addresses on locationIQ**

// How do I keep my API key secret when I'm using it in my code?
// create a .env file on the *root level* of the application (not the src folder!)
// in .env file: REACT_APP_LOCATIONIQ_API_KEY=pk.aa90d0c57b5cbdeb09f4e34bff282219
// *REACT_APP is necessary, the rest is the name I chose, then my API key*
// **add .env to .gitignore so GitHub will not recognize my "untracked" files (marked with "U")**
// .env.sample file can be commited to GitHub so that others (ie the grader) can enter their own API key and see my code, but not my API key *(note: they will have to change .env.sample to just .env when they clone from GitHub)*
// in .env.sample file: REACT_APP_LOCATIONIQ_API_KEY=<your-api-key-here>

// to get data from locationIQ: https://us1.locationiq.com/v1/search?key=YOUR_ACCESS_TOKEN&q=SEARCH_STRING&format=json
// example: https://us1.locationiq.com/v1/search?key=pk.aa90d0c57b5cbdeb09f4e34bff282219&q=Seattle&format=json
// *JSON formatter chrome extension (makes the data readable)*