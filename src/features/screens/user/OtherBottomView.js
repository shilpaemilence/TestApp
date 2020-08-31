import React from 'react';
import { View,Text,TouchableOpacity,Image,FlatList,Dimensions} from 'react-native';
import {otherStyles as styles} from './styles';
const { width:screenWidth ,height:screenHeight} = Dimensions.get('window');
import {DOWNLOAD} from '../../../app/constants/constants'
import CreditView from './CreditView';
import WorkView from './WorkView';

class OtherBottomView extends React.Component {
    state={
        skills:['Directing','Editing','Sound Design'],
        activeText:'work',
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
        credited:[{title:'Project Title',role:'Role',date:2019}]
    }
     renderItem = ({ item }) => (
         <TouchableOpacity style={styles.skills}>
        <Text style={styles.item}>{item}</Text>  
        </TouchableOpacity>
      );

  
     handleTab = val=>()=>{
         this.setState({activeText:val})
     }

  render() {
      const{credited,activeText,data,skills} =this.state;
    return (
     <View style={{flex:1,paddingTop:500,paddingBottom:'25%'}}>
         <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:'5%',paddingVertical:'5%'}}>
             <TouchableOpacity style={styles.editBtn}> 
                <Text style={styles.editText}>Add to Contacts</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.btn}>
                <Image source={DOWNLOAD} style={styles.down} 
                resizeMode="contain"/>
             </TouchableOpacity>
         </View>
         <View style={{height: 1,backgroundColor:'rgba(132, 132, 132, 0.3)',marginBottom:20}}></View>

         <View style={{paddingHorizontal:'5%',paddingBottom:'5%'}}>
            <Text style={styles.bio}>This is my personal bio and desctiption of what im doing on this platform</Text>
         </View>
         
         <View style={styles.skillsView}>
            <TouchableOpacity style={styles.skills1}>
            <Text style={styles.item}>Skills</Text>  
            </TouchableOpacity>
            <View style={{backgroundColor:'rgba(255, 255, 255, 0.3)',height:50,width:1}}></View>
            <FlatList
                contentContainerStyle={styles.flat}
                horizontal={true}
                data={skills}
                renderItem={this.renderItem}
                keyExtractor={(index) => index.toString()}
            /> 
            </View>
           
       <View style={{flexDirection:'row',marginHorizontal:'5%',marginTop:'10%',}}>
            <TouchableOpacity style={{paddingRight:20}} onPress={this.handleTab('work')}>
                <Text style={activeText==='work'?
                [styles.item,{fontSize:15,borderBottomColor:'#fff',borderBottomWidth:2,paddingBottom:10}]:
                [styles.item,{fontSize:15}]}>My Work</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{}} onPress={this.handleTab('credit')}>
                <Text style={activeText==='credit'?
                [styles.item,{fontSize:15,borderBottomColor:'#fff',borderBottomWidth:2,paddingBottom:10}]:
                [styles.item,{fontSize:15}]}>Credited</Text>
            </TouchableOpacity>
        </View>
        <View style={{height: 1,backgroundColor:'rgba(132, 132, 132, 0.3)',marginBottom:20}}></View>
            {activeText=='work' &&
            <FlatList
                contentContainerStyle={{marginHorizontal:'5%'}}
                numColumns={2}
                horizontal={false}
                data={data}
                renderItem={({item}) => (
                    <WorkView propData={item}/>
                  )}
                keyExtractor={(index) => index.toString()}
            /> 
            }
            {this.state.activeText=='credit' &&
              <FlatList
                contentContainerStyle={{}}
                data={credited}
                renderItem={({item}) => (
                    <CreditView propData={item}/>
                  )}
                keyExtractor={(index) => index.toString()}
            /> 
            }
     </View>
    );
  }
}

export default(OtherBottomView);
 