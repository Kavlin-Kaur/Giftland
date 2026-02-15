import { Truck, Package, Globe, MapPin, Clock, CheckCircle } from 'lucide-react';

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-cream pt-24 pb-16">
      {/* Hero Section */}
      <div className="relative h-80 bg-linear-to-r from-himachali-maroon via-himachali-red to-himachali-orange mb-12">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">Shipping Information</h1>
          <p className="text-lg text-white/90 max-w-2xl text-center">
            We deliver Himachali heritage to your doorstep, anywhere in the world
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Shipping Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-lg p-6 text-center card-shadow">
            <div className="flex justify-center mb-4 text-himachali-red">
              <Truck size={40} />
            </div>
            <h3 className="font-serif font-bold text-lg text-ink mb-2">Fast Delivery</h3>
            <p className="text-sm text-muted">3-7 days across India, 10-15 days internationally</p>
          </div>

          <div className="bg-white rounded-lg p-6 text-center card-shadow">
            <div className="flex justify-center mb-4 text-himachali-orange">
              <Package size={40} />
            </div>
            <h3 className="font-serif font-bold text-lg text-ink mb-2">Secure Packaging</h3>
            <p className="text-sm text-muted">Eco-friendly materials with care instructions</p>
          </div>

          <div className="bg-white rounded-lg p-6 text-center card-shadow">
            <div className="flex justify-center mb-4 text-himachali-maroon">
              <Globe size={40} />
            </div>
            <h3 className="font-serif font-bold text-lg text-ink mb-2">Global Reach</h3>
            <p className="text-sm text-muted">Shipping to 50+ countries worldwide</p>
          </div>
        </div>

        {/* Domestic Shipping */}
        <div className="mb-12">
          <div className="bg-white rounded-lg p-8 sm:p-12 card-shadow geometric-border">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="text-himachali-red" size={28} />
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-ink">
                Domestic Shipping (India)
              </h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg text-ink mb-3">Delivery Timeline</h3>
                <div className="space-y-2 text-muted">
                  <p className="flex items-start gap-2">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                    <span><strong>Metro Cities:</strong> 3-5 business days (Delhi, Mumbai, Bangalore, Chennai, Kolkata, Hyderabad)</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                    <span><strong>Tier 2 Cities:</strong> 5-7 business days</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                    <span><strong>Remote Areas:</strong> 7-10 business days</span>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg text-ink mb-3">Shipping Charges</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b-2 border-himachali-red">
                        <th className="py-3 px-4 text-ink">Order Value</th>
                        <th className="py-3 px-4 text-ink">Shipping Fee</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted">
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4">Below ₹2,000</td>
                        <td className="py-3 px-4">₹150</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4">₹2,000 - ₹4,999</td>
                        <td className="py-3 px-4">₹100</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4">Above ₹5,000</td>
                        <td className="py-3 px-4 font-bold text-green-600">FREE</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg text-ink mb-3">Trusted Partners</h3>
                <p className="text-muted">
                  We ship via Blue Dart, Delhivery, and India Post. All shipments are fully tracked 
                  and insured. You'll receive tracking details via email and SMS once your order ships.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* International Shipping */}
        <div className="mb-12">
          <div className="bg-white rounded-lg p-8 sm:p-12 card-shadow geometric-border">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="text-himachali-orange" size={28} />
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-ink">
                International Shipping
              </h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg text-ink mb-3">Delivery Timeline</h3>
                <div className="space-y-2 text-muted">
                  <p className="flex items-start gap-2">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                    <span><strong>USA, Canada, UK, Europe:</strong> 10-15 business days</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                    <span><strong>Australia, New Zealand:</strong> 12-18 business days</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                    <span><strong>Middle East, Asia:</strong> 7-12 business days</span>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg text-ink mb-3">Shipping Rates</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b-2 border-himachali-orange">
                        <th className="py-3 px-4 text-ink">Region</th>
                        <th className="py-3 px-4 text-ink">Shipping Fee</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted">
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4">USA, Canada</td>
                        <td className="py-3 px-4">₹2,500 (~$30 USD)</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4">UK, Europe</td>
                        <td className="py-3 px-4">₹2,200 (~$26 USD)</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4">Australia, NZ</td>
                        <td className="py-3 px-4">₹2,800 (~$34 USD)</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-3 px-4">Middle East, Asia</td>
                        <td className="py-3 px-4">₹1,800 (~$22 USD)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-muted mt-4">
                  <strong>Note:</strong> Orders above ₹10,000 qualify for FREE international shipping.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg text-ink mb-3">Customs & Duties</h3>
                <p className="text-muted mb-3">
                  International customers are responsible for any customs duties, taxes, or fees 
                  imposed by their country. We mark all shipments as "Handcrafted Textiles" with 
                  accurate product value.
                </p>
                <p className="text-muted">
                  Most countries allow duty-free import of handwoven textiles under cultural heritage 
                  exemptions, but we recommend checking with your local customs office.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Packaging & Tracking */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Packaging */}
          <div className="bg-white rounded-lg p-8 card-shadow">
            <div className="flex items-center gap-3 mb-6">
              <Package className="text-himachali-maroon" size={28} />
              <h2 className="text-2xl font-serif font-bold text-ink">
                Thoughtful Packaging
              </h2>
            </div>
            <div className="space-y-4 text-muted">
              <p className="flex items-start gap-2">
                <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                <span>Wrapped in handmade Lokta paper from the Himalayas</span>
              </p>
              <p className="flex items-start gap-2">
                <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                <span>Sealed in recycled cardboard boxes with biodegradable padding</span>
              </p>
              <p className="flex items-start gap-2">
                <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                <span>Includes care instructions and authenticity certificate</span>
              </p>
              <p className="flex items-start gap-2">
                <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                <span>Fragrance sachet with Himalayan herbs (cedar & juniper)</span>
              </p>
            </div>
          </div>

          {/* Tracking */}
          <div className="bg-white rounded-lg p-8 card-shadow">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="text-himachali-gold" size={28} />
              <h2 className="text-2xl font-serif font-bold text-ink">
                Order Tracking
              </h2>
            </div>
            <div className="space-y-4 text-muted">
              <p className="flex items-start gap-2">
                <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                <span>Processing: Orders ship within 2-3 business days</span>
              </p>
              <p className="flex items-start gap-2">
                <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                <span>Tracking ID sent via email & SMS as soon as shipped</span>
              </p>
              <p className="flex items-start gap-2">
                <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                <span>Real-time updates at every checkpoint</span>
              </p>
              <p className="flex items-start gap-2">
                <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={18} />
                <span>Customer support available for shipment queries</span>
              </p>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-white rounded-lg p-8 sm:p-12 card-shadow geometric-border">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-ink mb-8">
            Shipping FAQs
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg text-ink mb-2">
                Can I change my shipping address after placing an order?
              </h3>
              <p className="text-muted">
                Yes, but only before the order is shipped. Contact us immediately at 
                shop@trijas.com or +91 177 2652 XXX with your order number and updated address.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg text-ink mb-2">
                Do you offer express or overnight shipping?
              </h3>
              <p className="text-muted">
                Yes! Express shipping is available for metro cities in India (next-day delivery) 
                for an additional ₹500. Contact us to arrange this before placing your order.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg text-ink mb-2">
                What if my package is lost or damaged?
              </h3>
              <p className="text-muted">
                All shipments are fully insured. If your package arrives damaged or goes missing, 
                contact us within 48 hours. We'll send a replacement or provide a full refund.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg text-ink mb-2">
                Can I pick up my order from your Shimla store?
              </h3>
              <p className="text-muted">
                Absolutely! Select "Store Pickup" at checkout. We'll notify you when your order 
                is ready (usually within 24 hours). Visit us at Lakkar Bazar during store hours.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg text-ink mb-2">
                Do you ship to P.O. boxes?
              </h3>
              <p className="text-muted">
                We ship to P.O. boxes within India via India Post. For international orders, 
                please provide a street address as courier services don't deliver to P.O. boxes.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-linear-to-r from-himachali-red to-himachali-orange rounded-lg p-8 text-white text-center geometric-border">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-4">
            Still Have Questions?
          </h2>
          <p className="mb-6 text-white/90 max-w-2xl mx-auto">
            Our team is here to help with any shipping-related queries. Reach out anytime!
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-himachali-red px-8 py-3 rounded-lg font-semibold hover:bg-cream transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
