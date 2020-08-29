import React from 'react';
import { View,Text,TouchableOpacity,Image,StyleSheet,FlatList,Dimensions} from 'react-native';
import NavigationService from '../../../app/layout/NavigationService'
const { width:screenWidth ,height:screenHeight} = Dimensions.get('window');

class OtherBottomView extends React.Component {
    state={
        skills:['Directing','Editing','Sound Design'],
        upcoming:[{
            title:'TITLE 1',
            positions:'3 Open Positions',
            date:'May 5th',
            img:require('../../assets/images/th2.png')
        },{
            title:'TITLE 2',
            positions:'3 Open Positions',
            date:'July 20th ',
            img:require('../../assets/images/th.png')
        }],
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
        }]
    }
     renderItem = ({ item }) => (
         <TouchableOpacity style={styles.skills}>
        <Text style={styles.item}>{item}</Text>  
        </TouchableOpacity>
      );
      headerFlat = ({ item }) => (
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
     <View style={{flex:1,paddingTop:500}}>
         <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:'5%',paddingVertical:'5%'}}>
             <TouchableOpacity style={styles.editBtn}> 
                <Text style={styles.editText}>Add Contacts</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.btn}>
                <Image source={require('../../assets/images/down-arrow.png')} style={styles.down} 
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
                contentContainerStyle={styles.flat}
                horizontal={true}
                data={this.state.skills}
                renderItem={this.renderItem}
                keyExtractor={(index) => index.toString()}
            /> 
            </View>
            <Text style={[styles.bio,{paddingVertical:20}]}>Upcoming Projects</Text>
            {this.state.upcoming.map((res,index)=>{
                return(
                    <>
                    <View style={styles.upcomingList}>
                        <View>
                            <Image source={res.img} style={{height:65,width:80}}/>
                            <View style={{height:60,width:80,backgroundColor:'#313137',position:'absolute',opacity:0.1}}>
                            </View>
                        </View>
                        <View style={{paddingHorizontal:10,width:screenWidth-100,paddingTop:5}}>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <Text  style={[styles.bio]}>{res.title}</Text>

                            <Text style={[styles.item,{textAlign:'right',color:' rgba(255, 255, 255, 0.6)'}]}>{res.date}</Text>

                            </View>
                            <Text style={[styles.item,{color:'#9997EC',fontSize:15}]}>{res.positions}</Text>
                        </View>
                    </View>
                    {index<this.state.upcoming.length-1  &&
                    <View style={{ marginHorizontal:'5%',marginVertical:10,height: 1,backgroundColor:'rgba(132, 132, 132, 0.3)'}}></View>
                    }
                    </>
                )
            })}
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

export default(OtherBottomView);
 const styles=StyleSheet.create({
    editBtn:{
        borderColor:'#fff',
        borderWidth:1,
        borderRadius:5,
        width:100,
        height:30,
        justifyContent:'center',
        alignItems:'center'
    },
    editText:{
        fontSize:14,
        fontFamily:'Muli-Regular',
        color:'#fff'
    },
    down:{
        height:20
    },
    btn:{
       width:70,
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
    skills:{
        borderWidth:1,
        borderColor:'#fff',
        height:30,
        marginLeft:20,
        paddingHorizontal:10,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:15
    },
    skills1:{
        
        height:30,
        marginLeft:20,
        paddingHorizontal:10,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:15
    },
    skillsView:{flexDirection:'row',height:55,borderTopWidth:1,
    borderBottomWidth:1,borderColor:'rgba(255, 255, 255, 0.3)',
alignItems:'center'},
upcomingList:{
    flexDirection:'row',
    width:'100%',
    paddingHorizontal:'5%',
    
}
})