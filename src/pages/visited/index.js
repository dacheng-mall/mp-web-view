import { connect } from 'dva';
import { useEffect, useState } from 'react';
import { Tabs } from 'antd-mobile';
import styles from './index.less';
import { jump } from "../../utils/index";

const TABS = [{ title: '拜访详情', key: 'detail' }, { title: '排行榜', key: 'ranking' }];

function Visited(props) {
  function change (tag){
    console.log(tag);
    jump(`/visited/${tag.key}`)
  }
  return (
    <div className={styles.wrap}>
      <div className={styles.tabs}>
        <Tabs tabs={TABS} initialPage="detail" onChange={change} />
      </div>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
}
function mapStateToProps({ app, visited }) {
  return { app, visited };
}
export default connect(mapStateToProps)(Visited);
