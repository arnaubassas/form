import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

const Home = () => {
    return (

        <div style={{ margin: "50px" }}>
            <Box
                border={2}
                bgcolor={'#e0e0e0'}
                padding={8}
                paddingTop={5}
                width={500}
                textAlign='center'
                maxWidth={400}
                
            >
                <Typography variant="h4" gutterBottom >
                    To continu:
                </Typography>
                <Typography variant="h6" gutterBottom  style={{ textAlign: 'left', marginBottom:'30px' }}>
                    You have to choose:
                </Typography>
                <Button variant='contained' component={Link} to="/SignUp"  style={{ justifyItems: 'center' }}>Sign Up</Button>
                <Typography variant="h6" gutterBottom  style={{ textAlign: 'center' }}>
                    or
                </Typography>
                <Button variant='contained' component={Link} to="/logIn">Log In</Button>
            </Box>
        </div>
    )
}
export default Home;