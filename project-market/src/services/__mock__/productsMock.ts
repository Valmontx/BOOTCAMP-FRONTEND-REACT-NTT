import { Product } from "@/domain/product"

export const productResponseMock: Product[] = [
  {
    id: 1,
    title: "Essence Mascara Lash Princess",
    description: "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    category: "beauty",
    price: 9.99,
    rating: 2,
    images: [
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
    ],
    availabilityStatus: "Low Stock",
    quantity: 0,

  },
  {
    id: 2,
    title: "Eyeshadow Palette with Mirror",
    description: "he Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
    category: "beauty",
    price: 19.99,
    rating: 3.28,
    images: [
      "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png",
    ],
    availabilityStatus: "Low Stock",
    quantity: 0,
  },
];

