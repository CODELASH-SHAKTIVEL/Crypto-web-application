import React from 'react'
import { Link } from 'react-router-dom'
import { HStack ,Button } from '@chakra-ui/react'
const Header = () => {
  return (
    <div>
      <HStack p={'6'} wd={'6'} bgColor={'black'} h={'30px'}>
       <Button colorScheme='teal' variant='ghost'>
       <Link to={'/'}>Home </Link>
   </Button>
       <Button colorScheme='teal' variant='ghost'>
       <Link to={'/exchange'}> Exchange</Link>
   </Button>
       <Button colorScheme='teal' variant='ghost'>
       <Link to={'/coins'}>Coins</Link>
   </Button>
      </HStack>
    </div>
  )
}

export default Header
