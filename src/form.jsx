import { Route, Routes } from 'react-router-dom';
import { Container, ThemeProvider, createTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import Home from './components/home';
import LogIn from './components/logIn';
import SignUp from './components/signUp';
import style from './style.css';
import { Box } from "@mui/system";

function Form() {

    return (
        <div>
            <Box
                borderBottom={1}
                bgcolor={'#eeeeee'}
            >
                <Typography variant="h3" gutterBottom style={{ textAlign: 'center', marginBottom: "30px", }} >
                    SuperMarket Olio
                </Typography>
            </Box>
            <Box
                bgcolor={'#fafafa'}>
                <Container>
                    <div className='page'>
                        <div className='info'>
                            <Routes>
                                <Route exact path='/' element={<Home />} />
                                <Route exact path='/logIn' element={<LogIn />} />
                                <Route exact path='/signUp' element={<SignUp />} />
                            </Routes>
                        </div>
                    </div>
                </Container>
            </Box>
            <Box
                bgcolor={'#212121'}
                height={100}>

            </Box>
        </div >
    )
}
export default Form;