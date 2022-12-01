import AsyncStorage from '@react-native-async-storage/async-storage';

export type History = {
  expression: string;
  result: string;
};

export async function setHistories(history: History[]) {
  try {
    await AsyncStorage.setItem('histories', JSON.stringify(history));
  } catch (err) {
    throw err;
  }
}

export async function getHistories() {
  try {
    const jsonValue = await AsyncStorage.getItem('histories');
    const value: History[] = jsonValue !== null ? JSON.parse(jsonValue) : [];
    return value;
  } catch (err) {
    throw err;
  }
}
