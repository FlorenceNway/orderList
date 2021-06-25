## Frontend Exercise (React)

Use the db.json file to power a [json-server](https://github.com/typicode/json-server) API.

`npx json-server --watch db.json`

json-server will expose a full fake REST API from the db that you'll be able to use for this challenge

There are a couple of APIs you should use:

* /orders listing all orders
* /orderitems listing orderItems
* /orderitems/<ID> for an individual order item

Using this API, create a JS app that:

* lists all the orders with the total price, quantity and status of each order

* has an order detail view that lists the product, quantity and price for the items in an individual order
    * allows editing of each order's address in this view if the order status is not shipped


Notes for FAQs:

* it's ok if you don't finish the exercise
* it's also ok to add any functionality not mentioned above
* you're free to install any packages you need
* you can use search engines as you would in your day to day
* the design isn't too important, but using a component library or framework would be interesting, or at least do some basic styling
* please use git in your exercise, and raise one or more pull requests (as you see fit) so we can review the code afterwards

When making POST/PUT/PATCH requests to json-server, it's good to know that:

* If you make POST, PUT, PATCH or DELETE requests, changes will be saved to db.json
* Your request body JSON should be object enclosed, just like the GET output. (for example {"name": "Foobar"})
* Id values are not mutable. Any id value in the body of your PUT or PATCH request will be ignored
* A POST, PUT or PATCH request should include a Content-Type: application/json header to use the JSON in the request body. Otherwise it will return a 2XX status code, but without changes being made to the data

Let us know if you have any questions!