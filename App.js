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

          <Text className="text-3xl font-bold text-slate-800">
            Hello World!
          </Text>

          <Text className="mt-2 text-base text-slate-600">
            Welcome to React Native! Hi.
          </Text>

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
        </ScrollView>

        <NavBar />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
