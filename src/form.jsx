import { Route, Routes } from 'react-router-dom';
import { Container, ThemeProvider, createTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import Home from './components/home';
import Registration from './components/registration';
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
                <Typography variant="h3" gutterBottom style={{ textAlign: 'center' }} >
                    SuperMarket Olio
                </Typography>
            </Box>
            <Box
            bgcolor={'#fafafa'}>
                <Container>
                    <div className='page'>
                        <div className='info'>
                            <Routes>
                                <Route path='/home' element={<Home />} />
                                <Route path='/registration' element={<Registration />} />
                                <Route path='/signUp' element={<SignUp />} />
                            </Routes>
                        </div>
                    </div>
                </Container>
            </Box>
            <Box
                bgcolor={'#212121'}
                height={100}>

            </Box>
        </div>
    )
}
export default Form;