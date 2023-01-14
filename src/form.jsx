import { Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Home from './components/home';
import Registration from './components/registration';
import SignUp from './components/signUp';

function Form() {

    return (

        <Container>
            <Typography variant="h3" gutterBottom>
                SuperMarket Olio
            </Typography>
            
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/registration' element={<Registration />} />
                <Route path='/singUp' element={<SignUp />} />
            </Routes>

        </Container>
    )
}
export default Form;