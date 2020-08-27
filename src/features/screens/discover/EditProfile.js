import React from 'react';
import { View,Text,SafeAreaView,ActivityIndicator,
    Dimensions,Image,TouchableOpacity,ScrollView,TextInput,StyleSheet,FlatList} from 'react-native';
import {commonStyles,homeStyles} from './styles';
import NavigationService from '../../../app/layout/NavigationService'

const { width:screenWidth ,height:screenHeight} = Dimensions.get('window');

class EditProfile extends React.Component {
    state={
        skills:['Art Direction','Directing','Editing','Sound Design','Management','Story Board'],
        data:[{
            title:'TITLE 1',
            name:'Project 1',
            img:require('../../assets/images/th1.png'),
            role:'Owner'
        },{
            title:'TITLE 2',
            name:'Project 2',
            img:require('../../assets/images/th1.png'),
            role:'User'
        }],
        loading:false
    }
    renderItem = ({ item }) => (
        <TouchableOpacity style={styles.skillss}>
       <Text style={styles.itemm}>{item}</Text>  
       </TouchableOpacity>
     );
     renderItem1 = ({ item }) => (
       
        <View style={{paddingRight:10}}>
            <Image source={item.img}/>
            <View style={{paddingTop:10}}>
             <Text style={styles.bio}>{item.title}</Text>
 
             <Text style={styles.item}>{item.name}</Text>
            </View>
        </View>
      );
  render() {
    return (
      <SafeAreaView style={commonStyles.safeView}>
         <View style={homeStyles.headerView}>
             <TouchableOpacity onPress={()=>NavigationService.goBack()}>
         <Image source={require('../../assets/white_arrow.png')} resizeMode="contain"
            style={{height:15,width:20,marginLeft:5}} />
            </TouchableOpacity>
      <Text style={homeStyles.headerLabel}>Edit Profile</Text>
      <TouchableOpacity style={{backgroundColor:'rgba(255, 255, 255, 0.5);',padding:5,borderRadius:5}}
       onPress={()=>{
           this.setState({loading:true})
           setTimeout(() => {
            NavigationService.goBack()
		}, 1000);	
       }}>
          <Text style={{fontSize:13,color:'#000',fontFamily:'Muli-Regular'}}>Update</Text>
          </TouchableOpacity>
    </View>
    <ScrollView style={{flex:1}}>
        {this.state.loading &&
    <ActivityIndicator size="small" color="#fff" style={{paddingTop:10}}/>
        }
        <View style={{alignItems:'center',paddingVertical:'10%'}}>
        <Image source={require('../../assets/images/ellipse.png')} style={{height:80,width:80}}/>
        <Text  style={{fontSize:14,color:'#A4A4A4',fontFamily:'Muli-Regular',marginVertical:10}}>@werwin</Text>
        </View>
        <View style={{paddingHorizontal:'5%'}}>
            <View style={homeStyles.inputView}>
                <Text style={homeStyles.label}>Name</Text>
                <TextInput
                style={homeStyles.input}
                 placeholderTextColor="#fff"
                 placeholder="Will Erwin"/>
            </View>
            <View style={homeStyles.inputView}>
                <Text style={homeStyles.label}>Bio</Text>
                <TextInput
                style={homeStyles.input}
                 multiline={true}
                 placeholderTextColor="#fff"
                 placeholder="Tell us about you. What are your four favorite movies? Are you repped? Here’s the spot to tell everyone! Start a conversation."/>
            </View>
            
        </View>
        <View style={{height: 1,backgroundColor:'rgba(132, 132, 132, 0.5)',marginBottom:20}}></View>
        <View style={{paddingHorizontal:'5%'}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}> 
            <Text style={{ fontSize:14,fontFamily:'Muli-Regular',color:'#fff'}}>Position</Text>
            <Image source={require('../../assets/images/next.png')} resizeMode="contain" style={{height:15,width:20}}/>
            </View>
            <TouchableOpacity style={styles.skills}>
        <Text style={styles.item}>Director</Text>  
        </TouchableOpacity>
        
        </View>
        <View style={{height: 1,backgroundColor:'rgba(132, 132, 132, 0.5)',marginBottom:20}}></View>
        <View style={{paddingHorizontal:'5%'}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}> 
            <Text style={{ fontSize:14,fontFamily:'Muli-Regular',color:'#fff'}}>Skills</Text>
            <Image source={require('../../assets/images/next.png')} resizeMode="contain" style={{height:15,width:20}}/>
            </View>
            <FlatList
                horizontal={true}
                data={this.state.skills.reverse()}
                renderItem={this.renderItem}
                keyExtractor={(index) => index.toString()}
            /> 
        
        </View>
        <View style={{height: 1,backgroundColor:'rgba(132, 132, 132, 0.5)',marginBottom:20}}></View>
        <View style={{paddingHorizontal:'5%',flexDirection:'row',width:'100%'}}>
            <Text style={[homeStyles.label,{color:'#fff'}]}>My Reel</Text>
            <View style={{width:'60%'}}>
        
                <Image  source={require('../../assets/images/test.png')} 
                style={{height:120,width:null}}
                 />
                 <View style={{flexDirection:'row',marginVertical:'10%'}}>
        <TouchableOpacity style={{backgroundColor:'rgba(255, 255, 255, 0.3);',padding:5,borderRadius:5,
    width:'48%',marginRight:10,alignItems:'center'}}>
          <Text style={{fontSize:13,color:'#fff',fontFamily:'Muli-Regular'}}>Auto</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:'rgba(255, 255, 255, 0.3);',width:'48%',
          padding:5,borderRadius:5,alignItems:'center'}}>
          <Text style={{fontSize:13,color:'#fff',fontFamily:'Muli-Regular'}}>Upload New</Text>
          </TouchableOpacity>
                 </View>
            </View>
        </View>
        <View style={{height: 1,backgroundColor:'rgba(132, 132, 132, 0.5)',marginBottom:20}}></View>
        <View style={{marginHorizontal:'5%'}}>
        <Text style={{ fontSize:14,fontFamily:'Muli-Regular',color:'#fff',paddingBottom:20}}>My Work</Text>
        <FlatList
                
