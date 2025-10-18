import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Vibration,
  Pressable,
  Keyboard,
  FlatList,
} from "react-native";
import ResultImc from "./ResultImc";
import styles from "./style";

export default function Form() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [messageImc, setMessageImc] = useState("Preencha o peso e a altura");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");
  const [errorMessage, setErrorMessage] = useState(null);
  const [imcList, setImcList] = useState([]);

  function imcCalculator() {
    const heightFormat = parseFloat(height.replace(",", "."));
    const weightFormat = parseFloat(weight.replace(",", "."));

    if (isNaN(heightFormat) || isNaN(weightFormat) || heightFormat === 0) {
      setErrorMessage("Valores inválidos");
      setImc(null);
      return;
    }

    const calculated = (weightFormat / (heightFormat * heightFormat)).toFixed(
      2
    );

    setImcList((arr) => [
      ...arr,
      { id: new Date().getTime().toString(), imc: calculated },
    ]);
    setImc(calculated);
  }

  function verificationImc() {
    if (!weight || !height) {
      Vibration.vibrate();
      setErrorMessage("Campo obrigatório*");
    }
  }

  function validationImc() {
    if (weight !== "" && height !== "") {
      imcCalculator();
      setMessageImc("Seu IMC é igual:");
      setTextButton("Calcular novamente");
      setHeight("");
      setWeight("");
      setErrorMessage(null);
    } else {
      verificationImc();
      setImc(null);
      setTextButton("Calcular");
      setMessageImc("Preencha o peso e a altura");
    }
  }

  return (
    <View style={styles.formContext}>
      {imc == null ? (
        <Pressable onPress={Keyboard.dismiss} style={styles.form}>
          <Text style={styles.formLabel}>Altura</Text>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TextInput
            style={styles.input}
            onChangeText={setHeight}
            value={height}
            placeholder="Ex: 1.75"
            keyboardType="numeric"
          />
          <Text style={styles.formLabel}>Peso</Text>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TextInput
            style={styles.input}
            onChangeText={setWeight}
            value={weight}
            placeholder="Ex: 75.36"
            keyboardType="numeric"
          />

          <TouchableOpacity
            style={styles.ButtonCalculator}
            onPress={validationImc}
          >
            <Text style={styles.textButtonCalculator}>{textButton}</Text>
          </TouchableOpacity>
        </Pressable>
      ) : (
        <View style={styles.exhibitionResultImc}>
          <ResultImc messageResultImc={messageImc} resultImc={imc} />

          <TouchableOpacity
            style={styles.ButtonCalculator}
            onPress={validationImc}
          >
            <Text style={styles.textButtonCalculator}>{textButton}</Text>
          </TouchableOpacity>
        </View>
      )}

      <FlatList
        style={styles.listImcs}
        data={[...imcList].reverse()}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.resultImcItem}>
          <Text style={styles.textResultItemList}>Resultado do IMC = </Text>
          {item.imc}
          </Text>
        )}
      />
    </View>
  );
}
