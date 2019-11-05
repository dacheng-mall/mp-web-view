import { useEffect, useState } from 'react';
import { connect } from 'dva';
import child from './child.less';

function Detail(props) {
  return (
    <div className={child.wrap}>
      <div className={child.cont}>
        start
        <div style={{ height: '2000px' }}></div>
        end
      </div>
      <div className={child.filter}>
        <div></div>
      </div>
    </div>
  );
}
function mapStateToProps({ app, visitedDetail }) {
  return { app, visitedDetail };
}
export default connect(mapStateToProps)(Detail);
