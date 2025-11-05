export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    imageUrl: string;
}

export interface CartItem {
    productId: string;
    quantity: number;
}

export interface Order {
    id: string;
    customerId: string;
    items: CartItem[];
    totalAmount: number;
    status: 'pending' | 'preparing' | 'completed' | 'delivered';
    createdAt: string;
}

export interface User {
    id: string;
    username: string;
    role: 'customer' | 'staff' | 'kitchen' | 'manager' | 'delivery';
    email: string;
}

export interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
}

export interface OrderState {
    orders: Order[];
    loading: boolean;
}

export interface CartState {
    items: CartItem[];
    totalAmount: number;
}