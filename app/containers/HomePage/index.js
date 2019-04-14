/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import RandomFlickrImage from 'components/RandomFlickrImage'
import CenteredSection from './CenteredSection'
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import  { fetchImage as fetchImageAction , startRequest }  from './actions'
// import Image from 'components/Img'
import Form from './Form';
import Input from './Input';
import Section from './Section'
const imgpath = 'https://raw.githubusercontent.com/react-boilerplate/react-boilerplate-brand/master/assets/banner-metal-optimized.jpg'
/* eslint-disable react/prefer-stateless-function */
class HomePage extends React.Component {
  componentDidMount() {
    const { dispatch, startFlickRequest } = this.props
    dispatch(startFlickRequest({}))
  }
  componentDidUpdate(prevProps) {
    console.log('prevProps',prevProps)
  }
  render() {
    const { items, title, error, isLoading } = this.props;
    console.log('title',title)
    console.log(items)
    return (
      <div>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <CenteredSection>
      <RandomFlickrImage src={ imgpath } alt="Great" items={items} />
      <Section>
          <Form onSubmit={this.props.onSubmitForm}>
            <label htmlFor="Refresh Rate">
              <FormattedMessage {...messages.trymeHeader} />
              <Input
                id="changeRate"
                type="number"
                placeholder="secs"
                min="10" max="60"
                value={this.props.refreshRate}
              />
            </label>
          </Form>
          </Section>
        </CenteredSection>
        <article>
          { title }
        </article>
      </div>
    );
  }
 
}
//    onChange={this.props.onChangeRate}
HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  refreshRate: PropTypes.number,
  onChangeRate: PropTypes.func,
  items: PropTypes.array,
  title: PropTypes.string,
  // repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

export const mapStateToProps = state => {
  if (state.get('flicker') == undefined) {
    return {}
  }
  let fetcherState = state.get('flicker')
  console.log("state",fetcherState)
  return {
    isLoading: fetcherState.isFetching,
    error: fetcherState.error,
    items: fetcherState.items,
    title: fetcherState.title
  };
}


const mapDispatchToProps = (dispatch) => {
  return {  
    onSubmitForm:  evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
        dispatch(fetchImageAction())
    },
    startFlickRequest: startRequest,
    dispatch
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(HomePage)