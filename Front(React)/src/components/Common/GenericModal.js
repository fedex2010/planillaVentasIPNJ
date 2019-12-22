//Dependencies
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles(theme => ({
    mainContainer: {
        display: "flex",
        flexDirection: "column",
    }
}))

const GenericModal = (props) => {
    let {customTitleStyle, customSubjectStyle} = {}
    if(props.modalStyle){
        customTitleStyle = props.modalStyle
    }
    if(props.customSubjectStyle){
        customSubjectStyle = props.customSubjectStyle
    }

    let sizeDialog="md"
    if(props.dialogSize){
        sizeDialog="lg";
    }

    return (
        <div>
            <Dialog
                open={props.open}
                onClose={props.close}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth={sizeDialog}>   
                <DialogTitle id="alert-dialog-title" style={{ textAlign: "center" }} style={customTitleStyle}>
                    {props.children[0]}
                </DialogTitle>

                <DialogContent style={customSubjectStyle}>
                    {props.children[1]}
                </DialogContent>

                <DialogActions>
                    {props.children[2]}
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default GenericModal;