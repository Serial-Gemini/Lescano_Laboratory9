// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import './global.css';
import { Text, Pressable, ScrollView } from 'react-native';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import TopBar from './components/TopBar';
import NavBar from './components/NavBar';

export default function App() {
  return (
    
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-slate-50">

        <TopBar />

        <ScrollView className="flex-1" contentContainerClassName="p-4">

          <Text className="text-1xl font-bold text-slate-800 text-center">
            Hello Everyone, my name is Waylon Chester M. Lescano and I am a CVSU student taking up Bachelor of Science in Information Technology. 
            I am currently in my 3rd year and I am excited to learn more about React Native and its capabilities. 
            I hope to gain valuable skills and knowledge that will help me in my future career as a software developer.
            My hobby is playing video games and I also enjoy watching movies and TV shows.
          </Text>

          {/* <Text className="mt-2 text-base text-slate-600">
            Hello
          </Text> */}

          <Pressable className="mt-6 items-center rounded-xl bg-indigo-600 py-3">
            <Text className="font-bold text-white">
              Get Started
            </Text>
          </Pressable>

          <Pressable className="mt-3 items-center rounded-xl border border-indigo-600 py-3">
            <Text className="font-bold text-indigo-600">
              Learn More
            </Text>
          </Pressable>

          <Pressable className="mt-3 items-center rounded-xl bg-red-500 py-3">
            <Text className="font-bold text-white">Delete</Text>
          </Pressable>
        </ScrollView>

        <NavBar />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
