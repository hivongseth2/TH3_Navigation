import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-web";
import { StyleSheet, Text, View, Image } from "react-native";
export default function Home({ navigation, route }) {
  const data = [
    {
      id: 1,
      color: "black",
      img: require("../assets/img/black.png"),
      mau: "Đen",
    },
    {
      id: 2,
      color: "blue",
      img: require("../assets/img/blue.png"),
      mau: "Xanh nước biển",
    },
    {
      id: 3,
      color: "green",
      img: require("../assets/img/green.png"),
      mau: "Xanh lá cây",
    },
    {
      id: 4,
      color: "purple",
      img: require("../assets/img/purple.png"),
      mau: "Tím",
    },
  ];

  const [selected, setSelected] = useState(data[0]);
  useEffect(() => {
    if (route.params && route.params.selected) {
      setSelected(route.params.selected);
    }
  }, [route.params]);

  const StarImages = () => {
    const starImages = [];

    for (let i = 0; i < 5; i++) {
      starImages.push(
        <Image
          style={styles.star}
          key={i}
          source={{
            uri: "https://e7.pngegg.com/pngimages/114/147/png-clipart-yellow-star-illustration-yellow-star-color-star-blue-angle-thumbnail.png",
          }}
        ></Image>
      );
    }

    return starImages;
  };
  return (
    <View style={styles.container}>
      {/* {(url = selected.img)} */}
      <Image style={styles.imgProduct} source={selected.img}></Image>
      <Text>Điện Thoại Vsmart Joy 3 - Hàng chính hãng </Text>

      <View style={[styles.HContainer, { width: "80%", marginLeft: 18 }]}>
        {StarImages()} <Text>(Xem 282 đánh giá)</Text>
      </View>

      <View
        style={[
          styles.HContainer,
          { justifyContent: "space-around", width: "100%" },
        ]}
      >
        <Text style={styles.textBold}>1.790.000 đ</Text>
        <Text style={{ textDecorationLine: "line-through" }}>1.790.000 đ</Text>
      </View>

      <View style={styles.HContainer}>
        <Text style={styles.redText}>Ở đâu rẻ hơn hoàn tiền</Text>
      </View>

      <View style={{ justifyContent: "center", textAlign: "center" }}>
        <TouchableOpacity
          style={[styles.button]}
          onPress={() => {
            navigation.navigate("Color", { selected, data });
          }}
        >
          <Text
            style={[
              styles.btnText,
              { justifyContent: "center", textAlign: "center" },
            ]}
          >
            {" "}
            4 màu chọn mua{" "}
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.btnOrder}>
        <Text style={[styles.btnText, { color: "white" }]}>Chọn mua</Text>
      </TouchableOpacity>
    </View>
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
    width: "100%",
    marginTop: 10,
    height: 370,
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
    width: 100,
    height: 43,
    backgroundColor: "#3B3B98",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  btnOrder: {
    width: "90%",
    height: 40,
    backgroundColor: "#CA1536",
    textAlign: "center",
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 10,
  },
  btnText: {
    fontSize: 18,
    color: "#333",
    textAlign: "center",
  },
  redText: {
    color: "red",
    fontSize: 15,
    marginLeft: 18,

    fontWeight: "bold",
  },
});
