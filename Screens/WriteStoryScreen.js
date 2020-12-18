import React from 'react';
import {StyleSheet,View,TextInput} from 'react-native';
import { Header } from 'react-native-elements';

export default class Writestoryscreen extends React.Component{
    constructor(){
        super();
        this.state={
            scannedstorytitle:'',
            scannedauthor:'',
            scannedwriteyourstory:''
        }
    }
    render(){
        return(
            <View style={design.forView}>

                <Header
                backgroundColor='cyan'
                centerComponent={{text:"Story Hub",fontWeight:'bold'}}/>
                
                <View>
                    <TextInput
                    style={design.forInputBox}
                    placeholder="Story Title"
                    value={this.state.scannedstorytitle}
                    />
                </View>

                <View>
                    <TextInput
                    style={design.forInputBox}
                    placeholder="Author"
                    value={this.state.scannedauthor}
                    />
                </View>

                <View>
                    <TextInput
                    style={design.forInputBox}
                    placeholder="Write your story"
                    value={this.state.scannedwriteyourstory}
                    />
                </View>
                
            </View>
        );
    }
}

const design=StyleSheet.create({
    forInputBox:{
        marginTop:20,
        borderWidth:4,
        borderColor:'pink',
        borderRadius:30
    },
    forView:{
        flex:1,
        alignItems:'center'
    }
})