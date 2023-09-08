import styled from "styled-components";

const MapContainer = styled.div`
  position: relative;
  text-align: right;
  width: 100%;
  height: 400px;
`;

const MapCanvas = styled.div`
  overflow: hidden;
  background: none !important;
  width: 100%;
  height: 400px;
`;

const MapIframe = styled.iframe`
  height: 400px !important;
`;

export default function MapEmbed() {
  // Link Generate Map
  // https://www.embedmymap.com/?gclid=CjwKCAjw6eWnBhAKEiwADpnw9lAI7slmPOCmmDn5vrG1rkjjlhwoIPOAFUYebx1FsQSSZYX6h-eN1RoCiUcQAvD_BwE

  return (
    <MapContainer>
      <MapCanvas>
        <MapIframe
          width="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=GOR Badminton Bansun&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></MapIframe>
      </MapCanvas>
    </MapContainer>
  );
}
