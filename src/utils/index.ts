
// import { createStandaloneToast } from "@chakra-ui/react"

// const {toast}= createStandaloneToast();

// export const AddItemToShoppingCart = (cartitem={},
//     ShopingCartItem:[]) =>{

//     const existeItem = ShopingCartItem.find(
//         item => item.id === cartitem.id)

//         if(existeItem){
//             toast({
//                 title: 'Added new item.',
//                 description: "We've created your account for you.",
//                 status: 'success',
//                 duration: 2000,
//                 isClosable: true,
//               });

//               return ShopingCartItem.map(item => item.id === cartitem.id ? 
//                 { ...item,quantity: item.quantity +1} : item) 
//         }

//         toast({
//             title: 'Added new item.',
//             status: 'success',
//             duration: 2000,
//             isClosable: true,
//           });

//         return  [...ShopingCartItem,{...cartitem,quantity:1} ]
// }

import { createStandaloneToast } from "@chakra-ui/react"
const {toast}= createStandaloneToast();
export const AddItemToShoppingCart = (cartitem = {}, ShopingCartItem = []) => {
  const existeItem = ShopingCartItem.find(item => item.id === cartitem.id);

  if (existeItem) {
      toast({
          title: 'Added new item.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 2000,
          isClosable: true,
      });

      return ShopingCartItem.map(item =>
          item.id === cartitem.id ? {
              ...item,
              quantity: (item.quantity || 0) + 1 // Vérifie si quantity est défini, sinon utilise 0
          } : item
      );
  }

  toast({
      title: 'Added .',
      status: 'success',
      duration: 2000,
      isClosable: true,
  });

  return [...ShopingCartItem, { ...cartitem, quantity: 1 }];
};

