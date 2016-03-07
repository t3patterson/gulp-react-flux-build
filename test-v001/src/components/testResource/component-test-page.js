var React = require('react')

var AuthorActions = require('../../actions/testResourceActions.js');
var AuthorStore = require('../../stores/testResourceStore.js');

var AuthorsPage = React.createClass({
  
  getInitialState: function(){
    this._componentUnmounting = false
    
    return {
      authorsList: [],
    }
  },
  
  //(1)
  componentDidMount: function(){
      console.log('authors_page.js mounted, bits');
      this._onChange();
      AuthorActions.fetchAuthorsFromDB();
  },

  componentWillUnmount: function(){
    // console.log('component unmounting --- AuthorsPage')
    
    AuthorStore.removeChangeListener();
  },

  render: function(){
    return (
      <div>
        <h1>Flux Tester</h1>
        
      </div>
    );
  }
})

module.exports = AuthorsPage;
