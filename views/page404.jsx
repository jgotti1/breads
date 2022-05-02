const React = require("react");
const Default = require("./layouts/Default");

function page404({ breads, title }) {
  return (
    <Default>
      <h2>Page NOT Found 404 Error</h2>
    </Default>
  );
}

module.exports = page404;
