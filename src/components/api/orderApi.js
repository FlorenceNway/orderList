import api from './api';

const orderApi = {

    getOrders: async () => {
      const response = await api.get('/orders');
      return response.data;
    },
  
    getOrderItems: async () => {
      const response = await api.get('/orderItems');
      return response.data;
    },

    getProducts: async () => {
        const response = await api.get('/products');
        return response.data;
    },

    postOrderItem: async (order) => {
        const response = await api.get('/orderItems', order);
        return response.data;
    },

    updateOrder: async (id, order) => {
        const response = await api.get('/orders', order);
        return response.data;
    },
}  


export default orderApi;