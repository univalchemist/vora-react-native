import React, { Component } from 'react'
import { Alert, Button, View } from 'react-native'
import AppContainer from './routes/AppContainer'
import { connect } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';

class App extends Component {

	render() {
		return (
			<View style={{ flex: 1, backgroundColor: 'blue' }}>
				<Spinner
					key={5}
					visible={this.props.flag}
					textContent={""}
				/>
				<AppContainer
					ref={nav => {
						this.navigator = nav;
					}}
				/>


			</View>
		)
	}
}

const mapStateToProps = state => {
	return {
		flag: state.progressReducer.flag
	}
}

export default connect(mapStateToProps)(App)