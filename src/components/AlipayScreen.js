import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Modal from 'material-ui/Modal';


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

class SimpleModal extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    console.log(this.props.alipayImage);

    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.props.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="title" id="modal-title">
              Powered by Wushi - Alipay
            </Typography>
            <Typography variant="display1" gutterBottom>
                Pay : AUD $10
            </Typography>
            { this.props.alipayImage && <img src={this.props.alipayImage} alt="scan code" style={{ width: '200px', height: '200px' }} /> }
            { !this.props.alipayImage &&  <Typography variant="subheading" gutterBottom> Generating Scan code... </Typography> }
            <SimpleModalWrapped />
          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ alipayState }) => {

    console.log('reached mapstatetoprops' , alipayState.alipayImage);

    return { 
        alipayImage: alipayState.alipayImage
    }
}

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(connect(mapStateToProps)(SimpleModal));

export default SimpleModalWrapped;