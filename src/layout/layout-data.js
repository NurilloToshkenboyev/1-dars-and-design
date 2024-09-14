import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { nanoid } from 'nanoid';

export const data = [
    {
        key: nanoid(),
        icon: LaptopOutlined,
        label: "catigory",
        children: [
            {
                key: nanoid(),
                label: "Home",
                path: "/"
            },
            {
                key: nanoid(),
                label: "product",
                path: "/product"
            },
        ]
    },
    {
        key: nanoid(),
        icon: NotificationOutlined,
        label: "product",
        children: [
            {
                key: nanoid(),
                label: "product",
                path: ""
            },
            {
                key: nanoid(),
                label: "product",
                path: ""
            },
            {
                key: nanoid(),
                label: "product",
                path: ""
            }
        ]
    }
]