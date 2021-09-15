import http from "../http-common";
import SubscriptionData from "../types/subscription.type"
class SubscriptionDataService {
    getAll() {

      const promise = http.get("/subscription")
      // using .then, create a new promise which extracts the data
      const dataPromise = promise.then((response) => response.data)  
      // return it
      return dataPromise
    }
  
    get(id: string) {
      return http.get(`/subscription/${id}`);
    }
  
    create(data: SubscriptionData) {
      return http.post("/subscription", data);
    }
  
    update(data: SubscriptionData, id: any) {
      return http.put(`/subscription/${id}`, data);
    }
  
    delete(id: any) {
      return http.delete(`/subscription/${id}`);
    }
  
    deleteAll() {
      return http.delete(`/subscription`);
    }
  
    findByTitle(title: string) {
      return http.get(`/subscription?title=${title}`);
    }
  }
  
export default new SubscriptionDataService();