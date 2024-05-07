import { Button, Drawer, DrawerBody, DrawerCloseButton, 
  DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, 
  Input } from "@chakra-ui/react"
import { useRef } from "react"
 import { useDispatch, useSelector } from "react-redux"
import { onCloseCartDrawerAction, selectGlobal } from "../app/feauture/GlobalSlice";

const CardPage =() =>{
 const { isOpenCartDrawer,
  onCloseCartDrawer} = useSelector(selectGlobal);

  // const {  onOpen } = useDisclosure()
  const btnRef = useRef();

  const dispatch = useDispatch( );
  const onClose = () => {
    dispatch(onCloseCartDrawerAction())
  }

  return (
    <>
      {/* <p ref={btnRef} onClick={onOpen}>
      Card 
       </p> */}
      <Drawer
        isOpen={isOpenCartDrawer}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default CardPage


