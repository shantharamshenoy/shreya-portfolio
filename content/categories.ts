export type PortfolioMedia = {
    type: "image" | "video";
    src: string;
    alt: string;
};

export type PortfolioItem = {
    title: string;
    description: string;
    media: PortfolioMedia[];
};

export type PortfolioCategory = {
    name: string;
    slug: string;
    description: string;
    items: PortfolioItem[];
};

export const categories: PortfolioCategory[] = [
    // Packaging
    {
        name: "Packaging Design",
        slug: "packaging",
        description:
            "Packaging designs crafted to stand out on shelves while communicating product value with clarity and character. Each concept balances visual appeal, brand identity, and real-world usability.",
        items: [
            {
                title: "Sprite - Label Redesign Concept",
                description: "Refreshing, reimagined.",
                media: [
                    {
                        type: "image",
                        src: "/images/packaging/sprite/sprite_1.png",
                        alt: "Sprite Packaging 1",
                    },
                    {
                        type: "image",
                        src: "/images/packaging/sprite/sprite_2.png",
                        alt: "Sprite Packaging 2 ",
                    },
                    {
                        type: "image",
                        src: "/images/packaging/sprite/sprite_3.png",
                        alt: "Sprite Packaging 3",
                    },
                    {
                        type: "image",
                        src: "/images/packaging/sprite/sprite_4.png",
                        alt: "Sprite Packaging 4",
                    },
                    {
                        type: "image",
                        src: "/images/packaging/sprite/sprite_5.png",
                        alt: "Sprite Packaging 5",
                    },
                    {
                        type: "image",
                        src: "/images/packaging/sprite/sprite_6.png",
                        alt: "Sprite Packaging 6",
                    },
                ],
            },
            {
                title: "Kyron Premimum Brandy - Limited Edition Packaging ",
                description: "Crafted to feel premium at first glance.",
                media: [
                    {
                        type: "image",
                        src: "/images/packaging/packaging_3.jpg",
                        alt: "Packaging 3",
                    },
                ],
            },
            {
                title: "Thums Up Durga Puja Packaging Design",
                description: "Bold taste. Bolder presence.",
                media: [
                    {
                        type: "image",
                        src: "/images/packaging/packaging_2.jpg",
                        alt: "Packaging 2",
                    },
                ],
            },
            {
                title: "Celebration Blue - Holi Packaging Series",
                description: "Designed to bring colors to the shelf.",
                media: [
                    {
                        type: "image",
                        src: "/images/packaging/packaging_6.png",
                        alt: "Packaging 6",
                    },
                ],
            },
            {
                title: "Storm - Product Packaging Design",
                description: "Built tough. Designed to stand out.",
                media: [
                    {
                        type: "image",
                        src: "/images/packaging/packaging_4.jpg",
                        alt: "Packaging 4",
                    },
                ],
            },
            {
                title: "Celebration Blue - Cricket Special Packaging",
                description: "Consistency across variety.",
                media: [
                    {
                        type: "image",
                        src: "/images/packaging/packaging_8.png",
                        alt: "Packaging 8",
                    },
                ],
            },
            {
                title: "Puree - Fruit Beverage Packaging",
                description: "Freshness you can see, flavour you can trust.",
                media: [
                    {
                        type: "image",
                        src: "/images/packaging/packaging_5.jpg",
                        alt: "Packaging 5",
                    },
                ],
            },
            {
                title: "Kyron Premium Brandy - Regular Packaging",
                description: "Premium, redefined through simplicity.",
                media: [
                    {
                        type: "image",
                        src: "/images/packaging/packaging_7.png",
                        alt: "Packaging 7",
                    },
                ],
            },
            {
                title: "Reliance Masala Packaging Design",
                description: "Flavours you can see before you taste.",
                media: [
                    {
                        type: "image",
                        src: "/images/packaging/packaging_1.jpg",
                        alt: "Packaging 1",
                    },
                ],
            },

        ],
    },
    // Logo Design
    {
        name: "Logo Design",
        slug: "logo-design",
        description:
            "Logo designs created to build distinct and memorable brand identities - focused on clarity, versatility, and strong visual recognition across applications.",
        items: [
            {
                title: "Biopoint - Corporate Identity",
                description: "Where science meets growth.",
                media: [
                    {
                        type: "image",
                        src: "/images/logo_design/logo_design_2.jpg",
                        alt: "Brand Application 2",
                    },
                ],
            },
            {
                title: "Gumball - Playful Brand Identity",
                description: "Fun, at first glance.",
                media: [
                    {
                        type: "image",
                        src: "/images/logo_design/logo_design_3.jpg",
                        alt: "Brand Application 3",
                    },
                ],
            },
            {
                title: "Asha, Hope Amananki - Cultural Identity Design",
                description: "Rooted in tradition, designed with purpose.",
                media: [
                    {
                        type: "image",
                        src: "/images/logo_design/logo_design_4.jpg",
                        alt: "Brand Application 4",
                    },
                ],
            },
            {
                title: "DTT - Travel Brand Identity",
                description: "Designed to move with the brand.",
                media: [
                    {
                        type: "image",
                        src: "/images/logo_design/logo_design_5.jpg",
                        alt: "Brand Application 5",
                    },
                ],
            },
            {
                title: "Cleverbit -  Tech Identity",
                description: "Smart design for smarter solutions.",
                media: [
                    {
                        type: "image",
                        src: "/images/logo_design/logo_design_6.jpg",
                        alt: "Brand Application 6",
                    },
                ],
            },
            {
                title: "Aarudhi - Organic Brand Identity",
                description: "Growing with purpose",
                media: [
                    {
                        type: "image",
                        src: "/images/logo_design/logo_design_7.jpg",
                        alt: "Brand Application 7",
                    },
                ],
            },
            {
                title: "Hruday Sparsh - Cultural Logotype",
                description: "Where emotion meets expression",
                media: [
                    {
                        type: "image",
                        src: "/images/logo_design/logo_design_8.jpg",
                        alt: "Brand Application 8",
                    },
                ],
            },
            {
                title: "Chooberry - Playful Brand Identity",
                description: "Fresh, fun, and full of flavour.",
                media: [
                    {
                        type: "image",
                        src: "/images/logo_design/logo_design_10.jpg",
                        alt: "Brand Application 10",
                    },
                ],
            },
            {
                title: "Daisy's Nursing - Educational Identity",
                description: "Care, guided by knowledge.",
                media: [
                    {
                        type: "image",
                        src: "/images/logo_design/logo_design_9.jpg",
                        alt: "Brand Application 9",
                    },
                ],
            },
            {
                title: "WeCare - CSR Initiative Identity",
                description: "Designing for impact beyond business.",
                media: [
                    {
                        type: "image",
                        src: "/images/logo_design/logo_design_11.jpg",
                        alt: "Brand Application 11",
                    },
                ],
            },
            {
                title: "Reeth Couture - Luxury Brand Identity",
                description: "Elegance, intricately defined.",
                media: [
                    {
                        type: "image",
                        src: "/images/logo_design/logo_design_12.jpg",
                        alt: "Brand Application 12",
                    },
                ],
            },
            {
                title: "Divine Slices - Brand Identity",
                description: "A taste of elegance in every curve.",
                media: [
                    {
                        type: "image",
                        src: "/images/logo_design/logo_design_1.jpg",
                        alt: "Brand Application 1",
                    },
                ],
            },
        ],
    },
    // Brand Applications
    {
        name: "Brand Applications",
        slug: "brand-applications",
        description:
            "Translating brand identity into real-world experiences - across print, packaging, and environmental touch points to create a cohesive and recognizable presence.",
        items: [
            {
                title: "barro - Menu & Print Collateral",
                description: "Designed for quick decisions.",
                media: [
                    {
                        type: "image",
                        src: "/images/brand_applications/brand_applications_1.jpg",
                        alt: "Brand Application 1",
                    },
                ],
            },
            {
                title: "Carry the Message - Awareness Bag Design",
                description: "Turning everyday objects into powerful messages.",
                media: [
                    {
                        type: "image",
                        src: "/images/brand_applications/brand_applications_2.jpg",
                        alt: "Brand Application 2",
                    },
                    {
                        type: "image",
                        src: "/images/brand_applications/brand_applications_3.jpg",
                        alt: "Brand Application 3",
                    },
                ],
            },
            {
                title: "Fress - Transit Branding",
                description: "Branding that moves with you.",
                media: [
                    {
                        type: "image",
                        src: "/images/brand_applications/brand_applications_4.jpg",
                        alt: "Brand Application 4",
                    },
                    {
                        type: "image",
                        src: "/images/brand_applications/brand_applications_5.jpg",
                        alt: "Brand Application 5",
                    },
                ],
            },
            {
                title: "Agrosia - Stationery System",
                description: "Simplicity that communicates clearly.",
                media: [
                    {
                        type: "image",
                        src: "/images/brand_applications/brand_applications_6.jpg",
                        alt: "Brand Application 6",
                    },
                ],
            },
            {
                title: "Booth Design",
                description: "Designed to attract, engage, and be remembered.",
                media: [
                    {
                        type: "image",
                        src: "/images/brand_applications/brand_applications_15.jpg",
                        alt: "Brand Application 7",
                    },
                    {
                        type: "image",
                        src: "/images/brand_applications/brand_applications_10.jpg",
                        alt: "Brand Application 7",
                    },
                    {
                        type: "image",
                        src: "/images/brand_applications/brand_applications_11.jpg",
                        alt: "Brand Application 7",
                    },
                    {
                        type: "image",
                        src: "/images/brand_applications/brand_applications_12.jpg",
                        alt: "Brand Application 7",
                    },
                    {
                        type: "image",
                        src: "/images/brand_applications/brand_applications_13.jpg",
                        alt: "Brand Application 7",
                    },
                    {
                        type: "image",
                        src: "/images/brand_applications/brand_applications_14.jpg",
                        alt: "Brand Application 7",
                    },
                ],
            },
            {
                title: "Kolors - Print Collateral Design",
                description: "Refined visuals with a focus on clarity.",
                media: [
                    {
                        type: "image",
                        src: "/images/brand_applications/brand_applications_7.jpg",
                        alt: "Brand Application 7",
                    },
                ],
            },
            {
                title: "Maaza - Festive Campaign Visual",
                description: "Designed for culture, crafted for connection.",
                media: [
                    {
                        type: "image",
                        src: "/images/brand_applications/brand_applications_8.jpg",
                        alt: "Brand Application 8",
                    },
                    {
                        type: "image",
                        src: "/images/brand_applications/brand_applications_9.jpg",
                        alt: "Brand Application 9",
                    },
                ],
            },
        ],
    },
    // Ad Campaigns
    {
        name: "Ad Campaigns",
        slug: "ad-campaigns",
        description:
            "Advertising campaigns built on ideas, designed to capture attention, communicate value, and create meaningful audience connections.",
        items: [
            {
                title: "Competing with Giants - Awareness Campaign",
                description: "Turning business pain points into powerful entry points.",
                media: [
                    {
                        type: "image",
                        src: "/images/ad_campaigns/1/1.png",
                        alt: "Ad campaign design 1",
                    },
                    {
                        type: "image",
                        src: "/images/ad_campaigns/1/2.png",
                        alt: "Ad campaign design 2",
                    },
                    {
                        type: "image",
                        src: "/images/ad_campaigns/1/3.png",
                        alt: "Ad campaign design 3",
                    },
                    {
                        type: "image",
                        src: "/images/ad_campaigns/1/4.png",
                        alt: "Ad campaign design 4",
                    }
                ],
            },
            {
                title: "B2C Commerce Expansion - Digital Campaign",
                description: "Simplifying digital growth through visual clarity.",
                media: [
                    {
                        type: "image",
                        src: "/images/ad_campaigns/2/1.png",
                        alt: "Ad campaign design 1",
                    },
                    {
                        type: "image",
                        src: "/images/ad_campaigns/2/2.png",
                        alt: "Ad campaign design 2",
                    },
                    {
                        type: "image",
                        src: "/images/ad_campaigns/2/3.png",
                        alt: "Ad campaign design 3",
                    },
                    {
                        type: "image",
                        src: "/images/ad_campaigns/2/4.png",
                        alt: "Ad campaign design 4",
                    }
                ],
            },
            {
                title: "Sleep & Temperature - Awareness Campaign",
                description: "Designing awareness through everyday experiences.",
                media: [
                    {
                        type: "image",
                        src: "/images/ad_campaigns/sleep/1.jpg",
                        alt: "Ad campaign design 1",
                    },
                    {
                        type: "image",
                        src: "/images/ad_campaigns/sleep/2.jpg",
                        alt: "Ad campaign design 2",
                    },
                    {
                        type: "image",
                        src: "/images/ad_campaigns/sleep/3.jpg",
                        alt: "Ad campaign design 3",
                    },
                    {
                        type: "image",
                        src: "/images/ad_campaigns/sleep/4.jpg",
                        alt: "Ad campaign design 4",
                    },
                    {
                        type: "image",
                        src: "/images/ad_campaigns/sleep/5.jpg",
                        alt: "Ad campaign design 5",
                    }
                ],
            },
            {
                title: "Simplifying Operations - Product Awareness Campaign",
                description: "Turning operational complexity into clarity.",
                media: [
                    {
                        type: "image",
                        src: "/images/ad_campaigns/thdp/1.jpg",
                        alt: "Ad campaign design 1",
                    },
                    {
                        type: "image",
                        src: "/images/ad_campaigns/thdp/2.jpg",
                        alt: "Ad campaign design 2",
                    },
                    {
                        type: "image",
                        src: "/images/ad_campaigns/thdp/3.jpg",
                        alt: "Ad campaign design 3",
                    },
                ],
            },
            {
                title: "Driving the Digital Economy - Webinar Campaign",
                description: "Data-driven design that converts attention into action.",
                media: [
                    {
                        type: "image",
                        src: "/images/ad_campaigns/this/1.png",
                        alt: "Ad campaign design 1",
                    },
                    {
                        type: "image",
                        src: "/images/ad_campaigns/this/2.png",
                        alt: "Ad campaign design 2",
                    },
                    {
                        type: "image",
                        src: "/images/ad_campaigns/this/3.png",
                        alt: "Ad campaign design 3",
                    },
                    {
                        type: "image",
                        src: "/images/ad_campaigns/this/4.png",
                        alt: "Ad campaign design 4",
                    }
                ],
            },
            {
                title: "Everyday Strength - Women's Day Campaign 1",
                description: "Celebrating the strength in the everyday.",
                media: [
                    {
                        type: "video",
                        src: "/videos/5nance_Campaign.mp4",
                        alt: "Ad campaign video 1"
                    }
                ],
            },
            {
                title: "Everyday Strength - Women's Day Campaign 2",
                description: "Celebrating the strength in the everyday.",
                media: [
                    {
                        type: "video",
                        src: "/videos/5nance_Campaign_2.mp4",
                        alt: "Ad campaign video 1"
                    }
                ],
            },

        ],
    },
    // Social Media
    {
        name: "Social Media",
        slug: "social-media",
        description:
            "Strategically designed social media creatives crafted to capture attention, communicate quickly, and drive engagement across platforms. Each piece combines strong visuals with clear messaging to maximize impact in fast-scrolling digital environments",
        items: [
            {
                title: "Fress.store - Delivery Announcement",
                description: "Convenience, delivered to your doorstep.",
                media: [
                    {
                        type: "image",
                        src: "/images/social_media/social_media_1.jpg",
                        alt: "Social media post 1",
                    },
                ],
            },
            {
                title: "Vendor Growth - Onboarding Campaign",
                description: "Grow faster, scale smarter.",
                media: [
                    {
                        type: "image",
                        src: "/images/social_media/social_media_2.jpg",
                        alt: "Social media post 2",
                    },
                ],
            },
            {
                title: "Future of Commerce - Brand Campaign",
                description: "Step into the future of digital commerce.",
                media: [
                    {
                        type: "image",
                        src: "/images/social_media/social_media_3.jpg",
                        alt: "Social media post 3",
                    },
                ],
            },
            {
                title: "Marketplace Launch - Webinar Campaign",
                description: "From launch to results, learn the journey.",
                media: [
                    {
                        type: "image",
                        src: "/images/social_media/social_media_4.jpg",
                        alt: "Social media post 4",
                    },
                ],
            },
            {
                title: "Scaling Enterprises - GCC Awareness Post",
                description: "Built for scale. Designed for impact.",
                media: [
                    {
                        type: "image",
                        src: "/images/social_media/social_media_5.jpg",
                        alt: "Social media post 5",
                    },
                ],
            },
            {
                title: "Hospitality Marketplace - Webinar Campaign",
                description: "Insights from experts, built for impact.",
                media: [
                    {
                        type: "image",
                        src: "/images/social_media/social_media_6.jpg",
                        alt: "Social media post 6",
                    },
                ],
            },
            {
                title: "Breaking Barriers - API Strategy Post",
                description: "Simplifying complexity, one solution at a time.",
                media: [
                    {
                        type: "image",
                        src: "/images/social_media/social_media_7.jpg",
                        alt: "Social media post 7",
                    },
                ],
            },
            {
                title: "SME Challenges - Awareness Campaign",
                description: "Understanding challenges, enabling solutions.",
                media: [
                    {
                        type: "image",
                        src: "/images/social_media/social_media_8.jpg",
                        alt: "Social media post 8",
                    },
                ],
            },
            {
                title: "Talent Exhibition - Event Promotion Post",
                description: "Where creativity takes the stage.",
                media: [
                    {
                        type: "image",
                        src: "/images/social_media/social_media_9.jpg",
                        alt: "Social media post 9",
                    },
                ],
            },
        ],
    },
    // UX Design
    // {
    //     name: "UX Design   ",
    //     slug: "ux-design",
    //     description:
    //         "Spatial and display concepts created to attract attention and strengthen brand presence.",
    //     items: [
    //         {
    //             title: "UX Design 1",
    //             description: "Placeholder description for this UX Design.",
    //             media: [
    //                 {
    //                     type: "image",
    //                     src: "/images/ux_design/ux_design_1.jpg",
    //                     alt: "UX Design 1",
    //                 },
    //             ],
    //         },
    //         {
    //             title: "UX Design 2",
    //             description: "Placeholder description for this UX Design.",
    //             media: [
    //                 {
    //                     type: "image",
    //                     src: "/images/ux_design/ux_design_2.jpg",
    //                     alt: "UX Design 2",
    //                 },
    //             ],
    //         },
    //         {
    //             title: "UX Design 3",
    //             description: "Placeholder description for this UX Design.",
    //             media: [
    //                 {
    //                     type: "image",
    //                     src: "/images/ux_design/ux_design_3.jpg",
    //                     alt: "UX Design 3",
    //                 },
    //             ],
    //         },

    //         {
    //             title: "UX Design 3",
    //             description: "Placeholder description for this UX Design.",
    //             media: [
    //                 {
    //                     type: "image",
    //                     src: "/images/ux_design/ux_design_3.jpg",
    //                     alt: "UX Design 3",
    //                 },
    //             ],
    //         },
    //     ],
    // },
    // Emailers
    {
        name: "Emailers",
        slug: "emailers",
        description:
            "Digitally crafted email campaigns designed to capture attention, communicate clearly, and drive engagement. Each piece blends compelling visuals with concise messaging to create memorable brand interactions in crowded inboxes.",
        items: [
            {
                title: "Maxx Life Insurance Festive Campaign",
                description: "Designed to be opened, read, and remembered.",
                media: [
                    {
                        type: "image",
                        src: "/images/emailers/emailers_2.jpg",
                        alt: "Emailer 2",
                    },
                ],
            },
            {
                title: "Maxx Life Insurance Festive Campaign",
                description: "Designed to be opened, read, and remembered.",
                media: [
                    {
                        type: "image",
                        src: "/images/emailers/emailers_1.jpg",
                        alt: "Emailer 1",
                    },
                ],
            },
            {
                title: "Kolors - Holi Emailer Campaign",
                description: "Celebrating the festival, staying true to the brand.",
                media: [
                    {
                        type: "image",
                        src: "/images/emailers/emailers_3.jpg",
                        alt: "Emailer 3",
                    },
                ],
            },
            {
                title: "Christmas - Festive Cheer Campaign",
                description: "Bringing festive joy to your inbox.",
                media: [
                    {
                        type: "image",
                        src: "/images/emailers/emailers_4.jpg",
                        alt: "Emailer 3",
                    },
                ],
            },
            {
                title: "International Yoga Day - Mindful Living Campaign",
                description: "Find your balance, embrace your calm.",
                media: [
                    {
                        type: "image",
                        src: "/images/emailers/emailers_5.jpg",
                        alt: "Emailer 4",
                    },
                ],
            },
            {
                title: "Gudi Padwa - Cultural Celebration Campaign",
                description: "Welcoming new beginnings with tradition and joy.",
                media: [
                    {
                        type: "image",
                        src: "/images/emailers/emailers_6.jpg",
                        alt: "Emailer 5",
                    },
                ],
            },
        ],
    },
    // Newspaper Ads
    {
        name: "Newspaper Ads",
        slug: "newspaper-ads",
        description:
            "Print advertisements designed for high-impact communication in fast-scanning environments. Each piece balances strong visuals, clear hierarchy, and concise messaging to capture attention and drive response.",
        items: [
            {
                title: "Dr. Tvacha - Service Promotion Ads",
                description: "Clarity that builds confidence.",
                media: [
                    {
                        type: "image",
                        src: "/images/newspaper_ads/newspaper_ads_2.jpg",
                        alt: "Newspaper Ad 2",
                    },
                ],
            },
            {
                title: "Rang De India - Festive Print Campaign",
                description: "Festive energy, captured in print.",
                media: [
                    {
                        type: "image",
                        src: "/images/newspaper_ads/newspaper_ads_1.jpg",
                        alt: "Newspaper Ad 1",
                    },
                ],
            },
            {
                title: "Dr. Tvacha - Awareness Print Campaign",
                description: "Designed to be noticed, built to be remembered.",
                media: [
                    {
                        type: "image",
                        src: "/images/newspaper_ads/newspaper_ads_3.jpg",
                        alt: "Newspaper Ad 3",
                    },
                ],
            },
        ],
    },
];