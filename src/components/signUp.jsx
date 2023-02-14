import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { useForm, Controller, formState} from "react-hook-form";



const SignUp = () => {
    

    const { control, handleSubmit, formState } = useForm({
        defaultValues: {
            firstName: '',
            surNames: '',
            userName: '',
            place: '',
            passWord: '',
            confirmPassWord: '',
            mail: '',
            repeatMail: ''
        }
    });

    console.log(formState.errors)
    
    const onSubmit = (data: any) => console.log(data);

    return (
        <div>
            <div>
                <ul>
                    {formState.errors.repeatMail?.message && <li>{formState.errors.repeatMail?.message}</li>}
                </ul>
            </div>
            <div style={{ textAlign: 'center', margin: "30px" }}>
                <Typography variant="h4" gutterBottom >
                    Sign Up:
                </Typography>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div style={{ textAlign: 'center', margin: "30px" }}>
                    <Controller
                        name="firstName"
                        control={control}
                        render={({ field }) => <TextField {...field} 
                            required
                            type="text"
                            label="Name"
                        />}
                    />
                    <span style={{ margin: "10px" }} />
                    <Controller
                        name="surNames"
                        control={control}
                        render={({ field }) => <TextField {...field}
                            required
                            label="Surnames"
                            type="text"
                        />}
                    />
                </div>
                <div style={{ textAlign: 'center', margin: "30px" }}>
                    <Controller
                        name="userName"
                        control={control}
                        render={({ field }) => <TextField {...field}
                            required
                            label="Username"
                            type="text"
                            variant="filled"
                        />}
                    />
                    <span style={{ margin: "10px" }} />
                    <Controller
                        name="place"
                        control={control}
                        render={({ field }) => <TextField {...field}
                            required
                            label="City"
                            variant="filled"
                            type="text"
                        />}
                    />
                </div>
                <div style={{ textAlign: 'center', margin: "30px" }}>
                    <Controller
                        name="passWord"
                        control={control}
                        render={({ field }) => <TextField {...field} 
                            required
                            label="Password"
                            type="password"
                        />}
                    />
                    <span style={{ margin: "10px" }} />
                    <Controller
                        name="confirmPassWord"
                        control={control}
                        rules={{validate: (value, values) => 
                            values.passWord === values.confirmPassWord || 'Use the same password'
                        }}
                        render={({ field}) => <TextField {...field}
                            required
                            type="password"
                            label="Repeat Password"
                             helperText={formState.errors.confirmPassWord?.message}
                        />}
                    />
                </div>
                <div style={{ textAlign: 'center', margin: "30px" }}>
                    <Controller
                        name="mail"
                        control={control}
                        render={({ field }) => <TextField {...field}
                            required
                            label="E-mail"
                            type="email"
                            variant="filled"
                        />}
                    />
                    <span style={{ margin: "10px" }} />
                    <Controller
                        name="repeatMail"
                        control={control}
                        rules={{validate: (value, values) => 
                            values.mail === values.repeatMail || 'Use the same mail'
                        }}
                        render={({ field }) => <TextField {...field}
                            required
                            label="Repeat E-Mail"
                            type="email"
                            variant="filled"
                            helperText={formState.errors.repeatMail?.message}
                        />}
                    />
                </div>
                <div style={{ textAlign: 'center', margin: "30px" }}>
                    <Button variant='contained' color="secondary" component={Link} to="/home">Go Back</Button>

                    <Button type="submit" variant='contained' >Sign Up</Button>
                </div>
            </form>
        </div>


    )

}
export default SignUp;