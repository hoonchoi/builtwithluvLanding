import React from 'react';
import '../styles/products.css';

import {Card, CardHeader, CardText, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';

import { products } from '../data/products';

const productCards = products.map(product => {
  const { avatar, description, github, name, summary, website } = product;

  return (
    <Card className="product-card" style={{margin: '0 auto'}} key={avatar}>
      <CardHeader
        title={name}
        subtitle={description}
        avatar={<Avatar size={60} src={avatar} />}
        className="product-header"
        actAsExpander={true}
        showExpandableButton={true}
        titleStyle={{fontSize:'20px'}}
        subtitleStyle={{fontSize:'16px'}}
      />
      <CardActions>
        <RaisedButton
          href={github}
          target="_blank"
          secondary={true}
          icon={<i className="fa fa-github fa-2x" />}
        />
        <RaisedButton
          href={website}
          target="_blank"
          secondary={true}
          icon={<i className="fa fa-globe fa-2x" />}
        />
      </CardActions>
      <CardText expandable={true} style={{textAlign: 'left'}}>
        {summary}
      </CardText>
    </Card>
  )
})

const Products = () => (
  <div id="products" className="products">
    <div className="our-work">
      Our Work
    </div>
    {productCards}
  </div>
);

export default Products;
