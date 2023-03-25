
import requests from '../lib/httpRequest';

const DailyMealCountServices = {
  getAllDailyMealCount: async (body) => {
    return requests.get('/dailyMealCounts', body);
  },
  singleCreateDailyMealCount: async (body) => {
    return requests.post('/dailyMealCounts', body);
  },
  searchDailyMealCount: async (body) => {
    return requests.get('/dailyMealCounts', body);
  },
  getSingleDailyMealCount: async (body) => {
    return requests.get('/dailyMealCounts', body);
  },
  singleUpdateDailyMealCount: async (body) => {
    return requests.put('/dailyMealCounts', body);
  },
  singleDeleteDailyMealCount: async (id) => {
    return requests.delete(`/dailyMealCounts/${id}`);
  },
  
  
};

export default DailyMealCountServices;