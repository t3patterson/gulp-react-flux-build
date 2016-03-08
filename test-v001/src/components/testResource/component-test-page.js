var React = require('react')

var TestActions = require('../../actions/testResourceActions.js');
var TestStore = require('../../stores/testResourceStore.js');

var TableComponent = require('./_many-records_table-component.js')

var TestPage = React.createClass({
  
  getInitialState: function(){
    
    return {
      dataList: [],
    }
  },
  
  //(1)
  componentDidMount: function(){
    console.log('authors_page.js mounted, bits');
    console.log(TestActions)
    
    TestStore.addChangeListener(function(){
      console.log('inside the component')
      var results = TestStore.getDataList()
      console.log(results)
      this.setState({dataList: results})
    }.bind(this))

    TestActions.getManyFromDB()
  },

  componentWillUnmount: function(){
    // console.log('component unmounting --- AuthorsPage')
    
    // AuthorStore.removeChangeListener();
  },

  render: function(){
    console.log('current state of state:')
    console.log(this.state.dataList)
    return (
      <div>
        <h1>Flux Tester</h1>
        <TableComponent dataList={this.state.dataList}/>
      </div>
    );
  }
})

module.exports = TestPage;
