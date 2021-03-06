import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import styles from './Styles/DrawerButtonStyles'

class DrawerButton extends Component {
  static propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func
  }

  render () {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Text style={styles.text}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}

export default DrawerButton
