var React = require('react');

//It will let us create links which we can switch back and forth.
//The syntaax will create the var. Link and use the "".Link" from router
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass ({
    onSearch: function(e) {
      e.preventDefault();

      var location = this.refs.search.value;
      var encodedLocation = encodeURIComponent(location);

      if(location.length > 0) {
        this.refs.search.value = '';
        window.location.hash = '#/?location='+ encodedLocation;

      }
      //alert(location);
    },
  render: function () {
    return(
      <div className="top-bar">
        <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">React Weather App</li>

          <li>
            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink>
          </li>
          <li>
            <IndexLink to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</IndexLink>
          </li>
          <li>
            <IndexLink to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examples</IndexLink>
          </li>
        </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
            <li>
              <input type="search" placeholder="Search Weather by City" ref="search"/>
            </li>
            <li>
              <input type="submit" className="button"  value="Get Weather"/>
            </li>

            </ul>
          </form>
        </div>

      </div>
    );
  }
});

module.exports = Nav;