                numColumns={2}
                horizontal={false}
                data={this.state.data}
                renderItem={this.renderItem1}
                keyExtractor={(index) => index.toString()}
            /> 
        </View>
        <View style={{height: 1,backgroundColor:'rgba(132, 132, 132, 0.5)',marginBottom:20,marginTop:15}}></View>
        <View style={{marginHorizontal:'5%'}}>
        <Text style={{ fontSize:14,fontFamily:'Muli-Regular',color:'#fff',paddingBottom:20}}>My Credits</Text>
        <View style={[styles.upcomingList,{}]}>
                        <View style={{}}>
                            <Image source={require('../../assets/images/th3.png')} style={{height:65,width:80}}/>
                            <View style={{height:60,width:80,backgroundColor:'#313137',position:'absolute',opacity:0.1}}>
                            </View>
                        </View>
                        <View style={{paddingHorizontal:10,width:screenWidth-100,paddingTop:5}}>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <Text  style={[styles.bio]}>Director</Text>

                            <Image source={require('../../assets/images/dots.png')} resizeMode="contain"
            style={{height:25,width:20}} />
                            </View>
                            <Text style={[styles.item,{fontSize:15}]}>Project Name</Text>
                        </View>
                    </View>
        </View>
    </ScrollView>
       
      </SafeAreaView>

    );
  }
}

export default(EditProfile);
const styles=StyleSheet.create({
    
    item:{
        fontSize:14,
        fontFamily:'Muli-Regular',
        color:'#fff',
        
    },
    skills:{
        borderWidth:1,
        borderColor:'#fff',
        height:36,
        width:100,
        paddingHorizontal:10,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
        marginVertical:'5%'
    },
    itemm:{
        fontSize:14,
        fontFamily:'Muli-Regular',
        color:'#fff',
        
    },
    skillss:{
        borderWidth:1,
        borderColor:'#fff',
        height:36,
        paddingHorizontal:10,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
        marginRight:15,
       marginVertical:20
    },
    bio:{
        fontSize:16,
        fontFamily:'Muli-Regular',
        color:'#fff'   
    },
    item:{
        fontSize:14,
        fontFamily:'Muli-Regular',
        color:'#fff',
        
    },
    upcomingList:{
        flexDirection:'row',
        width:'100%',
      
        
    }
})