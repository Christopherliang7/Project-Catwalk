# Project Catwalk 

Client-facing frontend for e-commerce marketplace. Each member of a team of four built out of one of the following sections: Product Overview, Related Products, Questions & Answers, and Ratings & Reviews. 

## Installation

After cloning repository, run the following commands.
To install dependencies:
```
npm install
```
To bundle js files:
```
npm run build
```
To start server:
```
npm start
```

Visit [localhost:3000/product/1](http:localhost:3000/product/1) to view first product. See different products by changing number.

## Technologies
- React
- Redux
- React-Router
- CSS
- Material UI

## Testing

Testing done with Jest and Enzyme. Type command 'npm test' to run all test. Included are two example test, one testing a React component the other a standard Jest test

# Components

## Product Overview
### Built by Nate Pruitt
This feature gives client the ability to filter through all styles available for a product. Client can click through a gallery of images for a given style. Client can add 
products by quantity and size.

![](https://github.com/team-daifuku/FEC/blob/master/catwalk_project_overview.gif)


## Related Products
### Built by Christopher Liang
Related Products provides clients with a carousel of products related to the overview product above. Upon click of an icon, client can also compare the two products. There is also an added feature to allow for customization of your outfit. If the client would like to save an outfit, they can do so by clicking the add button, and delete with the X button. These items will continue to stay with the patient, even after the application has closed, through local storage.

![](https://github.com/team-daifuku/FEC/blob/master/related_products.gif)

Components: [Related Products Components](https://github.com/Christopherliang7/Project-Catwalk/tree/master/client/components/widgets/Related)

Actions & Asychronous Functions: [Related Products Actions](https://github.com/Christopherliang7/Project-Catwalk/tree/master/client/actions/Related%20Products)


