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
    {
        name: "Packaging",
        slug: "packaging",
        description:
            "Packaging concepts created to combine shelf impact, clarity, and product storytelling.",
        items: [
            {
                title: "Packaging 1",
                description: "Placeholder description for this packaging piece.",
                media: [
                    {
                        type: "image",
                        src: "/images/packaging/packaging_1.jpg",
                        alt: "Packaging 1",
                    },
                ],
            },
            {
                title: "Packaging 2",
                description: "Placeholder description for this packaging piece.",
                media: [
                    {
                        type: "image",
                        src: "/images/packaging/packaging_2.jpg",
                        alt: "Packaging 2",
                    },
                ],
            },
            {
                title: "Packaging 3",
                description: "Placeholder description for this packaging piece.",
                media: [
                    {
                        type: "image",
                        src: "/images/packaging/packaging_3.jpg",
                        alt: "Packaging 3",
                    },
                ],
            },
            {
                title: "Packaging 4",
                description: "Placeholder description for this packaging piece.",
                media: [
                    {
                        type: "image",
                        src: "/images/packaging/packaging_4.jpg",
                        alt: "Packaging 4",
                    },
                ],
            },
            {
                title: "Packaging 5",
                description: "Placeholder description for this packaging piece.",
                media: [
                    {
                        type: "image",
                        src: "/images/packaging/packaging_5.jpg",
                        alt: "Packaging 5",
                    },
                ],
            },
            {
                title: "Packaging 6",
                description: "Placeholder description for this packaging piece.",
                media: [
                    {
                        type: "image",
                        src: "/images/packaging/packaging_6.png",
                        alt: "Packaging 6",
                    },
                ],
            },
            {
                title: "Packaging 7",
                description: "Placeholder description for this packaging piece.",
                media: [
                    {
                        type: "image",
                        src: "/images/packaging/packaging_7.png",
                        alt: "Packaging 7",
                    },
                ],
            },
            {
                title: "Packaging 8",
                description: "Placeholder description for this packaging piece.",
                media: [
                    {
                        type: "image",
                        src: "/images/packaging/packaging_8.png",
                        alt: "Packaging 8",
                    },
                ],
            },
            {
                title: "Sprite Packaging",
                description: "Placeholder description for this packaging piece.",
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
        ],
    },
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
];