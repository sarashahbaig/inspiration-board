import React, { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { text, emoji } = this.props;

    return (
      <div className="card">

        <section className="card__content">
          <p className="card__content-text">{ text }</p>
          <p className="card__content-emoji">{ emoji }</p>
        </section>
      </div>	   
    )	    
  }	 