import images from "./images";

const main = [
  {
    title: "Butter Chicken",
    price: "$16.99",
  },
  {
    title: "Palak Paneer",
    price: "$19.99",
  },
  {
    title: "Malai Kofta",
    price: "$14.99",
  },
  {
    title: "Chicken Korma",
    price: "$20.99",
  },
  {
    title: "Vegetable Biryani",
    price: "$19.99",
  },
];

const chef = [
  {
    title: "Chicken Biryani",
    price: "$30.99",
  },
  {
    title: "Tandoori Chicken",
    price: "$16.99",
  },
  {
    title: "Tandoori Platter",
    price: "$25.99",
  },
  {
    title: "Paneer Lababdar",
    price: "$17.99",
  },
  {
    title: "Paneer Tikka Masala",
    price: "$16.99",
  },
];

const awards = [
  {
    imgUrl: images.award01,
    title: "Best Customer Service",
    subtitle:
      "Appreciating our dedication to delivering outstanding customer service and satisfaction.",
  },
  {
    imgUrl: images.award02,
    title: "Best Indian Restaurant",
    subtitle:
      "Recognizing our culinary excellence and authentic Indian flavors.",
  },
  {
    imgUrl: images.award03,
    title: "Outstanding Chef",
    subtitle:
      "Celebrating our exceptional chef's culinary artistry and dedication to creating extraordinary flavors",
  },
  {
    imgUrl: images.award05,
    title: "Outstanding Hospitality Award",
    subtitle:
      "Honoring our exceptional hospitality and warm, welcoming atmosphere.",
  },
];

export default { main, chef, awards };
