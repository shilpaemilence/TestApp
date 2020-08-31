import React,{useState,useEffect} from 'react';
import { View,Text,Image,Dimensions,SafeAreaView,ScrollView,FlatList,TextInput} from 'react-native';
import {projectStyles,commonStyles} from './styles';
import {Header} from './Header';
import {ellipseArray,skillsArray,Genre} from './helper';
import {DEMO, CIRCLE3,CHECK} from '../../../app/constants/constants'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {otherStyles as styles} from '../user/styles';

const { width:screenWidth ,height:screenHeight} = Dimensions.get('window');

export const ProjectView = ({ navigation: { goBack } }) => {
  const [comment,setComment] = useState('');
  const [isApply,setApply] = useState(false);

  const  renderItem = ({ item }) => (
        <TouchableOpacity style={projectStyles.overView}>
       <Text style={projectStyles.listText}>{item}</Text>  
       </TouchableOpacity>
     );
  const  generes = ({ item }) => (
        <TouchableOpacity style={projectStyles.skills}>
       <Text style={styles.item}>{item}</Text>  
       </TouchableOpacity>
     );


    return (
        <SafeAreaView style={commonStyles.safeView}>
          <Header title="Shoot in 30 Days"/>
          <ScrollView style={projectStyles.container}>
              <View style={projectStyles.imgView}>
                  <View style={projectStyles.hireView}>
                  <Text style={projectStyles.hire}>Hiring</Text>
                  </View>
                  
                  <Image source={DEMO}/>
                  <View style={projectStyles.overlay}></View>
              </View>
              <View style={projectStyles.descView}>
                <Text style={projectStyles.title}>Project</Text>
                <Text style={projectStyles.title}>title </Text>
                <Text style={projectStyles.desc}>Logline: This a description of the project trying to get people to join and work on it</Text>
              </View>
              <View style={projectStyles.line}></View>
              <View style={projectStyles.tabViews}>
                  <Text style={projectStyles.heading}> Cast and Crew </Text>
                  <View style={{flexDirection:'row',paddingTop:12}}>
                  {ellipseArray.map(res=>{
                      return(
                        <Image source={res} style={projectStyles.imgSetting} resizeMode="contain"/>
                      )
                  })}
                  <Text style={projectStyles.userText}>@williamerwin <Text style={{color:'#6C6C6C'}}>and 4 others</Text></Text>
                  </View>
                
              </View>
              <View style={projectStyles.line}></View>
              <View style={!isApply?projectStyles.activebtnContainer:projectStyles.btnContainer}>
                <TouchableOpacity style={[projectStyles.btn,{backgroundColor:'#000',paddingLeft:20}]}>
                  <Text style={projectStyles.dateTitle}>Start Date</Text>
                  <Text style={projectStyles.date}>10.05.2020</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[projectStyles.btn,projectStyles.activeBtn]} onPress={()=>setApply({isApply:!isApply})}>
                <Text style={projectStyles.apply}>{isApply?'Applied':'Apply'}</Text>
                </TouchableOpacity>
              </View>
              <View style={projectStyles.line}></View>
              <View style={projectStyles.positionView}>
              <Text style={[projectStyles.heading,projectStyles.opn]}> Open Positions</Text>
              <View  style={projectStyles.rightView}>
                  <View style={projectStyles.rightSubView}>
                      <Text style={projectStyles.leftText}>director</Text>
                      <View style={projectStyles.square}><Text style={projectStyles.rightText}>1</Text></View>
                  </View>
                  <View style={projectStyles.line}></View>
                  <View style={projectStyles.rightSubView}>
                      <Text style={projectStyles.leftText}>key grip</Text>
                      <View style={projectStyles.square}><Text style={projectStyles.rightText}>1</Text></View>
                  </View>
                  <View style={projectStyles.line}></View>
                  <View style={projectStyles.rightSubView}>
                      <Text style={[projectStyles.leftText,{color:'#6C6C6C'}]}>colorist</Text>
                      <View style={[projectStyles.square,{backgroundColor:'#4441D3'}]}>
                          <Image source={CHECK}/>
                          </View>
                  </View>
              </View>
              </View>
              <View style={[projectStyles.line,{marginTop:8}]}></View>

              <View style={[projectStyles.positionView,{paddingVertical:'7%'}]}>
              <Text style={[projectStyles.heading,projectStyles.opn]}>Tags</Text>
              <View  style={[projectStyles.rightView,{paddingTop:0}]}>
              <FlatList
                persistentScrollbar={false}
                contentContainerStyle={{paddingRight:'20%'}}
                horizontal={true}
                data={skillsArray}
                renderItem={renderItem}
                keyExtractor={(index) => index.toString()}
            /> 
                </View>
              </View>
              <View style={[projectStyles.line]}></View>
              <View style={[projectStyles.positionView,{paddingVertical:'7%'}]}>
              <Text style={[projectStyles.heading,projectStyles.opn]}>Detail</Text>
              <View  style={[projectStyles.rightView,{paddingTop:0,paddingRight:'7%'}]}>
                  <Text style={projectStyles.rightText}> This is ongoing description of all the details related to this project. we shoot here and we’re looking for this kind of arrange and this schedule on teh required shoot days. </Text>
                </View>
              </View>
              <View style={[projectStyles.line]}></View>
              <View style={{padding:'7%',}}>
              <Text style={[projectStyles.heading]}>Genre</Text>
              <FlatList
                persistentScrollbar={false}
                contentContainerStyle={{paddingRight:'20%',paddingTop:'3%'}}
                horizontal={true}
                data={Genre}
                renderItem={generes}
                keyExtractor={(index) => index.toString()}
            /> 
              </View>
              <View style={[projectStyles.line]}></View>
              <View style={[projectStyles.positionView,{paddingVertical:'7%'}]}>
              <Text style={[projectStyles.heading,projectStyles.opn]}>Location</Text>
              <View  style={[projectStyles.rightView,{paddingTop:0,paddingRight:'7%'}]}>
                  <Text style={[projectStyles.rightText,{color:'#6C6C6C',textAlign:'right'}]}> Los Angeles, CA</Text>
                </View>
              </View>
              <View style={[projectStyles.line]}></View>
              <View style={[projectStyles.tabViews,{marginBottom:'25%'}]}>
                  <Text style={projectStyles.heading}>Comments </Text>
                  <View style={{flexDirection:'row',paddingTop:12,alignItems:'center'}}>
                    <Image source={CIRCLE3}  resizeMode="contain"/>
                  <Text style={[projectStyles.userText,{paddingLeft:'2%'}]}>
                      <Text style={{color: '#9997EC'}}>@safford </Text>
                  This looks so cool!</Text>
                  </View>
                  <TouchableOpacity>
                      <Text style={{color:'#6C6C6C',fontSize:13,textAlign:'center',paddingVertical:'6%'}}>View all Comments.. </Text>
                  </TouchableOpacity>
                  <View style={{flexDirection:'row',paddingTop:12,alignItems:'center'}}>
                    <Image source={CIRCLE3}  resizeMode="contain"/>
                    <TextInput  style={projectStyles.input}
                    onChangeText={(text)=>setComment(text)}
                    placeholder="Add a comment as @jonsey" placeholderTextColor="#AAA8A8"/>
                  </View>
              </View>
          </ScrollView>
        </SafeAreaView>
    );
  };
