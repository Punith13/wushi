import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Input from 'material-ui/Input';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import VpnKey from '@material-ui/icons/VpnKey';
import Button from 'material-ui/Button';
import { Redirect } from 'react-router-dom';
import Logo from '../resources/css/img/Logo.jpeg';

const styles = theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	input: {
		margin: theme.spacing.unit
	},
	centerAlign: {
		display: 'block',
		margin: '0 auto',
		marginTop: '20vh'
	}
});

export class Inputs extends Component {
	constructor(props) {
		super(props);

		this.state = {
			login: false
		};
	}

	handleClick() {
		this.setState({ login: true });
	}

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.container}>
				<div
					style={{
						display: 'block',
						margin: '0 auto',
						marginTop: '10vh'
					}}
				>
					<List>
						<div
							style={{
								display: 'block',
								marginLeft: '30px'
							}}
						>
							<ListItem>
								<img src={Logo} style={{ width: '200px', height: '200px' }} />
							</ListItem>
							<ListItem>
								<Avatar>
									<AccountCircle />
								</Avatar>
								<Input
									placeholder="Username"
									className={classes.input}
									inputProps={{
										'aria-label': 'Description'
									}}
								/>
							</ListItem>
							<ListItem>
								<Avatar>
									<Lock />
								</Avatar>
								<Input
									type="password"
									placeholder="Password"
									className={classes.input}
									inputProps={{
										'aria-label': 'Description'
									}}
								/>
							</ListItem>
						</div>
						<div
							style={{
								display: 'block',
								marginLeft: '100px'
							}}
						>
							<ListItem>
								<Button
									onClick={() => this.handleClick()}
									variant="raised"
									color="primary"
									className={classes.button}
								>
									Login
								</Button>
								{this.state.login && <Redirect to="/platform" />}
							</ListItem>
						</div>

						<ListItem>
							<Button color="primary" className={classes.button}>
								Forgot Password
							</Button>
							|
							<Button color="primary" className={classes.button}>
								Sign up here
							</Button>
						</ListItem>
					</List>
				</div>
			</div>
		);
	}
}

Inputs.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Inputs);
