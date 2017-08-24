var React = require('react');

//It will let us create links which we can switch back and forth.
//The syntaax will create the var. Link and use the "".Link" from router
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
  return (
  <div>
    <h2>Nav Component</h2>

    <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink>
    <IndexLink to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</IndexLink>
    <IndexLink to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examples</IndexLink>
  </div>
  )
};

module.exports = Nav;
