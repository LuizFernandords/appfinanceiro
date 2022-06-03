import {StyleSheet} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {StatusBar} from 'react-native';
import AndroidHorizontalScrollContentViewNativeComponent from 'react-native/Libraries/Components/ScrollView/AndroidHorizontalScrollContentViewNativeComponent';


const styles = StyleSheet.create({
    container:{
      flex: 1,
      fontSize: hp('1%'),
      backgroundColor: '#fff'
    },

    textHeader: {
      color: 'black',
      fontSize: hp('3.5%'),
      fontWeight: 'bold',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: hp('5%'),
      marginLeft: hp('3%')
  
    },

    
    textHeader2: {
      color: 'black',
      fontSize: hp('3.5%'),
      fontWeight: 'bold',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: hp('5%'),
      marginLeft: hp('28%'),
      position: 'absolute',
  
    },

    textResultado:{
      fontSize: hp('1.5%'),
      padding: hp('0.3%')
    },

    teclado:{
      flex: 1,
      backgroundColor: '#191919',
      marginTop:  hp('14%')

    },
    
    botao:{
      backgroundColor: 'black',
      alignItems: 'center', 
      padding: hp('1.5%'),
      margin: hp('1%'),
      width: hp('15%')
    },

    botaoVerde:{
      backgroundColor: 'yellow',
      alignItems: 'center',
      padding: hp('1%'),
      margin: hp('1%'),
      borderRadius: hp('2%'),
      borderWidth: hp('1%'),
      borderColor: '#191919'
    },

    textButton:{
      color: '#fff',
      fontSize: hp('4%'),
      justifyContent: 'center'
    },

    textButtonM:{
      color: 'black',
      fontSize: hp('3%'),
      justifyContent: 'center'
    },

    groupInput:{
      flexDirection: 'column',
      width: hp('20%'),
      marginTop: hp('1%'),
      marginLeft: hp('1%'),
      marginTop: hp('3%'),
    },

    groupInput2:{
      flexDirection: 'column',
      width: hp('20%'),
      position: 'absolute',
      marginLeft: hp('25%'),
      marginTop: hp('13.0%'),
    },

    label1:{
      color: 'black',
      fontSize: hp('2.5%'),
      fontWeight: 'bold',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: hp('5%'),
      marginLeft: hp('1.5%')
    },

    label2:{
      color: 'black',
      fontSize: hp('2.5%'),
      fontWeight: 'bold',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: hp('3%'),
      marginLeft: hp('1.5%')
  
    },

    input1:{
      borderColor: 'black',
      borderWidth: 2,
      alignItems: 'center',
      textAlign: 'center',
      margin: hp('0.2%'),
      paddingLeft: hp('1%'),
      fontSize: hp('2%')
    },

    input2:{
      borderColor: 'black',
      borderWidth: 2,
      alignItems: 'center',
      textAlign: 'center',
      margin: hp('0.2%'),
      paddingLeft: hp('1%'),
      fontSize: hp('2%')
    },

    imagem:{
      width: hp('13%'),
      height: hp('15%'),
      position: 'absolute',
      top: hp('26%'),
      left: wp('70%'),
    },

    headerresultado:{
      fontSize: hp('2.0%'),
      fontWeight: 'bold',
      marginTop: hp('2%'),
      marginLeft: hp('1.5%')
    },

    resultadocandidatos:{
      fontSize: hp('1.5%'),
      marginLeft: hp('3.0%')

    }
  })

export default styles;