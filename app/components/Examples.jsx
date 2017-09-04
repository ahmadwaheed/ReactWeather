var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return(
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Few example locations</p>
      <ol>
        <li>
          <Link to='/?location=Woodland'>Woodland, CA</Link>
        </li>
        <li>
          <Link to='/?location=Gujranwala'>Gujranwala, Punjab</Link>
        </li>
      </ol>
  </div>
  )
};

module.exports = Examples;
