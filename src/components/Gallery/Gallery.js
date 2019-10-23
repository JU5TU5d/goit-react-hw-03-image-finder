import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PhotoCard from '../PhotoCard/PhotoCard';
import styles from './Gallery.module.css';

class Gallery extends Component {
  state = {};

  render() {
    const { items } = this.props;
    return (
      <ul className={styles.gallery}>
        {items.map(el => (
          <li className={styles.photoCard} key={el.id}>
            <PhotoCard {...el} />
          </li>
        ))}
      </ul>
    );
  }
}

Gallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default Gallery;
