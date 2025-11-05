import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Order {
  id: string;
  customerId: string;
  items: Array<{ productId: string; quantity: number }>;
  status: 'pending' | 'in-progress' | 'completed' | 'canceled';
}

interface OrdersState {
  orders: Order[];
  loading: boolean;
  error: string | null;
}

const initialState: OrdersState = {
  orders: [],
  loading: false,
  error: null,
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    fetchOrdersStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchOrdersSuccess(state, action: PayloadAction<Order[]>) {
      state.loading = false;
      state.orders = action.payload;
    },
    fetchOrdersFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addOrder(state, action: PayloadAction<Order>) {
      state.orders.push(action.payload);
    },
    updateOrderStatus(state, action: PayloadAction<{ id: string; status: Order['status'] }>) {
      const order = state.orders.find(order => order.id === action.payload.id);
      if (order) {
        order.status = action.payload.status;
      }
    },
  },
});

export const {
  fetchOrdersStart,
  fetchOrdersSuccess,
  fetchOrdersFailure,
  addOrder,
  updateOrderStatus,
} = ordersSlice.actions;

export default ordersSlice.reducer;