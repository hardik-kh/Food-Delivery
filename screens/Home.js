import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
    ScrollView
} from "react-native";
import { icons, images, SIZES, COLORS, FONTS } from '../constants'






const Home = ({route,navigation}) => {

    const initialCurrentLocation = {
        streetName: (route.params.city).toString(),
        //streetName: "Delhi",
        gps: {
            latitude: parseFloat(route.params.latitude),
            longitude: parseFloat(route.params.longitude)
        }
    }

    const categoryData = [
        {
            id: 1,
            name: "Rice",
            icon: icons.rice_bowl,
        },
        {
            id: 2,
            name: "Noodles",
            icon: icons.noodle,
        },
        {
            id: 3,
            name: "Hot Dogs",
            icon: icons.hotdog,
        },
        {
            id: 4,
            name: "Salads",
            icon: icons.salad,
        },
        {
            id: 5,
            name: "Burgers",
            icon: icons.hamburger,
        },
        {
            id: 6,
            name: "Pizza",
            icon: icons.pizza,
        },
        {
            id: 7,
            name: "Snacks",
            icon: icons.fries,
        },
        {
            id: 8,
            name: "Desserts",
            icon: icons.donut,
        },
        {
            id: 9,
            name: "Drinks",
            icon: icons.drink,
        },

    ]

    // price rating
    const affordable = 1
    const fairPrice = 2
    const expensive = 3

    const restaurantData = [
        {
            id: 1,
            name: "Jashn E Dawat",
            rating: 4.8,
            categories: [1],
            priceRating: affordable,
            photo: images.indian_pulao,
            duration: "30 - 45 min",
            location: {
                latitude: parseFloat(route.params.latitude)+0.01,
                longitude: parseFloat(route.params.longitude)+0.01,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Amy"
            },
            menu: [
                {
                    menuId: 1,
                    name: "Veg Pulao",
                    photo: images.indian_pulao,
                    description: "Veg Pulao with carrot and peas",
                    calories: 200,
                    price: 5
                },
                {
                    menuId: 2,
                    name: "Biryani",
                    photo: images.biryani,
                    description: "Steamy Biryani with chicken piece",
                    calories: 250,
                    price: 10
                },
                {
                    menuId: 3,
                    name: "kashmiri Pulao",
                    photo: images.kashmiri_pulao,
                    description: "Tasty kashmiri Pulao with fried Cashew",
                    calories: 194,
                    price: 7
                }
            ]
        },
        {
            id: 2,
            name: "Shahi Biryani",
            rating: 4.8,
            categories: [1],
            priceRating: affordable,
            photo: images.biryani,
            duration: "30 - 45 min",
            location: {
                latitude: parseFloat(route.params.latitude)+0.01,
                longitude: parseFloat(route.params.longitude)+0.01,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Amy"
            },
            menu: [
                {
                    menuId: 1,
                    name: "Biryani",
                    photo: images.biryani,
                    description: "Steamy Biryani with chicken piece",
                    calories: 250,
                    price: 10
                },
                {
                    menuId: 2,
                    name: "Veg Pulao",
                    photo: images.indian_pulao,
                    description: "Veg Pulao with carrot and peas",
                    calories: 200,
                    price: 5
                },
                {
                    menuId: 3,
                    name: "kashmiri Pulao",
                    photo: images.kashmiri_pulao,
                    description: "Tasty kashmiri Pulao with fried Cashew",
                    calories: 194,
                    price: 7
                }
            ]
        },
        {
            id: 3,
            name: "Kashmiri Kitchen",
            rating: 4.8,
            categories: [1],
            priceRating: affordable,
            photo: images.kashmiri_pulao,
            duration: "30 - 45 min",
            location: {
                latitude: parseFloat(route.params.latitude)+0.015,
                longitude: parseFloat(route.params.longitude)+0.015,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Amy"
            },
            menu: [
                {
                    menuId: 1,
                    name: "kashmiri Pulao",
                    photo: images.kashmiri_pulao,
                    description: "Tasty kashmiri Pulao with fried Cashew",
                    calories: 194,
                    price: 7
                },
                {
                    menuId: 2,
                    name: "Veg Pulao",
                    photo: images.indian_pulao,
                    description: "Veg Pulao with carrot and peas",
                    calories: 200,
                    price: 5
                },
                {
                    menuId: 3,
                    name: "Biryani",
                    photo: images.biryani,
                    description: "Steamy Biryani with chicken piece",
                    calories: 250,
                    price: 10
                },

            ]
        },

        {
            id: 4,
            name: "Sizzling Pot",
            rating: 4.8,
            categories: [2],
            priceRating: affordable,
            photo: images.hakka_noodle,
            duration: "15 - 20 min",
            location: {
                latitude: parseFloat(route.params.latitude)+0.01,
                longitude: parseFloat(route.params.longitude)+0.01,
            },
            courier: {
                avatar: images.avatar_4,
                name: "Muthu"
            },
            menu: [
                {
                    menuId: 1,
                    name: "Hakka Noodles",
                    photo: images.hakka_noodle,
                    description: "Spicy Noodles with red and green Sauce!",
                    calories: 200,
                    price: 5
                },
                {
                    menuId: 2,
                    name: "Chinese Fried Noodles",
                    photo: images.chinese_fried_noodles,
                    description: "Tradition Chinese Noodles served with Chopstick",
                    calories: 300,
                    price: 8
                },
                {
                    menuId: 3,
                    name: "American Chop Suey",
                    photo: images.american_chop_suey,
                    description: "crispy fried noodle served with vegetable gravy",
                    calories: 300,
                    price: 8
                },

            ]
        },
        {
            id: 5,
            name: "Chinese Food Factory",
            rating: 4.8,
            categories: [2],
            priceRating: affordable,
            photo: images.chinese_fried_noodles,
            duration: "15 - 20 min",
            location: {
                latitude: parseFloat(route.params.latitude)+0.01,
                longitude: parseFloat(route.params.longitude)+0.01,
            },
            courier: {
                avatar: images.avatar_4,
                name: "Muthu"
            },
            menu: [
                {
                    menuId: 1,
                    name: "Chinese Fried Noodles",
                    photo: images.chinese_fried_noodles,
                    description: "Tradition Chinese Noodles served with Chopstick",
                    calories: 300,
                    price: 8
                },
                {
                    menuId: 2,
                    name: "Hakka Noodles",
                    photo: images.hakka_noodle,
                    description: "Spicy Noodles with red and green Sauce!",
                    calories: 200,
                    price: 5
                },

                {
                    menuId: 3,
                    name: "American Chop Suey",
                    photo: images.american_chop_suey,
                    description: "crispy fried noodle served with vegetable gravy",
                    calories: 300,
                    price: 8
                },

            ]
        },
        {
            id: 6,
            name: "York Noodle Company",
            rating: 4.8,
            categories: [2],
            priceRating: affordable,
            photo: images.american_chop_suey,
            duration: "15 - 20 min",
            location: {
                latitude: parseFloat(route.params.latitude)+0.015,
                longitude: parseFloat(route.params.longitude)+0.015,
            },
            courier: {
                avatar: images.avatar_4,
                name: "Muthu"
            },
            menu: [
                {
                    menuId: 1,
                    name: "American Chop Suey",
                    photo: images.american_chop_suey,
                    description: "crispy fried noodle served with vegetable gravy",
                    calories: 300,
                    price: 8
                },
                {
                    menuId: 2,
                    name: "Hakka Noodles",
                    photo: images.hakka_noodle,
                    description: "Spicy Noodles with red and green Sauce!",
                    calories: 200,
                    price: 5
                },
                {
                    menuId: 3,
                    name: "Chinese Fried Noodles",
                    photo: images.chinese_fried_noodles,
                    description: "Tradition Chinese Noodles served with Chopstick",
                    calories: 300,
                    price: 8
                },


            ]
        },

        {
            id: 7,
            name: "The Joint Cafe",
            rating: 4.8,
            categories: [3],
            priceRating: expensive,
            photo: images.chicken_hotdog,
            duration: "20 - 25 min",
            location: {
                latitude: parseFloat(route.params.latitude)-0.01,
                longitude: parseFloat(route.params.longitude)-0.01,
            },
            courier: {
                avatar: images.avatar_3,
                name: "James"
            },
            menu: [
                {
                    menuId: 1,
                    name: "Chicken Hotdog",
                    photo: images.chicken_hotdog,
                    description: "Fresh and Spicy Hot dogs",
                    calories: 100,
                    price: 5
                },
                {
                    menuId: 2,
                    name: "Paneer Hot Dog",
                    photo: images.paneer_hotdog,
                    description: "Paneer Stuffed hot dogs",
                    calories: 100,
                    price: 3
                },
                {
                    menuId: 3,
                    name: "Vegetable Hot dog",
                    photo: images.vegetable_hotdog,
                    description: "Healthy and Tasty Hot dogs",
                    calories: 80,
                    price: 2
                },
            ]
        },

        {
            id: 8,
            name: "Hot Dog Hut",
            rating: 4.8,
            categories: [3],
            priceRating: expensive,
            photo: images.vegetable_hotdog,
            duration: "20 - 25 min",
            location: {
                latitude: parseFloat(route.params.latitude)-0.01,
                longitude: parseFloat(route.params.longitude)-0.01,
            },
            courier: {
                avatar: images.avatar_3,
                name: "James"
            },
            menu: [
                {
                    menuId: 1,
                    name: "Vegetable Hot dog",
                    photo: images.vegetable_hotdog,
                    description: "Healthy and Tasty Hot dogs",
                    calories: 80,
                    price: 2
                },
                {
                    menuId: 2,
                    name: "Chicken Hotdog",
                    photo: images.chicken_hotdog,
                    description: "Fresh and Spicy Hot dogs",
                    calories: 100,
                    price: 5
                },
                {
                    menuId: 3,
                    name: "Paneer Hot Dog",
                    photo: images.paneer_hotdog,
                    description: "Paneer Stuffed hot dogs",
                    calories: 100,
                    price: 3
                },

            ]
        },

        {
            id: 9,
            name: "The Sausage Palace",
            rating: 4.8,
            categories: [3],
            priceRating: expensive,
            photo: images.paneer_hotdog,
            duration: "20 - 25 min",
            location: {
                latitude: parseFloat(route.params.latitude)-0.015,
                longitude: parseFloat(route.params.longitude)-0.015,
            },
            courier: {
                avatar: images.avatar_3,
                name: "James"
            },
            menu: [
                {
                    menuId: 1,
                    name: "Paneer Hot Dog",
                    photo: images.paneer_hotdog,
                    description: "Paneer Stuffed hot dogs",
                    calories: 100,
                    price: 3
                },
                {
                    menuId: 2,
                    name: "Chicken Hotdog",
                    photo: images.chicken_hotdog,
                    description: "Fresh and Spicy Hot dogs",
                    calories: 100,
                    price: 5
                },

                {
                    menuId: 3,
                    name: "Vegetable Hot dog",
                    photo: images.vegetable_hotdog,
                    description: "Healthy and Tasty Hot dogs",
                    calories: 80,
                    price: 2
                },
            ]
        },

        {
            id: 10,
            name: "Sweet Green",
            rating: 4.8,
            categories: [4],
            priceRating: expensive,
            photo: images.salad_platter,
            duration: "20 - 25 min",
            location: {
                latitude: parseFloat(route.params.latitude)-0.01,
                longitude: parseFloat(route.params.longitude)-0.01,
            },
            courier: {
                avatar: images.avatar_3,
                name: "James"
            },
            menu: [
                {
                    menuId: 1,
                    name: "Salad Platter",
                    photo: images.salad_platter,
                    description: "Greeny healthy Salad Plate",
                    calories: 50,
                    price: 3
                },
                {
                    menuId: 2,
                    name: "Pasta Salad",
                    photo: images.pasta_salad,
                    description: "Tasty and healthy Pasta",
                    calories: 80,
                    price: 5
                },

                {
                    menuId: 3,
                    name: "Fruit Salad",
                    photo: images.fruit_salad,
                    description: "Sweet and Freash chooped fruit salad",
                    calories: 80,
                    price: 5
                },
            ]
        },

        {
            id: 11,
            name: "Salad Point",
            rating: 4.8,
            categories: [4],
            priceRating: expensive,
            photo: images.pasta_salad,
            duration: "20 - 25 min",
            location: {
                latitude: parseFloat(route.params.latitude)-0.01,
                longitude: parseFloat(route.params.longitude)-0.01,
            },
            courier: {
                avatar: images.avatar_3,
                name: "James"
            },
            menu: [
                {
                    menuId: 1,
                    name: "Pasta Salad",
                    photo: images.pasta_salad,
                    description: "Tasty and healthy Pasta",
                    calories: 80,
                    price: 5
                },
                {
                    menuId: 2,
                    name: "Salad Platter",
                    photo: images.salad_platter,
                    description: "Greeny healthy Salad Plate",
                    calories: 50,
                    price: 3
                },

                {
                    menuId: 3,
                    name: "Fruit Salad",
                    photo: images.fruit_salad,
                    description: "Sweet and Freash chooped fruit salad",
                    calories: 80,
                    price: 5
                },
            ]
        },

        {
            id: 12,
            name: "Tossed Together",
            rating: 4.8,
            categories: [4],
            priceRating: expensive,
            photo: images.fruit_salad,
            duration: "20 - 25 min",
            location: {
                latitude: parseFloat(route.params.latitude)-0.015,
                longitude: parseFloat(route.params.longitude)-0.015,
            },
            courier: {
                avatar: images.avatar_3,
                name: "James"
            },
            menu: [
                {
                    menuId: 1,
                    name: "Fruit Salad",
                    photo: images.fruit_salad,
                    description: "Sweet and Freash chooped fruit salad",
                    calories: 80,
                    price: 5
                },
                {
                    menuId: 2,
                    name: "Salad Platter",
                    photo: images.salad_platter,
                    description: "Greeny healthy Salad Plate",
                    calories: 50,
                    price: 3
                },
                {
                    menuId: 3,
                    name: "Pasta Salad",
                    photo: images.pasta_salad,
                    description: "Tasty and healthy Pasta",
                    calories: 80,
                    price: 5
                },


            ]
        },

        {
            id: 13,
            name: "McDonald's",
            rating: 4.8,
            categories: [5],
            priceRating: affordable,
            photo: images.macdonald,
            duration: "30 - 45 min",
            location: {
                latitude: parseFloat(route.params.latitude)+0.01,
                longitude: parseFloat(route.params.longitude)-0.01,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Amy"
            },
            menu: [
                {
                    menuId: 1,
                    name: "Maharaja Mac",
                    photo: images.maharaja_mac,
                    description: "The Jumbo two layerd signature burger",
                    calories: 250,
                    price: 8
                },
                {
                    menuId: 2,
                    name: "Crispy Chicken Burger",
                    photo: images.crispy_chicken_burger,
                    description: "Burger with crispy chicken, cheese and lettuce",
                    calories: 200,
                    price: 6
                },

                {
                    menuId: 3,
                    name: "Paneer Burger",
                    photo: images.paneer_burger,
                    description: "Crispy paneer filled Burger",
                    calories: 194,
                    price: 5
                }
            ]
        },

        {
            id: 14,
            name: "KFC",
            rating: 4.8,
            categories: [5],
            priceRating: affordable,
            photo: images.kfc,
            duration: "30 - 45 min",
            location: {
                latitude: parseFloat(route.params.latitude)+0.01,
                longitude: parseFloat(route.params.longitude)-0.01,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Amy"
            },
            menu: [
                {
                    menuId: 1,
                    name: "Crispy Chicken Burger",
                    photo: images.crispy_chicken_burger,
                    description: "Burger with crispy chicken, cheese and lettuce",
                    calories: 200,
                    price: 6
                },

                {
                    menuId: 2,
                    name: "Maharaja Mac",
                    photo: images.maharaja_mac,
                    description: "The Jumbo two layerd signature burger",
                    calories: 250,
                    price: 8
                },

                {
                    menuId: 3,
                    name: "Paneer Burger",
                    photo: images.paneer_burger,
                    description: "Crispy paneer filled Burger",
                    calories: 194,
                    price: 5
                }
            ]
        },

        {
            id: 15,
            name: "Burger King",
            rating: 4.8,
            categories: [5],
            priceRating: affordable,
            photo: images.burger_king,
            duration: "30 - 45 min",
            location: {
                latitude: parseFloat(route.params.latitude)+0.015,
                longitude: parseFloat(route.params.longitude)-0.01,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Amy"
            },
            menu: [
                {
                    menuId: 1,
                    name: "Paneer Burger",
                    photo: images.paneer_burger,
                    description: "Crispy paneer filled Burger",
                    calories: 194,
                    price: 5
                },
                {
                    menuId: 2,
                    name: "Maharaja Mac",
                    photo: images.maharaja_mac,
                    description: "The Jumbo two layerd signature burger",
                    calories: 250,
                    price: 8
                },
                {
                    menuId: 3,
                    name: "Crispy Chicken Burger",
                    photo: images.crispy_chicken_burger,
                    description: "Burger with crispy chicken, cheese and lettuce",
                    calories: 200,
                    price: 6
                },

            ]
        },

        {
            id: 16,
            name: "Pizza Hut",
            rating: 4.8,
            categories: [6],
            priceRating: expensive,
            photo: images.pizza_hut,
            duration: "15 - 20 min",
            location: {
                latitude: parseFloat(route.params.latitude)-0.01,
                longitude: parseFloat(route.params.longitude)+0.01,
            },
            courier: {
                avatar: images.avatar_2,
                name: "Jackson"
            },
            menu: [
                {
                    menuId: 1,
                    name: "Paneer Tikka Pizza",
                    photo: images.paneer_pizza,
                    description: "Fresh Paneer cubes with spicy sacuce and thick crust",
                    calories: 250,
                    price: 7
                },
                {
                    menuId: 2,
                    name: "Country Feast Pizza",
                    photo: images.country_feast,
                    description: "Everything on Pizza makes this awesome",
                    calories: 250,
                    price: 8
                },
                {
                    menuId: 3,
                    name: "Chicken Pizza",
                    photo: images.chicken_pizza,
                    description: "Mouth watering Chicken pizza with stuffed crust",
                    calories: 300,
                    price: 10
                },
            ]
        },
        
        {
            id: 17,
            name: "Dominos",
            rating: 4.8,
            categories: [6],
            priceRating: expensive,
            photo: images.dominos,
            duration: "15 - 20 min",
            location: {
                latitude: parseFloat(route.params.latitude)-0.01,
                longitude: parseFloat(route.params.longitude)+0.01,
            },
            courier: {
                avatar: images.avatar_2,
                name: "Jackson"
            },
            menu: [
                {
                    menuId: 1,
                    name: "Paneer Tikka Pizza",
                    photo: images.paneer_pizza,
                    description: "Fresh Paneer cubes with spicy sacuce and thick crust",
                    calories: 250,
                    price: 7
                },
                {
                    menuId: 2,
                    name: "Country Feast Pizza",
                    photo: images.country_feast,
                    description: "Everything on Pizza makes this awesome",
                    calories: 250,
                    price: 8
                },
                {
                    menuId: 3,
                    name: "Chicken Pizza",
                    photo: images.chicken_pizza,
                    description: "Mouth watering Chicken pizza with stuffed crust",
                    calories: 300,
                    price: 10
                },
            ]
        },

        {
            id: 18,
            name: "Papa John's",
            rating: 4.8,
            categories: [6],
            priceRating: expensive,
            photo: images.papa_john,
            duration: "15 - 20 min",
            location: {
                latitude: parseFloat(route.params.latitude)-0.01,
                longitude: parseFloat(route.params.longitude)+0.015,
            },
            courier: {
                avatar: images.avatar_2,
                name: "Jackson"
            },
            menu: [
                {
                    menuId: 1,
                    name: "Paneer Tikka Pizza",
                    photo: images.paneer_pizza,
                    description: "Fresh Paneer cubes with spicy sacuce and thick crust",
                    calories: 250,
                    price: 7
                },
                {
                    menuId: 2,
                    name: "Country Feast Pizza",
                    photo: images.country_feast,
                    description: "Everything on Pizza makes this awesome",
                    calories: 250,
                    price: 8
                },
                {
                    menuId: 3,
                    name: "Chicken Pizza",
                    photo: images.chicken_pizza,
                    description: "Mouth watering Chicken pizza with stuffed crust",
                    calories: 300,
                    price: 10
                },
            ]
        },
        {
            id: 19,
            name: "Kaake da Hotel",
            rating: 4.8,
            categories: [7],
            priceRating: expensive,
            photo: images.chole_bhature,
            duration: "15 - 20 min",
            location: {
                latitude: parseFloat(route.params.latitude)+0.01,
                longitude: parseFloat(route.params.longitude)-0.01,
            },
            courier: {
                avatar: images.avatar_2,
                name: "Jackson"
            },
            menu: [
                {
                    menuId: 1,
                    name: "Chole Bhature",
                    photo: images.chole_bhature,
                    description: "Chole Bhature: Bhaiyya, Ek Plate Lagana!",
                    calories: 250,
                    price: 5
                },
                {
                    menuId: 2,
                    name: "Pav Bhaji",
                    photo: images.pav_bhaji,
                    description: "Baked bread with spicy mashed potato gravy",
                    calories: 250,
                    price: 4
                },
                {
                    menuId: 3,
                    name: "Raj Kachori",
                    photo: images.raj_kachori,
                    description: "India's Most Kingly Snack. Spicy, crunchy & savory ",
                    calories: 200,
                    price: 2
                },
            ]
        },

        {
            id: 20,
            name: "Chatpati Chaat",
            rating: 4.8,
            categories: [7],
            priceRating: expensive,
            photo: images.raj_kachori,
            duration: "15 - 20 min",
            location: {
                latitude: parseFloat(route.params.latitude)+0.01,
                longitude: parseFloat(route.params.longitude)-0.01,
            },
            courier: {
                avatar: images.avatar_2,
                name: "Jackson"
            },
            menu: [
                {
                    menuId: 1,
                    name: "Raj Kachori",
                    photo: images.raj_kachori,
                    description: "India's Most Kingly Snack. Spicy, crunchy & savory ",
                    calories: 200,
                    price: 2
                },
                {
                    menuId: 2,
                    name: "Chole Bhature",
                    photo: images.chole_bhature,
                    description: "Chole Bhature: Bhaiyya, Ek Plate Lagana!",
                    calories: 250,
                    price: 5
                },
                {
                    menuId: 3,
                    name: "Pav Bhaji",
                    photo: images.pav_bhaji,
                    description: "Baked bread with spicy mashed potato gravy",
                    calories: 250,
                    price: 4
                },

            ]
        },

        {
            id: 21,
            name: "Bombay Pav Bhaji",
            rating: 4.8,
            categories: [7],
            priceRating: expensive,
            photo: images.pav_bhaji,
            duration: "15 - 20 min",
            location: {
                latitude: parseFloat(route.params.latitude)+0.015,
                longitude: parseFloat(route.params.longitude)-0.015,
            },
            courier: {
                avatar: images.avatar_2,
                name: "Jackson"
            },
            menu: [
                {
                    menuId: 1,
                    name: "Pav Bhaji",
                    photo: images.pav_bhaji,
                    description: "Baked bread with spicy mashed potato gravy",
                    calories: 250,
                    price: 4
                },
                {
                    menuId: 2,
                    name: "Chole Bhature",
                    photo: images.chole_bhature,
                    description: "Chole Bhature: Bhaiyya, Ek Plate Lagana!",
                    calories: 250,
                    price: 5
                },

                {
                    menuId: 3,
                    name: "Raj Kachori",
                    photo: images.raj_kachori,
                    description: "India's Most Kingly Snack. Spicy, crunchy & savory ",
                    calories: 200,
                    price: 2
                },
            ]
        },
               
        
        {

            id: 22,
            name: "50 shades of Chocolate",
            rating: 4.9,
            categories: [8],
            priceRating: affordable,
            photo: images.brownie,
            duration: "35 - 40 min",
            location: {
                latitude: parseFloat(route.params.latitude)+0.01,
                longitude: parseFloat(route.params.longitude)-0.01,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Jessie"
            },
            menu: [
                {
                    menuId: 1,
                    name: "Hot Brownie",
                    photo: images.brownie,
                    description: "Hot brownie with vanilla icecream and melted chocolate",
                    calories: 300,
                    price: 6
                },
                {
                    menuId: 2,
                    name: "Blueberry Cheese Cake",
                    photo: images.cake,
                    description: "Cheese cake with a thick syrup of blueberry",
                    calories: 300,
                    price: 8
                },
                {
                    menuId: 3,
                    name: "Gulab Jamun",
                    photo: images.gulab_jamun,
                    description: "Spongy milk-solid-based sweet",
                    calories: 300,
                    price: 5
                }
            ]

        },

        {

            id: 23,
            name: "Temptations To Go",
            rating: 4.9,
            categories: [8],
            priceRating: affordable,
            photo: images.cake,
            duration: "35 - 40 min",
            location: {
                latitude: parseFloat(route.params.latitude)-0.01,
                longitude: parseFloat(route.params.longitude)+0.01,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Jessie"
            },
            menu: [
                {
                    menuId: 1,
                    name: "Blueberry Cheese Cake",
                    photo: images.cake,
                    description: "Cheese cake with a thick syrup of blueberry",
                    calories: 300,
                    price: 8
                },
                {
                    menuId: 2,
                    name: "Hot Brownie",
                    photo: images.brownie,
                    description: "Hot brownie with vanilla icecream and melted chocolate",
                    calories: 300,
                    price: 6
                },

                {
                    menuId: 3,
                    name: "Gulab Jamun",
                    photo: images.gulab_jamun,
                    description: "Spongy milk-solid-based sweet",
                    calories: 300,
                    price: 5
                }
            ]

        },

        {

            id: 24,
            name: "The Dessert Club",
            rating: 4.9,
            categories: [8],
            priceRating: affordable,
            photo: images.gulab_jamun,
            duration: "35 - 40 min",
            location: {
                latitude: parseFloat(route.params.latitude)-0.01,
                longitude: parseFloat(route.params.longitude)+0.015,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Jessie"
            },
            menu: [
                {
                    menuId: 1,
                    name: "Gulab Jamun",
                    photo: images.gulab_jamun,
                    description: "Spongy milk-solid-based sweet",
                    calories: 300,
                    price: 5
                },
                {
                    menuId: 2,
                    name: "Hot Brownie",
                    photo: images.brownie,
                    description: "Hot brownie with vanilla icecream and melted chocolate",
                    calories: 300,
                    price: 6
                },
                {
                    menuId: 3,
                    name: "Blueberry Cheese Cake",
                    photo: images.cake,
                    description: "Cheese cake with a thick syrup of blueberry",
                    calories: 300,
                    price: 8
                },
                
            ]

        },

        {

            id: 25,
            name: "Bartender's End Zone",
            rating: 4.9,
            categories: [9],
            priceRating: affordable,
            photo: images.blue_mocktail,
            duration: "35 - 40 min",
            location: {
                latitude: parseFloat(route.params.latitude)-0.015,
                longitude: parseFloat(route.params.longitude)+0.015,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Jessie"
            },
            menu: [
                {
                    menuId: 1,
                    name: "Blue Lagoon Mocktail",
                    photo: images.blue_mocktail,
                    description: "Blue Curacao Syrup with lots of ice with lemon wedges",
                    calories: 300,
                    price: 5
                },
                {
                    menuId: 2,
                    name: "Green Apple Martini Mocktail",
                    photo: images.green_apple_martini_mocktail,
                    description: "A fruit Martini with looks to die for",
                    calories: 300,
                    price: 6
                },
                {
                    menuId: 3,
                    name: "Kombucha Mocktail",
                    photo: images.kombucha_mocktail,
                    description: "Thin slice of ginger, Cranberries, and a sprig of fresh Rosemary",
                    calories: 300,
                    price: 8
                },
                
            ]

        },

        {

            id: 26,
            name: "Party On, Barkeep!",
            rating: 4.9,
            categories: [9],
            priceRating: affordable,
            photo: images.green_apple_martini_mocktail,
            duration: "35 - 40 min",
            location: {
                latitude: parseFloat(route.params.latitude)-0.01,
                longitude: parseFloat(route.params.longitude)+0.015,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Jessie"
            },
            menu: [
                {
                    menuId: 1,
                    name: "Green Apple Martini Mocktail",
                    photo: images.green_apple_martini_mocktail,
                    description: "A fruit Martini with looks to die for",
                    calories: 300,
                    price: 6
                },
                {
                    menuId: 2,
                    name: "Blue Lagoon Mocktail",
                    photo: images.blue_mocktail,
                    description: "Blue Curacao Syrup with lots of ice with lemon wedges",
                    calories: 300,
                    price: 5
                },

                {
                    menuId: 3,
                    name: "Kombucha Mocktail",
                    photo: images.kombucha_mocktail,
                    description: "Thin slice of ginger, Cranberries, and a sprig of fresh Rosemary",
                    calories: 300,
                    price: 8
                },
                
            ]

        },
        {

            id: 27,
            name: "Yield Bar & Grill",
            rating: 4.9,
            categories: [9],
            priceRating: affordable,
            photo: images.kombucha_mocktail,
            duration: "35 - 40 min",
            location: {
                latitude: parseFloat(route.params.latitude)-0.01,
                longitude: parseFloat(route.params.longitude)+0.01,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Jessie"
            },
            menu: [
                {
                    menuId: 1,
                    name: "Kombucha Mocktail",
                    photo: images.kombucha_mocktail,
                    description: "Thin slice of ginger, Cranberries, and a sprig of fresh Rosemary",
                    calories: 300,
                    price: 8
                },
                {
                    menuId: 2,
                    name: "Blue Lagoon Mocktail",
                    photo: images.blue_mocktail,
                    description: "Blue Curacao Syrup with lots of ice with lemon wedges",
                    calories: 300,
                    price: 5
                },
                {
                    menuId: 3,
                    name: "Green Apple Martini Mocktail",
                    photo: images.green_apple_martini_mocktail,
                    description: "A fruit Martini with looks to die for",
                    calories: 300,
                    price: 6
                },

                
            ]

        },


    ]

    const [categories, setCategories] = React.useState(categoryData)
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [restaurants, setRestaurants] = React.useState(restaurantData)
    const [currentLocation, setCurrentLocation] = React.useState(initialCurrentLocation)


    function onSelectCategory(category) {
        //filter restaurant
        let restaurantList = restaurantData.filter(a => a.categories.includes(category.id))

        setRestaurants(restaurantList)

        setSelectedCategory(category)
    }

    function getCategoryNameById(id) {
        let category = categories.filter(a => a.id == id)

        if (category.length > 0)
            return category[0].name

        return ""
    }

    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', height: 50 }}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={icons.nearby}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                                onPress={() => navigation.navigate("Area")}>
                    <View
                        style={{
                            width: '70%',
                            height: "100%",
                            backgroundColor:'gainsboro',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: SIZES.radius
                        }}
                    >
                        <Text style={{ fontSize:20 , fontWeight:'bold',fontFamily:'sans-serif-condensed' }}>{currentLocation.streetName}</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={icons.basket}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function renderMainCategories() {
        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{
                        padding: SIZES.padding,
                        paddingBottom: SIZES.padding * 2,
                        backgroundColor: (selectedCategory?.id == item.id) ? COLORS.primary : COLORS.white,
                        borderRadius: SIZES.radius,
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: SIZES.padding,
                        ...styles.shadow
                    }}
                    onPress={() => onSelectCategory(item)}
                >
                    <View
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.lightGray
                        }}
                    >
                        <Image
                            source={item.icon}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                    </View>

                    <Text
                        style={{
                            marginTop: SIZES.padding,
                            color: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.black,
                            fontFamily:'monospace',fontWeight:'bold'
                        }}
                    >
                        {item.name}
                    </Text>
                </TouchableOpacity>
            )
        }

        return (
            <View style={{ padding: SIZES.padding * 2 }}>
                <Text style={{ fontFamily:'monospace', fontSize:28,fontWeight:'bold' }}>Main</Text>
                <Text style={{ fontFamily:'monospace', fontSize:28,fontWeight:'bold' }}>Categories</Text>

                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
                />
            </View>
        )
    }


    function renderRestaurantList() {
        const renderItem = ({ item }) => (
                <TouchableOpacity
                style={{ marginBottom: SIZES.padding * 2}}
                onPress={() => navigation.navigate("Restaurant", {
                    item,
                    currentLocation,

                })}
            >
                {/* Image */}
                <View
                    style={{
                        marginBottom: SIZES.padding
                    }}
                >
                    <Image
                        source={item.photo}
                        resizeMode="cover"
                        style={{
                            width: "100%",
                            height: 200,
                            borderRadius: SIZES.radius
                        }}
                    />

                    <View
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            height: 50,
                            width: SIZES.width * 0.3,
                            backgroundColor: COLORS.white,
                            borderTopRightRadius: SIZES.radius,
                            borderBottomLeftRadius: SIZES.radius,
                            alignItems: 'center',
                            justifyContent: 'center',
                            ...styles.shadow
                        }}
                    >
                        <Text style={{ fontFamily:'normal',fontWeight:'bold' }}>{item.duration}</Text>
                    </View>
                </View>

                {/* Restaurant Info */}
                <Text style={{ fontFamily:'normal',fontSize:20,fontWeight:'bold',fontStyle:'italic' }}>{item.name}</Text>

                <View
                    style={{
                        marginTop: SIZES.padding,
                        flexDirection: 'row'
                    }}
                >
                    {/* Rating */}
                    <Image
                        source={icons.star}
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: COLORS.primary,
                            marginRight: 10
                        }}
                    />
                    <Text style={{ fontFamily:'normal' }}>{item.rating}</Text>

                    {/* Categories */}
                    <View
                        style={{
                            flexDirection: 'row',
                            marginLeft: 10
                        }}
                    >
                        {
                            item.categories.map((categoryId) => {
                                return (
                                    <View
                                        style={{ flexDirection: 'row' }}
                                        key={categoryId}
                                    >
                                        <Text style={{ fontFamily:'normal' }}>{getCategoryNameById(categoryId)}</Text>
                                        <Text style={{ fontFamily:'normal', color: COLORS.darkgray }}> . </Text>
                                    </View>
                                )
                            })
                        }

                        {/* Price */}

                    </View>
                </View>
            </TouchableOpacity>

            

        )

        return (
            <FlatList
                data={restaurants}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding * 2,
                    paddingBottom: 30
                }}
            />
        )
    }


    return(
        <SafeAreaView style={{marginBottom:'88%'}}>
            {renderHeader()}
            {renderMainCategories()}
            {renderRestaurantList()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
})

export default Home;