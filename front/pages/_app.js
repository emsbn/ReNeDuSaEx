import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';

import wrapper from '../store/configureStore';

const ReNeDuSaEx = ({ Component }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>ReNeDuSaExNePr</title>
    </Head>
    <Component />
  </>
);

ReNeDuSaEx.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(ReNeDuSaEx);
