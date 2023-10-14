import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

// import React from "react";
import { Image } from "react-native";
import { SafeAreaView, TouchableOpacity } from "react-native-web";

export default function Color({ navigation, route }) {
  const { data, selected } = route.params;
  const [color, setColor] = useState([selected.color]);
  const [temp, setTemp] = useState(selected);

  const change = (color) => {
    // console.log(data.find((item) => item.color === color));
    setTemp(data.find((item) => item.color === color));
  };

  const handleColorSelect = (color) => {
    // Cập nhật màu đã chọn và quay lại trang "Home"
    navigation.navigate("Home", {
      selected: data.find((item) => item.color === color),
    });
  };

  const colorsRender = () => {
    return data.map((item) => (
      <TouchableOpacity
        key={item.color}
        style={{
          alignItems: "center",
          width: "100%",
        }}
        // onPress={() => handleColorSelect(item.color)}
        onPress={() => {
          setColor(item.color);
          change(item.color);
        }}
      >
        <View
          style={{ width: 80, height: 80, backgroundColor: item.color }}
        ></View>
      </TouchableOpacity>
    ));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.HContainer}>
        <Image style={styles.imgProduct} source={temp.img}></Image>

        <View style={{ marginLeft: 10, marginTop: 20 }}>
          <Text style={styles.textProduct}>
            Điện Thoại Vsmart Joy 3 Hàng chính hãng
          </Text>
          <Text style={[styles.textProduct, { fontWeight: 500 }]}>
            màu :
            <Text style={{ color: "black", fontWeight: 700 }}> {temp.mau}</Text>{" "}
          </Text>
          <Text style={[styles.textProduct, { fontWeight: 500 }]}>
            Cung cấp bởi :
            <Text style={{ fontWeight: 700 }}> Tiking Trading</Text>
          </Text>
          <Text style={styles.textProduct}>1.790.000 vnd</Text>
        </View>
      </View>

      {/* ============== */}
      <Text>Chọn một màu bên dưới</Text>

      {colorsRender()}

      <TouchableOpacity
        style={styles.Button}
        onPress={() => {
          handleColorSelect(color);
        }}
      >
        <Text style={{ color: "white", fontWeight: 700 }}>Xong</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    // paddingBottom: 40,
    height: "90%",
  },
  sectionStyle: {
    flexDirection: "row",

    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: "#000",
    height: 40,
    width: 233,
    borderRadius: 5,
    // margin: 10,
  },
  imageStyle: {
    // paddingTop: 10,
    margin: 5,
    height: 25,
    width: 30,
    // resizeMode: "stretch",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },

  spinner: {
    width: 120,
    height: 50,
  },
  parentContainer: {
    width: "100%",
    height: "100%",

    backgroundColor: "#3B3B98",
  },
  button: {
    width: 332,
    height: 34,
    borderRadius: 10,
    borderColor: "#333",
    borderWidth: "1px",
    backgroundColor: "white",
  },
  imgProduct: {
    width: 120,
    marginTop: 30,
    height: 130,
  },
  textProduct: {
    fontWeight: "bold",
    fontSize: 14,
    marginLeft: 15,
    padding: 5,
    width: "100%",
  },
  HContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    // height: 100,
    paddingHorizontal: 10,
    // marginLeft: 20,
  },
  textBold: {
    fontWeight: "bold",
    fontSize: 18,
    // textAlign: "left",
    color: "#333",
  },
  star: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  Input: {
    // height: 200,
    borderColor: "#ccc",

    borderRadius: 5,
    borderWidth: 3,
    width: "44%",
    height: 40,
    backgroundColor: "#fff",
  },
  placeholderStyle: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#ccc",
  },
  mainInput: {
    backgroundColor: "#151537",
    width: "80%",
    height: 40,
    borderRadius: 5,
  },

  h1: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    width: "80%",

    textAlign: "center",
  },
  Button: {
    width: "90%",
    height: 43,
    backgroundColor: "#3B3B98",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  btnOrder: {
    width: "90%",
    height: 50,
    backgroundColor: "red",
    textAlign: "center",
    justifyContent: "center",
    marginTop: 30,
    borderRadius: 5,
  },
  btnText: {
    fontSize: 18,
    color: "#333",
  },
  redText: {
    color: "red",
    fontSize: 15,
    marginLeft: 18,

    fontWeight: "bold",
  },
});
