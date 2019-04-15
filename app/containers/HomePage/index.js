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
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import _ from 'lodash'
// Redux Actions
import { fetchImage as fetchImageAction, toggleLoading, updateRate } from './actions'
// Components 
import RandomFlickrImage from 'components/RandomFlickrImage'
import H1 from 'components/H1'
import H2 from 'components/H2'
import CenteredSection from './CenteredSection'
import Section from './Section';
import Input from './Input';
import Form from './Form';
import LoadingIndicator from 'components/LoadingIndicator';

const imgpath = 'http://media.gettyimages.com/vectors/hire-me-vector-id504307610?s=170667a&w=1007'

/* eslint-disable react/prefer-stateless-function */
class HomePage extends React.Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchImageAction({}))
  }

  render() {
    const { items, title, error, isLoading } = this.props;
    const isErrorMessage = _.has(error, 'message')
    if (_.isUndefined(isLoading) || _.isUndefined(items)) {
      return (<div> <LoadingIndicator /> </div>)
    }
    return (
      <div>
        <CenteredSection>
          <H1>
            <FormattedMessage {...messages.header} />
          </H1>
        </CenteredSection>
        <CenteredSection>
          {isLoading && <LoadingIndicator />}
          <RandomFlickrImage src={imgpath} items={items} refreshRate={this.props.refreshRate} />
          <Section>
            <Form onSubmit={this.props.onSubmitForm}>
              <label style={{ color: 'rgb(46, 68, 78)' }} htmlFor="Refresh Rate">
                <FormattedMessage {...messages.updateTime} />
                <Input
                  id="changeRate"
                  type="number"
                  placeholder="10"
                  min="1" max="20"
                  value={this.props.refreshRate}
                  onChange={this.props.onChangeRate}
                />
              </label>
            </Form>
            <H2>
              {isErrorMessage ? error.message : title}
            </H2>
          </Section>
        </CenteredSection>
      </div>
    );
  }

}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  showLoadingIndicator: PropTypes.func,
  refreshRate: PropTypes.number,
  onChangeRate: PropTypes.func,
  items: PropTypes.any,
  title: PropTypes.string,
};
// Redux connections
export const mapStateToProps = state => {
  if (state.get('flicker') == undefined) {
    return {}
  }
  let fetcherState = state.get('flicker')
  return {
    isLoading: fetcherState.get('isFetching'),
    error: fetcherState.get('error'),
    items: fetcherState.get('items'),
    title: fetcherState.get('title'),
    refreshRate: fetcherState.get('rate')
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(fetchImageAction())
    },
    onChangeRate: evt => dispatch(updateRate(evt.target.value)),
    dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)