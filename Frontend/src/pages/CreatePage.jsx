import { Container, Heading, VStack} from "@chakra-ui/react"
import { useState } from "react"


const CreatePage = () => {
  const [newPrpduct , setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  })
  return (
    <Container maxW={"container.sm"}>
      <VStack
        spacing={8}>
          <Heading as={"h1"} size={"2xl"} textAlign ={"center"} mb= {8}>
            Create New Product
          </Heading>
      </VStack>

    </Container>
  )
}

export default CreatePage