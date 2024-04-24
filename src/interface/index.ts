
export interface IProduct {
  image?: {
    data?: {
        attributes?: {
        url?: string;
      };
    };
  };
  title?: string;
  descreption?: string;
  price?: number;
  id:string
    // id: string;
    // title: string;
    // descreption: string;
    // price: number;
    // image?: {
    //   data?: {
    //     attributes?: {
    //       url?: string;
    //     };
    //   };
    // };
  }  
