import * as React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import PatinetInfo from './PatientInfo';

class RenderReport extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <PDFViewer>
                <PatinetInfo />
            </PDFViewer>
        )
    }
}

export default RenderReport;