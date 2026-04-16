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
                        src: "/images/packaging/sprite/sprite_1.jpg",
                        alt: "Sprite Packaging 1",
                    },
                    {
                        type: "image",
                        src: "/images/packaging/sprite/sprite_2.jpg",
                        alt: "Sprite Packaging 2 ",
                    },
                    {
                        type: "image",
                        src: "/images/packaging/sprite/sprite_3.jpg",
                        alt: "Sprite Packaging 3",
                    },
                    {
                        type: "image",
                        src: "/images/packaging/sprite/sprite_4.jpg",
                        alt: "Sprite Packaging 4",
                    },
                    {
                        type: "image",
                        src: "/images/packaging/sprite/sprite_5.jpg",
                        alt: "Sprite Packaging 5",
                    },
                    {
                        type: "image",
                        src: "/images/packaging/sprite/sprite_6.jpg",
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
            "Spatial and display concepts created to attract attention and strengthen brand presence.",
        items: [
            {
                title: "Logo Design 1",
                description: "Placeholder description for this logo design.",
                media: [
                    {
                        type: "image",
                        src: "/images/logo_design/logo_design_1.jpg",
                        alt: "Brand Application 1",
                    },
                ],
            },
            {
                title: "Logo Design 2",
                description: "Placeholder description for this logo design.",
                media: [
                    {
                        type: "image",
                        src: "/images/logo_design/logo_design_2.jpg",
                        alt: "Brand Application 2",
                    },
                ],
            },
            {
                title: "Logo Design 3",
                description: "Placeholder description for this logo design.",
                media: [
                    {
                        type: "image",
                        src: "/images/logo_design/logo_design_3.jpg",
                        alt: "Brand Application 3",
                    },
                ],
            },
            {
                title: "Logo Design 4",
                description: "Placeholder description for this logo design.",
                media: [
                    {
                        type: "image",
                        src: "/images/logo_design/logo_design_4.jpg",
                        alt: "Brand Application 4",
                    },
                ],
            },
            {
                title: "Logo Design 5",
                description: "Placeholder description for this logo design.",
                media: [
                    {
                        type: "image",
                        src: "/images/logo_design/logo_design_5.jpg",
                        alt: "Brand Application 5",
                    },
                ],
            },
            {
                title: "Logo Design 6",
                description: "Placeholder description for this logo design.",
                media: [
                    {
                        type: "image",
                        src: "/images/logo_design/logo_design_6.jpg",
                        alt: "Brand Application 6",
                    },
                ],
            },
            {
                title: "Logo Design 7",
                description: "Placeholder description for this logo design.",
                media: [
                    {
                        type: "image",
                        src: "/images/logo_design/logo_design_7.jpg",
                        alt: "Brand Application 7",
                    },
                ],
            },
            {
                title: "Logo Design 8",
                description: "Placeholder description for this logo design.",
                media: [
                    {
                        type: "image",
                        src: "/images/logo_design/logo_design_8.jpg",
                        alt: "Brand Application 8",
                    },
                ],
            },
            {
                title: "Logo Design 9",
                description: "Placeholder description for this logo design.",
                media: [
                    {
                        type: "image",
                        src: "/images/logo_design/logo_design_9.jpg",
                        alt: "Brand Application 9",
                    },
                ],
            },
            {
                title: "Logo Design 10",
                description: "Placeholder description for this logo design.",
                media: [
                    {
                        type: "image",
                        src: "/images/logo_design/logo_design_10.jpg",
                        alt: "Brand Application 10",
                    },
                ],
            },
            {
                title: "Logo Design 11",
                description: "Placeholder description for this logo design.",
                media: [
                    {
                        type: "image",
                        src: "/images/logo_design/logo_design_11.jpg",
                        alt: "Brand Application 11",
                    },
                ],
            },
            {
                title: "Logo Design 12",
                description: "Placeholder description for this logo design.",
                media: [
                    {
                        type: "image",
                        src: "/images/logo_design/logo_design_12.jpg",
                        alt: "Brand Application 12",
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
            "Spatial and display concepts created to attract attention and strengthen brand presence.",
        items: [
            {
                title: "Brand Application 1",
                description: "Placeholder description for this brand application.",
                media: [
                    {
                        type: "image",
                        src: "/images/brand_applications/brand_applications_1.jpg",
                        alt: "Brand Application 1",
                    },
                ],
            },
            {
                title: "Brand Application 2",
                description: "Placeholder description for this brand application.",
                media: [
                    {
                        type: "image",
                        src: "/images/brand_applications/brand_applications_2.jpg",
                        alt: "Brand Application 2",
                    },
                ],
            },
            {
                title: "Brand Application 3",
                description: "Placeholder description for this brand application.",
                media: [
                    {
                        type: "image",
                        src: "/images/brand_applications/brand_applications_3.jpg",
                        alt: "Brand Application 3",
                    },
                ],
            },
            {
                title: "Brand Application 4",
                description: "Placeholder description for this brand application.",
                media: [
                    {
                        type: "image",
                        src: "/images/brand_applications/brand_applications_4.jpg",
                        alt: "Brand Application 4",
                    },
                ],
            },
            {
                title: "Brand Application 5",
                description: "Placeholder description for this brand application.",
                media: [
                    {
                        type: "image",
                        src: "/images/brand_applications/brand_applications_5.jpg",
                        alt: "Brand Application 5",
                    },
                ],
            },
            {
                title: "Brand Application 6",
                description: "Placeholder description for this brand application.",
                media: [
                    {
                        type: "image",
                        src: "/images/brand_applications/brand_applications_6.jpg",
                        alt: "Brand Application 6",
                    },
                ],
            },
            {
                title: "Brand Application 7",
                description: "Placeholder description for this brand application.",
                media: [
                    {
                        type: "image",
                        src: "/images/brand_applications/brand_applications_7.jpg",
                        alt: "Brand Application 7",
                    },
                ],
            },
            {
                title: "Brand Application 8",
                description: "Placeholder description for this brand application.",
                media: [
                    {
                        type: "image",
                        src: "/images/brand_applications/brand_applications_8.jpg",
                        alt: "Brand Application 8",
                    },
                ],
            },
            {
                title: "Brand Application 9",
                description: "Placeholder description for this brand application.",
                media: [
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
            "Campaign-led visual concepts created for promotional communication across print and digital formats.",
        items: [
            {
                title: "Ad Campaign 1",
                description: "Placeholder description for this ad campaign.",
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
                title: "Ad Campaign 2",
                description: "Placeholder description for this ad campaign.",
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
                title: "Ad Campaign 3",
                description: "Placeholder description for this ad campaign.",
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
                title: "Ad Campaign 4",
                description: "Placeholder description for this ad campaign.",
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
                title: "Ad Campaign 5",
                description: "Placeholder description for this ad campaign.",
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
                title: "Ad Campaign 5",
                description: "Placeholder description for this ad campaign.",
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
                title: "Ad Campaign 5",
                description: "Placeholder description for this ad campaign.",
                media: [
                    {
                        type: "video",
                        src: "/videos/5nance_Campaign.mp4",
                        alt: "Ad campaign video 1"
                    }
                ],
            },
            {
                title: "Ad Campaign 5",
                description: "Placeholder description for this ad campaign.",
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
            "Spatial and display concepts created to attract attention and strengthen brand presence.",
        items: [
            {
                title: "Social media post 1",
                description: "Placeholder description for this social media post.",
                media: [
                    {
                        type: "image",
                        src: "/images/social_media/social_media_1.jpg",
                        alt: "Social media post 1",
                    },
                ],
            },
            {
                title: "Social media post 2",
                description: "Placeholder description for this social media post.",
                media: [
                    {
                        type: "image",
                        src: "/images/social_media/social_media_2.jpg",
                        alt: "Social media post 2",
                    },
                ],
            },
            {
                title: "Social media post 3",
                description: "Placeholder description for this social media post.",
                media: [
                    {
                        type: "image",
                        src: "/images/social_media/social_media_3.jpg",
                        alt: "Social media post 3",
                    },
                ],
            },
            {
                title: "Social media post 4",
                description: "Placeholder description for this social media post.",
                media: [
                    {
                        type: "image",
                        src: "/images/social_media/social_media_4.jpg",
                        alt: "Social media post 4",
                    },
                ],
            },
            {
                title: "Social media post 5",
                description: "Placeholder description for this social media post.",
                media: [
                    {
                        type: "image",
                        src: "/images/social_media/social_media_5.jpg",
                        alt: "Social media post 5",
                    },
                ],
            },
            {
                title: "Social media post 6",
                description: "Placeholder description for this social media post.",
                media: [
                    {
                        type: "image",
                        src: "/images/social_media/social_media_6.jpg",
                        alt: "Social media post 6",
                    },
                ],
            },
            {
                title: "Social media post 7",
                description: "Placeholder description for this social media post.",
                media: [
                    {
                        type: "image",
                        src: "/images/social_media/social_media_7.jpg",
                        alt: "Social media post 7",
                    },
                ],
            },
            {
                title: "Social media post 8",
                description: "Placeholder description for this social media post.",
                media: [
                    {
                        type: "image",
                        src: "/images/social_media/social_media_8.jpg",
                        alt: "Social media post 8",
                    },
                ],
            },
            {
                title: "Social media post 9",
                description: "Placeholder description for this social media post.",
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
    {
        name: "UX Design   ",
        slug: "ux-design",
        description:
            "Spatial and display concepts created to attract attention and strengthen brand presence.",
        items: [
            {
                title: "UX Design 1",
                description: "Placeholder description for this UX Design.",
                media: [
                    {
                        type: "image",
                        src: "/images/ux_design/ux_design_1.jpg",
                        alt: "UX Design 1",
                    },
                ],
            },
            {
                title: "UX Design 2",
                description: "Placeholder description for this UX Design.",
                media: [
                    {
                        type: "image",
                        src: "/images/ux_design/ux_design_2.jpg",
                        alt: "UX Design 2",
                    },
                ],
            },
            {
                title: "UX Design 3",
                description: "Placeholder description for this UX Design.",
                media: [
                    {
                        type: "image",
                        src: "/images/ux_design/ux_design_3.jpg",
                        alt: "UX Design 3",
                    },
                ],
            },

            {
                title: "UX Design 3",
                description: "Placeholder description for this UX Design.",
                media: [
                    {
                        type: "image",
                        src: "/images/ux_design/ux_design_3.jpg",
                        alt: "UX Design 3",
                    },
                ],
            },
        ],
    },
    // Emailers
    {
        name: "Emailers",
        slug: "emailers",
        description:
            "Spatial and display concepts created to attract attention and strengthen brand presence.",
        items: [
            {
                title: "Emailer 1",
                description: "Placeholder description for this emailer.",
                media: [
                    {
                        type: "image",
                        src: "/images/emailers/emailers_1.jpg",
                        alt: "Emailer 1",
                    },
                ],
            },
            {
                title: "Emailer 2",
                description: "Placeholder description for this emailer.",
                media: [
                    {
                        type: "image",
                        src: "/images/emailers/emailers_2.jpg",
                        alt: "Emailer 2",
                    },
                ],
            },
            {
                title: "Emailer 3",
                description: "Placeholder description for this emailer.",
                media: [
                    {
                        type: "image",
                        src: "/images/emailers/emailers_3.jpg",
                        alt: "Emailer 3",
                    },
                ],
            },
            {
                title: "Emailer 4",
                description: "Placeholder description for this emailer.",
                media: [
                    {
                        type: "image",
                        src: "/images/emailers/emailers_4.jpg",
                        alt: "Emailer 4",
                    },
                ],
            },
            {
                title: "Emailer 5",
                description: "Placeholder description for this emailer.",
                media: [
                    {
                        type: "image",
                        src: "/images/emailers/emailers_5.jpg",
                        alt: "Emailer 5",
                    },
                ],
            },
            {
                title: "Emailer 6",
                description: "Placeholder description for this emailer.",
                media: [
                    {
                        type: "image",
                        src: "/images/emailers/emailers_6.jpg",
                        alt: "Emailer 6",
                    },
                ],
            },
        ],
    },
    // Newspaper Ads
    {
        name: "Newspaper Ads   ",
        slug: "newspaper-ads",
        description:
            "Spatial and display concepts created to attract attention and strengthen brand presence.",
        items: [
            {
                title: "Newspaper Ad 1",
                description: "Placeholder description for this newspaper ad.",
                media: [
                    {
                        type: "image",
                        src: "/images/newspaper_ads/newspaper_ads_1.jpg",
                        alt: "Newspaper Ad 1",
                    },
                ],
            },
            {
                title: "Newspaper Ad 2",
                description: "Placeholder description for this newspaper ad.",
                media: [
                    {
                        type: "image",
                        src: "/images/newspaper_ads/newspaper_ads_2.jpg",
                        alt: "Newspaper Ad 2",
                    },
                ],
            },
            {
                title: "Newspaper Ad 3",
                description: "Placeholder description for this newspaper ad.",
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