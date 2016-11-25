//help libraries
import jsdom from 'jsdom';
import jquery from 'jquery';

//React
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

//Testing Libraries
import chai, { expect } from 'chai';
import chaiJquery from 'chai-jquery';

//reducers - will be pased into the Provider
import reducers from '../src/reducers'

//Setting up the test environment to work like a browser
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>'); // === window.document
global.window = global.document.defaultView; // setup the window, exactly like the document window

const $ = jquery(global.window); // force instance of jquery to use global.window instead of browser window

// build 'renderComponent' helper that shuld render a react element
function renderComponent(ComponentClass, props, state) {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  );

  return $(ReactDOM.findDOMNode(componentInstance)); // produces HTML, returns as a jquery object. Now we can use jquery for testing this component
}

// Build helper for simulating events
$.fn.simulate = function(eventName, value){
  if(value){
    this.val(value);
  }

  //Simulate an event
  TestUtils.Simulate[eventName](this[0]); //Simulate[eventName] is equal to Simulate.change or Simulate.onKeyDown
}

// Set up chai-jquery
chaiJquery(chai, chai.util, $);

export {renderComponent, expect};
