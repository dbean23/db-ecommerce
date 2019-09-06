import {
    SET_USER_PURCHASES
} from './types';

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 8.99,
                orderNumber: 'A002342214',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }

            },
            {
                _id: 1,
                total: 611.02,
                orderNumber: 'B002342214',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'David Bean',
                    shippingAddress: '1234 West Morley Street'
                }
            },
            {
                _id: 2,
                total: 8.02,
                orderNumber: 'M002342214',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Max Nelson',
                    shippingAddress: '1237 East State Street'
                }
            },
            {
                _id: 3,
                total: 17.02,
                orderNumber: 'J002342214',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Claswer',
                    shippingAddress: '1264 West State Street'
                }
            },
            {
                _id: 4,
                total: 2.02,
                orderNumber: 'R002342214',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Roger Rickson',
                    shippingAddress: '679 West Easley Street'
                }
            },
            {
                _id: 5,
                total: 62.23,
                orderNumber: 'K002342214',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Kindra Bean',
                    shippingAddress: '555 West Randolph Road'
                }
            },
            {
                _id: 6,
                total: 5.02,
                orderNumber: 'JJ02342214',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Jackson James',
                    shippingAddress: '34 West State Lane'
                }
            },
            {
                _id: 7,
                total: 10.54,
                orderNumber: 'Y002342214',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Yozi Becker',
                    shippingAddress: '543 Valley State Drive'
                }
            }
        ]
    })
}