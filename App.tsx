import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import MapComponent from './components/Map';

const App = () => {
  const [roomid, setroomId] = useState<number | string | undefined>('');

  const svgString = `
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="100px" y="100px" viewBox="0 0 4057.3 2085.4" xml:space="preserve">
  <image style="overflow:visible;" width="4057" height="2085" xlink:href="http://citymall.connect.ge/source/../static/media/nL3OcrchuUIQMPUpLtpSpvT3pgRm8GM6g438gIUE.png" transform="matrix(1 0 0 1 0 0.4129)" room="-"></image>
  <polygon  style="fill: transparent" class="st0" points="180,688.5 8.3,688.5 8.3,54.3 257.5,54.3 257.5,465.3 180,465.3 " room="496"></polygon>
  <polygon  style="fill: transparent" class="st0" points="538.8,465.7 902,465.7 902,55 538.8,55 " room="64"></polygon>
  <polygon  style="fill: transparent" class="st0" points="902,465.7 1231.1,465.7 1235.3,454.9 1235.3,440.4 1301.4,440.4 1410.5,493.3 1535.1,55 902,55 " room="543"></polygon>
  <polygon  style="fill: transparent" class="st0" points="2103.7,174.9 2258.8,174.9 2258.8,187.8 2217.7,365.2 2048.6,365.2 " room="62"></polygon>
  <polygon  style="fill: transparent" class="st0" points="2374.2,478.3 2719,478.3 2719,309.2 2402.5,365.2 " room="503"></polygon>
  <polygon  style="fill: transparent" class="st0" points="2282.7,850.6 2718.2,850.6 2719.2,568.4 2352.3,568.4 " room="498"></polygon>
  <polygon  style="fill: transparent" class="st0" points="2261.5,935.7 2508.2,935.6 2534,845 2284.1,845 " room="497"></polygon>
  <polygon  style="fill: transparent" class="st0" points="2236.2,1039 2479.6,1039 2508.2,935.6 2261.5,935.7 " room="-"></polygon>
  <polygon  style="fill: transparent" class="st0" points="2215.3,1128.3 2454.6,1128.4 2479.6,1039 2236.2,1039 " room="495"></polygon>
  <rect style="fill: transparent" x="2718.2" y="443.5" class="st0" width="299.9" height="407.1" room="558"></rect>
  <polygon  style="fill: transparent" class="st0" points="3018.1,850.6 3360.8,850.6 3360.8,749.9 3920.8,749.9 3920.8,564 3717.8,564 3717.8,482.1 3527.9,482.1 3527.9,39 3018.1,39 3018.1,175.8 2719,175.8 2719,443.5 3018.1,443.5 " room="85"></polygon>
  <polygon  style="fill: transparent" class="st0" points="1576.4,2078.7 2545.6,2078.7 2546.9,1901 2714.5,1245.3 2602.2,1245.3 2602.2,1444.9 2435,1444.9 2435,1238.4 1881.6,1238.4 1779.2,1311.4 " room="492"></polygon>
  <polygon  style="fill: transparent" class="st0" points="243.2,947.7 744,947.7 744,641.5 305.5,641.5 305.5,682.3 243.2,753.6 " room="499"></polygon>
  <polygon  style="fill: transparent" class="st0" points="748.5,641.5 748.5,947.7 1283,947.7 1331.7,779 1310.7,755.8 1236.3,755.8 1171,681.1 1171,642 " room="500"></polygon>
  <polygon  style="fill: transparent" class="st0" points="251.1,965 1292.9,965 1152.1,1437.6 1620.3,1908.3 1576.5,2078.7 6.7,2078.7 6.7,1463.8 251.1,1463.8 " room="411"></polygon>
  </svg>`;

  return (
    <View style={styles.sectionContainer}>
      <MapComponent
        SvgXmlString={svgString}
        activeBorderWidth={20}
        activeBorderColor="green"
        activeId={roomid}
        onPress={setroomId}
      />
      <Text style={styles.roomId}>{`Room ID: ${roomid}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: 'red',
    flex: 1,
  },
  roomId: {
    fontSize: 20,
    color: '#ffffff',
    position: 'absolute',
    top: 100,
    alignSelf: 'center',
  },
});

export default App;
