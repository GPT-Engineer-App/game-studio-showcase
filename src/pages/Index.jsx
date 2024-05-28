import { Container, Box, VStack, Heading, Text, SimpleGrid, Image, IconButton } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const games = [
  {
    title: "Epic Adventure",
    description: "An epic adventure game that takes you through mystical lands and dangerous quests.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlcGljJTIwYWR2ZW50dXJlJTIwZ2FtZXxlbnwwfHx8fDE3MTY4ODgyNzF8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    title: "Space Odyssey",
    description: "Explore the vast universe and uncover the secrets of the cosmos in this space exploration game.",
    image: "https://images.unsplash.com/photo-1484589065579-248aad0d8b13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMG9keXNzZXklMjBnYW1lfGVufDB8fHx8MTcxNjg4ODI3MXww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    title: "Mystery Manor",
    description: "Solve the mysteries of the haunted manor and uncover its dark secrets.",
    image: "https://images.unsplash.com/photo-1594652634010-275456c808d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxteXN0ZXJ5JTIwbWFub3IlMjBnYW1lfGVufDB8fHx8MTcxNjg4ODI3Mnww&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} align="center">
        <Heading as="h1" size="2xl">
          Welcome to Our Game Studio
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Discover our latest games and embark on unforgettable adventures.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} width="100%">
          {games.map((game, index) => (
            <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
              <Image src={game.image} alt={game.title} />
              <Box p={6}>
                <Heading as="h3" size="lg" mb={2}>
                  {game.title}
                </Heading>
                <Text>{game.description}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
        <VStack spacing={4} align="center">
          <Heading as="h2" size="lg">
            Follow Us
          </Heading>
          <Box>
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" mx={2} />
            <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" mx={2} />
            <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" mx={2} />
          </Box>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
