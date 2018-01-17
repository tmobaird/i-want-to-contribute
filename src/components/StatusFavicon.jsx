import * as React from 'react';
import success from '../images/favicon-success.ico';
import failure from '../images/favicon-failure.ico';
import Favicon from 'react-favicon';

interface Props {
  status: number
}

const StatusFavicon = (props: Props) => {
  if (props.status > 0) return <Favicon url={success}/>;
  if (props.status < 0) return <Favicon url={failure}/>;
  return null;
};

export default StatusFavicon;
