import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import api from '../services/api';

const PaymentSuccess: React.FC = () => {
    const [searchParams] = useSearchParams();
    const tx_ref = searchParams.get('tx_ref');
    const [verificationStatus, setVerificationStatus] = useState<'VERIFYING' | 'SUCCESS' | 'FAILED'>('VERIFYING');

    useEffect(() => {
        const verify = async () => {
            if (!tx_ref) {
                setVerificationStatus('FAILED');
                return;
            }

            try {
                // Assuming we have an endpoint to check without side-effects or if it handles idempotency
               const response = await api.get(`/payments/verify/${tx_ref}`);
               if (response.data.status === 'SUCCESS' || response.data.message.includes('already verified')) {
                   setVerificationStatus('SUCCESS');
               } else {
                   setVerificationStatus('FAILED');
               }
            } catch (error) {
                console.error('Verification failed', error);
                setVerificationStatus('FAILED');
            }
        };

        verify();
    }, [tx_ref]);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
        {verificationStatus === 'VERIFYING' && (
             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent mb-4"></div>
        )}
        
        {verificationStatus === 'SUCCESS' && (
            <>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h1 className="text-4xl font-serif text-secondary mb-4">Payment Successful!</h1>
                <p className="text-gray-500 font-sans mb-8">Thank you for your booking. We look forward to hosting you.</p>
                <Link to="/" className="bg-secondary text-white px-8 py-3 font-serif hover:bg-black transition-colors">
                    Back to Home
                </Link>
            </>
        )}

        {verificationStatus === 'FAILED' && (
             <>
                 <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                     <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                 </div>
                 <h1 className="text-3xl font-serif text-secondary mb-4">Payment Failed or Pending</h1>
                 <p className="text-gray-500 font-sans mb-8">We could not verify your payment. Please contact support.</p>
                 <Link to="/contact" className="text-accent underline">
                     Contact Support
                 </Link>
             </>
        )}
      </div>
    </Layout>
  );
};

export default PaymentSuccess;
