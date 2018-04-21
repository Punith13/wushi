import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SpeechRecognition from 'react-speech-recognition';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import Button from 'material-ui/Button';
import SettingsVoice from '@material-ui/icons/SettingsVoice';
import { connect } from 'react-redux';
import { googleIconClick } from '../Actions';
import { googleTranslateProjectId } from '../constants';
const Translate = require('@google-cloud/translate');

const projectId = googleTranslateProjectId;

const translate = new Translate({
	projectId: projectId
});

const styles = theme => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap'
	},
	chip: {
		margin: theme.spacing.unit
	}
});

const propTypes = {
	// Props injected by SpeechRecognition
	transcript: PropTypes.string,
	resetTranscript: PropTypes.func,
	browserSupportsSpeechRecognition: PropTypes.bool
};

class Dictaphone extends Component {
	constructor(props) {
		super(props);

		this.state = {
			translatedTranscript: ''
		};
	}

	componentWillReceiveProps(nextProps) {
		//onsole.log('In speech recognition', nextProps);

		// The text to translate
		const text = 'Hello, world!';
		// The target language
		const target = 'ru';
	}

	render() {
		const { classes } = this.props;
		const { transcript, resetTranscript, browserSupportsSpeechRecognition } = this.props;

		if (!browserSupportsSpeechRecognition) {
			return null;
		}

		return (
			<div>
				<Chip
					avatar={
						<Avatar>
							<SettingsVoice />
						</Avatar>
					}
					label={transcript}
					className={classes.chip}
				/>
				<Button
					variant="raised"
					onClick={() => this.props.googleIconClick(transcript)}
					color="primary"
					style={{ display: 'block', marginBottom: '5px' }}
					className={classes.button}
				>
					Submit
				</Button>
				<Button onClick={resetTranscript} variant="raised" color="secondary" className={classes.button}>
					Reset
				</Button>
			</div>
		);
	}
}

Dictaphone.propTypes = { ...propTypes, classes: PropTypes.object.isRequired };

export default withStyles(styles)(SpeechRecognition(connect(null, { googleIconClick })(Dictaphone)));
