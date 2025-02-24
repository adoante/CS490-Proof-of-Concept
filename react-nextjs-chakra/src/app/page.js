import { Button, Code, AspectRatio, Collapsible, Flex, Box } from "@chakra-ui/react"

export default function Home() {
  return (
    <Flex>
      <Box bg="tomato">
        <Code>print("Hello Word")</Code>
      </Box>

      <Button>Click Me</Button>

      <Collapsible.Root unmountOnExit>
        <Collapsible.Trigger bg="green" margin="2" padding="2" borderRadius={5} shadow="md" _hover={{ bg: "tomato" }}>
          Click me
        </Collapsible.Trigger>

        <Collapsible.Content>
          <AspectRatio minWidth="300px" maxWidth="900px" ratio={16 / 9}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5699.200795196215!2d-117.16126052275708!3d33.12982487351816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbf554f836a293%3A0x55c9178b1fdc5be4!2sCalifornia%20State%20University%20San%20Marcos!5e1!3m2!1sen!2sus!4v1740214387701!5m2!1sen!2sus"></iframe>
          </AspectRatio>
        </Collapsible.Content>

      </Collapsible.Root>
    </Flex>
  );
}
