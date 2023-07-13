import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/MailOutline';
import AnalyticsIcon from '@mui/icons-material/AutoGraph';
import FriendsIcon from '@mui/icons-material/People';
import PaymentIcon from '@mui/icons-material/Payment';
import UploadIcon from '@mui/icons-material/CloudUpload';


export const SidebarData = [
    {
        title: "home",
        icon: <HomeIcon />,
        link: "/home",
    },
    {
        title: "mail",
        icon: <MailIcon />,
        link: "/mail",
    },
    {
        title: "analytics",
        icon: <AnalyticsIcon />,
        link: "/analytics",
    },
    {
        title: "add friends",
        icon: <FriendsIcon />,
        link: "/friends",
    },
    {
        title: "payment setting",
        icon: <PaymentIcon />,
        link: "/payment",
    },
    {
        title: "upload",
        icon: <UploadIcon />,
        link: "/upload",
    },
];

