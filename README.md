# Fun Summer Fun Time Project

This was built out using Create-React-App. The project's goal was to build a front end to hit a CRUD backend. It allows users to add beer options they like, and vote on the beers they like best.

An interesting issue arose where the backing server's replies did not have a Access-Control-Allow-Origin header set. To address this issue, Netlify's Functions service was used as a middleman between the end server and the client. As this service is a wrapper around AWS's Lambda service, it was a nice chance to explore the serverless lambda approach. Additionally, I took the opportunity to explore lower level node http requests, sticking to the Https and url node standard libraries rather than using a third party library. The approach was more verbose, but educational.

On the front end, the application is relatively straightforward CRUD. I focused on creating original SVGs to present the content. I also incorporated styled-components complemented by styled-system, to explore a more systematic design system approach despite the small size of the project.

The site is deployed [here](https://summer-fun-time.netlify.com).
