import React from 'react';
import {Button, Typography, message} from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const { Paragraph } = Typography;

export default class TypographyDemo extends React.Component {
  state = {
    value: 'testaaa'
  }
  copy(value) {
    console.log(value);
    return false;
  }
  render() {
    const {value} = this.state;
    return (
      <React.Fragment>
        <Paragraph copyable={{text: value, onCopy: this.copy.bind(this)}}>{value}</Paragraph>
        {value}
        <CopyToClipboard text={value} onCopy={()=>{message.success('复制成功')}}>
          <Button type="primary" style={{marginLeft: 20}}>
            Copy
          </Button>
        </CopyToClipboard>
      </React.Fragment>
    )
  }
}