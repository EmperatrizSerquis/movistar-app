import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { View, StyleSheet, Dimensions } from "react-native";
import { useSelector } from "react-redux";
import { Colors } from "../constants/colors";
import { Lenguage } from "../constants/Lenguage";

const { height, width} = Dimensions.get("window");

const PickerProduct = ({ selectFirst, setSelectSecond }) => {

    //funcion lenguage
    const lenguageSelect = useSelector((state)=> state.lenguage.Lenguage);
    const filter = Lenguage.filter((item) => item.id === lenguageSelect);
    const mapping = filter.map((item) => item.valor);
    const msg = mapping[0];

    return (
        <View style={styles.container}>
            <Picker
                mode="dropdown"
                style={styles.picker}
                selectedValue={selectFirst.producto}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectSecond({ ...selectFirst, producto: itemValue })}
            >
                <Picker.Item label={msg.msgSeleccioneUna} value="Seleccione una..." enabled={false} />
                <Picker.Item label="300Mb Fibra Optica" value="300Mb Fibra Optica" />
                <Picker.Item label="500Mb Fibra Optica" value="500Mb Fibra Optica" />
                <Picker.Item label="1000Mb Fibra Optica" value="1000Mb Fibra Optica" />
                <Picker.Item label="300Mb Fibra Optica + TV Digital" value="300Mb Fibra Optica + TV Digital" />
                <Picker.Item label="500Mb Fibra Optica + TV Digital" value="500Mb Fibra Optica + TV Digital" />
                <Picker.Item label="1000Mb Fibra Optica + TV Digital" value="1000Mb Fibra Optica + TV Digital" />
                <Picker.Item label="300Mb Fibra Optica + TV Max" value="300Mb Fibra Optica + TV Max" />
                <Picker.Item label="500Mb Fibra Optica + TV Max" value="500Mb Fibra Optica + TV Max" />
                <Picker.Item label="1000Mb Fibra Optica + TV Max" value="1000Mb Fibra Optica + TV Max" />
                <Picker.Item label="Portabilidad Prepago a Abono" value="Portabilidad Prepago a Abono" />
                <Picker.Item label="Portabilidad Abono a Abono" value="Portabilidad Abono a Abono" />
                <Picker.Item label="Alta nueva celular" value="Alta nueva celular" />
            </Picker>
        </View>
    );
};

export default PickerProduct;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width * 0.9,
        borderColor: Colors.primary,
        borderWidth: 1,
        borderRadius: 5,
    },
    picker: {
        //backgroundColor: Colors.primary,   
    },
}) 