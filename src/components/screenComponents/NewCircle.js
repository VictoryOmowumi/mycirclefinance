import { View, Text, StyleSheet, SafeAreaView, ImageBackground, TextInput, ScrollView, Button, Pressable } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed'
import { FloatingLabelInput } from 'react-native-floating-label-input';
const NewCircle = (props) => {
    const [text, onChangeText] = React.useState("");
    const [step, setStep] = React.useState(1);
    const {onPress, title = 'Next'} = props;
  return (
    <SafeAreaView style={styles.mainContainer}>
    {step === 1 && (
        <ScrollView>

<View style={{height: 170,flex:1,position:'relative', marginBottom:40, flexDirection:'column'}}>
    <ImageBackground source={require('../../assets/headerBg.png')} style={{width:'100%', height:'100%',}} resizeMode='cover'>
            <Icon name="chevron-back-outline" type='ionicon' color='white' size={30} style={{alignItems:'flex-start'}} />
            <Text style={{color:'white', fontSize: 20, textAlign:'center', alignItems:'center', justifyContent:'center', marginTop:20 }}>New Circle</Text>
            <View style={{width:90, height:90, backgroundColor:'white', borderRadius:50, borderWidth:1, borderColor:'#4E64EF',position:'absolute', top:120, left:138, alignItems:'center', justifyContent:'center'}}>
                <Icon name="people" type="FontAwesome" color='#4e64ef' size={60} />
            </View>
    </ImageBackground>
</View>

<View style={{alignItems:'center', justifyContent:'center', marginTop:20,flex:2,}}>
    <Text style={{fontSize:15, lineHeight:18, marginBottom:10}}>Start something exciting with people you trust</Text>
    <View style={{width:'100%', padding: 16}}>
        <FloatingLabelInput
        label="Circle Name"
        value={text}
        hint="e.g vacation"
        hintTextColor="#979797"
        staticLabel
        onChangeText={onChangeText}
        containerStyles={{  paddingHorizontal: 10, width: 300, height: 50, backgroundColor: 'white', borderRadius:10, borderWidth:2, borderColor: '#979797',borderWidthFocused: 2,  borderColorFocused: '#4E64EF', }}
        inputStyles={{ color: 'black' }}
        customLabelStyles={{colorFocused: 'black',fontSizeFocused: 10, }}
        labelStyles={{ backgroundColor: '#fff',paddingHorizontal: 5,}}
         />
    </View>
    <View style={{width:'100%', padding: 16}}>
        <FloatingLabelInput
        label="Circle Type"
        value={text}
        hint="e.g vacation"
        hintTextColor="#979797"
        staticLabel
        onChangeText={onChangeText}
        containerStyles={{  paddingHorizontal: 10, width: 300, height: 50, backgroundColor: 'white', borderRadius:8, borderWidth:2, borderColor: '#979797',borderWidthFocused: 2,  borderColorFocused: '#4E64EF', }}
        inputStyles={{ color: 'black' }}
        customLabelStyles={{colorFocused: 'black',fontSizeFocused: 10, }}
        labelStyles={{ backgroundColor: '#fff',paddingHorizontal: 5,}}
         />
    </View>
    <View style={{width:'100%', padding: 16}}>
        <FloatingLabelInput
        label="Terminal Type"
        value={text}
        hint="e.g vacation"
        hintTextColor="#979797"
        staticLabel
        onChangeText={onChangeText}
        containerStyles={{  paddingHorizontal: 10, width: 300, height: 50, backgroundColor: 'white', borderRadius:8, borderWidth:2, borderColor: '#979797',borderWidthFocused: 2,  borderColorFocused: '#4E64EF', }}
        inputStyles={{ color: 'black' }}
        customLabelStyles={{colorFocused: 'black',fontSizeFocused: 10, }}
        labelStyles={{ backgroundColor: '#fff',paddingHorizontal: 5,}}
         />
    </View>
    <View style={{width:'100%', padding: 16}}>
        <FloatingLabelInput
        label="Terminal Amount"
        value={text}
        hint="$0.00"
        hintTextColor="#979797"
        staticLabel
        onChangeText={onChangeText}
        containerStyles={{  paddingHorizontal: 10, width: 300, height: 50, backgroundColor: 'white', borderRadius:8, borderWidth:2, borderColor: '#979797',borderWidthFocused: 2,  borderColorFocused: '#4E64EF', }}
        inputStyles={{ color: 'black' }}
        customLabelStyles={{colorFocused: 'black',fontSizeFocused: 10, }}
        labelStyles={{ backgroundColor: '#fff',paddingHorizontal: 5,}}
         />
    </View>
    <View style={{width:'100%', padding: 16}}>
        <FloatingLabelInput
        label="Transaction Approval Method"
        value={text}
        hint="Admin Initiates - No Approval Required"
        hintTextColor="#979797"
        staticLabel
        onChangeText={onChangeText}
        containerStyles={{  paddingHorizontal: 10, width: 300, height: 50, backgroundColor: 'white', borderRadius:8, borderWidth:2, borderColor: '#979797',borderWidthFocused: 2,  borderColorFocused: '#4E64EF', }}
        inputStyles={{ color: 'black' }}
        customLabelStyles={{colorFocused: 'black',fontSizeFocused: 10, }}
        labelStyles={{ backgroundColor: '#fff',paddingHorizontal: 5,}}
         />
    </View>
</View>

<View style={{padding:16, alignItems:'center'}}>
    <Text style={{fontSize:10, textAlign:'center'}}> 
    This Circle can be closed by a circle admin after N1, 000, 000 has been been saved by the circle members.
     An admin can transfer from the circle with no approvals from members
    </Text>
</View>

<View style={{padding:20, alignItems:'center', justifyContent:'center' }}>
   <Pressable style={styles.button} onPress={ () => setStep(2)}>
    <Text style={styles.text}>{title}</Text>
   </Pressable>
</View>

        </ScrollView>
    )}
    {step === 2 && (
        <ScrollView>

    <View style={{height: 170,flex:1,position:'relative', marginBottom:40, flexDirection:'column'}}>
        <ImageBackground source={require('../../assets/headerBg.png')} style={{width:'100%', height:'100%',}} resizeMode='cover'>
            <Icon name="chevron-back-outline" type='ionicon' color='white' size={30} style={{alignItems:'flex-start'}} />
            <Text style={{color:'white', fontSize: 20, textAlign:'center', alignItems:'center', justifyContent:'center', marginTop:20 }}>New Circle</Text>
            <View style={{width:90, height:90, backgroundColor:'white', borderRadius:50, borderWidth:1, borderColor:'#4E64EF',position:'absolute', top:120, left:138, alignItems:'center', justifyContent:'center'}}>
                <Icon name="people" type="FontAwesome" color='#4e64ef' size={60} />
            </View>
        </ImageBackground>
    </View>

    <View style={{alignItems:'center', justifyContent:'center', marginTop:20,flex:2,}}>
    <Text style={{fontSize:15, lineHeight:18, marginBottom:10}}>Start something exciting with people you trust</Text>
    <View style={{width:'100%', padding: 16}}>
        <FloatingLabelInput
        label="Circle Name"
        value={text}
        hint="e.g vacation"
        hintTextColor="#979797"
        staticLabel
        onChangeText={onChangeText}
        containerStyles={{  paddingHorizontal: 10, width: 300, height: 50, backgroundColor: 'white', borderRadius:10, borderWidth:2, borderColor: '#979797',borderWidthFocused: 2,  borderColorFocused: '#4E64EF', }}
        inputStyles={{ color: 'black' }}
        customLabelStyles={{colorFocused: 'black',fontSizeFocused: 10, }}
        labelStyles={{ backgroundColor: '#fff',paddingHorizontal: 5,}}
         />
    </View>
    <View style={{width:'100%', padding: 16}}>
        <FloatingLabelInput
        label="Circle Type"
        value={text}
        hint="e.g vacation"
        hintTextColor="#979797"
        staticLabel
        onChangeText={onChangeText}
        containerStyles={{  paddingHorizontal: 10, width: 300, height: 50, backgroundColor: 'white', borderRadius:8, borderWidth:2, borderColor: '#979797',borderWidthFocused: 2,  borderColorFocused: '#4E64EF', }}
        inputStyles={{ color: 'black' }}
        customLabelStyles={{colorFocused: 'black',fontSizeFocused: 10, }}
        labelStyles={{ backgroundColor: '#fff',paddingHorizontal: 5,}}
         />
    </View>
    <View style={{width:'100%', padding: 16}}>
        <FloatingLabelInput
        label="Terminal Type"
        value={text}
        hint="date"
        hintTextColor="#979797"
        staticLabel
        onChangeText={onChangeText}
        containerStyles={{  paddingHorizontal: 10, width: 300, height: 50, backgroundColor: 'white', borderRadius:8, borderWidth:2, borderColor: '#979797',borderWidthFocused: 2,  borderColorFocused: '#4E64EF', }}
        inputStyles={{ color: 'black' }}
        customLabelStyles={{colorFocused: 'black',fontSizeFocused: 10, }}
        labelStyles={{ backgroundColor: '#fff',paddingHorizontal: 5,}}
         />
    </View>
    <View style={{width:'100%', padding: 16}}>
        <FloatingLabelInput
        label="Terminal Amount"
        value={text}
        hint="12/12/2021"
        hintTextColor="#979797"
        staticLabel
        onChangeText={onChangeText}
        containerStyles={{  paddingHorizontal: 10, width: 300, height: 50, backgroundColor: 'white', borderRadius:8, borderWidth:2, borderColor: '#979797',borderWidthFocused: 2,  borderColorFocused: '#4E64EF', }}
        inputStyles={{ color: 'black' }}
        customLabelStyles={{colorFocused: 'black',fontSizeFocused: 10, }}
        labelStyles={{ backgroundColor: '#fff',paddingHorizontal: 5,}}
         />
    </View>
    <View style={{width:'100%', padding: 16}}>
        <FloatingLabelInput
        label="Transaction Approval Method"
        value={text}
        hint="Admin Initiates - 25% Member Approval "
        hintTextColor="#979797"
        staticLabel
        onChangeText={onChangeText}
        containerStyles={{  paddingHorizontal: 10, width: 300, height: 50, backgroundColor: 'white', borderRadius:8, borderWidth:2, borderColor: '#979797',borderWidthFocused: 2,  borderColorFocused: '#4E64EF', }}
        inputStyles={{ color: 'black' }}
        customLabelStyles={{colorFocused: 'black',fontSizeFocused: 10, }}
        labelStyles={{ backgroundColor: '#fff',paddingHorizontal: 5,}}
         />
    </View>
</View>

<View style={{padding:16, alignItems:'center'}}>
    <Text style={{fontSize:10, textAlign:'center'}}> 
    This Circle can be closed by a circle admin after N1, 000, 000 has been been saved by the circle members.
     An admin can transfer from the circle with no approvals from members
    </Text>
</View>

<View style={{padding:20, alignItems:'center', justifyContent:'center' }}>
   <Pressable style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
   </Pressable>
</View>

        </ScrollView>
    )}
   
   

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'white',
        width: '100%',
       flexDirection: 'column',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#173cec',
        width: 330,
        height: 50,
        borderRadius:30,
        shadowColor: '#d7d7d7',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.26,
        shadowRadius: 6,
        elevation: 5,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    userImage: {
        width: 90,
        height: 90,
        borderRadius: 50,
        borderWidth:1,
        borderColor: '#4E64EF',
        backgroundColor: 'white',
        position: 'absolute',
        top: 118,
        left: 135,
        zIndex: 1,
        elevation: 1,
        shadowColor: '#d7d7d7',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.26,
        shadowRadius: 6,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    


})
export default NewCircle