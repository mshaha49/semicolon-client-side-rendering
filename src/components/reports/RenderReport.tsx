import * as React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import PatinetInfo from './PatientInfo';
import PhysicianInfo from './PhysicianInfo';

class RenderReport extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    renderReportComponent = () => {
        switch (this.props.template) {
            case "patient-report":
                return <PDFViewer><PatinetInfo templateData={this.props.templateData}/></PDFViewer>;
            case "physician-report":
                return <PDFViewer><PhysicianInfo templateData={this.props.templateData}/></PDFViewer>;
        }
    };

    render() {
        return (
            this.renderReportComponent()
        )
    }
}

export default RenderReport;