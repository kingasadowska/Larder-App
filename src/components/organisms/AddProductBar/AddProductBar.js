import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import withContext from 'hoc/withContext';
import Heading from 'components/atoms/Heading/Heading';
import { connect } from 'react-redux';
import { addProduct as addProductAction } from 'actions';
import { Formik, Form } from 'formik';

const StyledWrapper = styled.div`
  border-left: 10px solid ${({ theme, activecolor }) => theme[activecolor]};
  z-index: 9999;
  position: fixed;
  display: flex;
  padding: 50px 70px;
  flex-direction: column;
  right: 0;
  top: 0;
  height: 100vh;
  width: 550px;
  background-color: white;
  box-shadow: -3px 0 10px rgba(0, 0, 0, 0.1);
  transform: translate(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.3s ease-in-out;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const StyledTextArea = styled(Input)`
  font-size: ${({ theme }) => theme.fontSize.m};
  margin: 60px 0 100px 10px;
  border-radius: 20px;
  height: 30vh;
  
  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledInput = styled(Input)`
  margin-top: 30px;

  ::first-letter {
    text-transform: uppercase;
  }
`;

const AddProductBar = ({ pageContext, isVisible, addProduct, handleClose }) => (
    <StyledWrapper isVisible={isVisible} activecolor={pageContext}>
      <Heading big>Add {pageContext}</Heading>
      <Formik
      initialValues={{ title: '', content: '', created: '' }}
      onSubmit={values => {
        addProduct(pageContext, values);
        handleClose();
      }}>
     {({ values, handleChange, handleBlur }) => (
        <StyledForm>
          <StyledInput
            type="text"
            name="title"
            placeholder="title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
          />
          <StyledTextArea
            name="content"
            as="textarea"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.content}
          />
          <Button type="submit" activecolor={pageContext}>
            Add Product
          </Button>
        </StyledForm>
      )}
    </Formik>
  </StyledWrapper>
);

AddProductBar.propTypes = {
    pageContext: PropTypes.oneOf(['diaries', 'fruits', 'bakeries']),
    isVisible: PropTypes.bool,
    addProduct: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired
  };

  AddProductBar.defaultProps = {
  pageContext: 'diaries',
  isVisible: false,
};

const mapDispatchToProps = dispatch => ({
  addProduct: (productType, productContent) => dispatch(addProductAction(productType, productContent)),
});

export default connect(
  null,
  mapDispatchToProps,
)(withContext(AddProductBar));
