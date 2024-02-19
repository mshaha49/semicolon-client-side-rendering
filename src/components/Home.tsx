import * as React from 'react';
import RenderReport from './reports/RenderReport';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

class Home extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      template: "",
      templateData: "",
      isSubmitClicked: false
    };
  }

  changeTemplate = (event: any) => {
      this.setState({template: event.target.value});
  }

  changeTemplateData = (event: any) => {
    this.setState({templateData: event.target.value});
  }

  generatePDF = () => {
      this.setState({isSubmitClicked: true})
  }

  render() {
    return (
      <div className="container">
          <div className='col'>
            <ThemeProvider theme={defaultTheme}>
              <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                  <Box component="form" noValidate sx={{ mt: 1 }}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      autoFocus
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="template-data"
                      label="Template Data"
                      id="template-data"
                      multiline
                      minRows={10}
                    />
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Generate PDF
                    </Button>
                  </Box>
                </Box>
              </Container>
            </ThemeProvider>
          </div>
          <div className='col'>
            <RenderReport />
          </div>
      </div>
    );
  }
}

export default Home;