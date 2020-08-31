import React from 'react';
import { View,Text,TouchableOpacity,Image,FlatList,Dimensions} from 'react-native';
import NavigationService from '../../../app/layout/NavigationService';
import {myProfileStyles as styles} from './styles';
import UpcomingView from './Upcoming';
const { width:screenWidth ,height:screenHeight} = Dimensions.get('window');
import {DOWNLOAD} from '../../../app/constants/constants'

class BottomView extends React.Component {
    state={
        skills:['Directing','Editing','Sound Design'],
        upcoming:[{
            title:'PROJECTTITLE',
            positions:'3 Open Positions',
            date:'May 5th',
            img:require('../../assets/images/th2.png')
        },{
            title:'PROJECTTITLE',
            positions:'3 Open Positions',
            date:'July 20th ',
            img:require('../../assets/images/th.png')
        }],
        activeText:'work',
        data:[{
            title:'PROJECTTITLE',
            name:'Project Name',
            img:require('../../assets/images/th1.png'),
            role:'Owner'
        },{
            title:'PROJECTTITLE',
            name:'Project Name',
            img:require('../../assets/images/th1.png'),
            role:'User'
        }]
    }
     renderItem = ({ item }) => (
         <TouchableOpacity style={styles.skills}>
        <Text style={styles.item}>{item}</Text>  
        </TouchableOpacity>
      );
   
     handleTab = val=>()=>{
         this.setState({activeText:val})
     }
     renderItem1 = ({ item }) => (
       
       <View style={{paddingRight:10}}>
           <Image source={item.img}/>
           <View style={{paddingTop:10}}>
            <Text style={styles.bio}>{item.title}</Text>

            <Text style={styles.item}>{item.name}</Text>
           </View>
       </View>
     );
     renderItem2 = ({ item }) => (
        <View style={[styles.upcomingList,{}]}>
                        <View style={{}}>
                            <Image source={require('../../assets/images/th3.png')} style={{height:65,width:80}}/>
                            <View style={{height:60,width:80,backgroundColor:'#313137',position:'absolute',opacity:0.1}}>
                            </View>
                        </View>
                        <View style={{paddingHorizontal:10,width:screenWidth-100,paddingTop:5}}>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <Text  style={[styles.bio]}>Project Title</Text>

                            <Text style={[styles.item,{textAlign:'right',color:' rgba(255, 255, 255, 0.6)'}]}>2019</Text>

                            </View>
                            <Text style={[styles.item,{fontSize:15}]}>Role</Text>
                        </View>
                    </View>
      );
  render() {
    return (
     <View style={{flex:1,paddingTop:500,paddingBottom:'25%'}}>
         <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:'5%',paddingVertical:'5%'}}>
             <TouchableOpacity style={styles.editBtn} onPress={()=>NavigationService.navigate('EditProfile')}> 
                <Text style={styles.editText}>Edit Profile</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.btn}>
                <Image source={DOWNLOAD} style={styles.down} 
                resizeMode="contain"/>
             </TouchableOpacity>
         </View>
         <View style={{padding:'5%'}}>
            <Text style={styles.bio}>This is my personal bio and desctiption of what im doing on this platform</Text>
        
         </View>
         <View style={styles.skillsView}>
            <TouchableOpacity style={styles.skills1}>
                <Text style={styles.item}>Skills</Text>  
            </TouchableOpacity>
            <View style={{backgroundColor:'rgba(255, 255, 255, 0.3)',height:50,width:1}}></View>
            <FlatList
                persistentScrollbar={false}
                contentContainerStyle={styles.flat}
                horizontal={true}
                data={this.state.skills}
                renderItem={this.renderItem}
                keyExtractor={(index) => index.toString()}
            /> 
            </View>
            <Text style={[styles.bio,{paddingVertical:20,marginHorizontal:'5%',}]}>Upcoming Projects</Text>
            <UpcomingView upcomingArr={this.state.upcoming}/>

        <View style={{flexDirection:'row',marginHorizontal:'5%',marginTop:'10%',}}>
            <TouchableOpacity style={{paddingRight:20}} onPress={this.handleTab('work')}>
                <Text style={this.state.activeText==='work'?
                [styles.item,{fontSize:15,borderBottomColor:'#fff',borderBottomWidth:2,paddingBottom:10}]:
                [styles.item,{fontSize:15}]}>My Work</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{}} onPress={this.handleTab('credit')}>
                <Text style={this.state.activeText==='credit'?
                [styles.item,{fontSize:15,borderBottomColor:'#fff',borderBottomWidth:2,paddingBottom:10}]:
                [styles.item,{fontSize:15}]}>Credited</Text>
            </TouchableOpacity>
        </View>
        <View style={{height: 1,backgroundColor:'rgba(132, 132, 132, 0.3)',marginBottom:20}}></View>
        <FlatList
                contentContainerStyle={{marginHorizontal:'5%'}}
                numColumns={2}
                horizontal={false}
                data={this.state.data}
                renderItem={this.renderItem1}
                keyExtractor={(index) => index.toString()}
            /> 
     </View>
    );
  }
}

export default(BottomView);
