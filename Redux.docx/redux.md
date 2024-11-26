## notes

<!-- **************  Redux therotical concepts  ************  -->

<!-- Redux is an independent library can be used with any framework like vue.js , angular.js etc -->
<!-- "state should be read only" 
and state should not be mutate and changes should be made through reducers , which means
functionality should be passed through reducers to get change  -->

<!-- ******* redux toolkit  and redux  basics intro ******-->
<!-- It is like a helping hand of redux which introduced to make 
it easier to manage state in an application( here state think as data which appn needs to keep track of, like a list of items in a shopping cart or whether a user is logged in.)

Redux keeps all of this data in a single place, which makes it easier to use across your app, especially as it grows.
But setting up Redux can be a bit complicated. This is where Redux Toolkit comes in—it simplifies Redux by providing ready-made tools and guidelines for the most common things you'll need to do. that means:- Redux Toolkit provides a set of tools that reduce the amount of code you need to write. -->



<!-- store:-  it is like a single source  from where take the things and use in components it is like a global variable.

Reducers:- It is used to control what changes are going on in store or mini store all functionality happens through reducers

it is like a object

useSelector:- when we want to select value from store

useDispatch:- when we want to dispatch (send krni h) value
 -->

 ## notes:- 
 <!-- React Redux Is used for making a bridge between react and core redux.  That's why we use 2 commands to install redux toolkit in react existing project
 npm install @reduxjs/toolkit
 npm install react-redux-->


<!-- step 1:-  

 Configuring Store in react application
 
  src -> app -> store.js 
 import configureStore from redux core


 step 2:- 

 making reducers in redux toolkit
 making folder features -> todo(any name) -> (any name).js
  nanoid :-  is used to generate unique id which we are using here from redux toolkit

step 3:- making initial state of store


step 4 :- making slice which is almost like a bigger version of reducer and reducer is simply a functionality.

reducer :- A reducer is a pure function in Redux that takes the current state and an action as arguments, and returns a new state

slice :- In Redux Toolkit, a slice is a reducer and its associated actions combined into one object. It simplifies the process of defining Redux state, reducing boilerplate code.
  -->
