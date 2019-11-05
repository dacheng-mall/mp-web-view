import { connect } from 'dva';
import { useEffect, useState, Fragment } from 'react';
import { decodeQrcodeQuery } from '../utils';
const search = `
?p=visited/detail&id=10903&t=Bearer%20Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA1MjkxNGEyN2E2OTQ3ZWZiNjRiNzVkZjZiNGVkMWZjIiwibmFtZSI6IumyuOmxvOS4jeaYr-mxvCIsInVzZXJuYW1lIjoibzMwY1o0MHBjM0FIZ19HQXhhRmxOOXNJNGxKWSIsInVzZXJUeXBlIjo0LCJpbnN0aXR1dGlvbklkIjoiNGQ4M2YwYjc1NGY0NDJiYjgwYWEzMGFkZmI2Njg5ZTciLCJ0aW1lIjoxNTcyOTI3Nzk3NDU3LCJpYXQiOjE1NzI5Mjc3OTcsImV4cCI6MTU3MzUzMjU5N30._IvIZ1E365M0bkmSFPSDGH7UICrsGXvQB1QMpuIYr5k
  `;
function mapStateToProps({ app }) {
  return app;
}

export default connect(mapStateToProps)(function(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const { query } = decodeQrcodeQuery(window.location);
    if (query.t && query.id) {
      props.dispatch({
        type: 'app/login',
        // payload: query,
      });
    } else {
      // TODO 在这里执行退回的操作, 没有用户信息
      // throw '没有用户信息';
      props.dispatch({
        type: 'app/relogin'
      });
    }
  });
  return (
    <Fragment>
      <div
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </div>
    </Fragment>
  );
});
