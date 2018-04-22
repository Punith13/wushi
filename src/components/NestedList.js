import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import LocationOn from '@material-ui/icons/LocationOn';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import { connect } from 'react-redux';
import { getlocation, googleIconClick, getAlipayImage, clearMap } from '../Actions';
import SpeechRecognition from './SpeechRecognition';

const styles = theme => ({
	root: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper
	},
	nested: {
		paddingLeft: theme.spacing.unit * 4
	}
});

class NestedList extends React.Component {
	state = { open: false };

	handleClick = () => {
		this.setState({ open: !this.state.open });
	};

	handleIconClick = () => {
		this.props.getlocation();
	};

	handleGoogleIconClick = type => {
		//this.props.clearMap();
		this.props.googleIconClick(type);
	};

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<List component="nav">
					<ListItem button className={classes.nested}>
						<ListItemIcon>
							<StarBorder />
						</ListItemIcon>
						<SpeechRecognition />
					</ListItem>
					<ListItem button onClick={this.handleClick}>
						<ListItemIcon>
							<LocationOn />
						</ListItemIcon>
						<ListItemText inset primary="NAB Locations" />
						{this.state.open ? <ExpandLess /> : <ExpandMore />}
					</ListItem>
					<Collapse in={this.state.open} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							<ListItem button className={classes.nested}>
								<ListItemIcon>
									<StarBorder />
								</ListItemIcon>
								<ListItemText onClick={this.handleIconClick} inset primary="NAB ATM" />
							</ListItem>
							<ListItem button className={classes.nested}>
								<ListItemIcon>
									<StarBorder />
								</ListItemIcon>
								<ListItemText inset primary="NAB Branch" />
							</ListItem>
						</List>
					</Collapse>
					<ListItem button onClick={this.handleClick}>
						<ListItemIcon>
							<LocationOn />
						</ListItemIcon>
						<ListItemText inset primary="Other Locations" />
						{this.state.open ? <ExpandLess /> : <ExpandMore />}
					</ListItem>
					<Collapse in={this.state.open} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							<ListItem button className={classes.nested}>
								<ListItemIcon>
									<StarBorder />
								</ListItemIcon>
								<ListItemText
									onClick={() => this.handleGoogleIconClick('Asian Grocery')}
									inset
									primary="Asian Grocery"
								/>
							</ListItem>
							<ListItem button className={classes.nested}>
								<ListItemIcon>
									<StarBorder />
								</ListItemIcon>
								<ListItemText
									onClick={() => this.handleGoogleIconClick('Asian Restaurants')}
									inset
									primary="Asian Restaurants"
								/>
							</ListItem>
						</List>
					</Collapse>
					<ListItem button onClick={this.handleClick}>
						<ListItemIcon>
							<LocationOn />
						</ListItemIcon>
						<ListItemText inset primary="Suburb Info" />
						{this.state.open ? <ExpandLess /> : <ExpandMore />}
					</ListItem>
					<Collapse in={this.state.open} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							<ListItem button className={classes.nested}>
								<ListItemIcon>
									<StarBorder />
								</ListItemIcon>
								<ListItemText
									onClick={() => this.handleGoogleIconClick('Asian Grocery')}
									inset
									primary="Asian demography"
								/>
							</ListItem>
						</List>
					</Collapse>
				</List>
			</div>
		);
	}
}

NestedList.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(connect(null, { getlocation, googleIconClick, clearMap })(NestedList));
