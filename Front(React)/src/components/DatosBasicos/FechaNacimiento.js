//Dependencies
import React, { useState, forwardRef, useImperativeHandle } from 'react';
//material
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
//utils
import moment from 'moment';
import { handleKeyPressNum, handlePasteNum } from "../../utils/ValidationInput"


const useStyles = makeStyles(theme => ({
    mainContainer: {
        marginTop: -15,
        display: "flex",
        flexDirection: "column",
        justifyContent: "left",
        alignItems: "left"
    },
    label: {
        textTransform: "uppercase !important",
        fontSize: "9px !important",
        marginBottom: "",
        color: "rgba(0, 0, 0, 0.54)"
    },
    inputBox: {
        width: "25%"
    },
    slash: {
        margin: "0px 10px 15px 10px",
        fontSize: 25
    },
    inputYear: {
        width: "50%"
    },
    errorAge: {
        color: "#f44336",
        fontSize: "12px"
    }
}))

const FechaNacimiento = forwardRef((props, ref) => {
    const { externalSubmitted, onChange, fechaNacimiento } = props

    const classes = useStyles();
    const [colorLabel, setColorLabel] = useState({})
    const [ageRange, setAgeRange] = useState("")
    const [isAgeValid, setIsAgeValid] = useState(true)


    const handleChange = e => {
        let { name, value } = e.target

        if ((name === "dd" && value.length <= 2) || (name === "mm" && value.length <= 2)
            || (name === "aaaa" && value.length <= 4)) {

            fechaNacimiento[name] = value
            onChange(fechaNacimiento)
        }

    }

    const getLastDayOfMonth = () => {
        return moment().endOf('month').get('date')
    }

    const checkAge = (loadedDate) => {
        let { dd, mm, aaaa } = { ...loadedDate };
        let isTooYoung = false;
        let isTooOld = false;
        let isValidDate = false;
        if (dd != "" && mm != "" && aaaa != "") {
            let dateToCheck = moment(dd + '-' + mm + '-' + aaaa, ["DD-MM-YYYY"]);
            let validFormat = dateToCheck.isValid();

            if (validFormat) isValidDate = true;
            
            if (validFormat) isTooYoung = dateToCheck.isAfter(moment().add(-18, 'year'));
            if (validFormat) isTooOld = dateToCheck.isBefore(moment().add(-81, 'year'));
        }
        let objAge = {
            isYoung: isTooYoung,
            isOld: isTooOld,
            isValidDate: isValidDate
        }
        return objAge;
    }

    const isDDvalid = () => {
        let { dd } = props.fechaNacimiento
        return (dd !== "" && dd.length === 2 && dd > 0 && dd <= getLastDayOfMonth())
    }

    const isMMvalid = () => {
        let { mm } = props.fechaNacimiento
        return (mm !== "" && mm.length === 2 && mm > 0 && mm <= 12)
    }

    const isAAAAvalid = () => {
        let { aaaa } = props.fechaNacimiento
        return (aaaa !== "" && aaaa.length === 4 && aaaa >= 1900)
    }

    const isDataOk = () => {
        let dayOk = isDDvalid()
        let monthOk = isMMvalid()
        let yearOk = isAAAAvalid()

        return dayOk && monthOk && yearOk && isAgeValid
    }

    const onFocus = () => {
        setColorLabel({ color: "#f47321" })
    }

    const onBlur = () => {
        setColorLabel({ color: "" })
        setAgeRange("")
        setIsAgeValid(true)
        console.dir(checkAge(fechaNacimiento))
        if (checkAge(fechaNacimiento).isYoung) {
            setAgeRange("Debés ser mayor de 18 años.");
            setIsAgeValid(false);
        }
        if (checkAge(fechaNacimiento).isOld) {
            setAgeRange("La edad no cumple con los requisitos.")
            setIsAgeValid(false);
        }
        if (!checkAge(fechaNacimiento).isValidDate) {
            setAgeRange("Ingresá una fecha válida.")
            setIsAgeValid(false);
        }
    }

    useImperativeHandle(ref, () => ({
        isDataOk() {
            return isDataOk()
        }
    }));

    let error = { dd: false, mm: false, aaaa: false }
    const getErrors = () => {
        error = {
            dd: !isDDvalid(),
            mm: !isMMvalid(),
            aaaa: !isAAAAvalid()
        }
        return error
    }

    if (externalSubmitted && !isDataOk()) {
        error = getErrors()
    }

    let fechaTextClass = { ...colorLabel, color: "rgba(0, 0, 0, 0.54)" }

    if (externalSubmitted && !isDataOk()) {
        fechaTextClass = { color: "#f44336" }
    }

    return (
        <section className={classes.mainContainer}>
            <section style={{ marginBottom: 10 }}>
                <label className={classes.label} style={{ color: colorLabel.color }}>Fecha de nacimiento</label>
            </section>
            <section className={classes.inputContainer}>
                <TextField
                    className={classes.inputBox}
                    name="dd"
                    value={fechaNacimiento.dd}
                    error={error.dd}
                    helperText={isAgeValid ? "dd" : null}
                    onChange={handleChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onKeyPress={handleKeyPressNum}
                    onPaste={handlePasteNum}
                />
                <span className={classes.slash}>/</span>
                <TextField
                    className={classes.inputBox}
                    name="mm"
                    value={fechaNacimiento.mm}
                    error={error.mm}
                    helperText={isAgeValid ? "mm" : null}
                    onChange={handleChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onKeyPress={handleKeyPressNum}
                    onPaste={handlePasteNum}
                />
                <span className={classes.slash}>/</span>
                <TextField
                    className={classes.inputBox}
                    name="aaaa"
                    value={fechaNacimiento.aaaa}
                    error={error.aaaa}
                    helperText={isAgeValid ? "aaaa" : null}
                    onChange={handleChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onKeyPress={handleKeyPressNum}
                    onPaste={handlePasteNum}
                />
                {
                    !isAgeValid
                        ?
                        <div className={classes.errorAge}>{ageRange}</div>
                        :
                        null
                }
            </section>
        </section>
    )
});

export default FechaNacimiento;