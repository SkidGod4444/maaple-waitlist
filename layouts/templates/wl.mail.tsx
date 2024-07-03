import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";


const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const MappleWaitlistEmail = () => {
  return (
    <Html>
      <Head />
      <Preview>Mapple Welcomes You! 🎉</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: "#2250f4",
                offwhite: "#fafbfb",
              },
              spacing: {
                0: "0px",
                20: "20px",
                45: "45px",
              },
            },
          },
        }}
      >
        <Body className="bg-offwhite text-base font-sans">
          <Img
            src="https://firebasestorage.googleapis.com/v0/b/mapple-connect.appspot.com/o/MappleLogo.png?alt=media&token=0aa7c45d-19c5-4039-bf27-929fa62a7c64"
            width="140"
            height="140"
            alt="Mapple"
            className="mx-auto my-20"
          />

          <Heading className="text-center my-0 leading-8">
            Welcome to Mapple
          </Heading>

          <Section>
            <Row>
              <Text className="text-base">
                Congratulations! You&apos;re successfully signed up for Mapple
                Waitlist. We will keep updating you about the latest updates.
              </Text>
              <Text className="text-base">
                You&apos;re eligible to get <strong>Early Supporter Badge</strong> on your Mapple profile. You can
                claim your free badges by clicking the button below.
              </Text>
            </Row>
          </Section>

          <Section className="text-center">
            <Link href="https://mapple-waitlist.vercel.app/">
            <Button className="bg-brand text-white rounded-lg py-3 px-[18px]">
              Get Free Badges
            </Button>
            </Link>
          </Section>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default MappleWaitlistEmail;
