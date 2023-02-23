import React, { useState } from "react";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useForm, Controller } from "react-hook-form";





const LogIn = () => {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            firstName: '',
            passWord: ''
        }
    });
    const onSubmit = data => console.log(data);

    return (
        <div>
            <div style={{ textAlign: 'center', margin: "50px" }}>
                <Typography variant="h4" gutterBottom >
                    Log In:
                </Typography>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div style={{ textAlign: 'center', margin: "30px" }}>
                    <Controller
                        name="firstName"
                        control={control}
                        render={({ field }) => <TextField {...field}
                            required
                            label="E-mail"
                            type="email"
                            variant="filled" />}
                    />
                </div>
                <div style={{ textAlign: 'center', margin: "30px" }}>
                    <Controller
                        name="passWord"
                        control={control}
                        render={({ field }) => <TextField  {...field}
                            required
                            label="PassWord"
                            type='password'
                            variant="filled"
                        />}
                    />
                </div>
                <div style={{ textAlign: 'center', margin: "30px" }}>
                    <Button variant='contained' color="secondary" component={Link} to="/">Go Back</Button>
                    <Button variant='contained' type="submit" >&nbsp;&nbsp;Log In&nbsp;&nbsp;</Button>
                </div>
            </form>
        </div>
    );
}
export default LogIn;