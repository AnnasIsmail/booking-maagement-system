import { Divider, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import styled from "styled-components";
import logo from "../assets/Logo CiGi 2 1.png";

const BpIcon = styled("span")(() => ({
  borderRadius: "50%",
  width: 16,
  height: 16,
  boxShadow:
    "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: "#f5f8fa",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: "#ebf1f5",
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background: "rgba(206,217,224,.5)",
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#137cbd",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&:before": {
    display: "block",
    width: 16,
    height: 16,
    backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#106ba3",
  },
});

function BpRadio(props) {
  return (
    <Radio
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}

const Page = styled.div`
  width: 100%;
`;
const Section1 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const ImageLogo = styled.img`
  width: 150px;
  margin-top: 60px;
`;
Section1.Header = styled.h1`
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 2.5rem;
`;
const Section2 = styled.div`
  width: calc(100- 40px) %;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
Section2.Header = styled.h2`
  font-weight: 500;
`;
const ContainerSelectBookingFacility = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 0;
  max-height: 400px;
  flex-wrap: wrap;
  align-content: flex-start;
  overflow: auto;
  border-radius: 4px;
`;
const SelectBookingFacility = styled.div`
  width: 320px;
  min-height: 95px;
  background-color: #e2ecff;
  display: flex;
  flex-direction: column;
`;
SelectBookingFacility.Header = styled.div`
  font-weight: 500;
  display: flex;
  justify-content: space-between;
`;
SelectBookingFacility.Header.Title = styled.span`
  padding: 17px 14px;
`;
SelectBookingFacility.Description = styled.div`
  font-size: 13px;
  padding: 17px 14px;
`;

export default function BookingPage() {
  return (
    <Page>
      <Section1>
        <ImageLogo src={logo} alt="" />
        <Section1.Header>CiGi Futsal and Badminton</Section1.Header>
      </Section1>
      <Section2>
        <Section2.Header>Pilih Fasilitas Sewa</Section2.Header>
        <Divider />
        <RadioGroup>
          <ContainerSelectBookingFacility>
            <SelectBookingFacility>
              <SelectBookingFacility.Header>
                <SelectBookingFacility.Header.Title>
                  Lapangan Futsal
                </SelectBookingFacility.Header.Title>
                <FormControlLabel value="female" control={<BpRadio />} />
              </SelectBookingFacility.Header>
              <SelectBookingFacility.Description>
                Lapangan Futsal dengan diameter 4x4
              </SelectBookingFacility.Description>
            </SelectBookingFacility>
            <SelectBookingFacility>
              <SelectBookingFacility.Header>
                <SelectBookingFacility.Header.Title>
                  Lapangan Badminton
                </SelectBookingFacility.Header.Title>
                <FormControlLabel value="male" control={<BpRadio />} />
              </SelectBookingFacility.Header>
              <SelectBookingFacility.Description>
                Lapangan Futsal dengan diameter 4x4
              </SelectBookingFacility.Description>
            </SelectBookingFacility>
            <SelectBookingFacility>
              <SelectBookingFacility.Header>
                <SelectBookingFacility.Header.Title>
                  Lapangan Badminton
                </SelectBookingFacility.Header.Title>
                <FormControlLabel value="male" control={<BpRadio />} />
              </SelectBookingFacility.Header>
              <SelectBookingFacility.Description>
                Lapangan Futsal dengan diameter 4x4
              </SelectBookingFacility.Description>
            </SelectBookingFacility>
            <SelectBookingFacility>
              <SelectBookingFacility.Header>
                <SelectBookingFacility.Header.Title>
                  Lapangan Badminton
                </SelectBookingFacility.Header.Title>
                <FormControlLabel value="male" control={<BpRadio />} />
              </SelectBookingFacility.Header>
              <SelectBookingFacility.Description>
                Lapangan Futsal dengan diameter 4x4
              </SelectBookingFacility.Description>
            </SelectBookingFacility>
          </ContainerSelectBookingFacility>
        </RadioGroup>
      </Section2>
    </Page>
  );
}
