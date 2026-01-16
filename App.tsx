import './src/global.css';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 bg-white items-center justify-center">
      <Text className="text-lg font-semibold text-gray-800">
        Welcome to Expo with Uniwind!
      </Text>
      <Text className="text-sm text-gray-500 mt-2">
        Edit App.tsx to start working on your app.
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
