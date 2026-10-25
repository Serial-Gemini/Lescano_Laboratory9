import { Text, View, Pressable } from 'react-native';

export default function NavBar() {
    
    return (

        <View className="flex-row border-t border-slate-200 bg-white">
            <Pressable className="flex-1 items-center py-2">
                <Text className="text-lg">🏠</Text>
                <Text className="text-sm font-bold text-indigo-600">Home

                </Text>
            </Pressable>

            <Pressable className="flex-1 items-center py-2">
                <Text className="text-lg">🔍</Text>
                <Text className="text-sm text-slate-500">Search</Text>
            </Pressable>

            <Pressable className="flex-1 items-center py-2">
                <Text className="text-lg">👤</Text>
                <Text className="text-sm text-slate-500">Profile</Text>
            </Pressable>
        </View>

    )
}