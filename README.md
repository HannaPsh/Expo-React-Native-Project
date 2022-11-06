import { StatusBar } from 'expo-status-bar';
import {
StyleSheet,
Text,
View,
SafeAreaView,
Platform,
Dimensions,
Image,
} from 'react-native';
import {
useDimensions,
useDeviceOrientation,
} from '@react-native-community/hooks';

export default function FirstApp() {
console.log(Dimensions.get('screen')); /_ check the dimension _/
console.log(useDimensions());
console.log(useDeviceOrientation());
const { landscape } = useDeviceOrientation();
console.log(landscape);

return (
<View style={styles.container}>
<Text style={styles.text}>Hello Anna!</Text>
<StatusBar style="auto" />
<View style={{ backgroundColor: 'red', flex: 1 }}></View>
<View style={{ backgroundColor: 'green', flex: 1 }}></View>

      {/* SafeAreView instead of View */}
    </View>

);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: 'white' /_ landscape
? 'blue'
: 'red' _/ /_ cannot reach this variable from here _/,
paddingTop: Platform.OS === 'android' ? 40 /_ StatusBar.paddingTop _/ : 0,
/_ alignItems: 'center',
justifyContent: 'center', _/
},
text: {
color: 'white',
},
});

expo install react-native-gesture-handler

npm install yup

const categories = [
{ label: 'Furniture', value: 1 },
{ label: 'Clothing', value: 2 },
{ label: 'Cameras', value: 3 },
];

export default function App() {
const [category, setCategory] = useState(categories[0]);
return (
<Screen>
<AppPicker
selectedItem={category}
onSelectItem={(item) => setCategory(item)}
items={categories}
icon="apps"
placeholder="Category"
/>
<AppTextInput icon="email" placeholder="Email" />
</Screen>
);
}
