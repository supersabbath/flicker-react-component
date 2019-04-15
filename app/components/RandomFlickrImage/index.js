/**
 *
 * RandomFlickrImage
 *
 */
import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components'
import _ from 'lodash'
// React Components
import A from '../A';
import NormalImg from '../Img';

const Img = styled(NormalImg)`
  margin: 0 auto;
  max-width: none;
  display: block;
  border-radius: ${props => props.theme.radius};
  border: 1px solid ${props => props.theme.main};
`;

/* eslint-disable react/prefer-stateless-function */
class RandomFlickrImage extends React.PureComponent {

  constructor(props) {
    super(props)
    this.launchTimer = this.launchTimer.bind(this)
  }
  // utils
  launchTimer() {
    console.log("refreshig", this.props.refreshRate)
    this.interval = setInterval(() => this.setState({ time: Date.now() }), (this.props.refreshRate + 1) * 1000);
  }
  // React events
  componentDidMount() {
    this.launchTimer()
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentDidUpdate(prevProps) {
    console.log('prevProps', prevProps)
    if (prevProps.refreshRate != this.props.refreshRate) {
      clearInterval(this.interval);
      this.launchTimer()
    }
  }
  // Render
  render() {
    let imagePath = this.props.src
    let href = "https://www.linkedin.com/in/fer-canon-16794b89/"
    if (_.isEmpty(this.props.items) == false) {
      let indx = Math.floor(Math.random() * this.props.items.length)
      let item = _.pullAt(this.props.items, [indx])[0]
      imagePath = (item === undefined) ? imagePath : item.media.m
      href = (item === undefined) ? imagePath : item.media.link
    }
    return (
      <div>
        <A href={href} >
          <Img src={imagePath} alt={href} />
        </A>
      </div>
    );
  }
}

RandomFlickrImage.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  className: PropTypes.string,
  items: PropTypes.any,
  refreshRate: PropTypes.number.isRequired
};

export default RandomFlickrImage;
