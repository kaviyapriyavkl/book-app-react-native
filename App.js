import * as React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  useWindowDimensions,
  Dimensions,
Alert,
} from 'react-native';
import { NavigationContainer, navigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Width = Dimensions.get('window').width;
import Data from './src/views/data';


const styles = StyleSheet.create({
  
  container: {
    backgroundColor: 'black',
  },
  title: {
    backgroundColor: 'lightpink',
    height: 80,
    fontWeight: 'bold',
  },
  heading: {
    padding: 10,
    fontSize: 20,
    color: 'ligthpink',
    textAlign: 'center',
  },
  sub1: {
    fontSize: 25,
    padding: 10,
    color: 'lightpink',
    fontWeight: 'bold'
  },
  sub1content: {
    padding: 20,
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  tinyLogo: {
    width: 150,
    height: 100,
    marginLeft: 90,
    marginBottom: 10,
    marginTop: 10,
    borderRadius:20,
    alignContent:'center'
  },
  content: {
    height: 300,
    backgroundColor: 'pink',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },

  contentmain: {
    padding: 20,
    backgroundColor: 'purple',
    color:'white',
    
  },
  maincontainer: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
    input: {
    height: 40,
    width: 140,
    margin: 12,
    borderWidth: 2,
    padding: 10,
  },
  emailinput: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 2,
    padding: 10,
  },
});
function HomeScreen({ navigation }) {

  const {height,width} = useWindowDimensions();
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.heading}>CHILDREN STORIES</Text>
        </View>
        <View>
          <Text style={styles.sub1}>INDEX</Text>
          <View style={styles.content}>
            <Text style={styles.sub1content}>
              FINDING YOUR HEART
            </Text>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Dmge1OCgasZ_vf2eGcBRPyzEOUSWXD7EAg&usqp=CAU',
              }}
            />
            <View style={{
            }}>
            <Button
              title="next story"
              onPress={() => navigation.navigate('Second')}
            />
            </View>
          </View>
          <View style={styles.content}>
            <Text style={styles.sub1content}>
              PEACING TOGETHER
            </Text>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmHaoQWyfPSW51AEU3TkMssaig3dZbYj-0MQ&usqp=CAU',
              }}
            />
            <Button title="Next story" onPress={() => navigation.navigate('Third')} />
          </View>
          <View style={styles.content}>
            <Text style={styles.sub1content}>
              BEAUTIFUL LIFE
            </Text>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzz-K6V2hKpkFYOxoEbPwTERpTkEfDMjJ5sw&usqp=CAU',
              }}
            />
            <Button
              title="next story"
              onPress={() => navigation.navigate('Fourth')}
            />
          </View>
          <View style={styles.content}>
            <Text style={styles.sub1content}>
              FIND MORE...
            </Text>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ17qDOgLTolAo8HVMbeuee3cBWuX0lMi2Chg&usqp=CAU',
              }}
            />
            <Button title="LOG IN" onPress={() => navigation.navigate('Fivth')} />
          </View>
        </View>
        
      </View>

    <Button
    onPress={()=>{
      navigation.navigate("Data Screen")
    }}
    title="Data"
    />
      
    </ScrollView>
  );
}

function SecondScreen({ navigation }) {
  return (
    <View>
      <View style={styles.title}>
        <Text style={styles.heading}>FINDING YOUR HEART</Text>
      </View>
      <View styles={styles.maincontainer}>
        <Text style={styles.contentmain}>
          “What gift would we give to children who are orphaned or who have very little access to emotional and spiritual nurturing through whatever circumstances, whether orphaned through physical loss, emotional deprivation or cultural abandonment?”

The answer: “A Thousand Grandparents; all different, some intense, some playful and all with different experience and wisdom to share. A thousand beautiful awakened souls sharing the gift of presence, truth and intimacy of spirit.”

This is a film based project, a heritage collection of wisdom, inspiration, delight and love freely accessible by all.  The project starts by asking storyteller’s the question,

“If you had one story to tell, as a gift of consciousness, a story that could change a child’s life, open their minds and hearts, help them to find their inner light, what would it be?”

Or, “If you could go back to the younger you and tell that younger you one story of inspiration or wisdom, what would it be?”
        </Text>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-UHfeWDLKLKHrgE2qOlEK3sr11D-GnuoWQQ&usqp=CAU',
          }}
        />
        <Text style={styles.contentmain}>
          Provide a united platform for inspired voices to reach out to future generations.
Provide wisdom through fun.
Develop and encourage a sense of universal wonder.
Encourage a love of the natural world and honouring of all beings.
Break down barriers between different communities by showing and sharing wisdom from all cultures.
Encourage an interest in the voices of elders and providing a bridge between the generations.
Provide a safe and trusted place to seek wisdom for those who do not currently have such blessings.
Deliver tools for self realisation, empowerment and response-ability.
Bring joy!
        </Text>
      </View>
      <Button title="CONTENTS" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
