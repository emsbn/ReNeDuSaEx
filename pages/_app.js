import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';

const ReNeDuSaEx = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>ReNeDuSaEx</title>
      </Head>
      <Component />
    </>
  );
};

ReNeDuSaEx.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default ReNeDuSaEx;
