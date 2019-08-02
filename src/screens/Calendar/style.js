import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        paddingTop: 23
     },
     input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
     },
     submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
     },
     submitButtonText:{
        color: 'white'
     },
     
     wrap: {
       alignItems:'center',
       margin: 5,
      
     },
     cardContainer: {
      
        alignItems: 'center',
        justifyContent: 'center'
      },
      card: {
        borderWidth: 3,
        borderRadius: 3,
        borderColor: '#000',
        width: 300,
        height: 400,
        padding: 10,
        marginTop: 8,
        shadowOpacity: 0.3,
      }
})