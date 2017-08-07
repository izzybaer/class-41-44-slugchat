#### Feature Tasks  
### backend
* created an app on the google dev console
 * configured oauth credentials to support a client app on `http://localhost:8080`
 * configured oauth credentials to support a server redirect uri  to `http://localhost:3000/oauth/google/code`
* created a backend route `GET /oauth/google/code` for handling google oauth

### frontend
* created an index.html with an anchor tag pointing to the google authorization page
 * configured the query string with correct key value pairs
