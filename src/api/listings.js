import axios from "axios";

export async function getAllPropTypesCount() {
  const response = await axios.get(
    "https://indusspeciality.com/api/listings/get_all_proptypes_listings_count.php"
  );
  return response.data;
}

export async function getFeaturedBlogs() {
  const response = await axios.get(
    "https://indusspeciality.com/api/listings/get_featured_blogs.php"
  );
  return response.data;
}
export async function getFeaturedVideos() {
  const response = await axios.get(
    "https://indusspeciality.com/api/listings/get_featured_videos.php"
  );
  return response.data;
}

export async function getExclusiveAgents() {
  const response = await axios.get(
    "https://indusspeciality.com/api/listings/get_exclusive_agents.php"
  );
  return response.data;
}

export async function getPropertiesCountBasedOnLocations() {
  const response = await axios.get(
    "https://indusspeciality.com/api/listings/get_prop_counts_based_locations.php"
  );
  return response.data;
}

export async function getFeaturedListings(status) {
  const response = await axios.post(
    "https://indusspeciality.com/api/listings/get_featured_listings.php",
    {
      status: status,
    }
  );
  return response.data;
}

export async function getFeaturedOneListing() {
  const response = await axios.get(
    "https://indusspeciality.com/api/listings/get_featured_one_listing.php"
  );
  return response.data;
}

export async function getPropertyDetails(id) {
  const response = await axios.post(
    "https://indusspeciality.com/api/listings/get_property_details.php",
    {
      prop_id: id,
    }
  );
  return response.data;
}

export async function getAgentDetails(id) {
  const response = await axios.post(
    "https://indusspeciality.com/api/listings/get_agents_details.php",
    {
      agent_id: id,
    }
  );
  return response.data;
}

export async function getNewsDetails(id) {
  const response = await axios.post(
    "https://indusspeciality.com/api/listings/get_news_details.php",
    {
      blog_id: id,
    }
  );
  return response.data;
}

export async function getBlogDetails(id) {
  const response = await axios.post(
    "https://indusspeciality.com/api/listings/get_blog_details.php",
    {
      blog_id: id,
    }
  );
  return response.data;
}

export async function getDeveloperDetails(id) {
  const response = await axios.post(
    "https://indusspeciality.com/api/listings/get_developer_details.php",
    {
      dev_id: id,
    }
  );
  return response.data;
}

export async function getCommunityGuideDetails(id) {
  const response = await axios.post(
    "https://indusspeciality.com/api/listings/get_community_guide_details.php",
    {
      guide_id: id,
    }
  );
  return response.data;
}

export async function getAgentPropertiesLimit4(id, status) {
  const response = await axios.post(
    "https://indusspeciality.com/api/listings/get_agents_properties_limit_4.php",
    {
      agent_id: id,
      status: status,
    }
  );
  return response.data;
}

export async function getAllListingsPagination(
  limit,
  pageNumber,
  filter,
  agentId
) {
  const response = await axios.post(
    "https://indusspeciality.com/api/listings/get_all_listings_pagination.php",
    {
      limit: limit,
      pageNumber: pageNumber,
      filter: filter,
      agentId: agentId,
    }
  );
  return response.data;
}

export async function getAllPropertiesSearch(
  limit,
  pageNumber,
  filter,
  search,
  bdOnly
) {
  const response = await axios.post(
    "https://indusspeciality.com/api/listings/search_properties_with_filter.php",
    {
      limit: limit,
      pageNumber: pageNumber,
      filter: filter,
      search: search,
      bdOnly: bdOnly,
    }
  );
  return response.data;
}

export async function getAllAgents(limit, pageNumber, search) {
  const response = await axios.post(
    "https://indusspeciality.com/api/listings/get_all_agents.php",
    {
      limit: limit,
      pageNumber: pageNumber,
      search: search,
    }
  );
  return response.data;
}

export async function getAllDevelopers(limit, pageNumber, search) {
  const response = await axios.post(
    "https://indusspeciality.com/api/listings/get_all_developers.php",
    {
      limit: limit,
      pageNumber: pageNumber,
      search: search,
    }
  );
  return response.data;
}

export async function getAllAchievements(limit, pageNumber, search) {
  const response = await axios.post(
    "https://indusspeciality.com/api/listings/get_all_achievements.php",
    {
      limit: limit,
      pageNumber: pageNumber,
      search: search,
    }
  );
  return response.data;
}

export async function getAllCommunityGuides() {
  const response = await axios.get(
    "https://indusspeciality.com/api/listings/get_all_community_guides.php"
  );
  return response.data;
}

export async function getAllGoogleReviews() {
  const response = await axios.get(
    "https://indusspeciality.com/api/listings/get_all_google_reviews.php"
  );
  return response.data;
}

export async function getAllIndusBanners() {
  const response = await axios.get(
    "https://indusspeciality.com/api/listings/get_all_indus_banners.php"
  );
  return response.data;
}

export async function getPopupBanner() {
  const response = await axios.get(
    "https://indusspeciality.com/api/listings/get_popup_banner.php"
  );
  return response.data;
}

export async function getAllVideos(limit, pageNumber, search, filter) {
  const response = await axios.post(
    "https://indusspeciality.com/api/listings/get_all_videos.php",
    {
      limit: limit,
      pageNumber: pageNumber,
      search: search,
      filter: filter,
    }
  );
  return response.data;
}

export async function getAllNews(limit, pageNumber, filter) {
  const response = await axios.post(
    "https://indusspeciality.com/api/listings/get_all_news.php",
    {
      limit: limit,
      pageNumber: pageNumber,
      filter: filter,
    }
  );
  return response.data;
}

export async function getAllBlogs(limit, pageNumber, filter) {
  const response = await axios.post(
    "https://indusspeciality.com/api/listings/get_all_blogs.php",
    {
      limit: limit,
      pageNumber: pageNumber,
      filter: filter,
    }
  );
  return response.data;
}
