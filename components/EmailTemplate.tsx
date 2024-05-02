import {
  Html,
  Head,
  Container,
  Body,
  Hr,
  Section,
  Heading,
  Text,
  Tailwind,
} from "@react-email/components";

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

function EmailTemplate({
  firstName,
  lastName,
  email,
  message,
}: EmailTemplateProps) {
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Tailwind>
        <Body className="bg-gray-100">
          <Container className="py-10">
            <Section>
              <Heading>New email from {firstName + " " + lastName}</Heading>
              <Text>{message}</Text>
              <Hr />
              <Heading as="h2">Sender Details:</Heading>
              <Text>Sender Info: </Text>
              <Text>Name: {firstName + " " + lastName}</Text>
              <Text> Email: {email}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default EmailTemplate;
