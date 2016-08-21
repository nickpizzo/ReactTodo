var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Todo = require('Todo');

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  })

  it('should call onToggle prop w id on click', () => {
    var todoData = {
      id: 199,
      text: 'Write todo.test.jsx',
      completed: true
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todo
  });
})
