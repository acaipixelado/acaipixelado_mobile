import { Tabs } from 'expo-router';

export default function AppLayout() {
  return (
    <Tabs
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen
        name='(home)/index'
        options={{title: 'Home'}}
      />
      <Tabs.Screen
        name='configs/index'
        options={{title: 'Configs'}}
      />
    </Tabs>
  );
}
