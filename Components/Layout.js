import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { db } from "./FirebaseConfig";
import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { ProgressCircle } from "react-native-svg-charts";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;

const Layout = () => {
  const [values, setValues] = useState({});
  const Bpm = JSON.stringify(values.Bpm);
  const Temperature = JSON.stringify(values.temperature);
  const Humidity = JSON.stringify(values.humidity);
  console.log("Temperature", Temperature);

  useEffect(() => {
    return onValue(ref(db, "/DHT"), (querySnapShot) => {
      const data = querySnapShot.val() || {};
      console.log("data ", data);
      const myData = { ...data }; // Data is in object form here
      console.log("my data", myData);
      // const finalData = JSON.stringify(myData);
      // console.log("final Data", finalData)
      // const lastData = JSON.parse(finalData);
      // console.log("Last Data", lastData)

      setValues(data);
    });
  }, []);

  // console.log("typeof(Bpm)", typeof Bpm);
  // const result = Number(Bpm);
  // console.log("type", typeof result);

  // const finalBpm = [];
  // finalBpm.splice(1, 0, result);
  // console.log("finalBPM", finalBpm);

  const data = {
    labels: [
      "December",
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
    ],
    datasets: [
      {
        data: [10, 20, 20, 40, 54, 28, 32, 64, 23, 75],
        color: (opacity = 10) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
        border: "2px solid red",
      },
    ],
    legend: ["BPM"], // optional
  };

  const chartConfig = {
    backgroundGradientFrom: "red",
    backgroundGradientFromOpacity: 0.001,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.3,
    color: (opacity = 2) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 6, // optional, default 3
    barPercentage: 15,
    useShadowColorFromDataset: false, // optional
  };

  const progressBPM = Bpm / 100;
  const progressCelsius = Temperature / 100;
  const progressHumidity = Humidity / 100;

  return (<>
    <StatusBar style="light" />
  <ScrollView>
    <View
      style={{
        backgroundColor: "#263143",
        // height: 772,
        display: "flex",
        textAlign: "center",
      }}
    >
      <Text
        style={{
          color: "#5F9DF7",
          marginTop: 60,
          fontWeight: "bolder",
          fontSize:28,
          marginLeft:"10%"
        }}
      >
        {" "}
    Health Monitoring App
      </Text>

      <View style={styles.container}>
        <View style={styles.circleView}>
          <Text
            style={{
              color: "white",
              fontSize: 25,
              marginBottom: 10,
              fontWeight: "bolder",
            }}
          >
            {" "}
            Beats Per min{" "}
          </Text>

          <ProgressCircle
            style={styles.progressCircle}
            startAngle={0}
            endAngle={7}
            strokeWidth={8}
            progress={progressBPM}
            progressColor={"red"}
          />

          <View style={{ marginTop: -200 }}>
            <Text style={styles.heart}>❤️</Text>

            <Text style={styles.Text}>{Bpm}</Text>

            <Text style={styles.bpmText}>BPM</Text>
          </View>
        </View>

        {/* ..............................Temperature........................... */}

        <View style={styles.celsiusTemperatureView}>
          <Text
            style={{
              color: "white",
              fontSize: 25,
              marginBottom: 10,
              fontWeight: "bolder",
            }}
          >
            {" "}
            Temperature{" "}
          </Text>
          <ProgressCircle
            style={styles.celsiusProgressCircle}
            startAngle={0}
            endAngle={7}
            strokeWidth={8}
            progress={progressCelsius}
            progressColor={"orange"}
          />
          <View style={{ marginTop: -200 }}>
            <Text style={styles.Cdegree}>C°</Text>

            <Text style={styles.celsiusText}>{Temperature}</Text>

            <Text style={styles.celsiusTemperatureText}>Celsius</Text>
          </View>
        </View>

        {/* .........................Humidity........................... */}

        <View style={styles.humidityView}>
          <Text
            style={{
              color: "white",
              fontSize: 25,
              marginBottom: 10,
              fontWeight: "bolder",
            }}
          >
            {" "}
            Humidity{" "}
          </Text>
          <ProgressCircle
            style={styles.humidityProgressCircle}
            startAngle={0}
            endAngle={7}
            strokeWidth={8}
            progress={progressHumidity}
            progressColor={"blue"}
          />
          <View style={{ marginTop: -200 }}>
            <Text style={styles.humidityunit}>%rh</Text>

            <Text style={styles.humidityInnerText}>{Humidity}</Text>

            <Text style={styles.humidityText}>Humidity</Text>
          </View>
        </View>
      </View>
{/* 
      <LineChart
        data={data}
        width={screenWidth}
        height={256}
        verticalLabelRotation={30}
        chartConfig={chartConfig}
        style={{ marginTop: 70 }}
        bezier
      /> */}
    </View>
    </ScrollView>
    </>
  
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: 50,
marginBottom:80
  },

  // ..............................................BPM........................

  circleView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  progressCircle: {
    height: 200,
    width: 200,
  },
  heart: {
    fontSize: 40,
    marginTop: 12,
    marginLeft: 32,
  },
  Text: {
    color: "white",
    fontSize: 82,
    marginLeft: 15,
    marginTop: -16,
  },
  bpmText: {
    color: "#3B4658",
    fontSize: 32,
    marginLeft: 24,
    marginTop: -14,
  },
  // ..................................Temperature.......................
  celsiusTemperatureView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop:50
  },

  celsiusProgressCircle: {
    height: 200,
    width: 200,
  },
  Cdegree: {
    fontSize: 30,
    color: "white",
    fontWeight: "bolder",
    marginTop: 12,
    marginLeft: 100,
  },
  celsiusText: {
    color: "white",
    fontSize: 82,
    marginLeft: 15,
    marginTop: -16,
  },
  celsiusTemperatureText: {
    color: "#3B4658",
    fontSize: 32,
    marginLeft: 34,
    marginTop: -14,
  },

  // .......................Humdity......................

  humidityView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop:70

  },

  humidityProgressCircle: {
    height: 200,
    width: 200,
  },
  humidityunit: {
    fontSize: 30,
    color: "white",
    fontWeight: "bolder",
    marginTop: 12,
    marginLeft: 64,
  },
  humidityInnerText: {
    color: "white",
    fontSize: 82,
    marginLeft: 20,
    marginTop: -16,
  },
  humidityText: {
    color: "#3B4658",
    fontSize: 30,
    marginLeft: 4,
    marginTop: -14,
  },
});

export default Layout;
