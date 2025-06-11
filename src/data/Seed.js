import yellowPail from '../assets/images/yellow-pail.jpg';
import greenCoffee from '../assets/images/green-coffee.jpg';
import signedBall from '../assets/images/signed-ball.jpg';
import stinkyDiaper from '../assets/images/stinky-diaper.jpg';
import lightShard from '../assets/images/light-shard.jpg';

import user1 from '../assets/userPics/user1.png';
import user2 from '../assets/userPics/user2.jpg';
import user3 from '../assets/userPics/user3.jpg';
import user4 from '../assets/userPics/user4.jpg';
import user5 from '../assets/userPics/user5.jpg';

const products = [
    {
        id: 1,
        title: 'Yellow Pail',
        description: 'On-demand sand castle construction expertise.',
        url: '#',
        votes: 17,
        submitterAvatarUrl: user1,
        productImageUrl: yellowPail,
    },
    {
        id: 2,
        title: 'Green Coffee',
        description: 'Super rare coffee',
        url: '#',
        votes: 12,
        submitterAvatarUrl: user2,
        productImageUrl: greenCoffee,
    },
    {
        id: 3,
        title: 'Signed Ball',
        description: 'Autographed by a genius',
        url: '#',
        votes: 7,
        submitterAvatarUrl: user3,
        productImageUrl: signedBall,
    },
    {
        id: 4,
        title: 'Light Shard',
        description: 'Made by witches of Narnia',
        url: '#',
        votes: 21,
        submitterAvatarUrl: user4,
        productImageUrl: lightShard,
    },
    {
        id: 5,
        title: 'Stinky Diaper',
        description: 'Pull a prank on someone',
        url: '#',
        votes: 9,
        submitterAvatarUrl: user5,
        productImageUrl: stinkyDiaper,
    }
]

export default products;