function ThirdScreen({ navigation }) {
  return (
    <View>
      <View style={styles.title}>
        <Text style={styles.heading}>PEACING TOGETHER</Text>
      </View>
      <View styles={styles.maincontainer}>
        <Text style={styles.contentmain}>
One day a wolf was eating the flesh of an animal it had killed. A little bone got stuck in his throat, and he was unable to swallow it. He soon felt severe pain in his throat and raced up and down, trying to find a way to ease it. He begged everyone he saw to help him. Finally, the wolf came face to face with the crane.

“Please help me,” the wolf pleaded. “I’ll give you exactly what you want.”

The crane agreed to give it a shot and instructed the Wolf to lie down on its side with its jaws spread as wide as it could. The crane then inserted its long neck into the Wolf’s throat and pulled out the bone. The crane then requested its reward.

“Be joyful,” the wolf added, grinning and showing his teeth. You’ve inserted your head into a Wolf’s mouth and then taken it back out safely. Scroll down to enjoy the next story with moral in English.  
        </Text>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXDYwi9SqdZ2hkkfowLtEdCFBrwb_7eU3Vlw&usqp=CAU',
          }}
        />
        <Text style={styles.contentmain}>
          Moral of the story: Kindness and Greed cannot go hand in hand.
        </Text>
      </View>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
function FourthScreen({ navigation }) {
  return (
    <View>
      <View style={styles.title}>
        <Text style={styles.heading}>BEAUTIFUL LIFE</Text>
      </View>
      <View styles={styles.maincontainer}>
        <Text style={styles.contentmain}>
         A boy and his father lived in a village. While the sheep grazed in the fields, the boy’s father instructed him to keep an eye on them. He had to take the sheep to the grassy fields every day. The boy, on the other hand, was dissatisfied and wanted to run and play.  He decided to have a good time. “Wolf! Wolf!” he yelled, and the entire village came storming with stones to chase the wolf away before it could eat any of the sheep.

The villagers went muttering under their breath about how the boy had wasted their time when they discovered there was no wolf. The boy shouted out again the next day, “Wolf! Wolf!” and the villagers hurried over to chase the wolf away.

The villagers walked away enraged this time. On the third day, as the boy climbed the tiny hill, he came face to face with a wolf attacking his sheep. “Wolf! Wolf! Wolf!” he screamed as loudly as he could, yet not a single person came to his aid. The villagers assumed he was trying to trick them once more and did not come. That day, the small boy lost a lot of sheep due to his folly.


        </Text>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJOJsSLMpNsTaZwAvVmvzLujFRUMvE6RGQNg&usqp=CAU',
          }}
        />
        <Text style={styles.contentmain}>
Moral of the story: Always be truthful, you never know what lies may lead to.
        </Text>
      </View>
      <Button title="CONTENTS" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

  function FivthScreen({ navigation }) {
  const [FirstName, onChangeFirst] = React.useState(null);
  const [LastName, onChangeLast] = React.useState(null);
  const [Email, onChangeEmail] = React.useState(null);
  const [Mobile, onChangeMobile] = React.useState(null);
  const [Password, onChangePassword] = React.useState(null);
  const [Confirm, onChangeConfirm] = React.useState(null);


  async function validate() {
    var flag = 0;

    if (Password != Confirm) {
      flag = 1;
      Alert.alert('Incorrect Password', 'Password Does not match', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
      return
    }
    if (FirstName == null || FirstName == '') {
      flag = 1;
      Alert.alert('Details Missing', 'First name cannot be empty', [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
      return
    }
    if (LastName == null || LastName == '') {
      flag = 1;
      Alert.alert('Details Missing', 'Last name cannot be empty', [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
      return
    }
    if (Email == null || Email == '') {
      flag = 1;
      Alert.alert('Details Missing', 'Email cannot be empty', [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
      return
    }
    if (Mobile == null || Mobile == '') {
      flag = 1;
      Alert.alert('Details Missing', 'Mobile number cannot be empty', [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
    }

    const payload = {
      first_name:FirstName,
      last_name:LastName,
      email:Email,
      phone:Mobile,
      Password:Password
    }
    

    
    await fetch("http://192.168.9.6:3001/api/insert", {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(payload) // body data type must match "Content-Type" header
    }).then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    }); // parses JSON response into native JavaScript objects
  




  }
  function display() {
    return (
      <View style={{ marginTop: 500 }}>
        <Text>HELO</Text>
      </View>
    );
  }
  return (
    <View>
      <View style={styles.title}>
        <Text style={styles.heading}>CHILDREN STORIES</Text>
      </View>
      <Text style={styles.sub1}>Enter your details:</Text>
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeFirst}
          placeholder="First Name"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeLast}
          placeholder="Last Name"
        />
      </View>
      <TextInput
      autoCapitalize='none'
        style={styles.emailinput}
        placeholder="Email"
        onChangeText={onChangeEmail}
      />
      <TextInput
      keyboardType='phone-pad'
        style={styles.emailinput}
        placeholder="Mobile Number"
        onChangeText={onChangeMobile}
      />
      <View style={{ flexDirection: 'row' }}>
        <TextInput
        secureTextEntry={true}
          style={styles.input}
          placeholder="Password"
          onChangeText={onChangePassword}
        />
        <TextInput
        secureTextEntry={true}
          style={styles.input}
          placeholder="Confirm Password"
          onChangeText={onChangeConfirm}
        />
      </View>
      <Button
        title="Submit"
        onPress={() => {
          var flag = validate();
          if (flag == 0) {
            navigation.navigate('Home');
          }
        }}
      />
    </View>
  );
}
    


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'contents' }}
        />
        <Stack.Screen
          name="Second"
          component={SecondScreen}
          options={{ title: 'story 1' }}
        />
        <Stack.Screen
          name="Third"
          component={ThirdScreen}
          options={{ title: 'story 2' }}
        />
        <Stack.Screen
          name="Fourth"
          component={FourthScreen}
          options={{ title: 'story 3' }}
        />
        <Stack.Screen
          name="Fivth"
          component={FivthScreen}
          options={{ title: 'login' }}
        />
        <Stack.Screen
          name="Data Screen"
          component={Data}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
