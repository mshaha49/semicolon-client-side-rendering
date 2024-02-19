import * as React from 'react';
import RenderReport from './reports/RenderReport';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Select, { SelectChangeEvent } from '@mui/material/Select';
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
      this.setState({template: event.target.value, isSubmitClicked: false});
  }

  changeTemplateData = (event: any) => {
    this.setState({templateData: event.target.value, isSubmitClicked: false});
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
                <Box sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Box component="form" noValidate sx={{ mt: 1 }}>
                    <InputLabel id="template-select-label">Template</InputLabel>
                    <Select labelId="template-select-label" id="template-id" fullWidth value={this.state.template} onChange={this.changeTemplate}>
                      <MenuItem value='patient-report'>Patinet Report</MenuItem>
                      <MenuItem value='physician-report'>Physician Report</MenuItem>
                    </Select>
                    <TextField margin="normal" fullWidth name="template-data" label="Template Data" id="template-data" multiline minRows={10} value={this.state.templateData} onChange={this.changeTemplateData}/>
                    <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={this.generatePDF}>Generate PDF</Button>
                  </Box>
                </Box>
              </Container>
            </ThemeProvider>
          </div>
          <div className='col'>
            { this.state.isSubmitClicked && <RenderReport template={this.state.template} templateData={this.state.templateData}/> }
          </div>
      </div>
    );
  }
}

export default Home;