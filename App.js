import React from 'react';
import ReactDOM from 'react-dom/client';

/*
Header
  - Logo
  - Nav Items
Body
  - Search
  - RestaurantContainer
    - RestaurantCard
      - Img
      - Name of Res, Start Rating, Cuisine, etc
Footer
  - Copyright
  - Links
  - Address
  - Contact
*/

const Header = () => {
  return (
    <div className='header'>
      <div className='logo-container'>
        <img
          className='logo'
          src='https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All'
        />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla: { deliveryTime }
  } = resData?.info;

  return (
    <div className='res-card'>
      <img
        className='res-logo'
        src={
          'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' +
          cloudinaryImageId
        }
        alt='tes-logo'
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

const resList = [
  {
    info: {
      id: '243824',
      name: "Domino's Pizza",
      cloudinaryImageId:
        'RX_THUMBNAIL/IMAGES/VENDOR/2025/3/13/2a5c99c9-1ea3-4480-83fb-8f663d17743a_243824.JPG',
      locality: 'Konappana Agrahara',
      areaName: 'Electronic City',
      costForTwo: '₹400 for two',
      cuisines: ['Pizzas', 'Italian', 'Pastas', 'Desserts'],
      avgRating: 4.5,
      parentId: '2456',
      avgRatingString: '4.5',
      totalRatingsString: '7.4K+',
      sla: {
        deliveryTime: 25,
        lastMileTravel: 1.2,
        serviceability: 'SERVICEABLE',
        slaString: '20-25 mins',
        lastMileTravelString: '1.2 km',
        iconType: 'ICON_TYPE_EMPTY'
      },
      availability: {
        nextCloseTime: '2025-04-24 22:55:00',
        opened: true
      },
      badges: {
        imageBadges: [
          {
            imageId: 'bolt/big%20rx%20listing%2015%20mins%20.png',
            description: 'bolt!'
          },
          {
            imageId: 'Rxawards/_CATEGORY-Pizza.png',
            description: 'Delivery!'
          }
        ]
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'bolt!',
                  imageId: 'bolt/big%20rx%20listing%2015%20mins%20.png'
                }
              },
              {
                attributes: {
                  description: 'Delivery!',
                  imageId: 'Rxawards/_CATEGORY-Pizza.png'
                }
              }
            ]
          },
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: '₹166 OFF',
        subHeader: 'ABOVE ₹549',
        discountTag: 'FLAT DEAL',
        headerTypeV2: 12
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--'
        }
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY'
    },
    analytics: {
      context: 'seo-data-94fb8c03-41aa-4d76-b653-466815ddacd2'
    },
    cta: {
      link: 'https://www.swiggy.com/city/bangalore/dominos-pizza-konappana-agrahara-electronic-city-rest243824',
      type: 'WEBLINK'
    }
  },
  {
    info: {
      id: '20686',
      name: 'Burger King',
      cloudinaryImageId:
        'RX_THUMBNAIL/IMAGES/VENDOR/2025/3/24/94051710-071f-4a8f-99ee-e336e7f9a101_20686.jpg',
      locality: 'Neeladri Road',
      areaName: 'Electronic City',
      costForTwo: '₹350 for two',
      cuisines: ['Burgers', 'American'],
      avgRating: 4.3,
      parentId: '166',
      avgRatingString: '4.3',
      totalRatingsString: '47K+',
      sla: {
        deliveryTime: 26,
        lastMileTravel: 4.4,
        serviceability: 'SERVICEABLE',
        slaString: '25-30 mins',
        lastMileTravelString: '4.4 km',
        iconType: 'ICON_TYPE_EMPTY'
      },
      availability: {
        nextCloseTime: '2025-04-25 01:00:00',
        opened: true
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: '₹166 OFF',
        subHeader: 'ABOVE ₹749',
        discountTag: 'FLAT DEAL',
        headerTypeV2: 12
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--'
        }
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY'
    },
    analytics: {
      context: 'seo-data-94fb8c03-41aa-4d76-b653-466815ddacd2'
    },
    cta: {
      link: 'https://www.swiggy.com/city/bangalore/burger-king-neeladri-road-electronic-city-rest20686',
      type: 'WEBLINK'
    }
  },
  {
    info: {
      id: '12479',
      name: 'Pizza Hut',
      cloudinaryImageId:
        'RX_THUMBNAIL/IMAGES/VENDOR/2025/4/9/5648fefa-82e3-4c1e-9815-d244c1407cf5_12479.jpg',
      locality: '1st Phase',
      areaName: 'Electronic City',
      costForTwo: '₹350 for two',
      cuisines: ['Pizzas'],
      avgRating: 4.3,
      parentId: '721',
      avgRatingString: '4.3',
      totalRatingsString: '21K+',
      sla: {
        deliveryTime: 29,
        lastMileTravel: 2.9,
        serviceability: 'SERVICEABLE',
        slaString: '25-30 mins',
        lastMileTravelString: '2.9 km',
        iconType: 'ICON_TYPE_EMPTY'
      },
      availability: {
        nextCloseTime: '2025-04-25 04:00:00',
        opened: true
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: '₹166 OFF',
        subHeader: 'ABOVE ₹699',
        discountTag: 'FLAT DEAL',
        headerTypeV2: 12
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--'
        }
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY'
    },
    analytics: {
      context: 'seo-data-94fb8c03-41aa-4d76-b653-466815ddacd2'
    },
    cta: {
      link: 'https://www.swiggy.com/city/bangalore/pizza-hut-1st-phase-electronic-city-rest12479',
      type: 'WEBLINK'
    }
  },
  {
    info: {
      id: '268782',
      name: "Leon's - Burgers & Wings (Leon Grill)",
      cloudinaryImageId:
        'RX_THUMBNAIL/IMAGES/VENDOR/2024/11/14/64de140c-da94-4a29-a739-8da5910f49cf_268782.jpg',
      locality: 'Electronic City',
      areaName: 'Electronic City',
      costForTwo: '₹300 for two',
      cuisines: ['American', 'Snacks', 'Turkish', 'Portuguese', 'Continental'],
      avgRating: 4.4,
      parentId: '371281',
      avgRatingString: '4.4',
      totalRatingsString: '18K+',
      sla: {
        deliveryTime: 27,
        lastMileTravel: 4,
        serviceability: 'SERVICEABLE',
        slaString: '25-30 mins',
        lastMileTravelString: '4.0 km',
        iconType: 'ICON_TYPE_EMPTY'
      },
      availability: {
        nextCloseTime: '2025-04-25 04:00:00',
        opened: true
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: '66% OFF',
        subHeader: 'UPTO ₹146',
        headerTypeV2: 12
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '4.7',
          ratingCount: '2.4K+'
        },
        source: 'GOOGLE',
        sourceIconImageId: 'v1704440323/google_ratings/rating_google_tag'
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY'
    },
    analytics: {
      context: 'seo-data-94fb8c03-41aa-4d76-b653-466815ddacd2'
    },
    cta: {
      link: 'https://www.swiggy.com/city/bangalore/leons-burgers-and-wings-leon-grill-electronic-city-rest268782',
      type: 'WEBLINK'
    }
  },
  {
    info: {
      id: '294128',
      name: 'Nandhana Palace',
      cloudinaryImageId:
        'RX_THUMBNAIL/IMAGES/VENDOR/2024/11/21/5e6cc503-75d7-4af1-98ef-bc950ff67bb9_294128.jpg',
      locality: 'Doddathoguru village',
      areaName: 'Electronic City',
      costForTwo: '₹500 for two',
      cuisines: ['Biryani', 'Andhra', 'South Indian', 'North Indian'],
      avgRating: 4.3,
      parentId: '2120',
      avgRatingString: '4.3',
      totalRatingsString: '13K+',
      sla: {
        deliveryTime: 30,
        lastMileTravel: 4.4,
        serviceability: 'SERVICEABLE',
        slaString: '30-35 mins',
        lastMileTravelString: '4.4 km',
        iconType: 'ICON_TYPE_EMPTY'
      },
      availability: {
        nextCloseTime: '2025-04-25 02:00:00',
        opened: true
      },
      badges: {
        imageBadges: [
          {
            imageId: 'Rxawards/_CATEGORY-Biryani.png',
            description: 'Delivery!'
          }
        ]
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'Delivery!',
                  imageId: 'Rxawards/_CATEGORY-Biryani.png'
                }
              }
            ]
          },
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: '₹66 OFF',
        subHeader: 'ABOVE ₹249',
        discountTag: 'FLAT DEAL',
        headerTypeV2: 12
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--'
        }
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY'
    },
    analytics: {
      context: 'seo-data-94fb8c03-41aa-4d76-b653-466815ddacd2'
    },
    cta: {
      link: 'https://www.swiggy.com/city/bangalore/nandhana-palace-doddathoguru-village-electronic-city-rest294128',
      type: 'WEBLINK'
    }
  },
  {
    info: {
      id: '358341',
      name: 'Truffles',
      cloudinaryImageId: 'cd832b6167eb9f88aeb1ccdebf38d942',
      locality: 'Doddathogur Village',
      areaName: 'Electronic City',
      costForTwo: '₹350 for two',
      cuisines: ['American', 'Beverages', 'Continental', 'Desserts', 'Italian'],
      avgRating: 4.5,
      parentId: '218065',
      avgRatingString: '4.5',
      totalRatingsString: '34K+',
      sla: {
        deliveryTime: 21,
        lastMileTravel: 1.9,
        serviceability: 'SERVICEABLE',
        slaString: '20-25 mins',
        lastMileTravelString: '1.9 km',
        iconType: 'ICON_TYPE_EMPTY'
      },
      availability: {
        nextCloseTime: '2025-04-25 01:00:00',
        opened: true
      },
      badges: {
        imageBadges: [
          {
            imageId: 'bolt/big%20rx%20listing%2015%20mins%20.png',
            description: 'bolt!'
          }
        ]
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'bolt!',
                  imageId: 'bolt/big%20rx%20listing%2015%20mins%20.png'
                }
              }
            ]
          },
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: '₹50 OFF',
        subHeader: 'ABOVE ₹249',
        discountTag: 'FLAT DEAL'
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--'
        }
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY'
    },
    analytics: {
      context: 'seo-data-94fb8c03-41aa-4d76-b653-466815ddacd2'
    },
    cta: {
      link: 'https://www.swiggy.com/city/bangalore/truffles-doddathogur-village-electronic-city-rest358341',
      type: 'WEBLINK'
    }
  },
  {
    info: {
      id: '358344',
      name: 'Taco Bell',
      cloudinaryImageId:
        'RX_THUMBNAIL/IMAGES/VENDOR/2025/4/7/24a5bae7-f932-45a6-bac4-abe11f40b7b9_358344.JPG',
      locality: 'Doddathogur Village',
      areaName: 'Electronic City',
      costForTwo: '₹300 for two',
      cuisines: ['Mexican', 'Fast Food', 'Snacks'],
      avgRating: 4.3,
      parentId: '1557',
      avgRatingString: '4.3',
      totalRatingsString: '3.7K+',
      sla: {
        deliveryTime: 23,
        lastMileTravel: 3.5,
        serviceability: 'SERVICEABLE',
        slaString: '20-25 mins',
        lastMileTravelString: '3.5 km',
        iconType: 'ICON_TYPE_EMPTY'
      },
      availability: {
        nextCloseTime: '2025-04-25 01:00:00',
        opened: true
      },
      badges: {
        imageBadges: [
          {
            imageId: 'Ratnesh_Badges/Rx_Awards_2025/Global%20Flavours.png',
            description: 'Delivery!'
          }
        ]
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'Delivery!',
                  imageId: 'Ratnesh_Badges/Rx_Awards_2025/Global%20Flavours.png'
                }
              }
            ]
          },
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: '66% OFF',
        subHeader: 'UPTO ₹126',
        headerTypeV2: 12
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '3.2',
          ratingCount: '74'
        },
        source: 'GOOGLE',
        sourceIconImageId: 'v1704440323/google_ratings/rating_google_tag'
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY'
    },
    analytics: {
      context: 'seo-data-94fb8c03-41aa-4d76-b653-466815ddacd2'
    },
    cta: {
      link: 'https://www.swiggy.com/city/bangalore/taco-bell-doddathogur-village-electronic-city-rest358344',
      type: 'WEBLINK'
    }
  },
  {
    info: {
      id: '289251',
      name: 'BOX8 - Desi Meals',
      cloudinaryImageId:
        'RX_THUMBNAIL/IMAGES/VENDOR/2025/3/26/ac5b20b7-b5d4-4b5b-a9ec-85a401bcf9c5_289251.jpg',
      locality: '2nd Phase',
      areaName: 'Electronic City',
      costForTwo: '₹200 for two',
      cuisines: ['North Indian', 'Biryani', 'Thalis', 'Home Food'],
      avgRating: 4.4,
      parentId: '10655',
      avgRatingString: '4.4',
      totalRatingsString: '3.8K+',
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2.5,
        serviceability: 'SERVICEABLE',
        slaString: '20-30 mins',
        lastMileTravelString: '2.5 km',
        iconType: 'ICON_TYPE_EMPTY'
      },
      availability: {
        nextCloseTime: '2025-04-25 02:00:00',
        opened: true
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: '₹166 OFF',
        subHeader: 'ABOVE ₹449',
        discountTag: 'FLAT DEAL',
        headerTypeV2: 12
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--'
        }
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY'
    },
    analytics: {
      context: 'seo-data-94fb8c03-41aa-4d76-b653-466815ddacd2'
    },
    cta: {
      link: 'https://www.swiggy.com/city/bangalore/box8-desi-meals-2nd-phase-electronic-city-rest289251',
      type: 'WEBLINK'
    }
  },
  {
    info: {
      id: '38992',
      name: 'Baskin Robbins - Ice Cream Desserts',
      cloudinaryImageId:
        'RX_THUMBNAIL/IMAGES/VENDOR/2025/4/24/ef4c6718-6932-4893-8146-4f8128986d1c_38992.JPG',
      locality: '1st Phase',
      areaName: 'Electronic City',
      costForTwo: '₹150 for two',
      cuisines: ['Desserts'],
      avgRating: 4.5,
      veg: true,
      parentId: '5588',
      avgRatingString: '4.5',
      totalRatingsString: '4.7K+',
      sla: {
        deliveryTime: 26,
        lastMileTravel: 1.9,
        serviceability: 'SERVICEABLE',
        slaString: '25-30 mins',
        lastMileTravelString: '1.9 km',
        iconType: 'ICON_TYPE_EMPTY'
      },
      availability: {
        nextCloseTime: '2025-04-24 23:00:00',
        opened: true
      },
      badges: {
        imageBadges: [
          {
            imageId: 'bolt/big%20rx%20listing%2015%20mins%20.png',
            description: 'bolt!'
          },
          {
            imageId: 'v1695133679/badges/Pure_Veg111.png',
            description: 'pureveg'
          }
        ]
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'bolt!',
                  imageId: 'bolt/big%20rx%20listing%2015%20mins%20.png'
                }
              },
              {
                attributes: {
                  description: 'pureveg',
                  imageId: 'v1695133679/badges/Pure_Veg111.png'
                }
              }
            ]
          },
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: '40% OFF',
        subHeader: 'UPTO ₹80'
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--'
        }
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY'
    },
    analytics: {
      context: 'seo-data-94fb8c03-41aa-4d76-b653-466815ddacd2'
    },
    cta: {
      link: 'https://www.swiggy.com/city/bangalore/baskin-robbins-ice-cream-desserts-1st-phase-electronic-city-rest38992',
      type: 'WEBLINK'
    }
  },
  {
    info: {
      id: '12238',
      name: 'Beijing Bites',
      cloudinaryImageId:
        'RX_THUMBNAIL/IMAGES/VENDOR/2024/6/25/30fa9e0b-bfe8-439f-b648-78987ceade91_12238.jpg',
      locality: 'Electronic City',
      areaName: 'Electronic City',
      costForTwo: '₹450 for two',
      cuisines: ['Chinese', 'Thai'],
      avgRating: 4.4,
      parentId: '103',
      avgRatingString: '4.4',
      totalRatingsString: '35K+',
      sla: {
        deliveryTime: 24,
        lastMileTravel: 1.9,
        serviceability: 'SERVICEABLE',
        slaString: '20-25 mins',
        lastMileTravelString: '1.9 km',
        iconType: 'ICON_TYPE_EMPTY'
      },
      availability: {
        nextCloseTime: '2025-04-25 01:00:00',
        opened: true
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: 'ITEMS',
        subHeader: 'AT ₹119'
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '3.7',
          ratingCount: '1.7K+'
        },
        source: 'GOOGLE',
        sourceIconImageId: 'v1704440323/google_ratings/rating_google_tag'
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY'
    },
    analytics: {
      context: 'seo-data-94fb8c03-41aa-4d76-b653-466815ddacd2'
    },
    cta: {
      link: 'https://www.swiggy.com/city/bangalore/beijing-bites-electronic-city-rest12238',
      type: 'WEBLINK'
    }
  },
  {
    info: {
      id: '156420',
      name: 'The Good Bowl',
      cloudinaryImageId:
        'RX_THUMBNAIL/IMAGES/VENDOR/2024/11/15/24069763-55a4-4730-9d11-08e049f54350_156420.jpg',
      locality: 'Huskur Gate',
      areaName: 'Electronic City Phase 1',
      costForTwo: '₹400 for two',
      cuisines: ['Biryani', 'Pastas', 'Punjabi', 'Desserts', 'Beverages'],
      avgRating: 4.3,
      parentId: '7918',
      avgRatingString: '4.3',
      totalRatingsString: '1.9K+',
      sla: {
        deliveryTime: 22,
        lastMileTravel: 3,
        serviceability: 'SERVICEABLE',
        slaString: '20-25 mins',
        lastMileTravelString: '3.0 km',
        iconType: 'ICON_TYPE_EMPTY'
      },
      availability: {
        nextCloseTime: '2025-04-24 23:59:00',
        opened: true
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'options available',
            fontColor: '#7E808C'
          }
        ]
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'options available'
                }
              }
            ]
          }
        }
      },
      aggregatedDiscountInfoV3: {
        header: '₹166 OFF',
        subHeader: 'ABOVE ₹449',
        discountTag: 'FLAT DEAL',
        headerTypeV2: 12
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--'
        }
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY'
    },
    analytics: {
      context: 'seo-data-94fb8c03-41aa-4d76-b653-466815ddacd2'
    },
    cta: {
      link: 'https://www.swiggy.com/city/bangalore/the-good-bowl-huskur-gate-electronic-city-phase-1-rest156420',
      type: 'WEBLINK'
    }
  },
  {
    info: {
      id: '186086',
      name: 'The Biryani Life',
      cloudinaryImageId: 'izxhtf9pvmni6dvwvtf1',
      locality: 'Huskur Gate',
      areaName: 'Electronic City Phase 1',
      costForTwo: '₹250 for two',
      cuisines: [
        'Biryani',
        'Mughlai',
        'Lucknowi',
        'Hyderabadi',
        'Kebabs',
        'Desserts',
        'Beverages'
      ],
      avgRating: 4.1,
      parentId: '8496',
      avgRatingString: '4.1',
      totalRatingsString: '2.0K+',
      sla: {
        deliveryTime: 28,
        lastMileTravel: 3,
        serviceability: 'SERVICEABLE',
        slaString: '25-30 mins',
        lastMileTravelString: '3.0 km',
        iconType: 'ICON_TYPE_EMPTY'
      },
      availability: {
        nextCloseTime: '2025-04-24 23:59:00',
        opened: true
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: '₹166 OFF',
        subHeader: 'ABOVE ₹549',
        discountTag: 'FLAT DEAL',
        headerTypeV2: 12
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--'
        }
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY'
    },
    analytics: {
      context: 'seo-data-94fb8c03-41aa-4d76-b653-466815ddacd2'
    },
    cta: {
      link: 'https://www.swiggy.com/city/bangalore/the-biryani-life-huskur-gate-electronic-city-phase-1-rest186086',
      type: 'WEBLINK'
    }
  },
  {
    info: {
      id: '132112',
      name: 'Sharief Bhai Biryani',
      cloudinaryImageId:
        'RX_THUMBNAIL/IMAGES/VENDOR/2025/2/17/04257d04-68d2-4e2a-8aff-bd984ba1cbc0_132112.jpg',
      locality: 'Electronic City',
      areaName: 'Electronic City',
      costForTwo: '₹400 for two',
      cuisines: [
        'Biryani',
        'South Indian',
        'Kebabs',
        'Ramzan Special',
        'Sweets',
        'Beverages'
      ],
      avgRating: 4.1,
      parentId: '469102',
      avgRatingString: '4.1',
      totalRatingsString: '18K+',
      sla: {
        deliveryTime: 21,
        lastMileTravel: 1.9,
        serviceability: 'SERVICEABLE',
        slaString: '20-25 mins',
        lastMileTravelString: '1.9 km',
        iconType: 'ICON_TYPE_EMPTY'
      },
      availability: {
        nextCloseTime: '2025-04-24 23:59:00',
        opened: true
      },
      badges: {},
      select: true,
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: '66% OFF',
        subHeader: 'UPTO ₹126',
        headerTypeV2: 12
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '4.0',
          ratingCount: '273'
        },
        source: 'GOOGLE',
        sourceIconImageId: 'v1704440323/google_ratings/rating_google_tag'
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY'
    },
    analytics: {
      context: 'seo-data-94fb8c03-41aa-4d76-b653-466815ddacd2'
    },
    cta: {
      link: 'https://www.swiggy.com/city/bangalore/sharief-bhai-biryani-electronic-city-rest132112',
      type: 'WEBLINK'
    }
  },
  {
    info: {
      id: '73044',
      name: 'California Burrito',
      cloudinaryImageId:
        'RX_THUMBNAIL/IMAGES/VENDOR/2024/9/3/fdd8d4f8-533f-466a-8dc4-0a37f5c6a718_73044.jpg',
      locality: 'Electronic City',
      areaName: 'Electronic City',
      costForTwo: '₹250 for two',
      cuisines: [
        'Mexican',
        'American',
        'Salads',
        'Continental',
        'Keto',
        'Healthy Food',
        'Beverages',
        'Snacks',
        'Desserts',
        'Fast Food'
      ],
      avgRating: 4.5,
      parentId: '1252',
      avgRatingString: '4.5',
      totalRatingsString: '13K+',
      sla: {
        deliveryTime: 20,
        lastMileTravel: 3,
        serviceability: 'SERVICEABLE',
        slaString: '15-20 mins',
        lastMileTravelString: '3.0 km',
        iconType: 'ICON_TYPE_EMPTY'
      },
      availability: {
        nextCloseTime: '2025-04-25 01:00:00',
        opened: true
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'options available',
            fontColor: '#7E808C'
          }
        ]
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'options available'
                }
              }
            ]
          }
        }
      },
      aggregatedDiscountInfoV3: {
        header: '₹66 OFF',
        subHeader: 'ABOVE ₹249',
        discountTag: 'FLAT DEAL',
        headerTypeV2: 12
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--'
        }
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY'
    },
    analytics: {
      context: 'seo-data-94fb8c03-41aa-4d76-b653-466815ddacd2'
    },
    cta: {
      link: 'https://www.swiggy.com/city/bangalore/california-burrito-electronic-city-rest73044',
      type: 'WEBLINK'
    }
  },
  {
    info: {
      id: '660690',
      name: 'Theobroma',
      cloudinaryImageId:
        'RX_THUMBNAIL/IMAGES/VENDOR/2025/4/9/9e950bb8-1b27-4350-ac7f-cef31610c544_660690.jpg',
      locality: 'Electronic City',
      areaName: 'Velankani Drive',
      costForTwo: '₹400 for two',
      cuisines: ['Desserts'],
      avgRating: 4.6,
      parentId: '1040',
      avgRatingString: '4.6',
      totalRatingsString: '2.9K+',
      sla: {
        deliveryTime: 15,
        lastMileTravel: 1.9,
        serviceability: 'SERVICEABLE',
        slaString: '15-20 mins',
        lastMileTravelString: '1.9 km',
        iconType: 'ICON_TYPE_EMPTY'
      },
      availability: {
        nextCloseTime: '2025-04-24 23:31:00',
        opened: true
      },
      badges: {
        imageBadges: [
          {
            imageId: 'bolt/big%20rx%20listing%2015%20mins%20.png',
            description: 'bolt!'
          },
          {
            imageId: 'Rxawards/_CATEGORY-Desserts.png',
            description: 'Delivery!'
          }
        ]
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'bolt!',
                  imageId: 'bolt/big%20rx%20listing%2015%20mins%20.png'
                }
              },
              {
                attributes: {
                  description: 'Delivery!',
                  imageId: 'Rxawards/_CATEGORY-Desserts.png'
                }
              }
            ]
          },
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: '₹166 OFF',
        subHeader: 'ABOVE ₹999',
        discountTag: 'FLAT DEAL',
        headerTypeV2: 12
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--'
        }
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY'
    },
    analytics: {
      context: 'seo-data-94fb8c03-41aa-4d76-b653-466815ddacd2'
    },
    cta: {
      link: 'https://www.swiggy.com/city/bangalore/theobroma-electronic-city-velankani-drive-rest660690',
      type: 'WEBLINK'
    }
  },
  {
    info: {
      id: '720355',
      name: "Wendy's Burgers",
      cloudinaryImageId:
        'RX_THUMBNAIL/IMAGES/VENDOR/2025/1/11/4be6e462-b505-4552-ade7-72b38525c5c6_720355.JPG',
      locality: 'Huskur Gate',
      areaName: 'Electronic City Phase 1',
      costForTwo: '₹200 for two',
      cuisines: ['Burgers', 'American', 'Fast Food', 'Snacks'],
      avgRating: 4.2,
      parentId: '972',
      avgRatingString: '4.2',
      totalRatingsString: '1.7K+',
      sla: {
        deliveryTime: 26,
        lastMileTravel: 3,
        serviceability: 'SERVICEABLE',
        slaString: '25-30 mins',
        lastMileTravelString: '3.0 km',
        iconType: 'ICON_TYPE_EMPTY'
      },
      availability: {
        nextCloseTime: '2025-04-24 23:59:00',
        opened: true
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'options available',
            fontColor: '#7E808C'
          }
        ]
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'options available'
                }
              }
            ]
          }
        }
      },
      aggregatedDiscountInfoV3: {
        header: '66% OFF',
        subHeader: 'UPTO ₹126',
        headerTypeV2: 12
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--'
        }
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY'
    },
    analytics: {
      context: 'seo-data-94fb8c03-41aa-4d76-b653-466815ddacd2'
    },
    cta: {
      link: 'https://www.swiggy.com/city/bangalore/wendys-burgers-huskur-gate-electronic-city-phase-1-rest720355',
      type: 'WEBLINK'
    }
  },
  {
    info: {
      id: '35862',
      name: 'Sweet Truth - Cake and Desserts',
      cloudinaryImageId:
        'RX_THUMBNAIL/IMAGES/VENDOR/2025/3/31/6db382e0-55e0-484e-bbdf-55d7376bd9f9_35862.jpg',
      locality: 'Huskur Gate',
      areaName: 'Electronic City Phase 1',
      costForTwo: '₹450 for two',
      cuisines: ['Desserts', 'Ice Cream', 'Bakery', 'Beverages'],
      avgRating: 4.2,
      parentId: '4444',
      avgRatingString: '4.2',
      totalRatingsString: '2.1K+',
      sla: {
        deliveryTime: 23,
        lastMileTravel: 3,
        serviceability: 'SERVICEABLE',
        slaString: '20-25 mins',
        lastMileTravelString: '3.0 km',
        iconType: 'ICON_TYPE_EMPTY'
      },
      availability: {
        nextCloseTime: '2025-04-24 23:59:00',
        opened: true
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: '₹166 OFF',
        subHeader: 'ABOVE ₹999',
        discountTag: 'FLAT DEAL',
        headerTypeV2: 12
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--'
        }
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY'
    },
    analytics: {
      context: 'seo-data-94fb8c03-41aa-4d76-b653-466815ddacd2'
    },
    cta: {
      link: 'https://www.swiggy.com/city/bangalore/sweet-truth-cake-and-desserts-huskur-gate-electronic-city-phase-1-rest35862',
      type: 'WEBLINK'
    }
  },
  {
    info: {
      id: '248789',
      name: 'Wow! China',
      cloudinaryImageId:
        'RX_THUMBNAIL/IMAGES/VENDOR/2025/4/19/b5e9b47e-a8e9-4cf8-9fad-200f91ef2918_248789.jpg',
      locality: 'Electronic City',
      areaName: 'Electronic City',
      costForTwo: '₹300 for two',
      cuisines: ['Chinese', 'Asian', 'fastfood', 'Beverages', 'Snacks'],
      avgRating: 3.9,
      parentId: '226836',
      avgRatingString: '3.9',
      totalRatingsString: '5.9K+',
      sla: {
        deliveryTime: 28,
        lastMileTravel: 3.5,
        serviceability: 'SERVICEABLE',
        slaString: '25-30 mins',
        lastMileTravelString: '3.5 km',
        iconType: 'ICON_TYPE_EMPTY'
      },
      availability: {
        nextCloseTime: '2025-04-25 03:00:00',
        opened: true
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: '₹166 OFF',
        subHeader: 'ABOVE ₹549',
        discountTag: 'FLAT DEAL',
        headerTypeV2: 12
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '3.9',
          ratingCount: '29'
        },
        source: 'GOOGLE',
        sourceIconImageId: 'v1704440323/google_ratings/rating_google_tag'
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY'
    },
    analytics: {
      context: 'seo-data-94fb8c03-41aa-4d76-b653-466815ddacd2'
    },
    cta: {
      link: 'https://www.swiggy.com/city/bangalore/wow-china-electronic-city-rest248789',
      type: 'WEBLINK'
    }
  },
  {
    info: {
      id: '72854',
      name: 'CakeZone Patisserie',
      cloudinaryImageId:
        'RX_THUMBNAIL/IMAGES/VENDOR/2025/4/19/d75964eb-0931-44db-9b70-e4e66160944d_72854.jpg',
      locality: 'ELECTRONIC CITY',
      areaName: 'ELECTRONIC CITY PHASE-1',
      costForTwo: '₹200 for two',
      cuisines: ['Bakery', 'Desserts', 'Sweets', 'Ice Cream'],
      avgRating: 4.4,
      parentId: '7003',
      avgRatingString: '4.4',
      totalRatingsString: '21K+',
      sla: {
        deliveryTime: 31,
        lastMileTravel: 3.9,
        serviceability: 'SERVICEABLE',
        slaString: '30-35 mins',
        lastMileTravelString: '3.9 km',
        iconType: 'ICON_TYPE_EMPTY'
      },
      availability: {
        nextCloseTime: '2025-04-25 01:00:00',
        opened: true
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'options available',
            fontColor: '#7E808C'
          }
        ]
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'options available'
                }
              }
            ]
          }
        }
      },
      aggregatedDiscountInfoV3: {
        header: '60% OFF',
        subHeader: 'UPTO ₹120'
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--'
        }
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY'
    },
    analytics: {
      context: 'seo-data-94fb8c03-41aa-4d76-b653-466815ddacd2'
    },
    cta: {
      link: 'https://www.swiggy.com/city/bangalore/cakezone-patisserie-electronic-city-electronic-city-phase-1-rest72854',
      type: 'WEBLINK'
    }
  },
  {
    info: {
      id: '570510',
      name: 'Bakingo',
      cloudinaryImageId:
        'RX_THUMBNAIL/IMAGES/VENDOR/2025/4/23/3ff0d13d-51fd-4009-ae34-9eb5b4cf01ef_570510.jpg',
      locality: 'Hulimangala Village',
      areaName: 'Anekal',
      costForTwo: '₹299 for two',
      cuisines: ['Bakery', 'Desserts', 'Beverages', 'Snacks'],
      avgRating: 4.5,
      parentId: '3818',
      avgRatingString: '4.5',
      totalRatingsString: '3.8K+',
      sla: {
        deliveryTime: 21,
        lastMileTravel: 4.2,
        serviceability: 'SERVICEABLE',
        slaString: '20-25 mins',
        lastMileTravelString: '4.2 km',
        iconType: 'ICON_TYPE_EMPTY'
      },
      availability: {
        nextCloseTime: '2025-04-25 01:00:00',
        opened: true
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {}
        }
      },
      aggregatedDiscountInfoV3: {
        header: '50% OFF',
        subHeader: 'UPTO ₹100'
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {}
        }
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: '--'
        }
      },
      ratingsDisplayPreference: 'RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY'
    },
    analytics: {
      context: 'seo-data-94fb8c03-41aa-4d76-b653-466815ddacd2'
    },
    cta: {
      link: 'https://www.swiggy.com/city/bangalore/bakingo-hulimangala-village-anekal-rest570510',
      type: 'WEBLINK'
    }
  }
];

const Body = () => {
  return (
    <div className='body'>
      <div className='search'>Search</div>
      <div className='res-container'>
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
