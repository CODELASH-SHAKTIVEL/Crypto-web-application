import React from 'react'
import { Spinner ,VStack ,Box} from '@chakra-ui/react'
const Loader = () => {
  return (
    <>
  
    <VStack h='60vh'justifyContent={'center'} alignItems={'center'} >
        <Box transform={"scale(3)"} >
        <Spinner size="xl" color="#0076d9"/>
        </Box>
    </VStack>
    
    </>
  )
}

export default Loader
