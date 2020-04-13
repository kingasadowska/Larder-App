import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import Card from 'components/molecules/Card/Card';

const Products = () =>(
    <UserPageTemplate pageType="product">
    <Card cardType="product" />
    <Card cardType="product" />
    <Card cardType="product" />
    <Card cardType="product" />
    <Card cardType="product" />
    <Card cardType="product" />
    </UserPageTemplate>
  );
export default Products;
