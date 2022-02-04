import React, {useState} from 'react';
import ZoomableView from './ZoomableView';
import Svg, {
  Circle,
  Ellipse,
  G,
  Text as svgText,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
  SvgXml,
  SvgFromXml,
  SvgUri,
  SvgProps,
} from 'react-native-svg';
//@ts-ignore
import XMLParser from 'react-xml-parser';

enum SvgElTypes {
  image = 'image',
  polygon = 'polygon',
  rect = 'rect',
}

interface ISvgElemntAttributes {
  width: number | undefined;
  height: number | undefined;
  'xlink:href': string;
  x: number | undefined;
  y: number | undefined;
  room: number | undefined;
  points: string | undefined;
}

interface ISvgElemnt {
  name: string;
  attributes: ISvgElemntAttributes;
}

interface IComponentProps {
  SvgXmlString: string;
  activeId: number | undefined | string;
  activeBorderColor?: string;
  activeBorderWidth: number;
  onTop?: boolean;
  onPress?: (id: number | undefined) => void;
}

const MapComponent: React.FC<IComponentProps> = props => {
  const [svgHeight, setSvgHeight] = useState(0);
  const svgVDoms: JSX.Element[] = [];

  const {
    SvgXmlString,
    activeId,
    activeBorderColor,
    activeBorderWidth,
    onTop,
    onPress,
  } = props;

  var xml = new XMLParser().parseFromString(SvgXmlString);

  xml.children.map((element: ISvgElemnt, index: number) => {
    switch (element.name) {
      case SvgElTypes.image:
        {
          svgVDoms.push(
            <Image
              key={index}
              width={`${element.attributes.width}`}
              height={`${element.attributes.height}`}
              //@ts-ignore
              href={`${element.attributes['xlink:href']}`}
            />,
          );
        }
        break;
      case SvgElTypes.rect:
        {
          svgVDoms.push(
            <Rect
              key={index}
              stroke={
                element.attributes.room === activeId
                  ? activeBorderColor
                  : '#ffffff'
              }
              strokeWidth={
                element.attributes.room === activeId ? activeBorderWidth : 0
              }
              x={`${element.attributes.x}`}
              y={`${element.attributes.y}`}
              width={`${element.attributes.width}`}
              height={`${element.attributes.height}`}
              onPress={() => onPress!(element.attributes.room)}
            />,
          );
        }
        break;
      case SvgElTypes.polygon:
        {
          svgVDoms.push(
            <Polygon
              key={index}
              stroke={
                element.attributes.room === activeId
                  ? activeBorderColor
                  : '#ffffff'
              }
              strokeWidth={
                element.attributes.room === activeId ? activeBorderWidth : 0
              }
              points={`${element.attributes.points}`}
              onPress={() => onPress!(element.attributes.room)}
            />,
          );
        }
        break;
    }
  });

  const viewBox: string[] = xml.attributes.viewBox.split(' ');
  if(viewBox.length > 0)
    viewBox[1] = svgHeight.toString();

  return (
    <ZoomableView
      maxZoom={1.5}
      minZoom={1}
      zoomStep={0.5}
      initialZoom={1}
      bindToBorders={true}>
      <Svg
        onLayout={e => setSvgHeight(e.nativeEvent.layout.height)}
        x={xml.attributes.x}
        y={xml.attributes.y}
        viewBox={onTop ? viewBox.join(' ') : xml.attributes.viewBox}>
        {svgVDoms}
      </Svg>
    </ZoomableView>
  );
};

export default MapComponent;
