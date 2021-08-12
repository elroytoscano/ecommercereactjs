import React from 'react';
import { connect } from 'react-redux';

import ProductsContent from '../components/Content/ProductsContent/ProductsContent';

const Products = (props) => {
  
  return (
    <>
      <ProductsContent />
    </>
  );
};

const mapStateToProps = (state) => {
  return { currentPage: state.currentPage };
};

export default connect(mapStateToProps, null)(Products);
