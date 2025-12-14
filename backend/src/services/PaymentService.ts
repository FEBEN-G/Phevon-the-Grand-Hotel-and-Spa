import axios from 'axios';

const CHAPA_URL = 'https://api.chapa.co/v1';
const CHAPA_SECRET_KEY = process.env.CHAPA_SECRET_KEY || 'CHASECK_TEST-xxxxxxxxxxxxxxxxxxxx'; // Placeholder

interface ChapaInitializeResponse {
  status: string;
  message: string;
  data: {
    checkout_url: string;
  };
}

interface ChapaVerifyResponse {
    status: string;
    message: string;
    data: {
        amount: number;
        currency: string;
        status: string;
        first_name: string;
        last_name: string;
        email: string;
        tx_ref: string;
    }
}

export const PaymentService = {
  initializePayment: async (data: {
    amount: number;
    currency: string;
    email: string;
    first_name: string;
    last_name: string;
    tx_ref: string;
    callback_url?: string;
    return_url?: string;
    customization?: {
        title: string;
        description: string;
    }
  }) => {
    try {
      const response = await axios.post<ChapaInitializeResponse>(
        `${CHAPA_URL}/transaction/initialize`,
        data,
        {
          headers: {
            Authorization: `Bearer ${CHAPA_SECRET_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error('Chapa Initialize Error:', error);
      throw new Error('Payment initialization failed');
    }
  },

  verifyPayment: async (tx_ref: string) => {
      try {
          const response = await axios.get<ChapaVerifyResponse>(
              `${CHAPA_URL}/transaction/verify/${tx_ref}`,
              {
                  headers: {
                      Authorization: `Bearer ${CHAPA_SECRET_KEY}`
                  }
              }
          );
          return response.data;
      } catch (error) {
          console.error('Chapa Verify Error:', error);
          throw new Error('Payment verification failed');
      }
  }
};
