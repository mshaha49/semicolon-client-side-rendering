import * as React from 'react';
import RenderReport from './reports/RenderReport';

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
            <div className='template-form-div'>
              <select className='template-id'>
                  <option value=""></option>
                  <option value="patient">Patinet Template</option>
                  <option value="physician">Physician Template</option>
              </select>
              <textarea name="template-data" id="template-data" placeholder="TemplateData" /> 
              <button id='input-submit'>Submit</button>
            </div>
          </div>
          <div className='col'>
            <RenderReport />
          </div>
      </div>
    );
  }
}

export default Home;