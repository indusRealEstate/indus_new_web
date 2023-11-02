module.exports = [
  {
    label: "Home",
    subMenu: [
      { path: "/#featured-properties", label: "Featured Properties" },
      { path: "/#explore-cities", label: "Explore Cities" },
      { path: "/#featured-blogs", label: "Featured Blogs" },
      { path: "/#guides", label: "Guides" },
      { path: "/#exclusive-team", label: "Exclusive Team" },
    ],
  },
  {
    label: "Residential",
    subMenu: [
      {
        path: "/all-properties?st=Sale&ps=residential",
        label: "Buy",
        value: "Sale",
      },
      {
        path: "/all-properties?st=Rent&ps=residential",
        label: "Rent",
        value: "Rent",
      },
    ],
  },
  {
    label: "Commercial",
    subMenu: [
      {
        path: "/all-properties?st=Sale&ps=commercial",
        label: "Buy",
        value: "Sale",
      },
      {
        path: "/all-properties?st=Rent&ps=commercial",
        label: "Rent",
        value: "Rent",
      },
    ],
  },
  {
    label: "Guides",
    subMenu: [
      { path: "/community-guide", label: "Community Guides" },
      { path: "/rent-guide", label: "Renter's Guides" },
      { path: "/buy-guide", label: "Buyer's Guides" },
      { path: "/sell-guide", label: "Seller's Guides" },
    ],
  },
  {
    label: "Developers",
    path: "/developers",
  },
  {
    label: "More",
    subMenu: [
      { path: "/about-company", label: "Company Profile" },
      { path: "/team", label: "Team" },
      { path: "/achievements", label: "Achievements" },
      // { href: "/newsletters", label: "Newsletters" },
      { path: "/all-news", label: "Blogs" },
      // { href: "/mid-year-awarding-2021", label: "Mid Year Awarding 2021" },
      { path: "/videos", label: "Videos" },
      { path: "/developers", label: "Real Estate Partners" },
      { path: "/career", label: "Career" },
    ],
  },
  {
    label: "Contact Us",
    path: "/contact",
  },
  // {
  //   label: "Listings",
  //   subMenu: [
  //     {
  //       label: "Grid View",
  //       subMenu: [
  //         { label: "Grid Default", path: "/grid-default" },
  //         { label: "Grid Full Width 3 Cols", path: "/grid-full-3-col" },
  //         { label: "Grid Full Width 4 Cols", path: "/grid-full-4-col" },
  //         { label: "Grid Full Width 2 Cols", path: "/grid-full-2-col" },
  //         {
  //           label: "Grid Full Width 1 Cols v1",
  //           path: "/grid-full-1-col-v1",
  //         },
  //         {
  //           label: "Grid Full Width 1 Cols v2",
  //           path: "/grid-full-1-col-v2",
  //         },
  //         { label: "Banner Search v1", path: "/banner-search-v1" },
  //         { title: "Banner Search v2", path: "/banner-search-v2" },
  //       ],
  //     },
  //     {
  //       label: "Map Style",
  //       subMenu: [
  //         {
  //           label: "Header Map Style",
  //           path: "/header-map-style",
  //         },
  //         { label: "Map V1", path: "/map-v1" },
  //         { label: "Map V2", path: "/map-v2" },
  //         { label: "Map V3", path: "/map-v3" },
  //         { label: "Map V4", path: "/map-v4" },
  //       ],
  //     },
  //     {
  //       label: "Listing View",
  //       subMenu: [
  //         { label: "List v1", path: "/list-v1" },
  //         { label: "List All Style", path: "/list-all-style" },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   label: "Property",
  //   subMenu: [
  //     {
  //       label: "Agents",
  //       subMenu: [
  //         { label: "Agents", path: "/agents" },
  //         { label: "Agent Single", path: "/agent-single/1" },
  //         { label: "Agency", path: "/agency" },
  //         { label: "Agency Single", path: "/agency-single/1" },
  //       ],
  //     },

  //     {
  //       label: "Single Style",
  //       subMenu: [
  //         { label: "Single V1", path: "/single-v1/1" },
  //         { label: "Single V2", path: "/single-v2/1" },
  //         { label: "Single V3", path: "/single-v3/1" },
  //         { label: "Single V4", path: "/single-v4/1" },
  //         { label: "Single V5", path: "/single-v5/1" },
  //         { label: "Single V6", path: "/single-v6/1" },
  //         { label: "Single V7", path: "/single-v7/1" },
  //         { label: "Single V8", path: "/single-v8/1" },
  //         { label: "Single V9", path: "/single-v9/1" },
  //         { label: "Single V10", path: "/single-v10/1" },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   label: "Dashboard",
  //   subMenu: [
  //     { label: "Dashboard Home", path: "/dashboard-home" },
  //     { label: "Message", path: "/dashboard-message" },
  //     { label: "New Property", path: "/dashboard-add-property" },
  //     { label: "My Properties", path: "/dashboard-my-properties" },
  //     { label: "My Favorites", path: "/dashboard-my-favourites" },
  //     { label: "Saved Search", path: "/dashboard-saved-search" },
  //     { label: "Reviews", path: "/dashboard-reviews" },
  //     { label: "My Package", path: "/dashboard-my-package" },
  //     { label: "My Profile", path: "/dashboard-my-profile" },
  //   ],
  // },
  // {
  //   label: "Blog",
  //   subMenu: [
  //     { path: "/blog-list-v1", label: "Blog List V1" },
  //     { path: "/blog-list-v2", label: "Blog List V2" },
  //     { path: "/blog-list-v3", label: "Blog List V3" },
  //     { path: "/blogs/2", label: "Blog Single" },
  //   ],
  // },

  // {
  //   label: "Pages",
  //   subMenu: [
  //     { path: "/about", label: "About" },
  //     { path: "/contact", label: "Contact" },
  //     { path: "/compare", label: "Compate" },
  //     { path: "/pricing", label: "Pricing" },
  //     { path: "/faq", label: "Faq" },
  //     { path: "/login", label: "Login" },
  //     { path: "/register", label: "Register" },
  //     { path: "/404", label: "404" },
  //     { path: "/invoice", label: "Invoice" },
  //   ],
  // },
];
