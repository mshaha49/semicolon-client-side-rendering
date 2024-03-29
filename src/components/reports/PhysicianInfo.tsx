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
  
class PhysicianInfo extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <Document>
            <Page size="A4" style={styles.page}>
              <View style={styles.section}>
                <Text>Section #1 Physician Info</Text>
              </View>
              <View style={styles.section}>
                <Text>Section #2 Physician Info</Text>
              </View>
            </Page>
          </Document>
        )
    }
}

export default PhysicianInfo;