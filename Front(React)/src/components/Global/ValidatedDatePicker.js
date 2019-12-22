import React from "react";
import { DatePicker } from "material-ui-pickers";
import { ValidatorComponent } from "react-material-ui-form-validator";
import moment from 'moment';

class ValidatedDatePicker extends ValidatorComponent {
    render() {
        const {
            errorMessages,
            validators,
            requiredError,
            helperText,
            validatorListener,
            haserror,
            customerrormessage,
            ...rest
        } = this.props;
        const { isValid } = this.state;
        return (
            <DatePicker
                className="data-datos-basicos"
                {...rest}
                error = {haserror || !isValid}
                helperText={(!isValid && this.getErrorMessage()) || customerrormessage}
            />
        );
    }
}

export default ValidatedDatePicker;