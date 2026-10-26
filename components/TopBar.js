import { View, Text } from 'react-native';

export default function TopBar() {

    return (

        <View className="flex-row items-center justify-center bg-sky-600 px-4 py-4">
            <Text className="text-xl font-bold text-white flex-1">
                Gemini Tech
            </Text>

            <Text className="text-2xl text-white">
                ☰
            </Text>
        </View>
    ) 
}