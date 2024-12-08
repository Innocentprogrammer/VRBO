import { loadStripe, Stripe } from '@stripe/stripe-js';
import { useState } from 'react';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

export default function CheckoutButton() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);

    const stripe: Stripe | null = await stripePromise;

    if (!stripe) {
      console.error('Stripe.js has not been loaded properly.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        throw new Error('Failed to create checkout session.');
      }

      const session = await response.json();

      await stripe.redirectToCheckout({ sessionId: session.id });
    } catch (error) {
      console.error('Error during checkout:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      className="checkout-button relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full bg-rose-500 text-white mt-2 text-sm border-[1px] font-light py-1 px-1"
      disabled={loading}
    >
      {loading ? 'Processing...' : 'Pay Now'}
    </button>
  );
}
