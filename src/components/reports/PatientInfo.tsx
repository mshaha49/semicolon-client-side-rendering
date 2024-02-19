import * as React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    }
  });
  
class PatinetInfo extends React.Component<any, any> {

    templateDataObj: any
    constructor(props: any) {
        super(props);
        this.templateDataObj = JSON.parse(this.props.templateData)
    }

    render() {
        return (
            <Document>
            <Page size="A4" style={styles.page}>
              <View style={styles.section}>
                <Text>Patient Name is {this.templateDataObj.name}</Text>
              </View>
              <View style={styles.section}>
                <Text>Patinet Address is {this.templateDataObj.address}</Text>
              </View>
            </Page>
          </Document>
        )
    }
}

export default PatinetInfo;