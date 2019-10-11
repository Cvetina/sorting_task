### Sorting APP

- Development environment is set up using Create React APP
- For the testing are added "enzyme","enzyme-adapter-react-16","enzyme-to-json
- Initial data displayed is loaded from data.js without sorting and filtering
- To keep the state immutable is used ES6 spread operator.
- The application state is hold in the class component APP, and the data,  onChange method and className are passing via props to stateless components.
- For descending sorting is used Array.prototype.sort method
- To filter and display active records is used Array.prototype.filter
- Logic for sorting is decoupled to helpers.js
- With more time ahead I would do better file structure and take time to research more for react app unit testsing,
because these are my first tests.
