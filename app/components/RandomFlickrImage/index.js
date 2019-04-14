/**
 *
 * RandomFlickrImage
 *
 */

import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components'
import A from '../A';
import NormalImg from '../Img';
import _ from 'lodash'
const Img = styled(NormalImg)`
  width: 100%;
  margin: 0 auto;
  display: block;
`;
/* eslint-disable react/prefer-stateless-function */
class RandomFlickrImage extends React.PureComponent {
  
  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 5000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    let imagePath = this.props.src
    if (_.isEmpty(this.props.items) == false) {
      let indx = Math.floor(Math.random() * this.props.items.length)
      let item = _.pullAt(this.props.items,[indx])[0]
      imagePath =  (item === undefined) ? imagePath : item.media.m
    }
    return (
      <div>
        <A href="https://www.linkedin.com/in/fer-canon-16794b89/">
          <Img src={imagePath} alt={this.props.alt} />
        </A>
      </div>
    );
  }
}

RandomFlickrImage.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  items: PropTypes.array
};
export default RandomFlickrImage;
