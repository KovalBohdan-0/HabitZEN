import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {useState} from "react";
import axios from "axios";
import {User} from "../shared/User.ts";
import {useNavigate} from "react-router-dom";

export function SignUp() {
    const [password, setPassword] = useState("");
    const [confirmationPassword, setConfirmationPassword] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmationError, setConfirmationError] = useState("");
    const apiUrl = import.meta.env.VITE_API_URL;
    let navigate = useNavigate();

    const validateConfirmationPassword = () => {
        if (password != confirmationPassword) {
            setConfirmationError("Confirmation password and password should be the same.");
        } else {
            setConfirmationError("")
        }
    }

    const validatePassword = () => {
        if (password.length < 6) {
            setPasswordError( 'Password must be at least 6 characters long');
        } else {
            setPasswordError("");
        }
    };

    const validateEmail = () => {
        if (!email) {
            setEmailError('Email is required');
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError('Invalid email address');
        } else {
            setEmailError("");
        }
    }

    const isValid = () => {
        return emailError == "" && passwordError == "" && confirmationError == "";
    };

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        if (isValid()) {
            axios.post(apiUrl + '/register', {
                email: email, password: password
            })
                .then(function (response: any) {
                    User.setJwt(response.data.authorization.token);
                    navigate("/main");
                })
                .catch(function (error: any) {
                    if (error.response.status == 400) {
                        setEmailError("Give real email");
                    } else if (error.response.status == 409) {
                        setEmailError("Account with this email already exist");
                    }
                });
        }
    };

    return (<>
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <Box
                sx={{
                    marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center',
                }}
            >
                <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{mt: 1}}>
                    <TextField onChange={(e) => setEmail(e.target.value)}
                               onBlur={validateEmail}
                               margin="normal"
                               required
                               fullWidth
                               id="email"
                               value={email}
                               label="Email Address"
                               name="email"
                               autoComplete="email"
                               autoFocus
                               error={Boolean(emailError)}
                               helperText={emailError}
                    />
                    <TextField onChange={(e) => setPassword(e.target.value)}
                               onBlur={validatePassword}
                               margin="normal"
                               required
                               fullWidth
                               name="password"
                               label="Password"
                               type="password"
                               id="password"
                               value={password}
                               autoComplete="current-password"
                               error={Boolean(passwordError)}
                               helperText={passwordError}
                    />
                    <TextField onChange={(e) => setConfirmationPassword(e.target.value)}
                               onBlur={validateConfirmationPassword}
                               margin="normal"
                               required
                               fullWidth
                               name="confirmation-password"
                               label="Password confirmation"
                               type="password"
                               id="confirmation-password"
                               value={confirmationPassword}
                               autoComplete="current-password"
                               error={Boolean(confirmationError)}
                               helperText={confirmationError}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                    >
                        Sign up
                    </Button>
                    <Grid container
                          sx={{
                              display: 'flex', justifyContent: 'center'
                          }}
                    >
                        <Grid item>
                            <Link href="login" variant="body2">
                                {"Already have an account? Log in"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    </>)
}
