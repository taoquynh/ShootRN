/**
 * Home
 */

 import React, {useState} from 'react';
 import {
   SafeAreaView,
   View,
   StyleSheet,
   Text,
   Image,
   ViewStyle,
   TouchableOpacity,
 } from 'react-native';
 import styles from './styles';
 
 const ROCK = 'Rock';
 const PAPER = 'Paper';
 const SCISSORS = 'Scissors';
 const PAPER_IMAGE = require('./assets/giay.jpg');
 const ROCK_IMAGE = require('./assets/da.jpeg');
 const SCISSORS_IMAGE = require('./assets/keo.jpg');
 
 function HomeScreen() {
   const [result, setResult] = useState('Tie game!');
   const [guestChoice, setGuessChoice] = useState(ROCK);
   const [comptChoice, setComptChoice] = useState(ROCK);
   const [imageGuess, setImageGuess] = useState(ROCK_IMAGE);
   const [imageCompt, setImageCompt] = useState(ROCK_IMAGE);
   const [colorResult, setColorResult] = useState();
 
   const arr = [ROCK, PAPER, SCISSORS];
   const arrImage = [ROCK_IMAGE, PAPER_IMAGE, SCISSORS_IMAGE];
 
   const action = (x) => {
     let index = Math.floor(Math.random() * 2);
     let newCompt = arr[index];
     let newImage = arrImage[index];
     let newResult;
     let newGuessImage = arrImage[arr.indexOf(x)];
 
     if (newCompt === x) {
       newResult = 'Tie game!';
     } else {
       if (x === ROCK) {
         newResult = newCompt === PAPER ? 'You lose!' : 'You win!';
       } else if (x === PAPER) {
         newResult = newCompt === SCISSORS ? 'You lose!' : 'You win!';
       } else if (x === SCISSORS) {
         newResult = newCompt === ROCK ? 'You lose!' : 'You win!';
       }
     }
     
     setComptChoice(newCompt);
     setGuessChoice(x);
     setResult(newResult);
     setImageCompt(newImage);
     setImageGuess(newGuessImage);
   };
 
   return (
     <SafeAreaView style={styles.safeView}>
       <View style={styles.container}>
         <View style={styles.topView}>
           <Text style={styles.title}>{result}</Text>
         </View>
         <View style={styles.centerView}>
           <View style={styles.name}>
             <Text style={styles.nameText}>You</Text>
             <Text style={styles.nameText}>Comp</Text>
           </View>
           <View style={styles.viewImage}>
             <Image source={imageGuess} style={styles.image} />
             <Image source={imageCompt} style={styles.image} />
           </View>
           <View style={styles.name}>
             <Text style={styles.text}>{guestChoice}</Text>
             <Text style={styles.text}>{comptChoice}</Text>
           </View>
         </View>
         <View style={styles.bottomView}>
           <TouchableOpacity style={styles.button} onPress={() => action(ROCK)}>
             <Text style={styles.textButton}>Rock</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.button} onPress={() => action(PAPER)}>
             <Text style={styles.textButton}>Paper</Text>
           </TouchableOpacity>
           <TouchableOpacity
             style={styles.button}
             onPress={() => action(SCISSORS)}>
             <Text style={styles.textButton}>Scissors</Text>
           </TouchableOpacity>
         </View>
       </View>
     </SafeAreaView>
   );
 }
 
 export default HomeScreen;
 