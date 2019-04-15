# flickr-react-component

This Repo has React-Redux demo for loading images Asynchronously from Flicker.
The image reload rate has to be controlled by the user.

## Why Redux?

Redux is a stylish way to organize the state of the application as well as a desing pattern to follow at developement. React-Redux also allows code re-utilization for mobile development under React Native

#### Pros: 

Havinging a scaffolding to follow while using react , light weight, Reactive webs site.

#### Cons: 

Setting up the development enviroment could be challenging and time consumming. Also, many issues may arise during process or installing new npm modules. Thats why I decided to use a boilerplate :

#### As a starting point I used [www.reactboilerplate.com](https://www.reactboilerplate.com) 

It offers everything that we need, hot relaoding, redux configuration, some ClI commands, propTypes, styled-component, localization, SEO using Helmet , and many more

Regaring the boiler plate I decided to remove Saga.js as as it adds more complexity than required. For Asych actions I used that standard redux-thunk.

#### CSS with styled-components 
 For css this project uses  [styled-components](https://www.styled-components.com/docs/basics#motivation). It integrates very well with React. For instances check how I implemented a loading indicator in /components/LoadingIndicator, Or the use of themes in the entire project: See the <ThemeProvider>

# Redux Demo important parts: 

##### Setup:
* /app/reducers.js 
* /app/configureStore.js
  
#### Files and folders to pay attention to:
* app/containers/App/index.js
* app/containers/HomePage/index.js 
* app/containers//HomePage/reducers.js 
* app/HomePage/actions.js
* app/components

# Usage: 
###### Clone the code
* `git clone https://github.com/supersabbath/flickr-react-component.git`
###### Install dependencies
* `npm install`
###### Run :
* `npm start`
