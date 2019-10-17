import { connect } from 'dva';
import { PureComponent, useEffect, useState } from 'react';
class Visited extends PureComponent{
  componentDidMount(){
    console.log('++', window.location.search)
  };
  render(){
    return 'visited'
  }
}
export default connect()(Visited);
